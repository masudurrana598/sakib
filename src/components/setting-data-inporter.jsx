import React, {useRef, useState,useEffect} from "react";
import SendIcon from '@mui/icons-material/Send';
import { MicNone, InsertLink, AssignmentOutlined, CloudUpload, DeleteOutline, AttachFile, Link as LinkIcon } from "@mui/icons-material";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GroupIcon from '@mui/icons-material/Group';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import HelpOutline from '@mui/icons-material/HelpOutline';
import Search from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FaUser } from "react-icons/fa";
import ChatBody from "./chat-body";
import {assistant} from "../utils/apis";
import {useAuthContext} from "../contexts/auth";
import {SiteName} from "../utils/constants";
import Dropdown from "react-bootstrap/Dropdown";
import DataImporter from "./data-inporter";
import ProcessedData from "./setting-processed-data";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import DataSecurity from "./data-security";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Settingsdata() {
    const textArea = useRef();
    const userInput = useRef(null);
    const uploadedFile = useRef();
    const inputUrl = useRef();
    const [dataSourceType, setDaraSourceType] = useState('account');
    const [dataList, setDataList] = useState([]);
	const selectSource = (elm, type) => {
        const ss = document.querySelector('.selected-source');
        if (ss) {
            ss.classList.remove('selected-source');
        }
        elm.classList.add('selected-source');
        setDaraSourceType(type);
    }
   const data = [
    { user: "nevaeh.simmons@example.com", date: "28 May, 2020", access_level:'admin', status: "success" },
    { user: "nevaeh.simmons@example.com", date: "28 May, 2020", access_level:'admin', status: "success" },
    { user: "nevaeh.simmons@example.com", date: "28 May, 2020", access_level:'admin', status: "success" },
    { user: "nevaeh.simmons@example.com", date: "28 May, 2020", access_level:'admin', status: "success" },
    { user: "nevaeh.simmons@example.com", date: "28 May, 2020", access_level:'admin', status: "success" },
    { user: "nevaeh.simmons@example.com", date: "28 May, 2020", access_level:'admin', status: "success" },
] 
const data2 = [
    { order_id: "678935899",user:"Marcuse Hariss", date: "28 May, 2020", bonus:'26', profit: "1,200.00" },
    { order_id: "678935899",user:"Marcuse Hariss", date: "28 May, 2020", bonus:'26', profit: "1,200.00" },
    { order_id: "678935899",user:"Marcuse Hariss", date: "28 May, 2020", bonus:'26', profit: "1,200.00" },
    { order_id: "678935899",user:"Marcuse Hariss", date: "28 May, 2020", bonus:'26', profit: "1,200.00" },
    { order_id: "678935899",user:"Marcuse Hariss", date: "28 May, 2020", bonus:'26', profit: "1,200.00" },
    { order_id: "678935899",user:"Marcuse Hariss", date: "28 May, 2020", bonus:'26', profit: "1,200.00" },
    { order_id: "678935899",user:"Marcuse Hariss", date: "28 May, 2020", bonus:'26', profit: "1,200.00" },
    { order_id: "678935899",user:"Marcuse Hariss", date: "28 May, 2020", bonus:'26', profit: "1,200.00" },
    { order_id: "678935899",user:"Marcuse Hariss", date: "28 May, 2020", bonus:'26', profit: "1,200.00" },
]

    return (
        <>
            <div className="d-flex flex-row h-100 w-100">

                <div className='left-side w-20 side-bar-extend'>
				<div className='side-bar-sec'>
				<div className="side-bar-sec-item">
				  <span className="side-bar-sec-item-name">General Settings</span>
				</div>
				</div>
                   <div className='side-bar-sec'>
                     <div className="side-bar-sec-item active">
                      <a onClick={(e) => selectSource(e.target, 'account')} href="javascript:void(0)"> <ManageAccountsIcon />
                      <span  className="side-bar-sec-item-name"> Accounts</span>
					  </a>
                    </div>
                <div className="side-bar-sec-item">
                    <a onClick={(e) => selectSource(e.target, 'preference')} href="javascript:void(0)"><AutoAwesomeIcon />
                    <span className="side-bar-sec-item-name"> Preference</span></a>
                </div>
				<div className="side-bar-sec-item">
                     <a onClick={(e) => selectSource(e.target, 'billing')} href="javascript:void(0)"><PaymentIcon />
                    <span className="side-bar-sec-item-name"> Billing</span></a>
                </div>
				<div className="side-bar-sec-item">
                     <a onClick={(e) => selectSource(e.target, 'notification')} href="javascript:void(0)"><NotificationsActiveIcon />
                    <span className="side-bar-sec-item-name"> Notification</span></a>
                </div>
				<div className="side-bar-sec-item">
                    <a onClick={(e) => selectSource(e.target, 'security')} href="javascript:void(0)"><VpnKeyIcon />
                    <span className="side-bar-sec-item-name"> Security</span></a>
                </div>
				<div className="side-bar-sec-item">
                   <a onClick={(e) => selectSource(e.target, 'members')} href="javascript:void(0)"> <GroupIcon />
                    <span  className="side-bar-sec-item-name"> Members</span></a>
                </div>
				<div className="side-bar-sec-item">
                   <a onClick={(e) => selectSource(e.target, 'referral')} href="javascript:void(0)"> <CardGiftcardIcon />
                    <span  className="side-bar-sec-item-name"> Referral</span></a>
                </div>
                </div>
              </div>

               <div className='right-side w-80'>
                  <div className="p-4"> 
                      {
                    dataSourceType === 'account' ?
					<div className="side-bar-sec">
					   <div className="w-100">
						   <div className="setting-head-bar">
                             <span> My Profile</span>
                        </div>
						</div>
						<div className="w-100 h-110">
						   <div class="form-group w-10 left-text-align">
                             <div className="profile-img">
                                <FaUser/>
                            </div>
						  </div>
						  <div class="form-group w-90 right-text-align">
						  <button className='settings-btn left-text-align' >+ Change Image</button>
                             <button className='settings-btn left-text-align' >Remove</button>
							 <div className="side-bar-sec-item">
							 <p class="left-text-align support-bar">We support PNGs,JPGs,GIFs Under 2MB </p>
							 </div>
						  </div>
						  
						</div>
						<div className="w-100">
						   <div className="setting-head-bar">
                             <span> Account Security</span>
                           </div>
						</div>
						<div className="w-100">
						   <div class="form-group w-50 left-text-align">
                             <label for="email" className={'form-label'}>Email</label>
							 <input ref={userInput} type="text" className={'input-text-type-one'} multiple={true} placeholder={'Type Your Email...'} />
						  </div>
						  <div class="form-group w-50 right-text-align">
                            <button className='settings-btn right-text-align margin-top-55' >Change Email</button>
                           </div>
						</div>
						<div className="w-100">
						   <div class="form-group w-50 left-text-align">
                            <label for="fullName" className={'form-label'}>Password</label>
							 <input ref={userInput} type="password" className={'input-text-type-one'} multiple={true} placeholder={'Type Your Password...'} />
						  </div>
						  <div class="form-group w-50 right-text-align">
                            <div class="form-group w-50 right-text-align">
                            <button className='settings-btn right-text-align margin-top-40' >Change Password</button>
                           </div>
						  </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>2-Step Verifications</strong></label>
							 <p>Add an aditional layer of security to your account during login.</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
						   <div className='right-text-align' style={{margin: '13px'}} >
							   <div className="toggle-switch">
								<input type="checkbox" className="checkbox"
									   name={'Verifications'} id={'Verifications'} />
								<label className="label" htmlFor={'Verifications'}>
								  <span className="inner" />
								  <span className="switch" />
								</label>
                             </div>
                             </div>
                           </div>
						</div>
						<div className="w-100">
						   <div className="setting-head-bar">
                             <span> Support Access</span>
                           </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Log out of all devices</strong></label>
							 <p>Log out of all other active sessions on other devices besides this one..</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                            <button className='settings-btn right-text-align margin-top-40' >Log out</button>
                           </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Delete my account</strong></label>
							 <p>Permanently delete the account and remove access from all workspaces..</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                            <button className='settings-btn right-text-align' >Delete Account</button>
                           </div>
						</div>
					</div>: ''
                }
				
		        {
                    dataSourceType === 'preference' ?
					<div className="side-bar-sec">
					   <div className="w-100">
						   <div className="setting-head-bar">
                             <span>Preference</span>
                        </div>
						</div>
						
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Auto-Generate:</strong></label>
							 <p>Note: Turning this feature on will result in slightly longer loading times.</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                           <div className='right-text-align' style={{margin: '20px'}} >
							   <div className="toggle-switch">
								<input type="checkbox" className="checkbox"
									   name={'Generate'} id={'Generate'} />
								<label className="label" htmlFor={'Generate'}>
								  <span className="inner" />
								  <span className="switch" />
								</label>
                             </div>
                             </div>
                           </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Auto Save:</strong></label>
							 <p>Note: Turning this feature on will result in slightly longer loading times.</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                          <div className='right-text-align' style={{margin: '22px'}} >
							   <div className="toggle-switch">
								<input type="checkbox" className="checkbox"
									   name={'Auto'} id={'Auto'} />
								<label className="label" htmlFor={'Auto'}>
								  <span className="inner" />
								  <span className="switch" />
								</label>
                               </div>
                             </div>
                           </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Them:</strong></label>
							 <p>Note: Turning this feature on will result in slightly longer loading times.</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                           <div className='settings-btn right-text-align'>  
						   <Dropdown >
						         Light
                                <Dropdown.Toggle variant="transferent" id="dropdown-user">
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='menu-dropdown' style={{width: '200px'}}>
                                    <Dropdown.Item href="">Light</Dropdown.Item>
                                    <Dropdown.Item href="">Dark</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
							</div>
						   
                           </div>
						</div>
						<div className="w-100">
						   <div className="setting-head-bar">
                             <span> Language & Region </span>
                           </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Deafult Language</strong></label>
							 <p>Change the language use in the user interface.</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                            <div className='settings-btn right-text-align margin-top-40'>  
						   <Dropdown>
						         English
                                <Dropdown.Toggle variant="transferent" id="dropdown-user">
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='menu-dropdown' style={{width: '200px'}}>
                                    <Dropdown.Item href="">English</Dropdown.Item>
                                    <Dropdown.Item href="">Bangla</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
							</div>
                           </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Region</strong></label>
							 <p>Choose what region that you used on this apps.</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
						   <div className='settings-btn right-text-align margin-top-40'>  
                            <Dropdown>
						         Bangladesh
                                <Dropdown.Toggle variant="transferent" id="dropdown-user">
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='menu-dropdown' style={{width: '200px'}}>
                                    <Dropdown.Item href="">Bangladesh</Dropdown.Item>
                                    <Dropdown.Item href="">India</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                           </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Start Week on Monday</strong></label>
							 <p>This will change how all calanders in your app look.</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                           <div className='right-text-align' style={{margin: '2px'}} >
							   <div className="toggle-switch">
								<input type="checkbox" className="checkbox"
									   name={'AppLook'} id={'AppLook'} />
								<label className="label" htmlFor={'AppLook'}>
								  <span className="inner" />
								  <span className="switch" />
								</label>
                               </div>
                             </div>
                           </div>
						</div>
					</div>: ''
                }
				
				{
                    dataSourceType === 'billing' ?
					<div className="side-bar-sec">
					   <div className="w-100">
						   <div className="setting-head-bar">
                             <span>Payment</span>
                        </div>
						</div>
						
						<div className="w-100 left-text-align">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Plan</strong></label>
							 <p>Nexen Premium</p>
						  </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-100 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Billing Cycle</strong></label>
							 <p>Monthly.</p>
						  </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Subscription</strong></label>
							 <p>View your subscription or update your payment information.</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                           <button className='assistance-btn right-text-align margin-top-40' >Manage Subscription</button>
						   
                           </div>
						</div>
						<div className="w-100">
						   <div className="setting-head-bar">
                             <span> Billing Details </span>
                           </div>
						</div>
						
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Card Details:</strong></label>
						 <div className="url-box">
                            <PaymentIcon />
                            <input type={'text'} className={'form-control'} ref={inputUrl} name="data-link" id="data-link" placeholder={'Mastercard Credit (21515934)'} />
                            <button className='assistance-btn right-text-align' >Primary</button>
                        </div>
						  </div>
						  <div class="form-group w-50 right-text-align">
                           <div className='assistance-btn right-text-align' >
							  
                             </div>
                           </div>
						</div>
					</div>: ''
                }
				
				    {
                    dataSourceType === 'notification' ?
					<div className="side-bar-sec">
					   <div className="w-100">
						   <div className="setting-head-bar">
                             <span>In-app Notifications</span>
                        </div>
						</div>
						
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Mobile push notifications</strong></label>
							 <p>Receive push notifications on mentions and comments via your mobile app.</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                           <div className='assistance-btn right-text-align' style={{margin: '26px'}} >
							   <div className="toggle-switch">
								<input type="checkbox" className="checkbox"
									   name={'Mobilepush'} id={'Mobilepush'} />
								<label className="label" htmlFor={'Mobilepush'}>
								  <span className="inner" />
								  <span className="switch" />
								</label>
                             </div>
                             </div>
                           </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Desktop push notifications</strong></label>
							 <p>Receive push notifications on mentions and comments immediately on your desktop app</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                          <div className='assistance-btn right-text-align' style={{margin: '26px'}} >
							   <div className="toggle-switch">
								<input type="checkbox" className="checkbox"
									   name={'Pushnotifications'} id={'Pushnotifications'} />
								<label className="label" htmlFor={'Pushnotifications'}>
								  <span className="inner" />
								  <span className="switch" />
								</label>
                               </div>
                             </div>
                           </div>
						</div>
						
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Daily digest</strong></label>
							 <p>Includes Productivity stats and tasks due today. Sent every morning.</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                           <div className='assistance-btn right-text-align' style={{margin: '26px'}} >
							   <div className="toggle-switch">
								<input type="checkbox" className="checkbox"
									   name={'Dailydigest'} id={'Dailydigest'} />
								<label className="label" htmlFor={'Dailydigest'}>
								  <span className="inner" />
								  <span className="switch" />
								</label>
                               </div>
                             </div>
                           </div>
						</div>
						<div className="w-100">
						   <div className="setting-head-bar">
                             <span>Email Notifications</span>
                        </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Activity in your workspace</strong></label>
							 <p>Receive emails when you get comments, mentions, page invites, reminders, access requests, and property changes</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                           <div className='assistance-btn right-text-align' style={{margin: '26px'}} >
							   <div className="toggle-switch">
								<input type="checkbox" className="checkbox"
									   name={'Activity'} id={'Activity'} />
								<label className="label" htmlFor={'Activity'}>
								  <span className="inner" />
								  <span className="switch" />
								</label>
                               </div>
                             </div>
                           </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Always send email notifications</strong></label>
							 <p>Receive emails about activity in your workspace, even when you're active on the app</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                           <div className='assistance-btn right-text-align' style={{margin: '26px'}} >
							   <div className="toggle-switch">
								<input type="checkbox" className="checkbox"
									   name={'SendeEmail'} id={'SendeEmail'} />
								<label className="label" htmlFor={'SendeEmail'}>
								  <span className="inner" />
								  <span className="switch" />
								</label>
                               </div>
                             </div>
                           </div>
						</div>
						
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Email digest</strong></label>
							 <p>Receive email digests every 8 hours for changes to pages you’re subscribed to</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                           <div className='assistance-btn right-text-align' style={{margin: '26px'}} >
							   <div className="toggle-switch">
								<input type="checkbox" className="checkbox"
									   name={'Emaildigest'} id={'Emaildigest'} />
								<label className="label" htmlFor={'Emaildigest'}>
								  <span className="inner" />
								  <span className="switch" />
								</label>
                               </div>
                             </div>
                           </div>
						</div>
						
					</div>: ''
                }
				
				 {
                    dataSourceType === 'security' ?
					<div className="side-bar-sec">
					   <div className="w-100">
					   <div class="w-70 right-text-align">
						  <button className='assistance-btn left-text-align' >+ Filter</button>
                             <button className='assistance-btn left-text-align'>View all</button>
						  </div>
					   </div>
					   <div className="w-100">
						   <div className="setting-head-bar">
                             <span className="margin-top-40" >Login Session</span>
                            </div>
						</div>
						
						<div className="w-100">
						  <DataSecurity/>
						</div>
						
					</div>: ''
                }
				
				{
                    dataSourceType === 'members' ?
					<div className="side-bar-sec">
					   <div className="w-100">
						   <div className="setting-head-bar">
                             <span className="margin-top-40" >Manage Members</span>
                            </div>
						</div>
						<div className="w-100">
						  <div class="w-70 left-text-align">
						     <input className="form-control form-control-member-search" type="text" placeholder="Search"/>
                             <Search className='button-search member-search-icon' />
						  </div>
						  <div class="form-group w-30 right-text-align">
                           <div className='assistance-btn right-text-align' >
							  <button className='assistance-btn left-text-align' ><FilterAltIcon/> Filter</button>
                             <button className='assistance-btn left-text-align'>Invite Member</button>
                             </div>
                           </div>
						</div>
						<div className="w-100">
						 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">USER</TableCell>
            <TableCell align="left">DATE</TableCell>
            <TableCell align="left">ACCESS LEVEL</TableCell>
            <TableCell align="left">STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((val, key) => (
            <TableRow
              key={val.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"><div className="user-img" style={{float: 'left'}}>
                                <FaUser/>
                            </div>&nbsp; {val.user}</TableCell>
              <TableCell align="left">{val.date}</TableCell>
              <TableCell align="left">{val.access_level}</TableCell>
              <TableCell align="left"><button className='assistance-btn right-text-align' >{val.status}</button></TableCell>
              <TableCell align="left"><MoreVertIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
						</div>
						
					</div>: ''
                }
				
				{
                    dataSourceType === 'referral' ?
					<div className="side-bar-sec">
					   <div className="w-100">
						   <div className="setting-head-bar">
                             <span className="margin-top-40" >Referral Program</span>
                            </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Referral Code</strong></label>
							 <p>Apply your friend's referral code to receive one free month of Venture.</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                           <div className='ref-btn right-text-align' style={{margin: '26px'}} >
						   <input ref={userInput} type="password" className={'input-text-type-one'} multiple={true} placeholder={'Enter referal code here'}  style={{margin: '2px 0px 0px 0px'}} />
							    <button className='assistance-btn left-text-align' >Apply</button>
                             </div>
                           </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>How To Use</strong></label>
							 <p>Use images to enhance your post, improve its flow, add humor
and explain complex topics.</p>
						  </div>
						  <div class="form-group w-50 right-text-align">
                           <div className='assistance-btn right-text-align' style={{margin: '26px'}} >
							 <button className='assistance-btn left-text-align' >Get Started</button>
                             </div>
                           </div>
						</div>
						<div className="w-100">
						  <div class="form-group w-50 left-text-align">
                             <label for="fullName" className={'form-label'}><strong>Your Referral Link</strong></label>
							 <p>Plan your blog post by choosing a topic, creating an outline conduct research, and checking facts</p>
						       <p className='assistance-btn left-text-align' style={{height: '42px'}}> https://nexen.ai/reffer/?refid=345re66787k8</p> <button className='assistance-btn left-text-align' >copy link</button>
                         </div>
						  <div class="form-group w-50 right-text-align">
                           <div className='assistance-btn right-text-align' style={{margin: '50px'}} >
							 
                             </div>
                           </div>
						</div>
						
				  <div className="w-100">
						   <div className="setting-head-bar">
                             <span className="margin-top-40" >Referred Users </span>
                            </div>
						</div>
			       <div className="w-100">
						 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Order ID</TableCell>
            <TableCell align="left">User</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Bonus</TableCell>
            <TableCell align="left">Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data2.map((val, key) => (
            <TableRow
              key={val.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{val.order_id}</TableCell>
              <TableCell align="left">{val.user}</TableCell>
              <TableCell align="left">{val.date}</TableCell>
              <TableCell align="left">{val.bonus} %</TableCell>
              <TableCell align="left">$ {val.profit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
						</div>
						
					</div>: ''
                }
				
                  </div>
               </div>

            </div>
        </>
    );
}

export default Settingsdata;