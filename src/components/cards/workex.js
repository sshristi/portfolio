import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './styling.css'
import TrailsExample from './slide'

export default function Workex() {
    const [flipped, set] = useState()
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 300, friction: 50 }
    })
    return (
        <div onClick={() => set(state => !state)}>
            <div className="card" >
                <a.div class="flip back opacity-6 shadow" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                    <h1>WORK EXPERIENCE</h1>
                </a.div>
                <a.div class="flip front " style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                    <div className='table'>
                        <tr>
                            <td>Infosys ltd.</td>
                            <td>Systems Engineer</td>
                            <td>03/2020 - Present</td>
                            <td>Bangalore, Karnataka</td>
                        </tr>
                        <tr>
                            <td>Infosys Training Center</td>
                            <td>System Engineer Trainee</td>
                            <td>10/2019 - 02/2020</td>
                            <td>Mysore, Karnataka</td>
                        </tr>
                        <tr>
                            <td>Prema Software Solutions pvt. ltd. Freelancer and provides training for computer Science.</td>
                            <td>Trainee</td>
                            <td>10/2019 - 02/2020</td>
                            <td>Bhopal, Madhya Pradesh</td>
                        </tr>

                    </div>
                    {/* <TrailsExample/> */}
                </a.div>
            </div>
        </div>
    );
}