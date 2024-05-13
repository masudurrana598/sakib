import React, {useEffect} from "react";
// import Navbar from "./navbar";
import {Link} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Search from '@mui/icons-material/Search';
import HelpOutline from '@mui/icons-material/HelpOutline';
import {useAuthContext} from "../../contexts/auth";
import {getLocalStorageData} from "../../utils/apis";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/logo.png";

export const Header = () => {
    const {auth, setAuth} = useAuthContext();

    useEffect(() => {
        let userData = getLocalStorageData('ud');
        if (userData) {
            setAuth(userData);
        }
    }, []);

    return (
        <>
            <nav className='d-flex flex-row justify-content-between align-items-center px-2 header-bar'>
                {auth && auth.token ?
                    <form className="d-flex position-relative">
                        <input className="form-control form-control-top-search" type="text" placeholder="Search"/>
                        <Search className='button-search' />
                    </form>
                    :
                    <div><img src={logo} alt="Logo" className="img" /></div>
                }
                <div className="d-flex flex-row justify-content-center align-items-center m-0 main-header-right">
                    { auth && auth.token ?
                        <>
                            <Link className="" to={'#'}>
                                <HelpOutline className='mx-1' /> Help Center
                            </Link>
                            <div className="user-img">
                                <FaUser/>
                            </div>
                            <Dropdown>
                                {auth.user.name}
                                {/* {auth.user.name.charAt(0)} */}
                                <Dropdown.Toggle variant="transferent" id="dropdown-user">
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='menu-dropdown' style={{width: '200px'}}>
                                    <Dropdown.Item href="/log-out">Log Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </> :

                        <Link className="nav-link usd-credit btn d-flex" to={'login'}>Login</Link>
                    }
                </div>
            </nav>

        </>
    );
}