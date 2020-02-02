import React from 'react'
import './cardList-style.css'
import {Card} from '../card/card'

export const CardList = props => (
    <div className="cardlist">
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
        ))}
    </div>
)