import React from 'react'
import { Trail, animated } from 'react-spring/renderprops'
import './styling.css'

export default class Slide2 extends React.Component {
    state = {
        toggle: true,
        items: ['item1', 'item2', 'item3']
    }
    toggle = () => this.setState(state => ({ toggle: !state.toggle }))
    render() {
        const { toggle, items } = this.state
        return (
            <div className="trail">
                <Trail
                    items={items}
                    keys={item => item.key}
                    from={{ transform: 'translate3d(0,-40px,0)' }}
                    to={{ transform: 'translate3d(0,0px,0)'}}
                    config ={{
                        // duration:500,
                        mass:5,
                        // velocity:300,
                        tension: 320
                        // delay: 100,

                    }}
                >
                    {item => props => <span style={props}>{items.text}</span>}
                </Trail>
                <Trail
                    // from={{ opacity: 1, marginTop:-1000}}
                    // enter={{ opacity: 1, marginTop: 0 }}
                    // leave={{ opacity: 0, marginTop: 10 }}
                    // config ={{
                    //         duration:1000,
                    //     velocity:300,
                    //     tension: 10
                    //     // delay: 100,

                    // }}
                    native
                    reverse={toggle}
                    initial={null}
                    items={items}
                    from={{ opacity: 0, x: -100 }}
                    to={{ opacity: toggle ? 1 : 0.25, x: toggle ? 0 : 100 }}>
                    {item => ({ x, opacity }) => (
                        <animated.div
                            className="box"
                            onClick={this.toggle}
                            style={{
                                opacity,
                                transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                            }}
                        >
                            hello
                        </animated.div>
                    )}
                </Trail>
            </div>
        )
    }
}
