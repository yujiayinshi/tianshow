import React from 'react'
import style from './style.css'

const HeadBar = props =>{
    return(
        <div className={style['headBar']}>
            {props.items.map((item,idx)=>
               <div key={idx} className={`head_item ${item.active&&'active'}`} onClick={item.dispatch}>{item.name}</div>
            )}
        </div>
    )
}

export default HeadBar;