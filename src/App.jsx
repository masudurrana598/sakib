import React, {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.scss'
import './App.css'
import {Header, Footer, LeftBar} from "./components/layouts";
import AuthMiddleware from "./middlewares/auth";
import {Assistant, Notes, Dashboard, Home, Login, Logout, Register, Settings, Forgot,Reset} from "./components";
import {AuthContextProvider, useAuthContext} from "./contexts/auth";
import {getLocalStorageData} from "./utils/apis";


function App() {
    let userData = getLocalStorageData('ud');
    const {auth, setAuth} = useAuthContext();

  return (
        <BrowserRouter>

            <div className="main-wrapper">
                    {
                        auth.token ?
                        <LeftBar /> : ''
                    }

                    <div className={'main-body'}>
                        <Header />

                        <div className='h-75 w-100'>
                            <Routes>
                                {/* Private routes */}
                                <Route path={'/'} element={ <AuthMiddleware component={<Assistant />} authType={'auth'} /> } />
                                <Route path={'/log-out'} element={ <AuthMiddleware component={<Logout />} authType={'auth'} /> } />
                                <Route path={'/home'} element={ <AuthMiddleware component={<Home />} authType={'public'} /> } />
                                <Route path={'/assistant'} element={ <AuthMiddleware component={<Assistant />} authType={'auth'} /> } />
                                <Route path={'/notes'} element={ <AuthMiddleware component={<Notes />} authType={'auth'} /> } />
								<Route path={'/settings'} element={ <AuthMiddleware component={<Settings />} authType={'auth'} /> } />

                                {/* Public routes */}
                                <Route path={'/login'} element={ <AuthMiddleware component={<Login />} authType={'public'} /> } />
                                <Route path={'/forgot'} element={ <AuthMiddleware component={<Forgot />} authType={'public'} /> } />
                                <Route path={'/reset'} element={ <AuthMiddleware component={<Reset />} authType={'public'} /> } />
                                <Route path={'/register'} element={ <AuthMiddleware component={<Register />} authType={'public'} /> } />
                                {/*<Route path={'/dashboard'} element={ <AuthMiddleware component={<Dashboard />} authType={'auth'} /> } />*/}
                            </Routes>
                        </div>
                    </div>

                    <Footer />
                </div>

        </BrowserRouter>
  )
}

export default App
