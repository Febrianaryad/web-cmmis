import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => alert(JSON.stringify(data));

  return (
    <div className="w-full flex flex-col justify-center items-center px-10 bg-[url('assets/contact-bg.png')]  bg-cover min-h-screen">
            <div className="h-[2rem]"></div>
                <div className='w-11/12 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)] drop-shadow-md rounded-[50px] z-5 bg-white'>
                    
                    <form action="https://getform.io/f/d71d5d42-df97-4771-915e-ab0294e5b7ef" method="POST"
                    className='w-full h-[28rem] flex flex-col justify-center items-center px-10'>
                        <h1 className="text-[#3b5555] font-extrabold text-3xl py-2">Contact Us</h1>
                            <div className=' w-3/6'>
                                <div className='py-1 '>
                                    <p className='font-bold text-base text-[#527271] '>Name</p>
                                    <input type="text" placeholder=' ex: John Doe' className={`w-full text-sm h-8 placeholder-gray-500 rounded-lg drop-shadow-md ${errors.fullName && "focus:border-red-500 focus:ring-red-500 border-red-500"}`} 
                                    {...register("fullName", { required: {value: true, message: 'This field is required'} })}/>
                                    <div>{errors.fullName && <span className='text-red-500'>{errors.fullName.message}</span>}</div>
                                </div>

                                <div className='py-1'>
                                    <p className='font-bold text-base text-[#527271]'>Email</p>
                                    <input type="email" placeholder=' ex: Johndoe@example.com' className={`w-full text-sm h-8 placeholder-gray-500 rounded-lg drop-shadow-md ${errors.emailAdd && "focus:border-red-500 focus:ring-red-500 border-red-500"}`} 
                                    {...register("emailAdd", { required: {value: true, message: 'This field is required'}, pattern: {value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message: "Invalid Email Address"} })}/>
                                    <div>{errors.emailAdd && <span className='text-red-500'>{errors.emailAdd.message}</span>}</div>
                                </div>

                                <div className='py-1'>
                                    <p className='font-bold text-base text-[#527271]'>Phone Number</p>
                                    <input type="tel" placeholder=' ex: XXXX-XXXX-XXXX' pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" className={`w-full text-sm h-8 placeholder-gray-500 rounded-lg drop-shadow-md ${errors.phoneNum && "focus:border-red-500 focus:ring-red-500 border-red-500"}`} 
                                    {...register("phoneNum", { required: {value: true, message: 'This field is required'} })}/>
                                    <div>{errors.phoneNum && <span className='text-red-500'>{errors.phoneNum.message}</span>}</div>
                                </div>

                                <div className='py-1 pb-5'>
                                    <p className='font-bold text-base text-[#527271]'>Message</p>
                                    <input type="text" textarea placeholder=' ex: message' className={`w-full text-sm h-20 placeholder-gray-500 rounded-lg drop-shadow-md ${errors.messageCont && "focus:border-red-500 focus:ring-red-500 border-red-500"}`} 
                                    {...register("messageCont", { required: {value: true, message: 'This field is required'} })}/>
                                    <div>{errors.messageCont && <span className='text-red-500'>{errors.messageCont.message}</span>}</div>
                                </div>

                                <button type='submit' className='w-full h-10 text-white border rounded-md bg-[#527271] border-[#527271] hover:bg-transparent hover:text-[#527271]'>Submit</button>


                                {/* <div>
                                    <input type="submit" value="Submit" 
                                    className='w-full h-10 text-white border bg-[#5596c2] border-[#5596c2] hover:bg-transparent hover:text-[#5596c2]'/>
                                </div> */}
                                </div>
                    </form>

                </div>
            </div>
    
    
  )
}

export default Contact