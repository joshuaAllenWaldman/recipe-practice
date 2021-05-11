import React, { Fragment } from 'react'
import Form from './Form'
import Recipes from './Recipes'

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Recipes />
    </Fragment>
  )
}
