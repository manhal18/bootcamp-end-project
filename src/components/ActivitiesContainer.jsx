import React from 'react'
import ActivityCard from './ActivityCard'

const ActivitiesContainer = (props) => {
  return (
    <main className="cards-container d-flex justify-content-center align-items-center ">
    {
      props.activities.map(item => (
          <ActivityCard key={item.id} id={item.id} title={item.title} images={item.images}
           date={item.date} price={item.price} city={item.city}/>
        )
      )
    }
    </main>
  )
}

export default ActivitiesContainer