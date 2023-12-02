import React from 'react'
import defaultImage from '../images/default.png'

const ActivityCard = (props) => {
    
    return (
        <div className='activity-card'>
            <div>
                {
                    (props.images.length > 0) 
                    ?<img src={props.images[0]} alt={props.title} />
                    :<img src={defaultImage} alt={props.title} />
                }
            </div>
            <div>

            </div>
        </div>
    )
}

export default ActivityCard