import React from 'react'
import Napvar from '../components/layout'

const About = ({location}) => {
    return(
        <Napvar>
            <h1>About Page <span>{location.pathname}</span></h1>
            <h2>About</h2>
        </Napvar>
    )

}

export default About;

