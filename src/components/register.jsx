import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/apis";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GoogleIcon from '@mui/icons-material/Google';
import logo from "./../assets/logo.png";

export default function Register() {
    const navigate = useNavigate();

    const submitRegister = async (e) => {
        e.preventDefault();
        let userData = await register(new FormData(e.target));

        if (userData.id) {
            navigate('/login');
        }
    }

    return (
	
	
	 <div className={'login-form d-flex flex-column'}>
		     <div className={'center-text-align'} style={{margin: '0px 0px 30px 0px'}}>
			 <div className="login-img"><img src={logo} alt="Logo" className="img" /></div>
                             <h2 >Create Your Account</h2>
                             <span className="margin-top-40" >Please Create an Account to Continue</span>
                 </div>
			 <div className="w-100">
			   <form className={'d-flex flex-column gap-2'} onSubmit={submitRegister} >
			              <div class="left-text-align">
                             <label for="name" className={'form-label'}>Name</label>
							 <input  type="text"  id="name" className={'input-text-type-one'} type="text" name={'name'} placeholder={'First Name'} />
						  </div>
						   <div class="left-text-align">
                             <label for="email" className={'form-label'}>Email</label>
							 <input  type="text" id="email" className={'input-text-type-one'} type="email" name={'email'} placeholder={'Enter Your Email Here'} />
						  </div>
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
						   <div className="w-100">
                              <div className='left-text-align' >
						   <input  type="checkbox" />
							   <span className="margin-top-40" > I accept the <strong>Terms of Service</strong> and <strong>Privacy Policy </strong></span>
                            
                           </div>
						   </div>
						    <button className={'btn-dark mb-4'}>Sign Up</button>
						    <span className={'btn-deafult mb-4 google-button'}><GoogleIcon/> Sign Up with Google</span>
						    </form>
						</div>
         
                <p className={'center-text-align'}>Already have any account <Link to={'/login'} >Sign In</Link></p>
        </div> );
}