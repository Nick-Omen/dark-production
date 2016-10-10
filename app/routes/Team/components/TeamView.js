import React from 'react'
import './TeamView.scss'
import TeamList from '../../../components/TeamList'
import apiObjects from '../../../api'

export const TeamView = () => (
    <div className="team">
        <h1 className="team__title page-title">{'Our team'}</h1>

        <TeamList members={apiObjects.members} />
    </div>
)

export default TeamView
