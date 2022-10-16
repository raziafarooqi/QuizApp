import React,{useState} from 'react';
import{useEffect} from 'react';
import './Quiz.css';

import CircularProgress from '@mui/material/CircularProgress';

function Quiz({name,question}) {
    const[options,setOptions]=useState([]);
    const[currentques,setcurrentQues]=useState(0);
    let array1=[]
    useEffect(()=>{
    array1=Object.entries(question);
    
      //array1=array1[0][1][currentques];
      console.log("in effect",array1[0])  ;
      array1=array1[0]
      setOptions(array1)
      
     },[question])
  return ( 
    <div>
    <div className='quizName'>
      <div style={{borderBottom:'2px solid black'}}>{`Welcome ${name}`}</div>
     <span>{options?(<>{JSON.stringify(options[1][0].category)}</>):(<CircularProgress/>)}
        </span> 
      
      </div>
    </div>
  )
}

export default Quiz
