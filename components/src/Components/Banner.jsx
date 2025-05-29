import Carousel from 'react-bootstrap/Carousel';
import men from 'wimage.jpge'

const Banner=()=>{
    return(
        <>
        <Carousel fade>
      <Carousel.Item>
        <img src={wmen} style={{width:"100%",height:"400px"}}/>
        <Carousel.Caption>
          <h3 style={{color:"black", fontFamily:"cursive"}}>For women</h3>
          <p style={{color:"black", fontFamily:"cursive"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={men} style={{width:"100%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>For Men</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={kid} style={{width:"100%",height:"400px"}}/>
        <Carousel.Caption>
          <h3 style={{color:"black", fontFamily:"cursive"}}>For Kids</h3>
          <p style={{color:"black", fontFamily:"cursive"}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </>
    )
}
export default Banner;