import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer} from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {id, title, company, img, info, inCart, price} = value.detailProduct;

          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>model: {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                     made by: <span>{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="font-weight-bold mt-3 mb-0">Product description</p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <Link to="/">
                    <ButtonContainer>
                      back to product
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer 
                  cart
                  disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id)
                    }}>
                    {inCart ? "in cart" : "add to cart"}
                  </ButtonContainer>
                </div>
                {/* end product text */}
              </div>
              {/* end product info */}
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
