import React from 'react'
import {IndexLink} from 'react-router'
import classnames from 'classnames'
import './Logo.scss'

export const Logo = (props) => (
    <IndexLink to="/" className={classnames('logo', props.className)}>Dark Production</IndexLink>
)

export default Logo
