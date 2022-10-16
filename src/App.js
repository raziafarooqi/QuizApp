import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Quiz from './components/quiz/Quiz';
import Result from './components/Result/Result'
import { useState } from 'react';
import axios from 'axios';
function App() {
  const[name,setName]=useState("");
  const[question,setQuestions]=useState([])
//   const fetchQuestion=async(category="",difficulty="")=>{
//    const{data}= await(axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`} ${difficulty && `&difficulty=${difficulty}`}&type=multiple`))
// console.log(data);
//   }
const fetchQuestion=async(category='',difficulty='')=>{
 const{data}= await (axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`))
console.log(data);
setQuestions([data.results]);
console.log(question)
}
  return (
<BrowserRouter>
    <div className="App">
    
    
      <Routes>
        <Route path="/" element={<Header/>}>
        <Route index element={<Home name={name} setName={setName} fetchQuestion={fetchQuestion}/> }></Route>
        <Route path="/quiz" element={<Quiz name={name} question={question}/> }></Route>
        <Route path="/result" element={<Result/> }></Route>
        </Route>
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
