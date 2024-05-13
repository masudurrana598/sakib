import React, {useEffect} from "react";
import {useAuthContext} from "../contexts/auth";
import {useNavigate} from "react-router-dom";

export default function AuthMiddleware({component, authType} ) {
    const navigate = useNavigate();
    const {auth} = useAuthContext();

    useEffect(() => {

        if (auth.token && authType === 'public' ) {
            navigate('/');
        } else if (!auth.token && authType === 'auth') {
            navigate('/login');
        }

    }, [auth, component, authType]);

    return ( component );
}

export function AuthCheck() {
    const navigate = useNavigate();
    const {auth} = useAuthContext();

    useEffect(() => {

        if (!auth.token) {
            navigate('/login');
        }

    }, [auth]);

    return false;
}
