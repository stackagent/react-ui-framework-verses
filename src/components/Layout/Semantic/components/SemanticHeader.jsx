import React, { Component } from 'react'
import { Layout } from 'antd'
import { NavBar } from '../../../Extra';

const { Header } = Layout

export class SemanticHeader extends Component {
    render() {
        return (
            <Header>
                <NavBar />
                <div>Header</div>
            </Header>
        )
    }
}
