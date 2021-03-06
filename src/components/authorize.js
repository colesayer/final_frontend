import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export function authorize(RenderedComponent) {
  return class extends Component{

    loggedIn(){
      return !!localStorage.getItem('jwtToken')
    }

    render(){
      const { pathname } = this.props.location

      if(this.loggedIn() && pathname === '/login'){
        return (<Redirect to="/" />)
      } else if (!this.loggedIn() && pathname !== '/login'){
        return (<Redirect to="/login"/>)
      } else {
        return (
        <div>
          <RenderedComponent {...this.props}/>
        </div>
      )
      }
    }

  }
}
