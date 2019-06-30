import React, { Component } from 'react'
import { Layout } from 'antd'

import { AntHeader, AntFooter, AntSideBar } from './components'

const { Content } = Layout

export class Dashboard extends Component {
    render() {
        return (
            <Layout>
                <AntHeader />
                <AntSideBar />
                <Content>
                    {this.props.children}
                </Content>
                <AntFooter />
            </Layout>
        )
    }
}
