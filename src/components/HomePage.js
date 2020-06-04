import React from "react";
import TodoAppBar from "./TodoAppBar";
import {connect} from "react-redux";

function HomePage(props) {
    const { isLoggedIn } = props;
    return(
        <div className='LogIn'>
            <TodoAppBar isLoggedIn={isLoggedIn}/>
            <div className='AboutImg'>
                <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" alt="Trello"/>
            </div>

            <div className='About'>
                <h1>Trello lets you work more collaboratively and get more done.</h1>
                <p>Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.login.isLoggedIn
});

export default connect(mapStateToProps)(HomePage);