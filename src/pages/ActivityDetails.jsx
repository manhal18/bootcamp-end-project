import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Carousel, FormCheck } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'
import defaultImage from '../images/defaultActivityImage.png'
import SpinnerComponent from '../components/Spinner'
import { ACTIVITIES, baseURL } from '../Api/Api'
// import GoogleMapReact from 'google-map-react';
// import marker from '../images/geo-alt-fill.svg'

const ActivityDetails = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [activity, setActivity] = useState([])
    useEffect(() => {
        axios(baseURL+ACTIVITIES+id)
        .then(res => {
            setActivity(res.data)
            setLoading(false)
        }).catch(err => console.log(err))
    })
    
    function isInt(n) {
        return n % 1 === 0;
    }
    // const defaultProps = {
    //     center: {
    //         lat: activity.lat,
    //         lng: activity.lng
    //     },
    //     zoom: 13
    // };
    // const Marker = () => <div><img src={marker} alt="marker"/></div>;

    return (loading)?  <SpinnerComponent /> : (
        <div className='mt-100px'>
            <Carousel>
                {
                    (activity.images.length > 0)?
                    activity.images.map(item => (
                        <Carousel.Item key={item.id}>
                            <img src={item.image_name} alt={activity.title} className='w-100' style={{ height: "500px" }} />
                            <Carousel.Caption>
                                <h3>{activity.title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                    :<img src={defaultImage} alt={activity.title} className='w-100' style={{ height: "500px" }} />
                }
            </Carousel>
            <div className='container p-3'>
                <div className='d-flex justify-content-between'>
                    <div><p className='font-weight-bold text-uppercase'>{activity.category.name}</p></div>
                    <div className='d-flex justify-content-end'>VIP&nbsp;
                    <FormCheck className='me-4' type='radio' name='price' value={activity.price_vip}
                    label={isInt(activity.price_vip)?activity.price_vip+'.00TL':activity.price_vip+'TL'}/>
                    Normal&nbsp;
                    <FormCheck type='radio' name='price' value={activity.price_normal}
                    label={isInt(activity.price_normal)?activity.price_normal+'.00TL':activity.price_normal+'TL'}/>
                    </div>
                </div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <p className='font-weight-bold text-uppercase'>{activity.city}</p>
                <p className='font-weight-bold text-uppercase'>{activity.date}</p>
                <p>{activity.address}</p>
            </div>
            {/* <div style={{ height: '50vh', width: '40%', margin:"20px auto" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAuWTA4jcSAFCHtRHkJEgTMUmREoF6i16I" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <Marker
                        lat={activity.lat}
                        lng={activity.lng}
                    />
                </GoogleMapReact>
            </div> */}
        </div>
    )
}

export default ActivityDetails