import React from 'react'
import '../Card/Card.scss'
const Card = ({item}) => {
  return (
    <div className="card">
        <div className="card__img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s" alt="" /></div>
        <div className="card__title">{item.title}</div>
        <div className="card__desc">{item.desc}</div>
    </div>
  )
}

export default Card