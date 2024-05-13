import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useAuthContext} from "../../contexts/auth";
import {getLocalStorageData} from "../../utils/apis";

function Navbar() {
    const {auth, setAuth} = useAuthContext();

    useEffect(() => {
        let userData = getLocalStorageData('ud');
        if (userData) {
            setAuth(userData);
        }
    }, []);

    return (
        <nav className={'main-nav d-flex flex-row gap-2'}>
            {
                auth && auth.token ?
                    <>
                        <Link to={'/log-out'}>Logout</Link>
                    </>
                    :
                    <>
                        <Link to={'login'}>Login</Link>
                        <Link to={'register'}>Register</Link>
                    </>
            }
        </nav>
    );
}

export default Navbar;