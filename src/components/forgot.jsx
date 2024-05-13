import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GoogleIcon from '@mui/icons-material/Google';
import logo from "./../assets/logo.png";

export default function Forgot() {
    const navigate = useNavigate();

    return (
	
	
	 <div className={'login-form d-flex flex-column'}>
		     <div className={'center-text-align'} style={{margin: '0px 0px 30px 0px'}}>
			 <div className="login-img"><img src={logo} alt="Logo" className="img" /></div>
                             <h2 >Set New Password</h2>
                             <span className="margin-top-40" >Your new password must be different than the previous passwords</span>
                 </div>
			 <div className="w-100">
			   <form className={'d-flex flex-column gap-2'}  >
						   <div class="left-text-align">
                             <label for="email" className={'form-label'}>Email</label>
							 <input  type="text" id="email" className={'input-text-type-one'} type="email" name={'email'} placeholder={'Enter Your Email Here'} />
						  </div>
						    <button className={'btn-dark mb-4'}>Send to my Email</button>
						    </form>
						</div>
         
                <p className={'center-text-align'}>Don’t want to reset your Password? <Link to={'/login'} >Sign In</Link></p>
        </div> );
}