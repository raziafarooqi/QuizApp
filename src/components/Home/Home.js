 
import React,{useState} from 'react'
import './Home.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Categories from '../../Data/Catagories';
import { Button } from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Error from '../Error';
function Home({name,setName,fetchQuestion}) {
  const navigate=useNavigate()
  const[category,setCategory]=useState('');
  const [difficulty,setDifficulty]=useState('');
  const[error,setError]=useState(false);
  
  const handleSubmit=(e)=>{
    if(!category || !difficulty || !name)
    {setError(true);
    return;
    }
    else{
    setError(false);
    fetchQuestion(category,difficulty);
    navigate("/quiz")
    }

  }
  return (
    <div>
    <div className='main-div'>
    
    <div  className='myform'>
    <span className="quiz-title">quiz settings</span>
    {error?<Error> "please fill all the fields"</Error>:''}
    <TextField label="enter your name" variant="outlined" style={{marginBottom:'10px'}} fullWidth
    onChange={(e)=>setName(e.target.value)}></TextField>
    <TextField onChange={e=>{setCategory(e.target.value)}} value={category}
    label="select category" select variant="outlined" style={{marginBottom:'10px'}} fullWidth >

{Categories.map((option) => (
            <MenuItem key={option.category} value={option.value}>
              {option.category}
            </MenuItem>
          ))}

    </TextField>
    <TextField onChange={(e)=>{setDifficulty(e.target.value)}} value={difficulty}
    label="select difficulty" select variant="outlined" fullWidth style={{marginBottom:'10px'}}>
      
        <MenuItem key="Easy" value="easy">Easy</MenuItem>
        <MenuItem key="Medium" value="medium">Medium</MenuItem>
        <MenuItem key="Tough" value="tough">Tough</MenuItem>
      
    </TextField>
    <Button variant="contained" color="secondary" className="startQuiz" size="large"
    onClick={handleSubmit}>Start Quiz</Button> 
    </div>
    <img src="./coverpic.svg" className='picture'/>
   </div>
   
    </div>
  )
}

export default Home
