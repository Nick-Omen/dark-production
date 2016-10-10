import React, {Component} from 'react'
import classnames from 'classnames'
import {Link} from 'react-router'
import NoImage from './NoImage.svg'
import './Member.scss'

export class Member extends Component {
    render() {
        const {member, className} = this.props
        return (
            <article className={classnames('member', className)}>
                <div className="member__photo-container">
                    <img className={classnames({"member__photo": true, "has-photo": !!member.profileImage})} src={member.profileImage || NoImage} />
                    {member.nickName && <span className="member__nick-name">{member.nickName}</span>}
                </div>
                {member.name && <h3 className="member__name">{member.name}</h3>}
                {member.email && <a className="member__email" href={'mailto:' + member.email}>{member.email}</a>}
                <hr className="member__hr"/>
                {member.location && <span className="member__location">
                    {member.location.country && <span className="member__location-item">{member.location.country}</span>}
                    {member.location.city && <span className="member__location-item">{member.location.city}</span>}
                </span>}
                <div className="member__links">
                    {member.personalUrl && <a target="_blank" className="member__link" href={member.personalUrl}>{'Site'}</a>}
                    {member.personalUrl && ' | '}
                    <Link className="member__link member__site-link" to={'works/' + member.slug} >{'Works'}</Link>
                </div>
            </article>
        )
    }
}

export default Member
