import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Modal } from 'antd'
// import ProspTypes from 'prop-types'
import style from './ShowEditPage.css'
import LeftSider from '../components/leftSider/index'
import RightSider from '../components/rightSider/index'
import EditContent from '../components/editContent/index'
import { connect } from 'react-redux'
import { queryShowContent,getElement } from '../actions/show'

const { Header, Content, Sider } = Layout

@connect(
  (state) => ({show: state.show}),
  { queryShowContent,getElement }
)

class ShowEditPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      previewed: false,
      barSelect: 'ipx'  // 预览默认ipx
    }
  }
  static propTypes = {
    show: '',
  }
  componentWillMount(){
    this.props.queryShowContent({text: '你好啊'});
  }
  render() {
    const { barSelect } = this.state
    return (
      <Layout>
        <Modal
          className='111'
          width='956px'
          visible={this.state.previewed}
          onCancel={() => { this.setState({previewed: false}) }}
          onOk={() => { this.setState({previewed: false}) }}
          cancelText='取消'
          okText='确定'
          bodyStyle={{ overflow: 'hidden', minHeight: '637px', padding: '24px 50px' }}
        >
          <div className={style.preview} style={{paddingTop: `${barSelect === 'normal' ? '48px' : '0'}`}}>
            <div className='tab-switch-bar'>
              <div className={`normal-preview ${barSelect === 'normal' && 'selected'}`} onClick={() => { this.setState({barSelect: 'normal'}) }}>
                <span className='tab'>常规屏</span>
              </div>
              <div className={`x-preview ${barSelect === 'ipx' && 'selected'}`} onClick={() => { this.setState({barSelect: 'ipx'}) }}>
                <span className='tab'>全面屏</span>
              </div>
              <div></div>
            </div>
            <iframe
              src='http://172.254.225.83:3000/preview'
              className='iframe'
              title='h5'
              width='322'
              height={`${barSelect === 'normal' ? '506' : '620'}`}
              border='none'
            ></iframe>
          </div>
          <div className={style.rightBox}>
            <div className='h5-qrcode'>
              <div className='text'>H5预览</div>
              <div className='qrcode'>
                <canvas width='120' height='120' style={{display: 'none'}}></canvas>
                <img alt='' />
              </div>
            </div>
            <div className='mini-qrcode'></div>
          </div>
        </Modal>
        <Row className={style['nav_box']}>
          <Col span={8} />
          <Col span={8}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              className={style['edit_nav']}
            >
              <Menu.Item
                key="1"
                onClick={()=>this.props.getElement({
                  elementType: 'TEXT',
                  className:'active',
                  width: 'auto',
                  height: 'auto',
                  value: '双击修改',
                  top: '10px',
                  left: '10px',
                  controlProps:{
                      textAlign: 'center',
                      fontSize: '16px',
                      fontColor: '#ccc',
                  }
              })}>文字</Menu.Item>
              <Menu.Item key="2">形状</Menu.Item>
              <Menu.Item key="3">图片</Menu.Item>
              <Menu.Item key="4">音频</Menu.Item>
              <Menu.Item key="5">视频</Menu.Item>
              <Menu.Item key="6">背景</Menu.Item>
              <Menu.Item key="7">互动</Menu.Item>
            </Menu>
          </Col>
          <Col span={7} push={1}>
            <Col span={6} />
            <Col span={4} onClick={() => { this.setState({previewed: !this.state.previewed}) }}>
              <img alt='' />
              <span style={{color: '#fff', cursor: 'pointer'}}>预览 </span>
            </Col>
            <Col span={4} />
            <Col span={4} />
            <Col span={6} />
          </Col>
        </Row>
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

export default ShowEditPage
