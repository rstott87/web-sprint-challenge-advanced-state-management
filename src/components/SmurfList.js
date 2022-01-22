import React from 'react';
import Smurf from './Smurf';
import { useState} from 'react';
import { connect } from 'react-redux';





 const SmurfList = (props)=> {
const smurfArray = (props.smurfs)
// console.log(Array.isArray(smurfArray));

 
    const isLoading = props.isLoading;
    const testSmurf = {
        id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        name:'Poppa Smurf',
        position:'Village Leader',
        nickname: 'Pops',
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }
    


    //coditionally rendering block of code -
    // Necessary due to asynchronous nature of fetching data from API

    if (isLoading) {
        return <h1>Loading...</h1>;
    } 
    else if (smurfArray)  {
        const mappedSmurfs=smurfArray.map(((smurf)=>
                <Smurf key={smurf.name} smurf={smurf} />
            )
        )   
        return (<div className="listContainer">
            <ul>{mappedSmurfs}</ul>
                    {/* <Smurf smurf={testSmurf}/> */}
            </div>);
        }
    else {
        return(<div className="listContainer">

            <Smurf smurf={testSmurf}/>
        </div>);
    }
        
    

    // return(<div className="listContainer">
    //     {/* <ul>{mappedSmurfs}</ul> */}
    //     {/* <Smurf smurf={testSmurf}/> */}
    // </div>);
}

const mapStateToProps = (state) => {
   // og(state.smurfs.map((e)=>e));

    return {
        ...state,
    }
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.