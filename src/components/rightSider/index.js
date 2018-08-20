import React from 'react'
import style from './style.css'
import {connect} from 'react-redux'
import { backgroundColor,selectBackgroundImg } from '../../actions/show'
import BgSetting from './components/bgSetting'
/*
* 右边栏编辑组件
*
* */

@connect((state)=>({show: state.show}),{backgroundColor,selectBackgroundImg})

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div className={style['container']}>
                <BgSetting
                    bgImgUrl={this.props.show.bgImgUrl || ''}
                    backgroundColor={this.props.backgroundColor}
                    selectBackgroundImg={this.props.selectBackgroundImg}
                />
            </div>
        )
    }


}