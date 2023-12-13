import React from 'react'
import defaultImage from '../../images/defaultActivityImage.png'
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import "./style.css"

const ActivityCard = (props) => {
    const navigate = useNavigate();
    function handleRedirect(){
        navigate(`/activity-details/${props.id}`);
    }

    function isInt(n) {
        return n % 1 === 0;
    }
    return (
        <div className='activity-card' onClick={handleRedirect}>
            <div>
                {
                    (props.images.length > 0) 
                    ?<img src={props.images[0].image_name} alt={props.title} />
                    :<img src={defaultImage} alt={props.title} />
                }
            </div>
            <div className='d-flex justify-content-between ps-1'>
                <p>{props.city}</p>
                <p>{moment(props.date).format("LLL")}</p>
            </div>
            <div className='ps-1'>
                <h6>{props.title}</h6>
                <p className='price d-inline'>VIP&nbsp;
                {
                    isInt(props.priceVip) 
                    ? props.priceVip+'.00TL / '
                    : props.priceNormal+'TL / '
                }</p>
                <p className='price d-inline'>
                {
                    isInt(props.priceNormal)?props.priceNormal+'.00TL':props.priceNormal+'TL'
                }</p>
            </div>
        </div>
    )
}

export default ActivityCard