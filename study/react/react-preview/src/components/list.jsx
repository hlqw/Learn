import React, { Component } from 'react';
import PropTypes from 'prop-types'

class List extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
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