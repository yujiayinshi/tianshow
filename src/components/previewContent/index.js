import React, { Component } from 'react'
import Element from './components/element.js';
import Text from './components/text.js';
// import style from '../style.css';

const constants = {
  styles: ['className', 'elementType', 'height', 'left', 'top', 'value'],
  inlineSty: ['textAlign', 'fontSize', 'fontColor'] // controlProps
}

class PreviewContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      elementsEntity: {}
    }
  }
  componentDidMount () {
    const elementsEntity = {controlProps: {}}
    constants.styles.forEach((item) => {
      elementsEntity[item] = this.getLocalItem(item)
    })
    constants.inlineSty.forEach((item) => {
      elementsEntity['controlProps'][item] = this.getLocalItem(item)
    })
    this.setState({elementsEntity})
  }
  getLocalItem = (key) => {
    return window.parent.parent.localStorage.getItem(key)
  }
  buildElementByType (element, className, preview) {
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
                className={className}>
              <Text value={element.value} upDataElementEntity={this.props.upDataElementEntity}/>
            </Element>
          );
      default:
        return null;
    }
  }
  render () {
    const { elementsEntity } = this.state
    let elements = this.buildElementByType(elementsEntity,elementsEntity.className,false)
    return (
      <div>
        {elements}
      </div>
    )
  }
}

export default PreviewContent
