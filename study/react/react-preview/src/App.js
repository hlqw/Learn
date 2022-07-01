import React, { Component, Fragment } from 'react';
import './style.css'
import List from './components/list';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            list:['吃饭','逛街']
        }
    }
    componentWillMount(){
        console.log('componentWillMount ---- 父组件将要被挂载到页面');
    }
    componentDidMount(){
        console.log('componentDidMount ---- 父组件已经被挂载到页面上');
    }
    shouldComponentUpdate(){ 
        console.log('shouldComponentUpdate ---- 父组件是否决定组件更新');
        return true   
    }
    componentWillUpdate(){
        console.log('componentWillUpdate ---- 父组件将要更新');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate ---- 父组件已经更新');
    }

    inputChange(e){
        // console.log(this);
       this.setState({
        // inputValue :e.target.value
        inputValue :this.input.value
       })
    } 
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue :''
        })
    }
    valueDelete(index){
        console.log(index);
        this.state.list.splice(index,1)
        this.setState({
           list: this.state.list
        })
    }
    render() {
        console.log('render ---- 组件编译中');
        return (
            <Fragment>
                {/* <List></List> */}
                <div>
                    <input
                     className='input' 
                     value={this.state.inputValue} 
                     onChange={this.inputChange.bind(this)}
                     ref={(input) => this.input = input}
                     ></input>
                    <button onClick={this.addList.bind(this)} >添加</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                               <List content={item} 
                               key={index}
                                index={index} 
                                list={this.state.list}
                               deleteItem={this.valueDelete.bind(this)}/>
                            )
                        })
                    }
                </ul>

            </Fragment>
        )
    }
}

export default App