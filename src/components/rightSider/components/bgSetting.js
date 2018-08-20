import React from 'react'
import HeadBar from '../../common/headBar/index'
import ColorGroup from './colorGroup'
import AddBgImg from './addBgImg'
import ImgDepot from './imgDepot'
import { Modal,Menu,Layout } from 'antd'
import style from '../style.css'
const {Content, Sider } = Layout;
/*
* 背景图片设置组件
*
* */

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state={
            displayColorPicker: false,
            color: "#a78a74",
            bgActive: true,
            visible: false,
            menu: '1'// 1天秀图库; 2我的图库
        }
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({color: color.hex},()=>this.props.backgroundColor({bgColor:color.hex}))
    };

    handleCircle = (color) =>{
        this.props.backgroundColor({bgColor:color.hex})
    };

    handleAddImg = () =>{
       this.setState({visible: true})
    };

    //取消弹框
    handleCancel=()=>{
       this.setState({
           visible: false,
       })
    };

    handleMenu=(item)=>{
       this.setState({
           menu: item.key,
       })
    };

    //显示视图
    handleView=(key)=>{
        const imgItems = [
            {
                url: 'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg',
                dispatch: (v)=>this.props.selectBackgroundImg({imgUrl: v.url}),
            },{
                url: 'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg',
                dispatch: (v)=>this.props.selectBackgroundImg({imgUrl: v.url}),
            },{
                url: 'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg',
                dispatch: (v)=>this.props.selectBackgroundImg({imgUrl: v.url}),
            },
        ];
        let view = null;
        switch (key) {
            case '1': view = <ImgDepot data={imgItems}/>;break;
            case '2': view = <div>暂无图片...</div>;break;
            default: view = null;
        }
        return view;
    };

    render(){
        const headBarItem={
            items:[
                {
                    active: this.state.bgActive,
                    name: '背景',
                    dispatch: ()=>this.setState({bgActive: !this.state.bgActive})
                },{
                    active: false,
                    name: '翻页设置',
                    dispatch: ()=>this.setState({bgActive: !this.state.bgActive})
                }
            ]
        };
        const colorGroup = {
            color: this.state.color, //初始颜色
            displayColorPicker: this.state.displayColorPicker, //取色区
            handleClick: this.handleClick,
            handleClose: this.handleClose,
            handleChange: this.handleChange,
            handleCircle: this.handleCircle,
        };

        return(
            <div>
                <HeadBar {...headBarItem}/>
                <ColorGroup {...colorGroup}/>
                <AddBgImg
                    handleAddImg={this.handleAddImg}
                    imgUrl={this.props.bgImgUrl.imgUrl}
                    handleDelete={()=>this.props.selectBackgroundImg({imgUrl: ''})}
                />
                <Modal
                    title="图片素材"
                    visible={this.state.visible}
                    onOk={this.handleCancel}
                    onCancel={this.handleCancel}
                    footer={null}
                    width='770px'
                    className={style['modal']}
                >
                    <Layout style={{height:'100%'}}>
                        <Sider width={140} style={{ backgroundColor: '#303030' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 ,backgroundColor: '#303030',color: 'hsla(0,0%,100%,.4)'}}
                                className={style['modal_menu']}
                                onSelect={this.handleMenu}
                            >
                                <Menu.Item key="1">天秀图库</Menu.Item>
                                <Menu.Item key="2">我的图库</Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{backgroundColor:'#383838'}}>
                            <Content style={{padding: 24, margin: 0, minHeight: 504 }}>
                                {this.handleView(this.state.menu)}
                            </Content>
                        </Layout>
                    </Layout>
                </Modal>
            </div>
        )
    }

}