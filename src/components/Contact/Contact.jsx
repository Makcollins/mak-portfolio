import React, { useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaRegCopyright, FaGithubAlt } from 'react-icons/fa';
import { CheckCircle2, Send } from 'lucide-react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const form = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6un33q1', 'template_rxzqz84',
            form.current, { publicKey: 'qUJ5q4jo7gW60rsJa' }
        )
            .then(() => {
                setSubmitted(true);
            }),
            (error) => {
                setSubmitted(false);
                console.log(error);
            }
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
                    <form ref={form} onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        <input
                                type="text"
                                name="title"
                                required
                                placeholder="Subject"
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        <textarea
                            name="message"
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
                    <a href="https://www.linkedin.com/in/collinsmakui" className=""><FaLinkedin /></a>
                    <a href="https://github.com/devcollinsmakui" className=""><FaGithub /></a>
                    <a href="https://github.com/Makcollins" className=""><FaGithubAlt /></a>
                </div>
            </div>
        </section>
    )
}

export default Contact
