import React from 'react'
import { activities } from '../data/activities'
import ActivityCard from './ActivityCard'

const PopularActivities = () => {
  let filtredActivities = activities.filter(a => (a.popular))
  return (
    <div className='cards-container d-flex justify-content-center align-items-center'>
    {
      filtredActivities.map(item => (
          <ActivityCard key={item.id} id={item.id} title={item.title} images={item.images}
           date={item.date} price={item.price} city={item.city}/>
        )
      )
    }
    </div>
  )
}

export default PopularActivities