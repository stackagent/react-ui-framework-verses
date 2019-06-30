import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <ul>
                    <li><Link to="/">Semantic UI Framework</Link></li>
                    <li><Link to="/material">Material UI Framework</Link></li>
                    <li><Link to="/ant">Ant Design UI Framework</Link></li>
                </ul>
            </div>
        )
    }
}
