import React from 'react'
import style from './style.css'
import Template from '../common/template'
import {Icon} from 'antd'

/*
* 左边栏编辑组件
*
* */


export default class extends React.Component{
    constructor(props){
       super(props);
       this.state={
           template: [{id:1,dispatch:this.handleDelete}]
       }
    }
    //删除模板.
    handleDelete=(id)=>{
        const {template} = this.state;
        template.splice(+id-1,1)
        this.setState({
            template: template,
        })
    };

    //添加模板
    handleAdd(){
       const {template} = this.state;
       let arrLength = template.length;
       this.setState({
           template: [].concat(template,{
               id: arrLength + 1,
               dispatch:this.handleDelete
           })
       })
    }
    render(){
        const {template} = this.state;
        return(
            <div className={style['container']}>
                <div className={style['title']}>界面</div>
                <div className={style['scroll']}>
                    {template.map((item,idx)=><Template key={idx} index={idx} data={item}/>)}
                    <div style={{textAlign:'-webkit-right',paddingRight:'10px'}} onClick={this.handleAdd.bind(this)}>
                        <div className={style['add_template']}>
                            <Icon type='plus' style={{fontSize:'40px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}