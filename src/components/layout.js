import React from 'react'
import {Link} from 'gatsby'
import '../css/index.css'

const Napvar = ({children}) =>{
    return(
        // <head>
        //     <title>Let's go Brandom</title>
        // </head>
        <>
           
            
            <nav class="test">
                <h1>Let's Go Brandon</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                
                
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}

export default Napvar;