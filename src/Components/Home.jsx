import React from 'react'
import "../Styles/Home.css"
import Pic1 from "../pics/user1.jpg"
import Pic2 from "../pics/user2.jpg"

function Home() {
	return (
		<div className='home h-screen '>
			<div className='head  flex justify-between '>
				<h1 className='px-3' >  SPOTTA <span>NG</span></h1>
				<button className='welcome px-4  flex gap-1 '>Welcome
					<img style={{ borderRadius: '50%' }} className='w-6  h-6   ' src={Pic2} alt='' />
				</button>
			</div>

			<main>
				<div className='main-container'>
					<div className='content1'>
						<h1 className='text-6xl px-0 pt-36  '>Find a place you will love to live!</h1>
						<h2 className='text-sm mt-3 mb-3  px-0 '> See through the lenses of people who have lived or visited the neighbourhood you might have in mind.</h2>

						<div className=' px-0'>
							<input className='address' type="text" name="email" id="name" placeholder="Enter Address" />
						</div>

						<div className='px-0 mt-3'>
							<button style={{ borderRadius: '5px', fontSize: '13px' }} className='bg-blue-700 text-white py-1 px-1'>SEARCH</button>
						</div>

					</div>

					<div style={{ background: 'whiteSmoke ' }} className=' content2 pt-3 h-screen '>
						<div className='grid'>

							<div style={{ borderRadius: '5px' }} className='content2-grid  bg-white  w-70 h-auto mx-3 my-3 '>
								<div className='flex justify-between'>
									<div className=' px-1 py-1 flex gap-1'>
										<img style={{ borderRadius: '50%' }} className='w-8  h-8   ' src={Pic1} alt='' />
										<p style={{ fontSize: '10px' }}>Benita O. <span style={{ fontSize: '8px' }} className=''><br />2 months ago</span></p>

									</div>
									<p style={{ fontSize: '10px' }} className='px-1 py-1'>Ikate,Lekki <span> <br />✳✳❇❇❇</span></p>

								</div>

								<div>
									<h3 className='mx-1 my-1 leading-loose' style={{ fontSize: '12px' }}>There is no stable electricity, The roads are fairly good and there is a sense of community.
										The drainge system is poor and most residents litter thier surroundings,There are lots stores and Supermarkets. </h3>
								</div>


								<div className='flex justify-between py-2'>
									<div style={{ fontSize: '10px' }} className='text-gray-400 mx-1 my-1 flex gap-2 text-xs '>
										<p>👍🏼 24</p>
										<p>👎🏼 02</p>
										<p>💬 125</p>

									</div>

									<div className='mx-1 my-1 flex gap-1 text-xs'>
										<button style={{ borderRadius: '25px', fontSize: '10px' }} className='bg-yellow-200 py-1 px-2  '>eletricity</button>


									</div>

								</div>

							</div>




							<div style={{ borderRadius: '5px' }} className='content2-grid  bg-white  w-70 h-auto mx-3 my-3 '>
								<div className='flex justify-between'>
									<div className=' px-1 py-1 flex gap-1'>
										<img style={{ borderRadius: '50%' }} className='w-8  h-8   ' src={Pic2} alt='' />
										<p style={{ fontSize: '10px' }}>James T. <span style={{ fontSize: '8px' }} className=''><br />5 months ago</span></p>

									</div>
									<p style={{ fontSize: '10px' }} className='px-1 py-1'>Ikate,Lekki <span> <br />✳✳❇❇❇</span></p>

								</div>

								<div>
									<h3 className='mx-1 my-1 leading-loose' style={{ fontSize: '12px' }}>There is no stable electricity, The roads are fairly good and there is a sense of community.
										The drainge system is poor and most residents litter thier surroundings,There are lots stores and Supermarkets. </h3>
								</div>


								<div className='flex justify-between py-2'>
									<div style={{ fontSize: '10px' }} className='text-gray-400 mx-1 my-1 flex gap-2 text-xs '>
										<p>👍🏼 24</p>
										<p>👎🏼 02</p>
										<p>💬 125</p>

									</div>

									<div className='mx-1 my-1 flex gap-1 text-xs'>
										<button style={{ borderRadius: '25px', fontSize: '10px' }} className='bg-red-200 py-1 px-2  '>network</button>


									</div>

								</div>

							</div>



							<div style={{ borderRadius: '5px' }} className='content2-grid  bg-white  w-70 h-auto mx-3 my-3 '>
								<div className='flex justify-between'>
									<div className=' px-1 py-1 flex gap-1'>
										<img style={{ borderRadius: '50%' }} className='w-8  h-8   ' src={Pic2} alt='' />
										<p style={{ fontSize: '10px' }}>Benita O. <span style={{ fontSize: '8px' }} className=''><br />2 months ago</span></p>

									</div>
									<p style={{ fontSize: '10px' }} className='px-1 py-1'>Ikate,Lekki <span> <br />✳✳❇❇❇</span></p>

								</div>

								<div>
									<h3 className='mx-1 my-1 leading-loose' style={{ fontSize: '12px' }}>There is no stable electricity, The roads are fairly good and there is a sense of community.
										The drainge system is poor and most residents litter thier surroundings,There are lots stores and Supermarkets. </h3>
								</div>


								<div className='flex justify-between py-2'>
									<div style={{ fontSize: '10px' }} className='text-gray-400 mx-1 my-1 flex gap-2 text-xs '>
										<p>👍🏼 24</p>
										<p>👎🏼 02</p>
										<p>💬 125</p>

									</div>

									<div className='mx-1 my-1 flex gap-1 text-xs'>
										<button style={{ borderRadius: '25px', fontSize: '10px' }} className='bg-blue-300 py-1 px-2  '>silent</button>


									</div>

								</div>

							</div>



							<div style={{ borderRadius: '5px' }} className='content2-grid  bg-white  w-70 h-auto mx-3 my-3 '>
								<div className='flex justify-between'>
									<div className=' px-1 py-1 flex gap-1'>
										<img style={{ borderRadius: '50%' }} className='w-8  h-8   ' src={Pic1} alt='' />
										<p style={{ fontSize: '10px' }}>Benita O. <span style={{ fontSize: '8px' }} className=''><br />2 months ago</span></p>

									</div>
									<p style={{ fontSize: '10px' }} className='px-1 py-1'>Ikate,Lekki <span> <br />✳✳❇❇❇</span></p>

								</div>

								<div>
									<h3 className='mx-1 my-1 leading-loose' style={{ fontSize: '12px' }}>There is no stable electricity, The roads are fairly good and there is a sense of community.
										The drainge system is poor and most residents litter thier surroundings,There are lots stores and Supermarkets. </h3>
								</div>


								<div className='flex justify-between py-2'>
									<div style={{ fontSize: '10px' }} className='text-gray-400 mx-1 my-1 flex gap-2 text-xs '>
										<p>👍🏼 24</p>
										<p>👎🏼 02</p>
										<p>💬 125</p>

									</div>

									<div className='mx-1 my-1 flex gap-1 text-xs'>
										<button style={{ borderRadius: '25px', fontSize: '10px' }} className='bg-yellow-200 py-1 px-2  '>eletricity</button>


									</div>

								</div>

							</div>



							<div style={{ borderRadius: '5px' }} className='content2-grid  bg-white  w-70 h-auto mx-3 my-3 '>
								<div className='flex justify-between'>
									<div className=' px-1 py-1 flex gap-1'>
										<img style={{ borderRadius: '50%' }} className='w-8  h-8   ' src={Pic2} alt='' />
										<p style={{ fontSize: '10px' }}>Benita O. <span style={{ fontSize: '8px' }} className=''><br />2 months ago</span></p>

									</div>
									<p style={{ fontSize: '10px' }} className='px-1 py-1'>Ikate,Lekki <span> <br />✳✳❇❇❇</span></p>

								</div>

								<div>
									<h3 className='mx-1 my-1 leading-loose' style={{ fontSize: '12px' }}>There is no stable electricity, The roads are fairly good and there is a sense of community.
										The drainge system is poor and most residents litter thier surroundings,There are lots stores and Supermarkets. </h3>
								</div>


								<div className='flex justify-between py-2'>
									<div style={{ fontSize: '10px' }} className='text-gray-400 mx-1 my-1 flex gap-2 text-xs '>
										<p>👍🏼 24</p>
										<p>👎🏼 02</p>
										<p>💬 125</p>

									</div>

									<div className='mx-1 my-1 flex gap-1 text-xs'>
										<button style={{ borderRadius: '25px', fontSize: '10px' }} className='bg-purple-300 py-1 px-2  '>hospitality</button>


									</div>

								</div>

							</div>



							<div style={{ borderRadius: '5px' }} className='content2-grid  bg-white  w-70 h-auto mx-3 my-3 '>
								<div className='flex justify-between'>
									<div className=' px-1 py-1 flex gap-1'>
										<img style={{ borderRadius: '50%' }} className='w-8  h-8   ' src={Pic1} alt='' />
										<p style={{ fontSize: '10px' }}>Benita O. <span style={{ fontSize: '8px' }} className=''><br />2 months ago</span></p>

									</div>
									<p style={{ fontSize: '10px' }} className='px-1 py-1'>Ikate,Lekki <span> <br />✳✳❇❇❇</span></p>

								</div>

								<div>
									<h3 className='mx-1 my-1 leading-loose' style={{ fontSize: '12px' }}>There is no stable electricity, The roads are fairly good and there is a sense of community.
										The drainge system is poor and most residents litter thier surroundings,There are lots stores and Supermarkets. </h3>
								</div>


								<div className='flex justify-between py-2'>
									<div style={{ fontSize: '10px' }} className='text-gray-400 mx-1 my-1 flex gap-2 text-xs '>
										<p>👍🏼 24</p>
										<p>👎🏼 02</p>
										<p>💬 125</p>

									</div>

									<div className='mx-1 my-1 flex gap-1 text-xs'>
										<button style={{ borderRadius: '25px', fontSize: '10px' }} className='bg-pink-200 py-1 px-2  '>security</button>


									</div>

								</div>

							</div>



							<div style={{ borderRadius: '5px' }} className='content2-grid  bg-white w-70 h-auto mx-3 my-3 '>
								<div className='flex justify-between'>
									<div className=' px-1 py-1 flex gap-1'>
										<img style={{ borderRadius: '50%' }} className='w-8  h-8   ' src={Pic1} alt='' />
										<p style={{ fontSize: '10px' }}>Benita O. <span style={{ fontSize: '8px' }} className=''><br />2 months ago</span></p>

									</div>
									<p style={{ fontSize: '10px' }} className='px-1 py-1'>Ikate,Lekki <span> <br />✳✳❇❇❇</span></p>

								</div>

								<div>
									<h3 className='mx-1 my-1 leading-loose' style={{ fontSize: '12px' }}>There is no stable electricity, The roads are fairly good and there is a sense of community.
										The drainge system is poor and most residents litter thier surroundings,There are lots stores and Supermarkets. </h3>
								</div>


								<div className='flex justify-between py-2'>
									<div style={{ fontSize: '10px' }} className='text-gray-400 mx-1 my-1 flex gap-2 text-xs '>
										<p>👍🏼 24</p>
										<p>👎🏼 02</p>
										<p>💬 125</p>

									</div>

									<div className='mx-1 my-1 flex gap-1 text-xs'>
										<button style={{ borderRadius: '25px', fontSize: '10px' }} className='bg-blue-200 py-1 px-2  '>food</button>


									</div>

								</div>

							</div>



							<div style={{ borderRadius: '5px' }} className='content2-grid  bg-white w-70 h-auto mx-3 my-3 '>
								<div className='flex justify-between'>
									<div className=' px-1 py-1 flex gap-1'>
										<img style={{ borderRadius: '50%' }} className='w-8  h-8   ' src={Pic2} alt='' />
										<p style={{ fontSize: '10px' }}>Kenedy M. <span style={{ fontSize: '8px' }} className=''><br />2 months ago</span></p>

									</div>
									<p style={{ fontSize: '10px' }} className='px-1 py-1'>Ikate,Lekki <span> <br />✳✳❇❇❇</span></p>

								</div>

								<div>
									<h3 className='mx-1 my-1 leading-loose' style={{ fontSize: '12px' }}>There is no stable electricity, The roads are fairly good and there is a sense of community.
										The drainge system is poor and most residents litter thier surroundings,There are lots stores and Supermarkets. </h3>
								</div>


								<div className='flex justify-between py-2'>
									<div style={{ fontSize: '10px' }} className='text-gray-400 mx-1 my-1 flex gap-2 text-xs '>
										<p>👍🏼 24</p>
										<p>👎🏼 02</p>
										<p>💬 125</p>

									</div>

									<div className='mx-1 my-1 flex gap-1 text-xs'>
										<button style={{ borderRadius: '25px', fontSize: '10px' }} className='bg-green-200 py-1 px-2  '>neighbors</button>


									</div>

								</div>

							</div>





						</div>









					</div>

				</div>

			</main>




			<div style={{ background: 'whitesmoke' }} className='review flex items-center justify-center w-full h-screen'>
				<div style={{ borderRadius: '12px' }} className='rev bg-white  px-2 py-2 '>
					<p className='flex items-center justify-center text-xs pb-4'>Review Location</p>
					<h2 className='text-sm pb-2'>Bonny and Clyde Street,Ajao Estate,Lagos</h2>

					<div>
						<select style={{ background: "whiteSmoke", fontSize: '15px', }} className="w-full text-gray-400 select-option" >

							<option style={{ fontSize: '10px' }} className='text-sm'>Select amenities</option>

							<option>Schools</option>

							<option>Hospitals</option>

						</select>

						<div className='text-xm pt-3'>
							<p style={{ fontSize: "12px" }} className=''>Rate Location</p>
							<div className='flex'>
								<svg className="w-4 h-4 text-yellow-200 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-yellow-200 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-yellow-200 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-yellow-200 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<svg className="w-4 h-4 text-yellow-200 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>

							</div>

						</div>

						<p className='pt-3' style={{ fontSize: "12px" }}>Write Review</p>

						<div className='text '  >
							

							<label for="message" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
							<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

						</div>
					</div>


					<div className='flex gap-1 pt-2 pb-1'>
						<input style={{ width: '10px' }} type="radio" value="" name="gender" />
						<p style={{ fontSize: '10px' }}> Post as Anonymous</p>

					</div>

					<div className='btns flex justify-between pb-2 '>
						<button className='  bg-blue-700 px-2 py-2 rounded-lg border'>SUBMIT</button>
						<button className=' bg-gray-300 px-2 py-2 rounded-lg border'>CANCEL</button>

					</div>







				</div>



			</div>

		</div>
	)
}

export default Home