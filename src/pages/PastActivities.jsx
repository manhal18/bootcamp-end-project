import React, { useRef, useState } from 'react'
import { Col, Row } from "react-bootstrap";
import { pastActivities } from "../data/pastActivities"
import ActivitiesContainer from '../components/ActivitiesContainer';
import SideFilter from '../components/SideFilter';
import moment from 'moment/moment';

const PastActivities = () => {
    const [filteredActivities, setFilteredActivities] = useState(pastActivities);
    const filterColumn = useRef(null)
    const [activitiesClass, setActivitiesClass] = useState("")

    const openFilter = () => {
        filterColumn.current.className = "filter-column"
        setActivitiesClass("filter")
    }
    const closeFilter = () => {
        filterColumn.current.className = "d-none d-lg-block col-lg-3"
        setActivitiesClass("")
    }

    const handleFilter = (category = 0, price = null, date = null) => {
        const filtered = []
        setFilteredActivities(pastActivities)
        if (category !== 0) {
            filteredActivities.forEach(activity => {
                if (activity.category.id == category)
                    filtered.push(activity)
            });
            setFilteredActivities(filtered)
        }
        if (price !== null) {
            filtered.splice(0, filtered.length)
            filteredActivities.forEach(activity => {
                if (activity.price >= price.min && activity.price <= price.max)
                    filtered.push(activity)
            });
            setFilteredActivities(filtered)
        }
        if (date.max !== null) {
            filtered.splice(0, filtered.length)
            filteredActivities.forEach(activity => {
                if (moment(activity.date).isSameOrAfter(date.min) && moment(activity.date).isSameOrBefore(date.max))
                    filtered.push(activity)
            });
            setFilteredActivities(filtered)
        }else{
            filtered.splice(0, filtered.length)
            filteredActivities.forEach(activity => {
                if (moment(activity.date).isSameOrAfter(date.min))
                    filtered.push(activity)
            });
            setFilteredActivities(filtered)
        }
    };

    return (
        <>
            <button onClick={openFilter} id='open-filter' className='btn ms-4 d-xs-block d-lg-none'>Filtre</button>
            <Row>
                <Col ref={filterColumn} className='d-none d-lg-block' lg="3">
                    <SideFilter closeFilter={closeFilter} display={activitiesClass} handleFilter={handleFilter} />
                </Col>
                <Col lg="9">
                    <ActivitiesContainer activities={filteredActivities} />
                </Col>
            </Row>
        </>
    )
}

export default PastActivities