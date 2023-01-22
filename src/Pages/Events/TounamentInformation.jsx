import React from 'react'
import { useLocation } from 'react-router-dom'
import bg from '../Events/Images/valoPoster.jpg'
import style from './TournamentInformation.module.css'
// import styles from './TournamentInformation.module'

export default function TournamentInformation() {
    let location = useLocation()
    let event = location.state
    console.log(event)
    return (
        <>
            <div className={`${style.tournament}`}>
                <div className={`${style.imgWrapper}`}>
                    <img className={`${style.image}`} src={bg} alt="" />
                    <span className={`${style.caption}`}>
                        <button className={`${style.button}`}>REGISTER</button> </span>
                </div>
                <h1 className={`${style.tournamentHeading}`}>{event.name}</h1>
                <p className={`${style.tournamentText}`}>{event.description}
                </p>
                <div className={`${style.tournamentInfo}`}>
                    <div>
                        <span>MODE:</span>
                        <span> {event.mode}</span></div>
                    <div>
                        <span>VENUE:</span>
                        <span>{event.venue}</span></div>
                    <div>
                        <span>DATE:</span>
                        <span>{event.date}</span></div>
                    <div>
                        <span>TIMING:</span>
                        <span>{event.timing}</span></div>
                    <div>
                        <span>CATEGORY:</span>
                        <span>{event.category}</span></div>
                    <div>
                        <span>PLAYERS PER TEAM:</span>
                        <span>{event.playersperteam}</span></div>
                    <div>
                        <span>PRIZE POOL:</span>
                        <span>{event.prize}</span></div>
                </div>
                <div className={`${style.tournamentDetails}`}>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </>
    )
}