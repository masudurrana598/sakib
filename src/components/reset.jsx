import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GoogleIcon from '@mui/icons-material/Google';
import logo from "./../assets/logo.png";

export default function Reset() {
    const navigate = useNavigate();

    return (
	
	
	 <div className={'login-form d-flex flex-column'}>
		     <div className={'center-text-align'} style={{margin: '0px 0px 30px 0px'}}>
			 <div className="login-img"><img src={logo} alt="Logo" className="img" /></div>
                <h2 >Reset Password</h2>
               <span className="margin-top-40" >Enter your registered login email address to receive a secured link to set a new password</span>
                 </div>
			 <div className="w-100">
			   <form className={'d-flex flex-column gap-2'}  >
						   <div class="left-text-align">
                             <label for="password" className={'form-label'}>Password</label>
							 <input  type="text" id="password" className={'input-text-type-one'} type="password" name={'password'} placeholder={'Password'} />
							  <RemoveRedEyeIcon className='password-view-icon' />
						  </div>
						  <div class="left-text-align">
                             <label for="password_confirmation" className={'form-label'}>Confirm Password</label>
							 <input  type="text" id="password_confirmation" className={'input-text-type-one'} type="password" name={'password_confirmation'} placeholder={'Confirm Password'} />
							  <RemoveRedEyeIcon className='password-view-icon' />
						  </div>
						    <button className={'btn-dark mb-4'}>Reset Password</button>
						    </form>
						</div>
         
        </div> );
}