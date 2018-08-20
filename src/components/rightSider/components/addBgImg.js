import React from 'react'
import style from '../style.css'
import {Icon,Row,Col,Slider, Input,Button} from 'antd'
import ReactCrop from 'react-image-crop'



class AddBgImg extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputValue: 0,
        }
    }

    //透明度
    onChange = (value) => {
        this.setState({
            inputValue: value,
        });
    };
    //输入框
    onChangeInput=(value)=>{
        console.log('v',value);
        let v = value.toString().replace('%','');
        console.log('v1111',v);
        this.setState({
            inputValue: v,
        })
    };

    //剪切
    handleCrop=(crop)=>{
        console.log('crop',crop);
    };

    render(){
        const {inputValue} = this.state;
        const {imgUrl} = this.props;
        const crop = {
            x: 20,
            y: 10,
            width: 80,
            height: 100,
        }
        return(
            <div className={style['addBgColor_box']}>
                <div className={style['addBgColor_hd']}>
                    <div className={style['addBgColor_title']}>叠加图片</div>
                    {imgUrl?
                        <div className={style['addBg_show']}>
                            <img src={this.props.imgUrl} alt=""/>
                            {/*<ReactCrop*/}
                                {/*src={this.props.imgUrl}*/}
                                {/*crop={crop}*/}
                                {/*style={{height: '100%'}}*/}
                                {/*imageStyle={{width:'100%',height:'100%'}}*/}
                                {/*onChange={this.handleCrop}*/}
                            {/*/>*/}
                        </div>
                        :
                        <div className={style['addBgColor']} onClick={this.props.handleAddImg}>
                            <Icon type="plus" style={{fontSize:'50px'}}/>
                            <p style={{fontSize:'20px',marginTop:'15px'}}>添加图片背景</p>
                        </div>
                    }
                    {imgUrl&&
                    <div className={style['addBg_btn']}>
                        <Button type="primary" ghost onClick={this.props.handleDelete}>删除</Button>
                    </div>
                    }
                </div>
                <div className={style['addBgColor_bd']}>
                    <div className={style['addBgColor_title']}>透明度</div>
                    <Row>
                        <Col span={17}>
                            <Slider min={0} max={100} onChange={this.onChange} value={inputValue}/>
                        </Col>
                        <Col span={4}>
                            <Input min={1} max={100} style={{marginLeft:16,width:'70px',textAlign:'center'}} value={inputValue} onChange={(e)=>this.onChange(e.target.value)}/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default AddBgImg;