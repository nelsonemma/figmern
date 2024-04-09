import React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from "./Components/Login";
import Home from "./Components/Home";

const App = () => {
  const Navigate = useNavigate()
  const onClickHandler = ( ) => Navigate ('/home')

  return (
    <div>

      <Login />

      <Routes>
        <Route path=" /" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element = {<Navigate to="/home"/>}></Route>
      </Routes>


      {/* <Home /> */}

    </div>
  )
}




export default App;
