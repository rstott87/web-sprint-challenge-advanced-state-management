import React from 'react';
import Smurf from './Smurf';
import { useState} from 'react';
import { connect } from 'react-redux';





 const SmurfList = (props)=> {
 
    const isLoading = props.isLoading;
    const testSmurf = {
        id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        name:'Poppa Smurf',
        position:'Village Leader',
        nickname: 'Pops',
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }
    
    // ATTEMPTING TO DEBUG WHY OBJECT WONT MAP!!!!
    // const smurfs = props.props.smurfs;
    // console.log(typeof smurfs)
    // console.log(smurfs)
    //console.log(Object.keys(smurfs))
    
//     const listSmurfs = Object.keys(smurfs).map((smurf, index) =>
//     <Smurf key={index}
//          value={smurf} />
//   );

 console.log(typeof props.smurfs);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        <Smurf smurf={testSmurf}/>
    </div>);
}

const mapStateToProps = (state) => {
    return {
        smurfs: [{
            
        }]
    }
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.