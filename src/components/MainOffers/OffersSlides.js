import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components'

class OffersSlides extends Component {
    state = {
        items: [
            { id: 1, title: 'item #1' },
            { id: 2, title: 'item #2' },
            { id: 3, title: 'item #3' },
            { id: 4, title: 'item #4' },
            { id: 5, title: 'item #5' }
        ]
    }
  
    constructor(props) {
        super(props)
        this.breakPoints = [
          { width: 1, itemsToShow: 1 },
          { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
          { width: 850, itemsToShow: 3 },
          { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
          { width: 1450, itemsToShow: 5 },
          { width: 1750, itemsToShow: 6 },
        ]
      }

    render() {
        const { items } = this.state;
        return (
            <OfferSlidesStyled>
             <Carousel breakPoints={this.breakPoints}>
               {items.map(item => <div key={item.id}>{item.title}</div>)}
              </Carousel>
            </OfferSlidesStyled>
        )
    }
}

const OfferSlidesStyled = styled.div`
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
`
export default OffersSlides
