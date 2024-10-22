import React, { useEffect } from 'react';
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBookBook";
import EditBook from "./pages/EditBook";
import Home  from "./pages/Home";
import DeleteBook from "./pages/DeleteBook";

const  App = () => {
      return (    
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/books/create" element={<CreateBook />}/>
        <Route path="/books/details/:id" element={<ShowBook />}/>
        <Route path="/books/edit/:id" element={<EditBook />}/>
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        
      </Routes>
     
  );
};
export default App;


// useEffect(() => {
  //   axios
  //   .get("http://localhost:3000/books")
  //   .then((response) => console.log(response))
  //   .catch((error) => console.error("Error fetching data", error));
  // }, []);