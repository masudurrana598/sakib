import React, {useRef, useState} from "react";
import NotesDataImporter from "./notes-data-importer";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PowerInputOutlinedIcon from '@mui/icons-material/PowerInputOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';

function Notes() {
   
    return (
        <>
            <div className="second-header-bar2">
                <div className="second-header-title2">
                    <div className="second-header-left2">
                        <span>Notes</span>
                    </div>
                    <div className="second-header-right2">
                        <div>
                            <span className="active">
                                <FormatListBulletedOutlinedIcon fontSize="small"/>
                                <p>Table</p>
                            </span>
                            <span>
                                <GridViewOutlinedIcon fontSize="small"/>
                                <p>Grid</p>
                            </span>
                            <span>
                                <ViewKanbanOutlinedIcon fontSize="small"/>
                                <p>Kanban</p>
                            </span>
                        </div>
                        <div>
                            <span className="search"><SearchOutlinedIcon fontSize="small"/></span>
                            <span className="hug"><PowerInputOutlinedIcon fontSize="small"/></span>
                            <span className="ai-chat">
                                <p>AI Chat</p>
                                <ChatBubbleOutlineOutlinedIcon fontSize="small"/>
                            </span>
                            <span><AddBoxIcon fontSize="large"/></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
			    <NotesDataImporter />
            </div>
        </>
    );
}

export default Notes