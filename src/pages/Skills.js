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
            <h2 className=' text-center text-white text-xl font-bold'>My Skills</h2>

            <div className=' flex justify-center mb-8'>
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
            </div>

        </div>

    );
};

export default Skills;