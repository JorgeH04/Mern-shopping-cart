import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartLink from "./Cart/CartLink";

export default class Nav extends Component {
    render() {
        return (
            <header className="header">
            <nav>
              <ul>
                <div>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/list">Products</Link>
                  </li>
                  
                </div>
                <div>
                  <CartLink />
                </div>
              </ul>
            </nav>
          </header>
        )
    }
}


