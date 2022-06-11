import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../images/banner.png'


const Banner = () => {
    return (
        <div className=''>
            <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row">
                <div class="avatar">
                    <div class="w-50 mask mask-squircle">
                        <img src={banner} />
                    </div>
                </div>
                <div>
                    <h1 class="text-5xl font-bold">Hi! I am Shtabdee</h1>
                    <p class="py-6 text-white">A passionate Full Stack Web Developer having an experience of building web applications with Javascript/Reactjs/Nodejs and some other cool libraries and frameworks.</p>
                     <a href="https://drive.google.com/file/d/1ciGBtS9YX5rFx3b7aDJoAUL0vxWvMMcQ/view?usp=sharing"><button className='btn w-24 text-white'>Resume</button></a> 
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;