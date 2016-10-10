import React from 'react'
import Member from '../Member'
import './TeamList.scss'

export const TeamList = ({members}) => (
    <div className="team-list">
        {members.map(m => (
            <li className="team-list__item" key={m.id}>
                <Member member={m} />
            </li>
        ))}
    </div>
)

export default TeamList
