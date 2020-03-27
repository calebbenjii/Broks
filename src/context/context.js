import React, { Component } from 'react'

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    count: 0
  }

  // handle sidebar
  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
  }

  // handle SideCart
  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    })
  }

  //close cart
  closeCart = () => {
    this.setState({
      cartOpen: false
    })
  }
  //open
  openCart = () => {
    this.setState({
      cartOpen: true
    })
  }




  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleSidebar: this.handleSidebar,
        handleCart: this.handleCart,
        openCart: this.openCart,
        closeCart: this.closeCart,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }