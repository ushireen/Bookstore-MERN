import React, { useEffect } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBookBook";
import EditBook from "./pages/EditBook";
import Home  from "./pages/Home";
import DeleteBook from "./pages/DeleteBook";

export default function App() {
  
  // useEffect(() => {
  //   axios
  //   .get("http://localhost:3000/books")
  //   .then((response) => console.log(response))
  //   .catch((error) => console.error("Error fetching data", error));
  // }, []);

  return (
    <>  
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/books/create" element={<CreateBook/>}/>
        <Route path="/books/details" element={<ShowBook/>}/>
        <Route path="/books/edit" element={<EditBook/>}/>
        <Route path="/books/delete" element={<DeleteBook/>} />
        
      </Routes>
     </Router>


    </>
  )
}

