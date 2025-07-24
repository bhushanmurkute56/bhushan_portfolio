import projectImg from "./../assets/projects.jpg";
import {Link} from "react-router";

function Projects() {
  return (

    <div className='text-center text-3xl pt-1 pb-15'>
        <h1>My Projects!</h1>
        <div className="flex justify-center mt-10 flex-col md:flex-row pl-15 md:pl-0">
            <div className="h-[400px] w-[400px] border-1 mr-5 rounded-2xl bg-[#f2f2f2] shadow-lg border-pink-400
            mb-10 md:mb-0">
                <img src={projectImg} alt="ProjectImg" className="h-[200px] w-[250px] border-1 rounded-2xl mx-auto m-5 border-black"/>
                <div className="text-sm">
                    <h1 className="text-2xl">To Do App</h1>
                    <Link to="https://github.com/bhushanmurkute56/to-do-app.git"><button className="h-9 w-20 border-1 rounded-xl m-3 cursor-pointer bg-[#e6e6e6] hover:bg-[#ffccff]">Code</button></Link>
                    <Link to="https://zingy-youtiao-d6adec.netlify.app/"><button className="h-9 w-20 border-1 rounded-xl cursor-pointer bg-[#e6e6e6] hover:bg-[#ffccff]">Demo</button></Link>
                </div>
            </div>

            <div className="h-[400px] w-[400px] border-1 rounded-2xl bg-[#f2f2f2] shadow-lg border-pink-400 mb-15 md:mb-0">
                <img src={projectImg} alt="ProjectImg" className="h-[200px] w-[250px] border-1 border-black rounded-2xl mx-auto m-5"/>
                <div className="text-sm">
                    <h1 className="text-2xl">Emoji App</h1>
                    <Link to="https://github.com/bhushanmurkute56/emoji_app.git"><button className="h-9 w-20 border-1 rounded-xl m-3 cursor-pointer hover:bg-[#ffccff] bg-[#e6e6e6]">Code</button></Link>
                    <Link to="https://emojiappmain.netlify.app/"><button className="h-9 w-20 border-1 rounded-xl cursor-pointer hover:bg-[#ffccff] bg-[#e6e6e6]">Demo</button></Link>
                </div>
            </div>

            <div className="h-[400px] w-[400px] border-1 rounded-2xl bg-[#f2f2f2] shadow-lg border-pink-400 ml-0 md:ml-5">
                <img src={projectImg} alt="ProjectImg" className="h-[200px] w-[250px] border-1 border-black rounded-2xl mx-auto m-5"/>
                <div className="text-sm">
                    <h1 className="text-2xl">Pomodoro Timer</h1>
                    <Link to="https://github.com/bhushanmurkute56/pomodoro-technique.git"><button className="h-9 w-20 border-1 rounded-xl m-3 cursor-pointer hover:bg-[#ffccff] bg-[#e6e6e6]">Code</button></Link>
                    <Link to="https://pomo-aim1.netlify.app/"><button className="h-9 w-20 border-1 rounded-xl cursor-pointer hover:bg-[#ffccff] bg-[#e6e6e6]">Demo</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects;