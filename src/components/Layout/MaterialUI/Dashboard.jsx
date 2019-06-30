import React, { Component } from 'react'
import { Layout } from 'antd'

import { MaterialFooter, MaterialHeader, MaterialSideBar } from './components'

const { Content } = Layout

export class Dashboard extends Component {
    render() {
        return (
            <Layout>
                <MaterialHeader />
                <MaterialSideBar />
                <Content>
                    {this.props.children}
                </Content>
                <MaterialFooter />
            </Layout>
        )
    }
}
