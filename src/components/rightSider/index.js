import React from 'react'
import style from './style.css'
import { CirclePicker, SketchPicker} from 'react-color'
import {connect} from 'react-redux'
import { backgroundColor } from '../../actions/show'
/*
* 右边栏编辑组件
*
* */

@connect((state)=>({}),{backgroundColor})

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state={
          displayColorPicker: false,
          color: "#a78a74",
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

    render(){
        return(
            <div className={style['container']}>
              <div className={style['color-box']}>
                <CirclePicker onSwatchHover={this.handleCircle}/>
                <div style={{position:'relative'}}>
                  <div className={style['swatch']} onClick={this.handleClick}>
                    <div className={style['color']} style={{backgroundColor:this.state.color}}/>
                  </div>
                  {this.state.displayColorPicker? 
                  <div style={{position: 'absolute',zIndex:'2',right:'0'}}>
                    <div style={{position:'fixed',top:'0',left:'0',right:'0',bottom:'0'}} onClick={this.handleClose}/>
                    <SketchPicker color={this.state.color} onChange={this.handleChange} />
                  </div> : null
                  }
                </div>
              </div>
            </div>
        )
    }


}