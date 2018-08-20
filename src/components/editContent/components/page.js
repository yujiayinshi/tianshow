import React from 'react';
import Element from './element.js';
import Text from './text.js';
import style from '../style.css';

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.prevActiveElement = null;
        //内部属性，用来实现移动与缩放
        this.currentElementDom = null;
        this.tmpClientX = null;//element上一次点击位置
        this.tmpClientY = null;
        this.tmpOffsetLeft = null;//element上一次相对父元素的位置
        this.tmpOffsetTop = null;
        this.tmpWidth = null;//element上一次的宽度
        this.tmpHeight = null;
        this.scale = null;//element长宽比,
        this.readyMove = false;
        this.readyResize = false;
        this.resizeType = false;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.elementsEntity !== nextProps.elementsEntity) {
            //重新渲染会阻止move或resize
            return true;
        }
        else if (this.props.backgroundColor !== nextProps.backgroundColor) {
            return true;
        }
        return false;
    }

    style() {
        return {
            backgroundColor: this.props.backgroundColor
        }
    }

    render() {
        const {elementsEntity,bgImgUrl} = this.props;
        let elements = this.buildElementByType(elementsEntity,elementsEntity.className,false);
        return (
            <div onMouseMove={this.mouseMoveHandle.bind(this)}
                 onMouseLeave={this.mouseLeaveHandle.bind(this)}
                 onMouseUp={this.mouseUpHandle.bind(this)}
                 onMouseDown={this.mouseDownHandle.bind(this)}
                 style={this.style()}
                 className={style['page']+' '+this.props.className}>
                {bgImgUrl.imgUrl&&
                <div className={style['page_bg']}>
                    <img src={bgImgUrl.imgUrl} alt="" style={{width:'500px',height:'500px',top:'0',left:'0'}}/>
                </div>
                }
                {elements}
            </div>
        )
    }

    buildElementByType(element, className, preview) {
        let self = this;
        let key = 1;
        switch (element.elementType) {
            case 'IMAGE':
                return (
                    <Element element={element}
                             key={key}
                             preview={preview}
                             className={className}
                             onMouseDown={self.activeElement.bind(this)}
                             prepareResize={self.prepareResize.bind(self)}>
                        <img className="full" draggable="false" src='src'/>
                    </Element>
                );
            case 'TEXT':
                return (
                    <Element element={element}
                             key={key}
                             preview={preview}
                             className={className}
                             onMouseDown={self.activeElement.bind(this)}
                             prepareResize={self.prepareResize.bind(self)}>
                        <Text value={element.value} upDataElementEntity={this.props.upDataElementEntity}/>
                    </Element>
                );
            default:
                return null;
        }
    }

    //查找dom
    findParentByClassName=(element, rootElement, className)=>{
        if (element == rootElement) {
            return undefined;
        }
        let result = element.classList.contains(className);
        if (result) {
            return element
        }
        return this.findParentByClassName(element.parentElement, rootElement, className);
    };

    /**
     * 点击resize btn
     * @param type
     * @param e
     */
    prepareResize(type, e) {
        let element = this.findParentByClassName(e.target, 'element-1DYLV', 'element-1DYLV');
        if (element) {
            this.currentElementDom = element;
            this.readyResize = true;
            this.resizeType = type;
            this.readyMove = false;
            this.tmpClientX = e.clientX;
            this.tmpClientY = e.clientY;
            this.tmpOffsetLeft = element.offsetLeft;
            this.tmpOffsetTop = element.offsetTop;
            this.tmpWidth = parseInt(element.clientWidth);
            this.tmpHeight = parseInt(element.clientHeight);
            this.scale = this.tmpWidth / this.tmpHeight;
        }
        e.stopPropagation();
    }

    mouseDownHandle(e) {
        let element = this.findParentByClassName(e.target, e.currentTarget, 'element-1DYLV');
        if (element) {
            //移除非当前元素的active样式
            let activeElements = document.querySelectorAll('.element.active');
            for (let i = 0; i < activeElements.length; i++) {
                if (element !== activeElements[i]) {
                    activeElements[i].classList.remove('active');
                }
            }
            this.currentElementDom = element;
            this.readyMove = true;
            this.readyResize = false;
            this.tmpClientX = e.clientX;
            this.tmpClientY = e.clientY;
            this.tmpOffsetLeft = element.offsetLeft;
            this.tmpOffsetTop = element.offsetTop;
            this.tmpWidth = parseInt(element.clientWidth);
            this.tmpHeight = parseInt(element.clientHeight);
            this.scale = this.tmpWidth / this.tmpHeight;
        }
        e.stopPropagation();
    }

    activeElement(element, e) {
        //Store.dispatch(ElementsAction.active(element));
        this.props.upDataElementEntity({className:'active'})
    }

    mouseUpHandle(e) {
        //停止拖拽或移动
        if (this.currentElementDom) {
            //Store.dispatch(ElementsAction.save(this.currentElementDom.style.width, this.currentElementDom.style.height, this.currentElementDom.style.left, this.currentElementDom.style.top));
            this.props.upDataElementEntity({
                width: this.currentElementDom.style.width,
                height: this.currentElementDom.style.height,
                left: this.currentElementDom.style.left,
                top: this.currentElementDom.style.top,
            })
        }
        //释放当前元素
        else {
            //Store.dispatch(ElementsAction.release());
            this.props.upDataElementEntity({className:''});
        }
        this.currentElementDom = null;
        this.readyMove = false;
        this.readyResize = false;
        e.stopPropagation();
    }

    mouseLeaveHandle(e){
        //停止拖拽或移动
        if (this.currentElementDom) {
            //Store.dispatch(ElementsAction.save(this.currentElementDom.style.width, this.currentElementDom.style.height, this.currentElementDom.style.left, this.currentElementDom.style.top));
            this.props.upDataElementEntity({
                width: this.currentElementDom.style.width,
                height: this.currentElementDom.style.height,
                left: this.currentElementDom.style.left,
                top: this.currentElementDom.style.top,
            })
        }
        this.readyMove = false;
        this.readyResize = false;

    }

    mouseMoveHandle(e) {
        if (this.currentElementDom) {
            if (this.readyMove === true && this.readyResize === false) {
                let newLeft = e.clientX - this.tmpClientX + this.tmpOffsetLeft;
                let newTop = e.clientY - this.tmpClientY + this.tmpOffsetTop;
                this.currentElementDom.style.left = newLeft + 'px';
                this.currentElementDom.style.top = newTop + 'px';
            }
            if (this.readyResize === true && this.readyMove === false) {
                let newWidth = e.clientX - this.tmpClientX + this.tmpWidth;
                let newHeight = e.clientY - this.tmpClientY + this.tmpHeight;
                switch (this.resizeType) {
                    case 'x':
                        this.currentElementDom.style.width = newWidth + 'px';
                        break;
                    case 'y':
                        this.currentElementDom.style.height = newHeight + 'px';
                        break;
                    case 'scale':
                        this.currentElementDom.style.width = newWidth + 'px';
                        this.currentElementDom.style.height = newWidth / this.scale + 'px';
                        break;
                    default:
                        break;
                }
            }
        }
    }
}

// Page.propTypes = {
//     className: React.PropTypes.string,
//     pagesEntity: React.PropTypes.object
// };

export default Page