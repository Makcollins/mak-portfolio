import skills from "../../data/skills.json";

const Skills = () => {
  return (
    <section className="bg-sky-50/50">
        <div className="md:max-w-7xl mx-auto flex flex-col py-5">
            <h2 className="text-sky-700 text-sm text-bold">02. TECH STACK</h2>
            <div className="w-full flex justify-between">
                <h3 className="text-2xl font-bold">Technologies and Tools</h3>
                <div className="flex gap-2">
                    <button className="bg-blue-300/50 hover:bg-blue-400/50 active:bg-sky-700
                     active:text-white rounded-2xl text-center px-4 py-1 text-sm">All</button>
                     <button className="bg-blue-300/50 hover:bg-blue-400/50 active:bg-sky-700
                     active:text-white rounded-2xl text-center px-4 py-1 text-sm">Frontend</button>
                     <button className="bg-blue-300/50 hover:bg-blue-400/50 active:bg-sky-700
                     active:text-white rounded-2xl text-center px-4 py-1 text-sm">Backend & DB</button>
                     <button className="bg-blue-300/50 hover:bg-blue-400/50 active:bg-sky-700
                     active:text-white rounded-2xl text-center px-4 py-1 text-sm">Tools</button>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-10">
                {
                skills.map((skill,id) => {
                    return(
                    <div key={id} className="p-2 flex gap-2 border rounded-xl bg-white border-gray-300">
                    <img className="w-6 h-6" src={skill.imageSrc} alt={`${skill.title} logo`} />
                    <p>{skill.title}</p>
                </div>
                    )
                })
}
                
                {/* <div className="p-2 flex gap-2 border rounded-xl bg-white border-gray-300">
                    <span>@</span>
                    <p>React.js</p>
                </div>
                <div className="p-2 flex gap-2 border rounded-xl bg-white border-gray-300">
                    <span>@</span>
                    <p>React.js</p>
                </div>
                <div className="p-2 flex gap-2 border rounded-xl bg-white border-gray-300">
                    <span>@</span>
                    <p>React.js</p>
                </div>
                <div className="p-2 flex gap-2 border rounded-xl bg-white border-gray-300">
                    <span>@</span>
                    <p>React.js</p>
                </div>
                <div className="p-2 flex gap-2 border rounded-xl bg-white border-gray-300">
                    <span>@</span>
                    <p>React.js</p>
                </div>
                <div className="p-2 flex gap-2 border rounded-xl bg-white border-gray-300">
                    <span>@</span>
                    <p>React.js</p>
                </div>
                <div className="p-2 flex gap-2 border rounded-xl bg-white border-gray-300">
                    <span>@</span>
                    <p>React.js</p>
                </div>
                <div className="p-2 flex gap-2 border rounded-xl bg-white border-gray-300">
                    <span>@</span>
                    <p>React.js</p>
                </div>
                <div className="p-2 flex gap-2 border rounded-xl bg-white border-gray-300">
                    <span>@</span>
                    <p>React.js</p>
                </div>
                <div className="p-2 flex gap-2 border rounded-xl bg-white border-gray-300">
                    <span>@</span>
                    <p>React.js</p>
                </div>
                <div className="p-2 flex gap-2 border rounded-xl bg-white border-gray-300">
                    <span>@</span>
                    <p>React.js</p>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Skills