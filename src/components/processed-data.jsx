import React, {useEffect, useState} from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import {summary} from "../utils/apis";

export default function ProcessedData({ data, setData, sourceType, generateType }) {
    const [summaryData, setSummaryData] = useState([]);
    const [noteData, setNoteData] = useState([]);
    const [quizData, setQuizData] = useState([]);
    const [flashData, setFlashData] = useState([]);

    const manipulateData = async (type = '') => {
                let res = await summary({
                    data: JSON.stringify(data),
                    type: type,
                    number_items: 4,
                    sourceType: sourceType
                });
                if (res.resp)
                    if (type === 'notes') {
                        setNoteData(res.resp);
                    } else if (type === 'quiz') {
                        if (res.resp.length) {
                            setQuizData(res.resp);
                        }
                    } else if (type === 'flash_card') {
                        if (res.resp.length) {
                            setFlashData(res.resp);
                        }
                    } else {
                        setSummaryData(res.resp);
                    }
    }

    const clickBack = () => {
        setData([]);
    }

    return (
        <div className={'processed-data'}>

            {   generateType === 'original' ?
                <div className={'data-importer-input-container'}>
                    {
                        data.map((d, index) => {
                            return (<div key={index} className='o-data'>
                                <h5 className=''>{d.name}</h5>
                                <hr/>
                                <div>{d.data}</div>
                            </div>)
                        })
                    }
                </div>
                : ''
            }
            {generateType === 'summary' ?
                <div className={'data-importer-input-container'}>
                    {
                        summaryData.length ? summaryData.map((sd, i) => <div className={'o-data'} key={`sd-${i}`}><h5>{sd.name}</h5><hr/><div>{sd.data}</div></div>) :
                            <div
                                className={'w-100 h-100 d-flex flex-column align-items-center justify-content-center align-items-center'}>
                                <span>Click below to Generate Content!</span>
                                <button type="button" className={'btn btn-primary w-25'}
                                        onClick={manipulateData}>Generate
                                </button>
                            </div>
                    }
                </div>
                : <></>
            }
            {generateType === 'note' ?
                <div className={'data-importer-input-container'}>
                    {
                        noteData.length ? noteData.map((nd, i) =>
                                <div className={'o-data'} key={`nd-${i}`}><h5>{nd.name}</h5><hr/><div>{nd.data}</div></div>
                            )
                            :
                            <div
                                className={'w-100 h-100 d-flex flex-column align-items-center justify-content-center align-items-center'}>
                                <span>Click below to Generate Content!</span>
                                <button type="button" className={'btn btn-primary w-25'}
                                        onClick={() => manipulateData('notes')}>Generate
                                </button>
                            </div>
                    }
                </div>
                : <></>
            }
            {generateType === 'quiz' ?
                <div className={'data-importer-input-container'}>
                    {
                        quizData.length ?
                            <>
                                {
                                    quizData.map((qData, ii) =>
                                        <div className={'quiz-list o-data'} key={'qd' + ii}>
                                            <h5>{qData.name}</h5>
                                            <hr/>
                                            {
                                                qData.data ?
                                                qData.data.quiz.map((qd, i) => {
                                                    return (<div className={'quiz'} key={'qdl' + i + i}>
                                                            <b>Question 0{i + 1}</b>
                                                            <p className={'quiz-question'}>{qd.question}</p>
                                                            <b>Options</b>
                                                            <div className={'quiz-options'}>
                                                                {qd.options.map((op, ind) => <li className={'mb-1'}
                                                                                                      key={Date.now() + '' + ind}>{op}</li>)}
                                                            </div>
                                                        </div>)
                                                    }
                                                ) : ''
                                            }
                                        </div>

                                    )
                                }
                            </>
                            :
                            <div
                                className={'w-100 h-100 d-flex flex-column align-items-center justify-content-center align-items-center'}>
                                <span>Click below to Generate Content!</span>
                                <button type="button" className={'btn btn-primary w-25'}
                                        onClick={() => manipulateData('quiz')}>Generate
                                </button>
                            </div>
                    }
                </div>
                : <></>
            }
            {generateType === 'flash' ?
                <div className={'data-importer-input-container'}>
                    {
                        flashData.length ?
                            <>
                                {
                                    flashData.map((fDAta, ii) =>
                                        <div className={'flash-cards o-data'} key={'fc' + ii}>
                                            <h5>{fDAta.name}</h5> <hr/>
                                            {
                                                fDAta.data ?
                                                fDAta.data.flashcards.map((card, i) => <div className={'flash-card'}
                                                                                key={'fcl-' + (i + 1)}>
                                                    <div className={'card-front'}>{card.card_front}</div>
                                                    <div className={'card-back'}>{card.card_back}</div>
                                                </div>
                                                ) : ''
                                            }
                                        </div>
                                    )
                                }
                            </>
                            :
                            <div
                                className={'w-100 h-100 d-flex flex-column align-items-center justify-content-center align-items-center'}>
                                <span>Click below to Generate Content!</span>
                                <button type="button" className={'btn btn-primary w-25'}
                                        onClick={() => manipulateData('flash_card')}>Generate
                                </button>
                            </div>
                    }
                </div>
                : <></>
            }

        </div>
    );
}