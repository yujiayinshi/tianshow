import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import logo from '../../assets/logo.png'
// import msg from '../../assets/msg.png'
import drafts from '../../assets/drafts_default.png'
import user from '../../assets/user.png'
import styles from './TopBar.css'
import NavBar from './NavBar.js'
import navStyles from './NavBar.css'
// import moment from 'moment'
// const TabPane = Tabs.TabPane
// const createNotices = (notices) => (
//   <div>
//     <ul style={{ minHeight: 100 }}>
//       {notices.map((notice, index) => <li key={index}>{notice.remindtitle}<span className={styles.itemDate}>{moment(notice.reminddate).format('MM月DD日')}</span></li>)}
//     </ul>
//   </div>
// )
// const createContent = (notices) => (
//   <div>
//     <Tabs defaultActiveKey='1' className={styles.noticeTab}>
//       <TabPane tab='项目' key='1'>
//         {createNotices(notices)}
//       </TabPane>
//       <TabPane tab='资金' key='2'>
//         {createNotices(notices)}
//       </TabPane>
//       <TabPane tab='通知' key='3'>
//         {createNotices(notices)}
//       </TabPane>
//       <TabPane tab='其它' key='4'>
//         {createNotices(notices)}
//       </TabPane>
//     </Tabs>
//   </div>
// )

class TopBar extends Component {
  static propTypes = {
    // notices: PropTypes.array,
    user: PropTypes.object,
    menus: PropTypes.object,
    saveStatus: PropTypes.func
  }
  toDraft = () => {
    this.props.saveStatus('0')
  }
  render () {
    const { children = [] } = this.props.menus
    return (
      <Row className={styles.row}
        style={{
          position: 'relative',
          height: 62,
          borderBottom: '4px solid #CD2836',
          backgroundImage: 'linear-gradient(90deg, #093C5E 0%, #1177BA 100%)',
          filter: 'progid:DXImageTransform.Microsoft.Gradient(startColorStr="#093C5E", endColorStr="#1177BA", gradientType="1")'
        }}>
        <Link to='/'>
          <Col
            span={4}
            className={styles.logoContainer}
            style={{
              position: 'absolute',
              left: 37,
              top: 18
            }}
          >
            <img
              alt='logo'
              src={logo}
              className={styles.logo}
              style={{ width: 163, height: 24 }}
            />
          </Col>
        </Link>
        <Link to='/'>
          <Col
            span={4}
            className={styles.logoTitle}
            style={{
              position: 'absolute',
              left: 222,
              lineHeight: '20px',
              top: 18,
              color: '#FBFBFB',
              fontSize: 20
            }}
          >
            <span>协同营销平台</span>
          </Col>
        </Link>
        <Col
          span={14}
          className={navStyles.navBarContainer}
          style={{
            lineHeight: '60px',
            float: 'right',
            height: '100%'
          }}
        >
          <NavBar menus={children} />
          <div
            className={styles.unitContainer}
            style={{
              height: '100%',
              float: 'right',
              width: (4 / 14) * 100 + '%'
            }}
          >
            {/* <div className={styles.unit}>
              <Badge count={5} />
              <Popover placement='bottomRight' overlayStyle={{ width: 283 }} content={createContent(this.props.notices)}>
                <img src={msg} className={styles.iconMsg} />
                <span>消息</span>
              </Popover>
            </div> */}
            <Link to={{ pathname: '/business/list' }} onClick={this.toDraft}>
              <div
                className={styles.unit}
                style={{
                  float: 'left',
                  width: '50%',
                  color: '#fff',
                  height: '100%',
                  lineHeight: '60px'
                }}
              >
                <img
                  src={drafts}
                  className={styles.iconDraft}
                />
                <span>草稿箱</span>
              </div>
            </Link>
            <div
              className={styles.unit}
              style={{
                float: 'left',
                width: '50%',
                color: '#fff',
                height: '100%',
                lineHeight: '60px'
              }}
            >
              <img
                src={user}
                className={styles.iconUser}
              />
              <span>{this.props.user.username}</span>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

export default TopBar
