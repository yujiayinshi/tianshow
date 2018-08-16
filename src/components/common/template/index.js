import React from 'react'
import style from './style.css'
import {Icon,Tooltip} from 'antd'


class Template extends React.Component{

    render(){
        const {data,index} = this.props;
        return(
            <div className={style['template_container']}>
               <div className={style['left_box']}>
                   <h3 style={{fontSize:'20px',color:'#ece6e6'}}>{+index + 1}</h3>
                   <div className={style['left_icon']}>
                       <Icon type='up' />
                       <Tooltip placement="right" title={'收藏'}>
                           <Icon type='star' className={style['icon']}/>
                       </Tooltip>
                       <Tooltip placement="right" title={'删除'}>
                           <Icon type='delete' className={style['icon']} onClick={()=>data.dispatch(index)}/>
                       </Tooltip>
                       <Icon type='down' />
                   </div>
               </div>
               <div className={style['right_content']}>

               </div>
            </div>
        )
    }

}

export default Template