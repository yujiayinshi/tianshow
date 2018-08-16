import React, { Component } from 'react';
import { Layout, Menu, Button } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { queryShowContent } from '../actions/show'

const { Header, Content, Sider } = Layout

@connect(
  (state) => ({show: state.show}),
  { queryShowContent }
)
class ShowEditPage extends Component {
  static propTypes = {
  }

  render() {
    return (
        <Layout>
          <div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '56px', backgroundColor: '#262626' }}
            >
              <Menu.Item key="1">文字</Menu.Item>
              <Menu.Item key="2">形状</Menu.Item>
              <Menu.Item key="3">图片</Menu.Item>
              <Menu.Item key="4">音频</Menu.Item>
              <Menu.Item key="5">视频</Menu.Item>
              <Menu.Item key="6">背景</Menu.Item>
              <Menu.Item key="7">互动</Menu.Item>
            </Menu>
          </div>
          <Layout>
            <Sider>Sider</Sider>
            <Content>
            </Content>
            <Sider>Sider</Sider>
          </Layout>
      </Layout>
    );
  }
}

export default ShowEditPage
