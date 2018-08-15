import React, { Component } from 'react'
import { Layout, BackTop, Menu, Button, Icon } from 'antd'
import { Link } from 'react-router-dom'
import styles from './HomePage.css'

const { Header, Content, Footer } = Layout

class HomePage extends Component {
  render () {
    return (
      <Layout>
          <Header>
          <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">模板中心</Menu.Item>
              <Menu.Item key="3">作品案例</Menu.Item>
              <Menu.Item key="4">热门活动</Menu.Item>
            </Menu>
          </Header>
          <Content style={{
            background: '#e9e9e9',
            padding: 12,
            margin: 0,
            overflow: 'hidden',
            minHeight: window.innerHeight - 132 }}>
            <div className={styles.buttonwrapper}>
              <Link to="/show">
                <Button type="primary" size="large"><Icon type="plus" />新建作品</Button>
              </Link>
              
              <Button type="primary" size="large" style={{marginLeft: 20}}><Icon type="profile" />我的作品</Button>
            </div>
          </Content>
          <Footer className={styles.footer}>
            天秀 版权所有 ©2018
          </Footer>}
          <BackTop visibilityHeight={50} />
        </Layout>
    )
  }
}

export default HomePage
