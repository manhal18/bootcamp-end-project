import React from 'react'
import Slider from '../components/Slider'
import ActivitiesContainer from '../components/ActivitiesContainer'
import { popularActivities } from '../data/popularActivities'

const Home = () => {
  return (
    <>
        <Slider popularActivities={popularActivities} />
        <ActivitiesContainer activities={popularActivities} />
    </>
  )
}

export default Home