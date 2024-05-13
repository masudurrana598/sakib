import React, {useState} from "react";
import Code from '@mui/icons-material/Code';
import NotificationsNone from '@mui/icons-material/NotificationsNone';
import Schedule from '@mui/icons-material/Schedule';
import Contacts from '@mui/icons-material/Contacts';
import DataUsage from '@mui/icons-material/DataUsage';
import CalendarToday from '@mui/icons-material/CalendarToday';
import Settings from '@mui/icons-material/Settings';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";

const LeftBar = () => {

    const [extend, setExtend] = useState(false);

    const handleSidebarToggle = () =>{

        if(extend){
            setExtend(false);
        }else{
            setExtend(true);
        }
    }

    return (
        // side-bar
        <div className={extend ? 'side-bar-extend':'side-bar'}>
            <div className={extend ? 'sidebar-header' : 'side-bar-sec'}>
                {
                    extend ? <span><img src={logo} alt="Logo" className="img" /></span> : ''
                }
                <span onClick={handleSidebarToggle} className={extend ? 'sidebar-toggle-btn sidebar-toggle-extend-btn' : 'sidebar-toggle-btn'}><Code /></span>
            </div>
            <div className='side-bar-sec'>
                <div className="side-bar-sec-item">
				<Link to={'/'}><Schedule />
                    <span className="side-bar-sec-item-name">Dashboard</span></Link>
                </div>
                <div className="side-bar-sec-item active">
                    <NotificationsNone />
                    <span className="side-bar-sec-item-name">Al Assistance</span>
                </div>
                <div className="side-bar-sec-item ">
                    <Link to={'/notes'}>
                        <NoteOutlinedIcon />
                        <span className="side-bar-sec-item-name">Notes</span>
                    </Link>
                </div>
            </div>
            <div className='side-bar-sec'>
                <div className="side-bar-sec-item">
                    <DataUsage />
                    <span className="side-bar-sec-item-name">Analytics</span>
                </div>
                <div className="side-bar-sec-item">
                    <Contacts />
                    <span className="side-bar-sec-item-name">Library</span>
                </div>
            </div>
            <div className='side-bar-sec'>
                <div className="side-bar-sec-item">
                    <CalendarToday />
                    <span className="side-bar-sec-item-name">Invite Friend</span>
                </div>
                <div className="side-bar-sec-item">
				    <Link to={'/settings'}><Settings />
                    <span className="side-bar-sec-item-name">Settings</span></Link>
                    
                </div>
            </div>
        </div>
    );
}

export default LeftBar;