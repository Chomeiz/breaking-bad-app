import React from 'react'

const Frase = ({ frase }) => {
    return (
        <p>
            {frase.text} <br />
            <span>- {frase.autor}</span>
        </p>
    )
}

export default Frase
