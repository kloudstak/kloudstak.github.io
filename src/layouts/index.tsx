import React from 'react'

import {
    Layout,
    Breadcrumb,
    Menu
} from 'antd'
import 'antd/dist/antd.css';
import './layout.css'

type LayoutProps = {
    children: any
}

const { Header, Footer, Content } = Layout;

const PageLayout: React.FC<LayoutProps> = ({children}) => (    
    <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={new Array(5).fill(null).map((_, index) => {
                const key = index + 1;
                return {
                    key,
                    label: `nav ${key}`,
                };
                })}
            />
        </Header>
        <Content
            style={{
                padding: '0 50px',
            }}>
            <Breadcrumb
                style={{
                margin: '16px 0',
                }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">{children}</div>
        </Content>
        <Footer
            style={{
                textAlign: 'center',
            }}>
            Kloudstak.com ©2022 All Rights Reserved
        </Footer>
  </Layout>
);

 export default PageLayout