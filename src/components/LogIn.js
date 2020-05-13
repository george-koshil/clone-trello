import React from "react";
import TodoAppBar from "./TodoAppBar";

function LogIn() {
    return(
        <div className='LogIn'>
            <TodoAppBar/>
            <div className='About'>
                <h1 >Clone Trello lets you work more collaboratively and get more done.</h1>
                <p>Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</p>
            </div>
            <div className='AboutImg'>
                <img src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg' alt='trello'/>
            </div>
        </div>


    )
}

export default LogIn