import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./page/signup";
import Home from "./page/home";
import Movie from "./page/movie";
import Details from "./page/details";
import Manage from "./page/manage";
import Update from "./page/update";

function router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/movie" element={<Movie/>}/>
            <Route path="/movie/:id" element={<Details/>}/>
            <Route path="/manage" element={<Manage />}/>
            <Route path="/manage/update/:id" element={<Update/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default router