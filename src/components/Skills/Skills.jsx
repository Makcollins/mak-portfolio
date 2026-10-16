import { useState } from "react";
// import skills from "../../data/skills.json";
import { Code2, Hash } from "lucide-react";
import { SiAngular, SiDotnet, SiLlvm, SiMongodb, SiMysql, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandCSharp, TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaNodeJs, FaWordpress } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Frontend', 'Backend'];

    const skills = [
        {
            icon: <SiDotnet className="w-6 h-6 text-cyan-500" />,
            title: "C# / .NET",
            category: "Backend",
            level: "Advanced",
            imageSrc: "https://i.ibb.co/V0M7b4g3/Csharp-Logo.png"
        },
        {
            icon: <SiTypescript className="w-5 h-5 text-yellow-500" />,
            title: "TypeScript",
            category: "Frontend",
            level: "Intermediate",
            imageSrc: "https://i.ibb.co/5WdHGzpy/ts-logo-round-512.png"
        },
        {
            icon: <IoLogoJavascript className="w-5 h-5 text-cyan-500" />,
            title: "JavaScript",
            category: "Frontend",
            level: "Intermediate",
            imageSrc: "https://i.ibb.co/b5rWpv91/js-5968509.png"
        },
        {
            icon: <SiAngular className="w-5 h-5 text-rose-700" />,
            title: "Angular",
            category: "Frontend",
            level: "Intermediate",
            imageSrc: "https://i.ibb.co/Fqw6RqGF/angular-gradient.png"
        },

        {
            icon: <SiReact className="w-5 h-5 text-cyan-500" />,
            title: "React",
            category: "Frontend",
            level: "Intermediate",
            imageSrc: "https://i.ibb.co/8j6y6Zk/react.png"
        },
        {
            icon: <FaNodeJs className="w-5 h-5 text-cyan-500" />,
            title: "Node.js",
            category: "Backend",
            level: "Intermediate",
            imageSrc: "https://i.ibb.co/TW8R8zr/node.png"
        },
        {
            icon: <BiLogoPostgresql className="w-5 h-5 text-cyan-500" />,
            title: "PostgreSQL",
            category: "Backend",
            level: "Intermediate",
            imageSrc: "https://i.ibb.co/5tp74W5/Logo-Postgre-SQL.png"
        },
        {
            icon: <SiMysql className="w-5 h-5 text-cyan-500" />,
            title: "MySQL",
            category: "Backend",
            level: "Intermediate",
            imageSrc: "https://i.ibb.co/CpZkXKpr/logo-mysql-170x115.png"
        },
        {
            icon: <SiMongodb className="w-5 h-5 text-green-500" />,
            title: "MongoDB",
            category: "Backend",
            level: "Intermediate",
            imageSrc: "https://i.ibb.co/7RRQZWt/mongodb.png"
        },
        {
            icon: <FaHtml5 className="w-5 h-5 text-cyan-500" />,
            title: "HTML",
            category: "Frontend",
            level: "Intermediate",
            imageSrc: "https://i.ibb.co/L1DDf5T/html.png"
        },
        {
            icon: <SiTailwindcss className="w-5 h-5 text-cyan-500" />,
            title: "Tailwind CSS",
            category: "Frontend",
            level: "Intermediate",
            imageSrc: "https://i.ibb.co/5TRBStL/css.png"
        },
        {
            icon: <FaWordpress className="w-5 h-5 text-cyan-500" />,
            title: "WordPress",
            category: "Frontend",
            level: "Intermediate",
            imageSrc: "https://i.ibb.co/B5thfyqx/wordpress-2190440.png"
        }
    ]

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
                        filteredSkills.map((skill, id) => {
                            return (
                                <div key={id}
                                    className="p-4 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 flex items-center gap-2">
                                    {/* <img className="w-6 h-6" src={skill.imageSrc} alt={`${skill.title} logo`} /> */}
                                    <span>{skill.icon}</span>
                                    <p className="text-slate-500 dark:text-slate-400">{skill.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills