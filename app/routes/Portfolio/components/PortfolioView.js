import React from 'react'
import './PortfolioView.scss'
import PortfolioList from '../../../components/PortfolioList'
import apiObjects from '../../../api'

export const PortfolioView = () => (
    <div>
        <h1 className="page-title">{'Portfolio'}</h1>

        <PortfolioList works={apiObjects.works} />
    </div>
)

export default PortfolioView
