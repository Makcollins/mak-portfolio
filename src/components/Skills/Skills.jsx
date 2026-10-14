import { useState } from "react";
import skills from "../../data/skills.json";

const Skills = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Frontend', 'Backend', 'DevOps'];

    const filteredSkills = filter === 'All'
        ? skills
        : skills.filter(s => s.category === filter);
    return (
        <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800/60">
            <div className="md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-6">
                <h2 className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 
            uppercase tracking-widest">02. TECH STACK</h2>
                <div className="w-full flex flex-col md:flex-row  gap-2 justify-between">
                    <h3 className="text-2xl font-bold">Technologies and Tools</h3>
                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === cat
                                        ? 'bg-cyan-500 text-white dark:text-slate-950 font-semibold'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-10">
                    {
                        skills.map((skill, id) => {
                            return (
                                <div key={id}
                                    className="p-4 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 flex items-center gap-2">
                                    <img className="w-6 h-6" src={skill.imageSrc} alt={`${skill.title} logo`} />
                                    <p className="text-slate-500 dark:text-slate-400">{skill.title}</p>
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