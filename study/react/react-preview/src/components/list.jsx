import React, { Component } from 'react';
import PropTypes from 'prop-types'

class List extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps ---- 子组件将要接受参数');
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
        console.log('shouldComponentUpdate ---- 子组件决定是否更新');
        return true
    }
    componentWillUnmount(){
        console.log('componentWillUnmount ---- 子组件将要被卸载');
    }
    
    render(){
        return (
            <li onClick={this.handleClick}>{this.props.content}</li>
        )
    }
    handleClick(){
        // console.log(this.props.index); 
        console.log(this.props.list);
        this.props.deleteItem(this.props.index)
    }
}
List.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

export default List