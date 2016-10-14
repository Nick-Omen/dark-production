import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PortfolioItem from '../PortfolioItem'
import classnames from 'classnames'
import './PortfolioList.scss'

class SliderButton extends Component {
    render() {
        const {changeSlide, text, className, action} = this.props
        return (
            <span className={classnames('slider-controls__button', className)} onClick={changeSlide} data-action={action}>{text}</span>
        )
    }
}

class SliderDot extends Component {
    render() {
        const {changeSlide, className, action, id} = this.props
        return (
            <span className={className} onClick={changeSlide} data-action={action} data-action-val={id}/>
        )
    }
}

class PortfolioListControls extends Component {

    render() {
        const {currentWork, changeSlide, total} = this.props

        return (
            <div className="slider-controls">
                <SliderButton text="Next" action="next" changeSlide={changeSlide} className="next"/>
                <SliderButton text="Previous" action="prev" changeSlide={changeSlide} className="prev"/>
                <div className="slider-controls__dots">
                    {[...Array(total).keys()].map((n, iter) => (
                        <SliderDot changeSlide={changeSlide} action="slideTo" id={iter}
                                   className={classnames({
                                       'slider-controls__dot': true,
                                       'active': iter === currentWork
                                   })} key={iter}/>
                    ))}
                </div>
            </div>
        )
    }
}

export class PortfolioList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            works: props.works,
            work: props.works[0] || {},
            currentWork: 0,
            total: props.works.length,
            workIds: this.props.works.reduce((a, v) => ([...a, v.id]), this.props.works[0].id)
        }
        this.changeSlide = this.changeSlide.bind(this)
    }

    static propTypes = {
        works: React.PropTypes.array.isRequired
    }

    changeSlide(e) {
        const action = ReactDOM.findDOMNode(e.target).getAttribute('data-action')
        const {works, currentWork, total} = this.state
        let workId = currentWork

        switch (action) {
            case 'prev':
                workId = works[workId - 1] ? workId-1 : total-1
                break;

            case 'next':
                workId = works[workId + 1] ? workId+1 : 0
                break;

            case 'slideTo':
                workId = ReactDOM.findDOMNode(e.target).getAttribute('data-action-val')
                    ? parseInt(ReactDOM.findDOMNode(e.target).getAttribute('data-action-val'), 10)
                    : currentWork
                break;

            default:
                break;
        }

        this.setState({
            work: works[workId],
            currentWork: workId
        })
    }

    render() {
        const {className} = this.props
        const {work, total, currentWork} = this.state

        return (
            <div className={classnames('portfolio-container', className)}>
                <PortfolioItem work={work}/>
                <PortfolioListControls ref="controls" changeSlide={this.changeSlide} currentWork={currentWork} total={total}/>
            </div>

        )
    }
}

export default PortfolioList
