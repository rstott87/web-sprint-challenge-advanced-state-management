import React, { Component } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
// import axios from "axios";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs } from "./actions";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


const mapStateToProps=(state)=>{
  console.log("in app")
  console.log(state);
  return {
      ...state,
      
  }
};

const App = (props)=> {
  useEffect(()=>{props.fetchSmurfs()},[''])
  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList />
        <AddForm props={props}/>
      </main>
    </div>
  );
}






export default connect(mapStateToProps,{fetchSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.