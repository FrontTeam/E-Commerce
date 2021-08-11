import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import Product1 from "../../images/Products/product1.jpg"
import Product2 from "../../images/Products/product2.jpg"

class ProductSlides extends Component {
    state = {
      items: [
        {id: 1, title: 'Valkyrie Eau de Parfum for Her',img:Product1},
        {id: 2, title: 'Valkyrie Eau de Parfum for Her',img:Product2},
        {id: 3, title: 'Valkyrie Eau de Parfum for Her',img:Product1},
        {id: 4, title: 'Valkyrie Eau de Parfum for Her',img:Product2},
        {id: 5, title: 'Valkyrie Eau de Parfum for Her',img:Product1},
        {id: 6, title: 'Valkyrie Eau de Parfum for Her',img:Product2},
        {id: 7, title: 'Valkyrie Eau de Parfum for Her',img:Product1},
        {id: 8, title: 'Valkyrie Eau de Parfum for Her',img:Product2},
        {id: 9, title: 'Valkyrie Eau de Parfum for Her',img:Product1},
        {id: 10, title: 'Valkyrie Eau de Parfum for Her',img:Product2},
        {id: 11, title: 'Valkyrie Eau de Parfum for Her',img:Product1}
      ]
    }
  
    render () {
      const { items } = this.state;
        return (
        <ProductSlidesStyled>
        <Carousel itemsToShow={4}>
              {items.map(item => <div key={item.id}>
                 <img src={item.img}  alt="alt" />
              </div>)}
        </Carousel>
        </ProductSlidesStyled>
      )
    }
}
  
const ProductSlidesStyled = styled.div`


`
export default ProductSlides
