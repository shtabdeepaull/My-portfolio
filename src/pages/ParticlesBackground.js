import Particles from "react-tsparticles";

const ParticlesBackground = () => {
    return <div className="App">
        <Particles
        options={{
            background:{
                color:"#00"
            },
            fpsLimit: 60,
            interactivity:{
                detectsOn: "canvas",
                events: {
                    resize: true
                },  
            },
            particles: {
                color: {
                    value: "9fafca"
                },
                number: {
                    density: {
                        enable: true,
                        area: 1080
                    },
                    limit: 0,
                    value: 400,
                },
                opacity: {
                    animation: {
                        enable: true,
                        minimumValue: 0.05,
                        speed: 1,
                        sync:false
                    },
                    random: {
                        enable: true,
                        minimumValue: 0.05,
                    },
                    value: 1,
                },
                shape: {
                    type: "circle"
                },
                size: {
                    random: {
                        enable: true,
                        minimumValue: 0.05,
                    },
                    value: 1,
                }
            }
        }}/>
    </div>
}

export default ParticlesBackground;

{/* <h2 className=' text-center text-white text-xl font-bold'>My Skills</h2>

<div className=' flex justify-center sm-flex-row mb-8'>
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