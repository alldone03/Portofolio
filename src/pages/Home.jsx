import { Helmet } from "react-helmet-async";
import myPhoto from "../assets/myPhoto.jpg";
import LogoInstagram from "../assets/Instagram.png";
import LogoGithub from "../assets/Github.png";
import LogoLinkendin from "../assets/Linkedin.png";


export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="container mx-auto text-center mt-10 flex flex-col items-center justify-center h-screen gap-3
            ">

                <h1 className="text-4xl ">Hi everyone, my name is</h1>
                <h1 className="text-5xl font-bold text-info">Aldan <br /> Prayogi</h1>
                <h1 className="text-4xl ">I&#39;m a <h1 className="font-bold text-info">Automation Engineer</h1></h1>
                <p className="text-2xl text-success">I specialize in creating software that automates tasks and processes to make businesses more efficient.</p>
                <div className="flex justify-center gap-3">
                    <div className="bg-accent w-96 h-96 rounded-xl flex items-center justify-center">
                        <div className="w-80 bg-white h-80  flex items-center justify-center">

                            <img src={myPhoto} alt="" className="w-52" />
                        </div>
                    </div>
                </div>
                {/* <button className="btn btn-secondary">Next</button> */}
            </div>
            <div className="h-screen bg-primary p-10">

                {/* <h1 className="font-bold text-3xl text-center">My Contact</h1> */}



                <div className="p-3 font-bold text-5xl" >
                    Looking Forward to working everywone
                </div>
                <div className="mt-5">

                    <div className="font-bold text-center text-xl mt-10">
                        My socials
                    </div>
                    <div className="flex justify-center gap-3 mt-5">
                        <button className="btn  bg-accent-content w-24 h-24"><img src={LogoInstagram} alt="Instagram" className="" /></button>

                        <button className="btn bg-accent-content w-24 h-24"><img src={LogoLinkendin} alt="Instagram" className="" /></button>
                        <button className="btn bg-accent-content w-24 h-24"><img src={LogoGithub} alt="Instagram" className=" invert" /></button>
                    </div>
                </div>




            </div>


        </div >
    )
}