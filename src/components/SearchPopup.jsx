import axios from 'axios'
import { FormControl, Modal } from 'react-bootstrap'
import { baseURL, SEARCH } from '../Api/Api'
import { useState } from 'react'
import FoundRow from './FoundRow'
import defaultImage from '../images/defaultActivityImage.png'

const SearchPopup = (props) => {
    const [activities, setActivities] = useState([]);

    function handleSearch(text){
        axios(baseURL+SEARCH+text)
        .then(res => {
            setActivities(res.data);console.log(res.data);
        }).catch(err => console.log(err))
    }

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Body>
            <FormControl size="lg" type="text" placeholder="Aramak istediğiniz etkinlik yazın" onChange={e=>handleSearch(e.target.value)}/>
                {
                    activities.map(activity => (
                        (activity.images.length > 0)
                        ?<FoundRow title={activity.title} image={activity.images[0].image_name}/>
                        :<FoundRow title={activity.title} image={defaultImage}/>
                    ))
                }
            </Modal.Body>
        </Modal>
    )
}

export default SearchPopup