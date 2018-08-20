import React from 'react'
import style from '../style.css'

//图库列表
const ImgDepot = props =>{
    return(
        <div className={style['imgDepot']}>
            {props.data.map((item,idx)=>
               <div key={idx} className={`imgDepot_item`} onClick={()=>item.dispatch(item)}>
                   <img src={item.url} alt="" />
               </div>
            )}
        </div>
    )
}

export default ImgDepot