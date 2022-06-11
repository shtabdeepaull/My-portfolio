import React from 'react';
import html from '../images/html.png';
import css from '../images/Css.png';
import javascript from '../images/js.png';
import node from '../images/Node.png';
import netlify from '../images/Netlify.png';
import react from '../images/React.png';
import git from '../images/Git.png';

const Skills = () => {
    return (
        <div>
            <h2 className=' text-center text-white text-5xl font-bold mb-0'>My Skills</h2>

            <div className='container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-20 '>
                <img className='px-10 m-2 pt-10 w-56 shadow-lg shadow-white ' src={html} alt="pic" />
             <img className='px-10 m-2 pt-10 w-56 shadow-lg shadow-white' src={css} alt="pic" />
                <img className='px-10 m-2 pt-10 w-56 shadow-lg shadow-white' src={react} alt="pic" />
                <img className='px-10 m-2 pt-10 w-56 shadow-lg shadow-white' src={node} alt="pic" />
                <img className='px-10 m-2 pt-10 w-56 shadow-lg shadow-white' src={netlify} alt="pic" />
                <img className='px-10 m-2 pt-10 w-56 shadow-lg shadow-white' src={git} alt="pic" />
                <img className='px-10 m-2 pt-10 w-56 shadow-lg shadow-white' src={javascript} alt="pic" />
            </div>

            {/* <div className=' flex justify-center  sm:flex-row mb-8'>
                <figure className=" px-10 pt-10">
                    <img src={html} alt="Shoes" class="rounded-xl" />
                </figure>

                <figure class="px-10 pt-10">
                    <img src={css} alt="Shoes" class="rounded-xl" />
                </figure>

                <figure class="px-10 pt-10">
                    <img src={javascript} alt="Shoes" class="rounded-xl" />
                </figure>

                <figure class="px-10 pt-10">
                    <img src={node} alt="Shoes" class="rounded-xl" />
                </figure>

                <figure class="px-10 pt-10">
                    <img src={netlify} alt="Shoes" class="rounded-xl" />
                </figure>

                <figure class="px-10 pt-10">
                    <img src={react} alt="Shoes" class="rounded-xl" />
                </figure>

                <figure class="px-10 pt-10">
                    <img src={git} alt="Shoes" class="rounded-xl" />
                </figure>
            </div> */}

        </div>

    );
};

export default Skills;