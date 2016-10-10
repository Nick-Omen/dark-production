import React, {Component} from 'react'
import {Link} from 'react-router'

export class PortfolioItem extends Component {
    render() {
        const {portfolioItem} = this.props
        return (
            <article className="portfolio-item">
                <img className="portfolio-item__image" src={portfolioItem.imageUrl} alt=""/>
                <br/>
                <span className="portfolio-item__name">{portfolioItem.name}</span>
                <Link className="portfolio-item__link" to="/" >View more</Link>
            </article>
        )
    }
}

export default PortfolioItem
