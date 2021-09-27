import React from 'react'
import '../css/Home.css';
import Body from './Body'
import background from '../assets/images/bg.jpg'

export default function Home() {
    return (
        <div className="txt-lt">
            <img className="w-100 position-absolute h-100 background-img" src={background} alt="" />
            <Body></Body>
        </div>
    )
}
