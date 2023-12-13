import React from 'react'
import ActivityCard from './activityCard/ActivityCard'

const ActivitiesContainer = (props) => {
  const componentStyle = {
    flexWrap: "wrap",
    gap: "14px"
  }
  return (
    <main style={componentStyle} className="d-flex justify-content-center align-items-center ">
    {
      props.activities.map(item => (
          <ActivityCard key={item.id} id={item.id} title={item.title} images={item.images}
           date={item.date} priceVip={item.price_vip} priceNormal={item.price_normal} city={item.city}/>
        )
      )
    }
    </main>
  )
}

export default ActivitiesContainer