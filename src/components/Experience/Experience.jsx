import React from 'react';

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className="" id='experience'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 my-5 flex flex-col items-center">
        <div class="text-center mb-16">
          <h2 class="text-xs font-mono font-bold text-cyan-600 :text-cyan-400 uppercase tracking-widest mb-2">04. Career Journey</h2>
          <h3 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Experience & Background</h3>
        </div>
        <div className="md:w-5xl">
          {/* <div className={styles.skills}>
          {
            skills.map((skill,id)=>{
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={skill.imageSrc} alt="" />
                  </div>
                  <p>{skill.title}</p>
                </div>
              )
            })
          }
        </div> */}
          <ul className="flex flex-col gap-4 relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
            {
              history.map((historyItem, id) => {
                return (
                  <li key={id} className="relative pl-8 md:pl-10">
                    <div className="">
                      <div class={`absolute -left-2.25 top-1.5 w-4 h-4 rounded-full ${historyItem.endDate == 'Present' ? 'bg-cyan-500' : 'bg-slate-300 dark:bg-slate-700'} ring-4 ring-slate-50 dark:ring-darkbg`}></div>
                      <h3 className="font-bold">{`${historyItem.role},${historyItem.organisation}`}</h3>
                      <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                      <hr className="text-gray-200" />
                      <p>{`${historyItem.experiences}`}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience;
