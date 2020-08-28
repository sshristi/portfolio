import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './styling.css'
import TrailsExample from './slide'

export default function Education() {
    const [flipped, set] = useState()
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 300, friction: 50 }
    })
    return (
        <div onClick={() => set(state => !state)}>
            <div>
            <a.div class="flip back opacity-6 shadow" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                    <h1>EDUCATION</h1>
                </a.div>
                <a.div class="flip front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                <TrailsExample/>
                </a.div>
            </div>
        </div>
    );
}