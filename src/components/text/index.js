import React from 'react'
import style from './style.css'

class Text extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p className={style['text']}
               onDoubleClick={this.editText.bind(this)}
               onBlur={this.saveText.bind(this)}
               style={this.setInlineStyle()}>{this.props.value}</p>
        )
    }

    setInlineStyle() {
        return {
            fontSize: this.props.fontSize,
            height: '100%',
            overflow: 'hidden'
        }
    }

    editText(e) {
        let target = e.target;
        target.contentEditable = true;
        target.focus();
    }

    saveText(e) {
        let content = e.target.textContent;
        if (content.length == 0) {
            content = '双击修改';
        }
        //Store.dispatch(ElementsAction.updateValue(content));
    }

}

Text.defauleProps = {
    fontSize: 16
};

Text.propTypes = {
    fontSize: React.PropTypes.number
};

export default Text