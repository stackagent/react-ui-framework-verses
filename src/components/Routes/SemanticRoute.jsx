import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { Dashboard } from '../Layout/Semantic'

export class SemanticRoute extends Component {
    render() {
        const { component } = this.props
        return (
            <Dashboard>
                <Route {...this.props} component={component} />
            </Dashboard>
        )
    }
}
