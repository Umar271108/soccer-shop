import React from 'react'
import './Hero.scss'
import { useHero } from '../../context/HeroContext'

const Hero = () => {
    const hero = useHero()
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-inner">
                        {hero.data.length > 0 && hero.data.map((elem) => {
                            return(
                                <>
                                    <h2 className="hero-title">{elem.title}</h2>
                                    <p className="hero-text">{elem.text}</p>
                                    <button className="hero-btn">{elem.btn}</button>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero