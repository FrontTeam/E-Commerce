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

const  MainCarouselStyled = styled.div`
 position: relative;
img{
  width: 100%;
  height: 100%;
}
`;
export default MainCarousel;