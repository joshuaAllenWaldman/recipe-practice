import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Dashboard from './recipes/Dashboard'


export class App extends React.Component{
  render(){
    return (  
      <Fragment>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Fragment>  
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))