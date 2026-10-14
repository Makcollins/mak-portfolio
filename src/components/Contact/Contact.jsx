import React, { useState } from 'react';
import { FaGithub, FaLinkedin,FaRegCopyright,FaGithubAlt  } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import styles from './Contact.module.css';
import { CheckCircle2, Send } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };
    return (
        <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800/60">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Get In Touch</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                    Have a project in mind or looking for a talented engineer? Feel free to reach out.
                </p>

                {submitted ? (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2 font-medium">
                        <CheckCircle2 className="w-5 h-5" /> Message sent successfully! I'll respond shortly.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                required
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                            <input
                                type="email"
                                required
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        <textarea
                            required
                            rows={4}
                            placeholder="Your Message"
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <button
                            type="submit"
                            className="w-full py-3.5 rounded-lg font-semibold text-white bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 transition-colors shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                        >
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                )}
                <div className="mt-20 flex items-center justify-center gap-6 text-2xl text-slate-600 dark:text-slate-400 ">
                    <a href="https://www.linkedin.com/in/collins-makui/" className=""><FaLinkedin /></a>
                    <a href="https://github.com/devcollinsmakui" className=""><FaGithub /></a>
                    <a href="https://github.com/Makcollins" className=""><FaGithubAlt /></a>
                </div>
            </div>
        </section>
        // <footer className="py-20 border-t border-slate-200 dark:border-slate-800/60" id='contact'>
        //     <div className={styles.contact}>
        //         <h2 className={styles.title}>Contact:</h2>
        //         <a href="mailto:makcollins16@gmail.com" className={styles.mail}>makcollins16@gmail.com</a>
        //     </div>
        //     <div>
        //         <div className={styles.contactIcons}>
        //             <a href="https://www.linkedin.com/in/collins-makui/" className={styles.contactIcon}><FaLinkedin /></a>
        //             <a href="https://github.com/devcollinsmakui" className={styles.contactIcon}><FaGithub /></a>
        //             <a href="https://github.com/Makcollins" className={styles.contactIcon}><FaGithubAlt /></a>
        //             {/*                     <a href="mailto:makcollins16@gmail.com" className={styles.contactIcon}><SiGmail /></a> */}
        //         </div>
        //     </div>
        //     <div className='flex gap-2'>COLLINS MAKUI <FaRegCopyright /> 2024</div>
        // </footer>
    )
}

export default Contact
