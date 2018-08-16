import React from 'react';
import style from '../style.css'

//拖拽的点
class ResizePoint extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className={style['resize-point']+' '+this.props.type} onClick={this.props.onClick}
                 onMouseDown={this.props.onMouseDown}></div>
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
            <div className={style['remove-point']} onClick={this.props.onClick}
                 onMouseDown={this.props.onMouseDown}
                 onMouseUp={this.props.onMouseUp}><i className="iconfont icon-errorsign"></i></div>
        )
    }
};

class Element extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className={style['element']+' '+this.props.className}
                 onMouseDown={this.props.onMouseDown.bind(null, this.props.element)}
                 style={this.setInlineStyle()}>
                {this.props.children}
                <RemovePoint onMouseUp={this.deleteElement.bind(this)} />
                <ResizePoint type="right-bottom" onMouseDown={this.props.prepareResize.bind(null, 'scale')} />
                <ResizePoint type="right" onMouseDown={this.props.prepareResize.bind(null, 'x')} />
                <ResizePoint type="bottom" onMouseDown={this.props.prepareResize.bind(null, 'y')} />
            </div>
        )
    }

    deleteElement (e) {
        //Store.dispatch(ElementsAction.doDelete());
        e.stopPropagation();
    }

    setInlineStyle () {
        let baseStyle = {
            width: this.props.element.get('width'),
            height: this.props.element.get('height'),
            left: this.props.element.get('left'),
            top: this.props.element.get('top'),
            zIndex: this.props.element.get('zIndex'),
            textAlign: this.props.element.get('controlProps').get('textAlign'),
            fontSize: this.props.element.get('controlProps').get('fontSize'),
            color: this.props.element.get('controlProps').get('fontColor')
        };
        if (this.props.preview === true) {
            let previewStyle = {};
            previewStyle.animationName = this.props.element.get('controlProps').get('animation');
            previewStyle.animationDuration = this.props.element.get('controlProps').get('duration');
            previewStyle.animationTimingFunction = 'ease';
            previewStyle.animationDelay = this.props.element.get('controlProps').get('delay');
            return Object.assign(baseStyle, previewStyle);
        }
        return baseStyle;
    }
}

Element.propTypes = {
    element: React.PropTypes.object,
    className: React.PropTypes.string,
    preview: React.PropTypes.bool
};

export default Element