import React, { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import Member1 from '../assets/img/member1.png';
import Member2 from '../assets/img/member2.png';


function NotesDataImporter(){

    const [data, setData] = useState([]);
    const [currentSort , setCurrentSort ] = useState('default');
    const [currentSortField, setCurrentSortField] = useState('');
    const [expanded, setExpanded] = React.useState(false);
    
    const tableData = [
        {
            id:1,
            note_name: 'Monthly Product Discussion',
            word: 1200,
            comment:15,
            tag:[
                {
                    id:1,
                    name:"Internal"
                },
                {
                    id:2,
                    name:"Marketing"
                },
                {
                    id:3,
                    name:"Urgent"
                }
            ],
            stage:'Planning',
            member:[
                {
                    id:1,
                    img:Member1
                },
                {
                    id:2,
                    img:Member2
                }
            ]
        },
        {
            id:2,
            note_name: 'Monthly Product Discussion',
            word: 1200,
            comment:15,
            tag:[
                {
                    id:1,
                    name:"Internal"
                },
                {
                    id:2,
                    name:"Marketing"
                },
                {
                    id:3,
                    name:"Urgent"
                }
            ],
            stage:'Planning',
            member:[
                {
                    id:1,
                    img:Member1
                },
                {
                    id:2,
                    img:Member2
                }
            ]
        },
        {
            id:3,
            note_name: 'Monthly Product Discussion',
            word: 1200,
            comment:15,
            tag:[
                {
                    id:1,
                    name:"Internal"
                },
                {
                    id:2,
                    name:"Marketing"
                },
                {
                    id:3,
                    name:"Urgent"
                }
            ],
            stage:'Planning',
            member:[
                {
                    id:1,
                    img:Member1
                },
                {
                    id:2,
                    img:Member2
                }
            ]
        },
        {
            id:4,
            note_name: 'Monthly Product Discussion',
            word: 1200,
            comment:15,
            tag:[
                {
                    id:1,
                    name:"Internal"
                },
                {
                    id:2,
                    name:"Marketing"
                },
                {
                    id:3,
                    name:"Urgent"
                }
            ],
            stage:'Planning',
            member:[
                {
                    id:1,
                    img:Member1
                },
                {
                    id:2,
                    img:Member2
                }
            ]
        },
    ];
     
    useEffect(()=>{
        setData(tableData);
    },[]);

    return (
        <>
            <div className="notes-body note-table-box">
                <table className="note-table">
                    <thead>
                        <tr>
                            <th>
                                Note Name
                                <UnfoldMoreOutlinedIcon fontSize="small"/>
                            </th>
                            <th>
                                Word
                                <UnfoldMoreOutlinedIcon fontSize="small"/>
                            </th>
                            <th>
                                Comment
                                <UnfoldMoreOutlinedIcon fontSize="small"/>
                            </th>
                            <th>
                                Tag
                                <UnfoldMoreOutlinedIcon fontSize="small"/>
                            </th>
                            <th>
                                Stage
                                <UnfoldMoreOutlinedIcon fontSize="small"/>
                            </th>
                            <th>
                                Member
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data)=>(
                            <tr key={data.id}>
                                <td style={{fontWeight:'bold'}}>{data.note_name}</td>
                                <td>
                                    <div className="notes-table-word">
                                        <DescriptionOutlinedIcon fontSize="small" style={{fill:'grey'}}/>
                                        {data.word}
                                    </div>
                                </td>
                                <td>
                                    <div className="notes-table-comment">
                                        <ChatBubbleOutlineOutlinedIcon fontSize="small" style={{fill:'grey'}}/>
                                        {data.comment}
                                    </div>
                                </td>
                                <td>
                                    <div className="notes-table-tag">
                                    {data.tag.map((tag)=>(
                                        <span key={tag.id}>{tag.name}</span>
                                    ))}
                                    </div>
                                </td>
                                <td>
                                    <div className="notes-table-stage">
                                        <CircleIcon style={{fontSize:'13px'}}/>
                                        {data.stage}
                                    </div>
                                </td>
                                <td>
                                    <div className="memberAvatorGroup">
                                    {data.member.map((memberImg)=>(
                                        <div key={memberImg.id} className="memberAvator">
                                            <img src={memberImg.img}/>
                                        </div>
                                    ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={'6'}>
                                <div className="notes-table-create">
                                    <AddOutlinedIcon fontSize="small"/>
                                    Create Note
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="notes-body grid hide">
                <Accordion className="accordion-body" defaultExpanded>
                    <AccordionSummary
                    className={'accordionSummary'}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        backgroundColor:'#E6E5E5',
                    }}
                    
                    >
                    <div className="accordion-header">
                        <div className="accordion-title">
                            <span>Planning</span><span>4 notes</span>
                        </div>
                        <div className="accordion-header-option">
                            <AddOutlinedIcon fontSize="small"/>
                            <MoreHorizOutlinedIcon fontSize="small"/>
                        </div>
                    </div>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            backgroundColor:'#E6E5E5'
                        }}
                    >
                        <div className="planning-box">
                            <div className="planning-box-item planning-box-item-add">
                                <button>
                                    <AddOutlinedIcon/>
                                    <span>New Doc</span>
                                </button>
                            </div>
                            <div className="planning-box-item">
                                <div className="planning-box-item-title">
                                    <span>Product Team Meeting</span>
                                    <MoreHorizOutlinedIcon fontSize="small"/>
                                </div>
                                <div className="planning-box-item-body">
                                    <p>
                                        This monthly progress agenda is following this itemsThese elements are different ways of invoking extension features. You're not required to implement all of them. In fact, some use cases might not use any of them. For example, a link shorter could act on the displayed URL using a keyboard shortcut and put the shortened link into the clipboard programmatically:
                                    </p>
                                </div>
                            </div>
                            <div className="planning-box-item">
                                <div className="planning-box-item-title">
                                    <span>Product Team Meeting</span>
                                    <MoreHorizOutlinedIcon fontSize="small"/>
                                </div>
                                <div className="planning-box-item-body">
                                    <p>
                                        This monthly progress agenda is following this itemsThese elements are different ways of invoking extension features. You're not required to implement all of them.
                                    </p>
                                    <div className="button">
                                        <span>Badge</span>
                                        <span>Badge</span>
                                    </div>
                                </div>
                            </div>
                            <div className="planning-box-item">
                                <div className="planning-box-item-title">
                                    <span>Product Team Meeting</span>
                                    <MoreHorizOutlinedIcon fontSize="small"/>
                                </div>
                                <div className="planning-box-item-body">
                                    <p>
                                        This monthly progress agenda is following this itemsThese elements are different ways of invoking extension features. You're not required to implement all of them. In fact, some use cases might not use any of them. For example, a link shorter could act on the displayed URL using a keyboard shortcut and put the shortened link into the clipboard programmatically:
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    className={'accordionSummary'}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{
                        backgroundColor:'#E6E5E5',
                    }}
                    >
                    <div className="accordion-header">
                        <div className="accordion-title">
                            <span>Researching</span><span>0 notes</span>
                        </div>
                        <div className="accordion-header-option">
                            <AddOutlinedIcon fontSize="small"/>
                            <MoreHorizOutlinedIcon fontSize="small"/>
                        </div>
                    </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <div className="add-stage-btn">
                    <button>
                        <AddOutlinedIcon fontSize="small"/>
                        Add Stage
                    </button>
                </div>
            </div>
        </>
    )
}

export default NotesDataImporter;