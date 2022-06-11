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
            <h2 className=' text-center text-white text-5xl font-bold'>My Skills</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-8'>
                <img className='px-10 pt-10 rounded xl' src={html} alt="pic" />
                <img className='px-10 pt-10' src={css} alt="pic" />
                <img className='px-10 pt-10' src={react} alt="pic" />
                <img className='px-10 pt-10' src={node} alt="pic" />
                <img className='px-10 pt-10' src={javascript} alt="pic" />
                <img className='px-10 pt-10' src={netlify} alt="pic" />
                <img className='px-10 pt-10' src={git} alt="pic" />
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