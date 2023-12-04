import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel({ isSmallScreen }) {
  const containerStyle = {
    width: isSmallScreen ? '100%' : '100%',
    height: '80%',
    marginTop: '6%',
    marginRight: '0px',
    marginBottom: isSmallScreen ? '20px' : '-5%',
  };

  const rectangleStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '10px',
    marginBottom: '7%',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  return (
    <div style={containerStyle}>
      <Carousel>
        <Carousel.Item>
          <div style={rectangleStyle}>
            <img
              src="https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="First Slide"
              style={imageStyle}
            />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Additional content or description for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={rectangleStyle}>
            <img
              src="https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Second Slide"
              style={imageStyle}
            />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Additional content or description for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={rectangleStyle}>
            <img
              src="https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Third Slide"
              style={imageStyle}
            />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Additional content or description for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;





  