import React from 'react'
import { useParams } from 'react-router-dom'
import { activities } from '../data/activities'
import { Carousel } from 'react-bootstrap'
import GoogleMapReact from 'google-map-react';

const ActivityDetails = () => {
    const { id } = useParams()
    const activity = activities.find(a => a.id == id)
    const defaultProps = {
        center: {
            lat: activity.location.lat,
            lng: activity.location.lng
        },
        zoom: 13
    };
    const AnyReactComponent = () => <div style={{width:"10px", height:"10px", backgroundColor:"red"}}></div>;

    return (
        <div className='position-relative'>
            <Carousel>
                {
                    activity.images.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img src={item} alt={activity.title} className='w-100' style={{ height: "500px" }} />
                            <Carousel.Caption>
                                <h3>{activity.title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
            <div className='container p-3'>
                <div className='d-flex justify-content-between'>
                    <p className='font-weight-bold text-uppercase'>{activity.category.name}</p>
                    <p className='font-weight-bold text-uppercase'>{activity.price}TL</p>
                </div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <p className='font-weight-bold text-uppercase'>{activity.city}</p>
                <p className='font-weight-bold text-uppercase'>{activity.date}</p>
                <p>{activity.address}</p>
            </div>
            {/* <div style={{ height: '50vh', width: '40%', margin:"auto" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAuWTA4jcSAFCHtRHkJEgTMUmREoF6i16I" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={activity.location.lat}
                        lng={activity.location.lng}
                    />
                </GoogleMapReact>
            </div> */}
        </div>
    )
}

export default ActivityDetails