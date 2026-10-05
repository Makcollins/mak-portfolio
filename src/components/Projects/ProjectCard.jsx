import React from 'react';
import styles from './ProjectCard.module.css';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

const ProjectCard = ({ project: { imageSrc, title, description, skills, demo, source } }) => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'xnlxwmb1'
        }
    });

    const snap = cld.image(imageSrc);

    return (
        <div className="border rounded-2xl border-gray-200 drop-shadow-2xl bg-white overflow-hidden">
            <a href={demo} className="h-60 w-full">
                <AdvancedImage cldImg={snap}
                    alt={`${title} image`}
                    className=" object-cover" />

            </a>
            <div className="p-4 flex flex-col gap-4">
                <h3 className="font-bold text-2xl">{title}</h3>

                <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente facere eum mollitia ipsum. Inventore!</p>
                <ul className="flex gap-2">
                    {
                        skills.map((skill, id) => {
                            return (
                                <li key={id} className="bg-gray-300/50 rounded-sm px-1 ">{skill}</li>
                            )
                        })
                    }
                </ul>
                <div className="flex justify-between border-t border-gray-300 pt-2">
                    <a href={demo} className="text-cyan-700 font-semibold">Live</a>
                    <a href={source} className="text-gray-500 font-semibold">Source</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
