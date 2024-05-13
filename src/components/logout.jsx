import React, {useEffect} from "react";
import {useAuthContext} from "../contexts/auth";
import {logout, removeLocalStorageData} from "../utils/apis";

function Logout() {

    const {setAuth} = useAuthContext();

    useEffect(() => {

        logout();

        setAuth({
            user: null,
            token: null
        });

        removeLocalStorageData('ud');
    }, []);

    return(
        <></>
    );
}

export default Logout;