// import React from 'react'
import data from './data'
import SingleQuestion from './Question'
import React, { useState } from 'react'
import "./style.css"



const Faq = () => {
    const [questions, ] = useState(data)

    return ( 
        <main>
        
        <div className = 'container' >
        
        <h3> frequently asked questions </h3> 
        <section className = 'info' > {
            questions.map((question) => ( <
                SingleQuestion key = { question.id } {...question }
                />
            ))
        } 
        </section> 
        </div> 
        </main>
    )
}
export default Faq