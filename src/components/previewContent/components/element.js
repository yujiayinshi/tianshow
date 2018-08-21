import React from 'react';
import style from '../style.css'
import {Icon} from 'antd'

//拖拽的点
class ResizePoint extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className={style['resize-point']+' '+style[this.props.type]}
                 onClick={this.props.onClick}
                 onMouseDown={this.props.onMouseDown}>

            </div>
        )
    }
}

//删除图标
class RemovePoint extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className={style['remove-point']}>
                <Icon type="close-circle-o" style={{fontSize:'12px'}}> </Icon>
            </div>
        )
    }
};

class Element extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className={style['element']+' '+style[this.props.className]}
                 style={this.setInlineStyle()}>
                {this.props.children}
            </div>
        )
    }

    deleteElement (e) {
        //Store.dispatch(ElementsAction.doDelete());
        e.stopPropagation();
    }

    setInlineStyle () {
        const {element} = this.props;
        // const element = {
        //     width: 'auto',
        //     height: 'auto',
        //     left:'10px',
        //     top:'10px',
        //     zIndex: 1,
        //     controlProps:{
        //         textAlign: 'center',
        //         fontSize: '16px',
        //         fontColor: '#ccc',
        //     }
        // }
        let baseStyle = {
            width: element.width,
            height: element.height,
            left: element.left,
            top: element.top,
            zIndex: element.zIndex,
            textAlign: element['controlProps'].textAlign,
            fontSize: element['controlProps'].fontSize,
            color: element['controlProps'].fontColor,
        };
        // if (this.props.preview === true) {
        //     let previewStyle = {};
        //     previewStyle.animationName = this.props.element.get('controlProps').get('animation');
        //     previewStyle.animationDuration = this.props.element.get('controlProps').get('duration');
        //     previewStyle.animationTimingFunction = 'ease';
        //     previewStyle.animationDelay = this.props.element.get('controlProps').get('delay');
        //     return Object.assign(baseStyle, previewStyle);
        // }
        return baseStyle;
    }
}

// Element.propTypes = {
//     element: React.PropTypes.object,
//     className: React.PropTypes.string,
//     preview: React.PropTypes.bool
// };

export default Element