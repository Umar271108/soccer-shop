import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

const Hero = createContext()

export const useHero = () => {
    return useContext(Hero)
}

const HeroContext = ({children}) => {
    const [data, setData] = useState([])

    const url = `http://localhost:5174/hero`

    useEffect(() => {
        axios.get(url).then((res) => {
            setData(res.data)
        })
    })

    return (
        <Hero.Provider value={{
            data: data
        }}>
            {children}
        </Hero.Provider>
    )
}

export default HeroContext