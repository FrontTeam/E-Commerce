import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import Item1 from '../images/carousel/carousel1.jpg'
import Item2 from '../images/carousel/carousel2.jpg'
import Item3 from '../images/carousel/carousel3.jpg'
import Item4 from '../images/carousel/carousel4.jpg'
import Item5 from '../images/carousel/carousel5.jpg'

class MainCarousel extends Component {
  state = {
    items: [
      {id: 1, title: Item1, link:"https:/google.com"},
      {id: 2, title: Item2, link:"https:/google.com"},
      {id: 3, title: Item3, link:"https:/google.com"},
      {id: 4, title: Item4, link:"https:/google.com"},
      {id: 5, title: Item5, link:"https:/google.com"}
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <MainCarouselStyled>
      <Carousel>
        {items.map(item => <div key={item.id}>
          <a href={item.link}>
            <img src={item.title} alt="carousel" />
            </a>;
        </div>)}
        </Carousel>
      </MainCarouselStyled>
    )
  }
}

const MainCarouselStyled = styled.div`
div{
  overflow: hidden;
}
 position: relative;
padding-top: 250px;
img{
  width: 100%;
  height: 100%;
}
.rec.rec-arrow {
    border-radius: 0;
}
/* round buttons on hover */
.rec.rec-arrow:hover {
    border-radius: 0;
}
/* hide disabled buttons */
.rec.rec-arrow:disabled {
    visibility: hidden;
}
/* disable default outline on focused items */
/* add custom outline on focused items */
.rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
}
`;
export default MainCarousel;