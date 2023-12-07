import React from 'react'
import defaultImage from '../images/default.png'
import { useNavigate } from 'react-router-dom';

const ActivityCard = (props) => {
    const navigate = useNavigate();
    function handleRedirect(){
        navigate(`/activity-details/${props.id}`, { replace: true });
    }
    return (
        <div className='activity-card' onClick={handleRedirect}>
            <div>
                {
                    (props.images.length > 0) 
                    ?<img src={props.images[0]} alt={props.title} />
                    :<img src={defaultImage} alt={props.title} />
                }
            </div>
            <div className='d-flex justify-content-between ps-1'>
                <p>{props.city}</p>
                <p>{props.date}</p>
            </div>
            <div className='ps-1'>
                <h6>{props.title}</h6>
                <p id='price'>{props.price}TL</p>
            </div>
        </div>
    )
}

export default ActivityCard