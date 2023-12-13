import { useEffect, useState } from 'react'
import ActivitiesContainer from '../components/ActivitiesContainer'
import SpinnerComponent from '../components/Spinner'
import { POPULAR, baseURL } from '../Api/Api'
import Slider from '../components/Slider'
import axios from 'axios'

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    axios.get(baseURL+POPULAR)
    .then(res => {setActivities(res.data); setLoading(false)})
    .catch(err => console.log(err))
  }, [])

  return  (loading)? <SpinnerComponent />:(
    <div className='mt-100px'>
        <Slider popularActivities={activities} />
        <ActivitiesContainer activities={activities} />
    </div>
  )
}

export default Home