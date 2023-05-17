import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import '../CardList/CardList.scss'
const CardList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/products").then(res => {
            setData(res.data)
        })
    }, [])
  return (

    <div className="cardlist">
        {
            data.map((item, index) => {
                return <Card item={item} key={index} />
            })
        }
    </div>

  )
}

export default CardList