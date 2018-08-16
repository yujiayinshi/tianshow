import React, { Component } from 'react';
import { Layout, Menu,} from 'antd'
import ProspTypes from 'prop-types'
import style from './ShowEditPage.css'
import LeftSider from '../components/leftSider/index'
import RightSider from '../components/rightSider/index'
import EditContent from '../components/editContent/index'
const { Header, Content, Sider } = Layout

class ShowEditPage extends Component {
  static propTypes = {
  }

  render() {
    return (
        <Layout>
          <div className={style['nav_box']}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              className={style['edit_nav']}
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
          <Layout style={{height: +window.innerHeight - 56 +'px',width:'100%'}}>
            <Sider width='165px' style={{height:'inherit'}}>
               <LeftSider/>
            </Sider>
            <Content style={{height:'inherit'}}>
               <EditContent />
            </Content>
            <Sider width='350px' style={{height:'inherit'}}>
              <RightSider/>
            </Sider>
          </Layout>
      </Layout>
    );
  }
}

export default ShowEditPage;
