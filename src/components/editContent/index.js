import React from 'react'
import style from './style.css'
import { connect } from 'react-redux'
import { inputText,upDataElementEntity } from '../../actions/show'
import Page from './components/page'

/*
* 编辑组件
*
* */

@connect((state)=>({show: state.show}),{inputText,upDataElementEntity})


export default class extends React.Component{
    constructor(props){
        super(props);
        this.state={
          color: '#fff'
        }
    }
    render(){
        const {show} = this.props;
        console.log('elementsEntity',show.elementsEntity);
        return(
            <div className={style['container']}>
                <Page elementsEntity={show.elementsEntity || {}}
                      backgroundColor={show.bgColor || '#fff'}
                      text={show.value || {}}
                      upDataElementEntity={this.props.upDataElementEntity}
                />
            </div>
        )
    }


}