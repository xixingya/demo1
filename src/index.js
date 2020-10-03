import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import TodoList from './TodoList'

// JXS语法中，如果要使用自己自定义组件，必须大写开头
ReactDOM.render(
    <React.StrictMode>
        <TodoList/>
    </React.StrictMode>,
    document.getElementById('root')
);

// const arr=[1,2,3,4]
// let [a,b,c,d]=arr;
// const arr = [1, 2, [5, 6, 7]];
// let [,,a]=arr;

/**
 * 扩展运算符 ...
 * @type {number[]}
 */
// const arr=[1,2,3,4,5,6];
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];
// const arr4 = [arr1, arr2, arr3];
// console.log(arr4);
// const arr5 = [...arr1, ...arr2, ...arr3];
// console.log(arr5)
// const [a,b,...c]=arr;
// console.log(c);


/**
 * 交换变量
 */
// let a=10;
// let b=20;
// [a,b]=[b,a];
// console.log(a,b);


/**
 * 接收多个函数返回值
 */

function getUserInfo(id){
    //ajax

    return [
       true,
        {
            name:"xiaoming",
            gender:"男",
            id:id
        } ,
        "成功！"
    ];
}

let [status,data,msg]=getUserInfo(11);
console.log(msg)

/**
 * 对象的结构赋值
 */

let obj1={
    nickname:"whoami",
    ad:100,
    ap:20,
    skill:[
        {
            skillName:"hong",
            type:"ad",
            damage:1.5
        },{
            skillName:"peng",
            type:"ap",
            damage:1.2
        },{
            skillName:"peng2",
            type:"ap",
            damage:1.3
        }
    ]
}

let {nickname}=obj1;
let {skill:[skill1,{skillName},{skillName:skilName}]}=obj1;
console.log(nickname);
console.log(skill1);
console.log(skillName);
console.log(skilName);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

