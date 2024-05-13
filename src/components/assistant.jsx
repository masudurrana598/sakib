import React, {useRef, useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import FilterList from '@mui/icons-material/FilterList';
import Description from '@mui/icons-material/Description';
import QuestionAnswer from '@mui/icons-material/QuestionAnswer';
import Assignment from '@mui/icons-material/Assignment';
import { FaPlusSquare } from "react-icons/fa";
import ViewList from '@mui/icons-material/ViewList';
import Receipt from '@mui/icons-material/Receipt';
import Ballot from '@mui/icons-material/Ballot';
import ChatBody from "./chat-body";
import {assistant} from "../utils/apis";
import {useAuthContext} from "../contexts/auth";
import {SiteName} from "../utils/constants";
import Dropdown from "react-bootstrap/Dropdown";
import DataImporter from "./data-inporter";
import ProcessedData from "./processed-data";
import logo from "../assets/logo.png";

function Assistant() {
    const {auth} = useAuthContext();
    const userInput = useRef(null);
    const [chatData, setChatData] = useState([]);
    const [data, setData] = useState([]);
    const [startProcessing, setStartProcessing] = useState(false);
    const [sourceType, setSourceType] = useState('text');
    const [generateType, setGenerateType] = useState('original');

    const getAssistance = async () => {
        // console.log(userInput.current.value);
        const message = userInput.current.value;
        if (message !== '') {
            setChatData(prev => [...prev, {name: auth.user.name, role: 'user', message: message}]);
            scrollToBottom();

            let res = await assistant({message: message});
            if (res.status) {
                userInput.current.value = '';
                setChatData(prev => [...prev, {name: SiteName, role: 'assistant', message: res.content}]);
                scrollToBottom();
            }
        }
    }

    const selectGenerator = (elm, type) => {
        const sg = document.querySelector('.selected-generator');
        if (sg) {
            sg.classList.remove('selected-generator');
        }
        elm.classList.add('selected-generator');
        setGenerateType(type);
    }

    const scrollToBottom = () => {
        setTimeout(() => {
            const chatBodyRoot = document.querySelector('.chat-body');
            chatBodyRoot.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
            chatBodyRoot.scrollTop = chatBodyRoot.scrollHeight + 60;
        }, 10);
    }

    return (
        <>
            <div className={'second-header-bar'}>
                <div className="second-header-title">
                    {/* <img src={logo} alt="Logo" className="img" /> -  */}
                    <span>
                        AI Assistance
                    </span>
                    <span><FaPlusSquare size={25}/></span>
                </div>
                {   startProcessing ?
                    <div className='generate-content-bar'>
                        <div onClick={(e) => selectGenerator(e.target, 'original')}><Description className='me-1'/> Original</div>
                        <div onClick={(e) => selectGenerator(e.target, 'summary')}><QuestionAnswer className='me-1'/> Summary</div>
                        <div onClick={(e) => selectGenerator(e.target, 'note')}><Assignment className='me-1'/> Short Note</div>
                        <div onClick={(e) => selectGenerator(e.target, 'quiz')}><ViewList className='me-1'/> Quiz</div>
                        <div onClick={(e) => selectGenerator(e.target, 'flash')}><Receipt className='me-1'/> Flash Card</div>
                        <div onClick={(e) => selectGenerator(e.target, 'content')}><Ballot className='me-1'/> Content</div>
                    </div>
                    : ''
                }
            </div>

            <div className="d-flex flex-row h-100">

                <div className='left-side w-50'>

                    {
                        !startProcessing ? <DataImporter setStartProcessing={setStartProcessing} setData={setData} setSourceType={setSourceType} />
                            : <ProcessedData data={data} setData={setData} sourceType={sourceType} generateType={generateType} />
                    }

                </div>

                <div className='right-side w-50 p-4'>

                    <div className="general-assistance">
                        <input ref={userInput} type="text" className={'input-text-type-one'} multiple={true} placeholder={'Ask anything...'} />

                        <div className={'d-flex flex-row justify-content-between align-items-center'}>

                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-focus">
                                    <FilterList style={{transform: 'rotate(180deg)', marginRight: '6px'}} /> <span className='me-1'>Focus</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Short Note</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <div>
                                <button className={'icon-class'} onClick={getAssistance}>
                                    <SendIcon />
                                </button>
                            </div>

                        </div>
                    </div>

                    { chatData.length ? <ChatBody data={chatData} /> : ''}

                </div>

            </div>
        </>
    );
}

export default Assistant;