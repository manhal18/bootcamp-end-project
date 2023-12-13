import React, { useEffect, useRef, useState } from 'react'
import ActivitiesContainer from '../components/ActivitiesContainer';
import SideFilter from '../components/sideFilter/SideFilter';
import SpinnerComponent from '../components/Spinner';
import { COMING, baseURL } from '../Api/Api';
import { Col, Row } from "react-bootstrap";
import axios from 'axios';

const ComingActivities = () => {
    const [activities, setActivities] = useState([]);
    const [activitiesClass, setActivitiesClass] = useState("")
    const [loading, setLoading] = useState(true)
    const filterColumn = useRef(null)

    useEffect(()=>{
    axios.get(baseURL+COMING)
    .then(res => handleActivities(res.data))
    .catch(err => console.log(err))
  }, [])

    const openFilter = () => {
        filterColumn.current.className = "filter-column"
        setActivitiesClass("filter")
    }
    const closeFilter = () => {
        filterColumn.current.className = "d-none d-lg-block col-lg-3"
        setActivitiesClass("")
    }

    const handleActivities = (activities) => {
        setActivities(activities)
        setLoading(false)
    }

    return (loading)?  <SpinnerComponent /> :(
        <div className='mt-100px p-5'>
            <button onClick={openFilter} id='open-filter' className='btn d-xs-block d-lg-none'>Filtre</button>
            <Row>
                <Col ref={filterColumn} className='d-none d-lg-block' lg="3">
                    <SideFilter closeFilter={closeFilter} display={activitiesClass} handleFilter={handleActivities} />
                </Col>  
                <Col lg="9">
                    <ActivitiesContainer activities={activities} />
                </Col>
            </Row>
        </div>
    )
}

export default ComingActivities