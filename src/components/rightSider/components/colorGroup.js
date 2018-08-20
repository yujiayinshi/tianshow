import React from 'react';
import style from '../style.css'
import { CirclePicker, SketchPicker} from 'react-color'

//颜色组件
const ColorGroup = props =>{
    return (
        <div className={style['color-box']}>
            <CirclePicker onSwatchHover={props.handleCircle}/>
            <div style={{position:'relative'}}>
                <div className={style['swatch']} onClick={props.handleClick}>
                    <div className={style['color']} style={{backgroundColor:props.color}}/>
                </div>
                {props.displayColorPicker?
                    <div style={{position: 'absolute',zIndex:'2',right:'0'}}>
                        <div style={{position:'fixed',top:'0',left:'0',right:'0',bottom:'0'}} onClick={props.handleClose}/>
                        <SketchPicker color={props.color} onChange={props.handleChange} />
                    </div> : null
                }
            </div>
        </div>
    )
};

export default ColorGroup