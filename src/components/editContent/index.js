import React from 'react'
import style from './style.css'

/*
* 编辑组件
*
* */


export default class extends React.Component{
    constructor(props){
        super(props);
        this.state={
          color: '#fff'
        }
    }
    render(){
        return(
            <div className={style['container']}>
                <div className={style['edit_template']} style={{backgroundColor: this.state.color}}>

                </div>
            </div>
        )
    }


}