import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useAuthContext} from "../contexts/auth";
import {useNavigate} from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GoogleIcon from '@mui/icons-material/Google';
import {login, setLocalStorageData} from "../utils/apis";
import logo from "./../assets/logo.png";

export default function Login() {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuthContext();

    const submitForm = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        let res = await login(form);

        if (res.token) {
            setAuth(res);
            setLocalStorageData('ud', res);
        }

        navigate('/');
    }

    return (

        <div className={'login-form d-flex flex-column'}>
		     <div className={'center-text-align'} style={{margin: '0px 0px 30px 0px'}}>
			 <div className="login-img"><img src={logo} alt="Logo" className="img" /></div>
                             <h2 >Welcome Back!</h2>
                             <span className="margin-top-40" >Please Login to Continue</span>
                 </div>
			 <div className="w-100">
			    <form className={'d-flex flex-column gap-2'} onSubmit={submitForm}>
						   <div class="left-text-align">
                             <label for="email" className={'form-label'}>Email</label>
							 <input  type="text" className={'input-text-type-one'} type="email" name={'email'} placeholder={'Enter Your Email Here'} />
						  </div>
						  <div class="left-text-align">
                             <label for="password" className={'form-label'}>Password</label>
							 <input  type="text" id="password" className={'input-text-type-one'} type="password" name={'password'} placeholder={'Enter Your Email Here'} />
							  <RemoveRedEyeIcon className='password-view-icon' />
						  </div>
						   <div className="w-100">
						    <div class="form-group w-50 left-text-align">
                              <div className='left-text-align' >
						   <input  type="checkbox" />
							   <span className="margin-top-40" ><strong> Remember Me</strong></span>
                            
                           </div>
						  </div>
						  <div class="form-group w-50 right-text-align">
                           <div className='ref-btn right-text-align' >
							   <p className={'center-text-align'}><Link to={'/forgot'} ><strong>Forgot Password?</strong></Link></p>
                             </div>
                           </div>
						   </div>
						    <button className={'btn-dark mb-4'}>Sign In</button>
						    <span className={'btn-deafult mb-4 google-button'}><GoogleIcon/> Sign In with Google</span>
						    </form>
						</div>
         
                <p className={'center-text-align'}>Do`t you have an account? <Link to={'/register'} >Sign Up</Link></p>
        </div>
    );
}