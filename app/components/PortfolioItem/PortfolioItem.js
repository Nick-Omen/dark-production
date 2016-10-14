import React, {Component} from 'react'
import {Link} from 'react-router'
import './PortfolioItem.scss'

export class PortfolioItem extends Component {
    static propTypes = {
        work: React.PropTypes.object.isRequired
    }

    render() {
        const {work} = this.props
        return (
            <article className="portfolio-item">
                <img className="portfolio-item__image" src={work.imageUrl || ''} alt=""/>
                <br/>
                <span className="portfolio-item__name">{work.id}</span>
                <Link className="portfolio-item__link" to="/" >View more</Link>
            </article>
        )
    }
}

export default PortfolioItem
