import React ,{Component,Fragment} from 'react'
import TodoItem from './TodoItem'
import Test from './Test'

import "./style.css"



class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            inputValue:"hello",
            list:[]
        };

        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
    }

    render() {
        return(
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>TodoList</button>
                </div>
                <ul>
                    {this.getTodoItem()}

                </ul>
                <Test content={this.state.inputValue}/>
            </Fragment>
        )
    }

    getTodoItem(){
        return this.state.list.map((item,index)=>{
            return (
                    <TodoItem item={item} index={index} key={item}
                              deleteItem={this.handleItemDelete.bind(this)}
                    />


            )
        })
    }

    handleInputChange(e){
        //同步，性能优化改成异步传函数
        /*this.setState({
            inputValue:e.target.value
        })*/

        //异步
        const value=e.target.value;
        this.setState(()=> ({
            inputValue:value
        }));
    }

    handleBtnClick(){
        this.setState((preSata)=>({
            list:[...preSata.list,preSata.inputValue],
            inputValue:""
        }));

        /*this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:""
        })*/
    }

    handleItemDelete(index){
        //immutable
        //state 不允许我们做任何改变


        this.setState((preState)=>{
            const list=[...preState.list];
            list.splice(index,1);
            return {list}
        });

        /*this.setState({
            list:todoList
        })*/
    }
}
export default TodoList;