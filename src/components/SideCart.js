import React from 'react'
import {ProductConsumer} from '../context'
import styled from 'styled-components'

export default function SideCart() {
  return (
    <>
      <ProductConsumer>
        {value => {
          const {cartOpen, closeCart, cart} = value
          return <CartWrapper show={cartOpen} onClick={closeCart}> {cart} <p>Cart Items</p> </CartWrapper>
        }}
      </ProductConsumer>
    </>
  )
}


const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  border-left: solid 4px var(--primaryColor);
  background: var(--mainWhite);
  z-index: 1;
  height: 100%;
  width: 16rem;
  padding: 0.5rem 1rem;
  transition: var(--mainTransition);
  transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
  @media (min-width: 576px) {
    width: 20rem;
  }
`