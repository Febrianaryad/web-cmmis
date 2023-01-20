import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => alert(JSON.stringify(data));

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center px-10'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full min-h-screen flex flex-col justify-center items-center px-10'>
                <div className='flex items-center'>
                <h1 className='text-xl font-bold sm:text-2xl'>CONTACT US</h1>
                </div>

                <div className='h-[15rem] w-3/6'>
                    <div className='py-2'>
                        <p>Name</p>
                        <input type="text" placeholder='ex: John Doe' className={`w-full text-xl h-10 placeholder-gray-500 rounded-lg ${errors.fullName && "focus:border-red-500 focus:ring-red-500 border-red-500"}`} 
                        {...register("fullName", { required: {value: true, message: 'This field is required'} })}/>
                        <div>{errors.fullName && <span className='text-red-500'>{errors.fullName.message}</span>}</div>
                    </div>

                    <div className='py-2'>
                        <p>Email</p>
                        <input type="email" placeholder='ex: Johndoe@example.com' className={`w-full text-xl h-10 placeholder-gray-500 rounded-lg ${errors.emailAdd && "focus:border-red-500 focus:ring-red-500 border-red-500"}`} 
                        {...register("emailAdd", { required: {value: true, message: 'This field is required'}, pattern: {value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message: "Invalid Email Address"} })}/>
                        <div>{errors.emailAdd && <span className='text-red-500'>{errors.emailAdd.message}</span>}</div>
                    </div>

                    <div className='py-2'>
                        <p>Message</p>
                        <textarea placeholder='ex: message' className={`w-full text-xl h-28 placeholder-gray-500 rounded-lg ${errors.messageCont && "focus:border-red-500 focus:ring-red-500 border-red-500"}`} 
                        {...register("messageCont", { required: {value: true, message: 'This field is required'} })}/>
                        <div>{errors.messageCont && <span className='text-red-500'>{errors.messageCont.message}</span>}</div>
                    </div>

                    <div>
                        <input type="submit" value="Submit" 
                        className='w-full h-10 text-white border bg-[#5596c2] border-[#5596c2] hover:bg-transparent hover:text-[#5596c2]'/>
                    </div>
                </div>

        </form>
        
    </div>
  )
}

export default Contact