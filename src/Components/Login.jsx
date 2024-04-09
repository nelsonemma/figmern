import React from 'react';
import { Link } from 'react-router-dom';


import "../Styles/Login.css"

function Login() {

	
	return (
		<div >

			<div className='h-screen bg  '>
				<div className='head  flex justify-between '>
					<h1 className='px-10' >  SPOTTA <span>NG</span></h1>
					{/* <button className='px-10 '>LOGIN</button> */}
					<p  className='px-10 '>Login</p>
				</div>

				<div class="flex h-screen justify-center items-center">
					<div class="text-center bg-red w-72 content">
						<p className='py-4'>Log in</p>

						<form action="">
							<div className='email-password '>
								<div className='email'>
									<input type="text" name="email" id="name" placeholder="E-mail" />
								</div>
								<div className='password'>
									<input type="text" name="" id="password" placeholder="Password" />
								</div>

							</div>


							
							<Link to={`/Home` }  > 
							<button className='btn'>Login</button>
							</Link>


						</form>

						<div className='signup'>
							<p>--------------or----------------</p>
							<div className='btns'>							
								<button className='btn '> <span className='google'></span> Log in with Google  </button>
								<button className='btn'> Log in with Facebook</button>
								<button className='btn'> Log in with Apple</button>
							
							</div>

						</div>

						<div>

							<a style={{ fontSize: "8px" }} href="https://www.google.com" className='underline' >Forgot Your Password?</a>
						</div>
						<div>
							<p style={{ fontSize: "10px", paddingBottom: '15px' }}>Dont have an account? <span className='text-blue-700  underline cursor-pointer '>Sign up</span></p>
						</div>

					</div>
				</div>



			</div>



		</div>



	)
}

export default Login