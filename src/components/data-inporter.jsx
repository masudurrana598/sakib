import React, {useEffect, useRef, useState} from "react";
import pdfToText from 'react-pdftotext';
import {getFileContent, scrapData} from "../utils/apis";
import SendIcon from "@mui/icons-material/Send";
import { MicNone, InsertLink, AssignmentOutlined, CloudUpload, DeleteOutline, AttachFile, Link as LinkIcon } from "@mui/icons-material";
import { FaRegFilePdf, FaTrash, FaFileWord } from 'react-icons/fa';
import { AiOutlineFileText, AiOutlineFileWord  } from "react-icons/ai";

export default function DataImporter({ setStartProcessing, setData, setSourceType }) {
    const textArea = useRef();
    const uploadedFile = useRef();
    const inputUrl = useRef();
    const [dataSourceType, setDaraSourceType] = useState('upload');
    const [dataList, setDataList] = useState([]);

    const fileTypes = [
        'application/msword',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    const fnRead = [
        'text/plain',
        'application/pdf',
    ];

    const limit = 10;

    const retrieveFileContent = async (file) => {
        try {
            if (fnRead.includes(file.type)) {
                if (file.type === 'application/pdf') {
                    pdfToText(file)
                        .then(text => setData(prev => [...prev, {
                                name: file.name,
                                data: text
                            }])
                        ).catch(error => console.error("Failed to extract text from pdf"));
                } else if (file.type === 'text/plain') {
                    const reader = new FileReader();
                    reader.addEventListener('load', () => {
                        setData(prev => [...prev, {
                            name: file.name,
                            data: reader.result
                        }])
                    }, false);
                    reader.readAsText(file);
                }
            } else {
                if (fileTypes.includes(file.type)) {
                    const formData = new FormData();
                    formData.append('file', file);
                    let res = await getFileContent(formData);
                    console.log(res);
                    setData(prev => [...prev, {
                        name: file.name,
                        data: res.text
                    }])
                } else {
                    console.log('File type not valid');
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    const retrieveUrl = async (url) => {
        if (url !== '') {
            let res = await scrapData(url);
            if (res.status) {
                setData(prev => [...prev, {
                    name: url,
                    data: res.content
                }]);
            }
        }
    }
    const clickSubmit = () => {
        setData(textArea.current.value);
    }

    const selectSource = (elm, type) => {
        const ss = document.querySelector('.selected-source');
        if (ss) {
            ss.classList.remove('selected-source');
        }
        elm.classList.add('selected-source');
        setDaraSourceType(type);
    }

    const handleDragOver = (e) =>{
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        // console.log(e.dataTransfer.files);
        addToDataList({
            type: 'file',
            name: e.dataTransfer.files[0].name,
            file: e.dataTransfer.files[0],
            data: null
        });
    }

    const analyseData = async () => {
        for (let dl of dataList) {
            if (dl.type === 'file') {
                 await retrieveFileContent(dl.file);
            } else if (dl.type === 'url') {
                 await retrieveUrl(dl.name);
            } else {
                if (dl.data) {
                    setData(prev => [...prev, {
                        name: dl.name,
                        data: dl.data
                    }]);
                }
            }
        }

        setTimeout(() => {
            setStartProcessing(true);
        }, (dataList.length * 3000));

    }

    const addToDataList = (data) => {
        if (dataList.length <= limit) {
            setDataList(prevState => [...prevState, data]);
        }
    }

    const removeDataFromList = (index) => {
        const dl = dataList.filter((d, i) => i !== index)
        setDataList(dl);
    }

    return (
        <div className='data-importer p-4'>
            <div className={'select-input-type'}>
                <button onClick={(e) => selectSource(e.target, 'upload')} className='selected-source assistance-btn'>
                    <MicNone/> Upload
                </button>
                <button onClick={(e) => selectSource(e.target, 'url')} className="assistance-btn">
                    <InsertLink/> Past a Link
                </button>
                <button onClick={(e) => selectSource(e.target, 'text')} className="assistance-btn">
                    <AssignmentOutlined/> Plain Text
                </button>

            </div>
            <div className='input-fields d-flex flex-row w-100 upload-area'>
                {
                    dataSourceType === 'upload' ?
                        <div className="upload-box" onDragOver={handleDragOver} onDrop={handleDrop}>
                            <div className="upload-box-inner">
                                <CloudUpload style={{fontSize:'50', color:'grey'}}/>
                                <div className="drag-drop-title">
                                    Drag & Drop or <span onClick={()=>uploadedFile.current.click()}>Choose File</span> to Upload
                                </div>
                                <p>Note:- please only upload the following types: pdf, doc, docx, ppt, pptx, mp3, mp4, txt</p>
                                <input type={'file'} className={'form-control'} ref={uploadedFile} hidden multiple
                                       onChange={(e) => {
                                           addToDataList({
                                               type: 'file',
                                               name: e.target.files[0].name,
                                               file: e.target.files[0],
                                               data: null
                                           });
                                       }}
                                       name="data-file" id="data-file" placeholder={'Upload source file'} accept={'.doc,.docx,.pdf,.pptx,.txt'} />
                            </div>

                        </div> : ''
                }
                {
                    dataSourceType === 'url' ?
                        <div className="url-box">
                            <AttachFile/>
                            <input type={'text'} className={'form-control'} ref={inputUrl} name="data-link" id="data-link" placeholder={'Past site url'} />
                            <SendIcon onClick={() => {
                                addToDataList({
                                    type: 'url',
                                    name: inputUrl.current.value,
                                    file: null,
                                    data: null
                                });
                                setTimeout(() => {
                                    inputUrl.current.value = '';
                                }, 100)
                            }} />
                        </div> : ''
                }
                {
                    dataSourceType === 'text' ?
                        <div className='d-flex flex-column w-100'>
                            <textarea className='form-control flex-grow-1' ref={textArea} onBlur={() => {
                                addToDataList({
                                    type: 'text',
                                    name: textArea.current.value.substring(0, 30).replace(/\s+|\n/, ' '),
                                    file: null,
                                    data: textArea.current.value
                                });
                                setTimeout(() => {
                                    textArea.current.value = '';
                                }, 100)

                            }} name="data" id="data" placeholder={'Past data text here'} >
                            </textarea>
                        </div> : ''
                }
            </div>

            <div className="uploaded-list-area">
                {
                    dataList.map((dl, index) => {
                        if (dl.type === 'file') {
                            const file = dl.file;
                            if (fnRead.includes(file.type)) {
                                if (file.type === 'application/pdf') {
                                    return (
                                        <div className="uploaded-list-item" key={index}>
                                            <div className="uploaded-list-item-name">
                                                <FaRegFilePdf/>
                                                <span>{file.name}</span>
                                            </div>
                                            <DeleteOutline/>
                                        </div>
                                    )
                                } else if (file.type === 'text/plain') {
                                    return (
                                        <div className="uploaded-list-item" key={index}>
                                            <div className="uploaded-list-item-name">
                                                <AiOutlineFileText/>
                                                <span>{file.name}</span>
                                            </div>
                                            <DeleteOutline onClick={() => {removeDataFromList(index)}} />
                                        </div>
                                    )
                                }

                            } else {
                                if (fileTypes.includes(file.type)) {
                                    return (
                                        <div className="uploaded-list-item" key={index}>
                                            <div className="uploaded-list-item-name">
                                                <AiOutlineFileWord/>
                                                <span>{file.name}</span>
                                            </div>
                                            <DeleteOutline onClick={() => {removeDataFromList(index)}} />
                                        </div>
                                    )
                                }
                            }
                        } else {
                            return (
                                <div className="uploaded-list-item" key={index}>
                                    <div className="uploaded-list-item-name">
                                        { dl.type === 'url' ? <LinkIcon /> : <AiOutlineFileText/> }
                                        <span>{dl.name}</span>
                                    </div>
                                    <DeleteOutline onClick={() => {removeDataFromList(index)}} />
                                </div>
                            )
                        }
                    })
                }
                {
                    dataList.length ?
                        <div className='d-flex flex-row justify-content-between w-100 mt-4'>
                            <span>{dataList.length} Of {limit} Files</span>
                            <button className='btn btn-secondary' onClick={analyseData}>Analyze</button>
                        </div>
                    : ''
                }

            </div>
        </div>
    );
}