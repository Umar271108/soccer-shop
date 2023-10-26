import React from 'react'
import HeroContext from './HeroContext'
import { createContext } from 'react'

const Contex = createContext()

const Context = ({children}) => {
    return (
        <Contex.Provider>
            <HeroContext>
                    {children}
            </HeroContext>
        </Contex.Provider>
    )
}

export default Context