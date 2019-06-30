import React, { Component } from 'react'
import { Layout } from 'antd'

import { SemanticFooter,SemanticHeader,SemanticSideBar } from './components'

const { Content } = Layout

export class Dashboard extends Component {
    render() {
        return (
            <Layout>
                <SemanticHeader />
                <SemanticSideBar />
                <Content>
                    {this.props.children}
                </Content>
                <SemanticFooter />
            </Layout>
        )
    }
}
