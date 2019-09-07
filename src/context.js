import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
  state={
    products: [],
    detailProduct: detailProduct
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts,singleItem];
    });
    this.setState(() => {
      return {products: tempProducts};
    });
  }
  handleDetails = () => {
    console.log('Hello from handle details');
  };
  addToCart = (id) => {
    console.log(`Hello from add to cart.id ${id}`);
  };
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state, 
        handleDetails: this.handleDetails,
        addToCart: this.addToCart
      }}>
      {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
