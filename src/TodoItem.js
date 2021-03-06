import React ,{Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    render() {
        const {item,index,test}=this.props
        return(
            <div key={index} onClick={this.handleClick}>{test}-{item}</div>
        )
    }

    handleClick(){
        const {deleteItem,index}=this.props;
        deleteItem(index)
    }
}

TodoItem.propTypes={
    test:PropTypes.string.isRequired,
    item:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number

};
TodoItem.defaultProps={
    test:"hello"
}
export default TodoItem;