import React from 'react';

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className="max-w-7xl mx-auto px-10 my-5 flex flex-col items-center" id='experience'>
      <h2 className={styles.title}> Experience</h2>
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
        <ul className="flex flex-col gap-4">
          {
            history.map((historyItem, id) => {
              return(
                <li key={id} className="">
                  <div className="">
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
    </section>
  )
}

export default Experience;
