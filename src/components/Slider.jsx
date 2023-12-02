import Carousel from 'react-bootstrap/Carousel'
import { activities } from '../data/activities'
import { Link } from 'react-router-dom';

export default function Slider() {
  let filtredActivities = activities.filter(a => (a.imagesCount > 0 && a.popular))
  return (
    <Carousel className='position-relative' style={{top: "100px"}}>
    {
      filtredActivities.map(item => (
          <Carousel.Item key={item.id}>
            <Link to={'/activity-details/' + item.id}>
              <img src={item.images[0]} alt={item.title} className='w-100' style={{height: "500px"}}/>
            </Link>
            <Carousel.Caption>
              <h3>{item.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        )
      )
    }
    </Carousel>
  );
}

