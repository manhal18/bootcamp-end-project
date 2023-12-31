import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';

export default function Slider(props) {
  let filtredActivities = props.popularActivities.filter(a => a.images.length > 0)
  return (
    <Carousel className='mb-5'>
    {
      filtredActivities.map(item => (
          <Carousel.Item key={item.id}>
            <Link to={'/activity-details/' + item.id}>
              <img src={item.images[0].image_name} alt={item.title} className='w-100' style={{height: "500px"}}/>
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

