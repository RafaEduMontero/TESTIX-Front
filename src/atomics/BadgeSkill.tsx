import React from "react";
import { Skill } from "../interfaces/collaborator.interface";

const BadgeSkill = ({skills}:{skills:Skill[]}) => {
    return(
        skills.map(skill => (
            <span key={skill.id} className={`badge rounded-pill ${skill.state ? 'text-bg-success' :  'text-bg-primary'} mr-2`}>{skill.title}</span>
        ))
    )
}

export default BadgeSkill;