import Carousel from 'react-bootstrap/Carousel';
import Denni from "../img/Denni.webp"
import skinclinic_gata from "../img/skinclinic_gata.jpg"
import skinclinic_op from "../img/skinclinic_op.jpg";

function ImageCarousel() {
  return (
    <div style={{maxWidth: "50em", margin: "0 auto"}} >
    <Carousel>
      <Carousel.Item interval={5000}>
        <img className='d-block w-100' src={skinclinic_op} alt='Bild på Denni' style={{ height: '60em', objectFit: 'cover' }} >
        </img>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className='d-block w-100' src={skinclinic_gata} alt='Bild på utanför skinclinic' style={{ height: '60em', objectFit: 'cover' }}>
        </img>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className='d-block w-100' src={Denni} alt="Bild på operation" style={{ height: '60em', objectFit: 'cover' }}>
      </img>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ImageCarousel;