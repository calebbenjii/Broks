import React from 'react'
import { ProductConsumer } from '../context'

export default function HomePage() {
  return (
    <>
      <ProductConsumer>
        {value => <h4>{value}</h4>}
      </ProductConsumer>
    </>
  )
}
