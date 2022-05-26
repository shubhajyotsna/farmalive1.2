import React from "react";
import Navbar from "../../components/Navbar";
import Axios from "axios";
import AppBar from '@mui/material/AppBar';//
import "../../App.css";
import { useState } from "react";
import { Stocks } from "./Stock";
import Crops from "./crops";
import Shop from "./Shop";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Register from "/Users/joshuasatlin/Documents/GitHub/untitled folder/farmalive/src/pages/register.js";

// import Table from "react-bootstrap/Table";

import {
  Card,
  //Navbar,
  Form,
  Row,
  Col,
} from "react-bootstrap";

function Home() {

  return (
    <div>
      <Navbar />
       
      <header>
        <div >
          <center>
            <p className="card-category">Welcome to Home Page</p>
          </center>
        </div>
      </header>

      <Crops />
      <br></br>
      <br></br>
      <br></br>
     
      <Card.Header>
          <Card.Title>
          <AppBar position="static">
            {/* <header className="App-header"> */}
              {/* <div className="Reg"> */}
                <center>
                  <h2>Machine Booking</h2>
                </center>
              {/* </div> */}
            {/* </header> */}
            </AppBar>
          </Card.Title>
        </Card.Header>
      

      <thead>
        <tr>
          <th className="border-0">machine1</th>
          <br></br>
          <th className="border-0">machine2</th>
          <br></br>
          <th className="border-0">machine3</th>
          <br></br>
          <th className="border-0">machine4</th>
          <br></br>
          <th className="border-0">machine5</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {" "}
            <img
              style={{
                justifyContent: "space-around",
                display: "flex",
                width: "200px",
                height: "200px",
                borderRadius: "80px",
                padding: "30px",
              }}
              src="https://images.unsplash.com/photo-1621884615781-6efdf78611dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWluZyUyMG1hY2hpbmVzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            />
          </td>
          <br></br>
          <td>
            {" "}
            <img
              style={{
                justifyContent: "space-around",
                display: "flex",
                width: "200px",
                height: "200px",
                borderRadius: "80px",
                padding: "30px",
              }}
              src="https://images.unsplash.com/photo-1631364963450-cca219396903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybWluZyUyMG1hY2hpbmVzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            />
          </td>
          <br></br>
          <td>
            {" "}
            <img
              style={{
                justifyContent: "space-around",
                display: "flex",
                width: "200px",
                height: "200px",
                borderRadius: "80px",
                padding: "30px",
              }}
              src="https://media.istockphoto.com/photos/farmer-with-tractor-seeding-crops-at-field-picture-id492774776?b=1&k=20&m=492774776&s=170667a&w=0&h=5XxXlsYeRJN-VoEQw2egPjvecGEaYitPGp0w3B6NS50="
            />
          </td>
          <br></br>
          <td>
            {" "}
            <img
              style={{
                justifyContent: "space-around",
                display: "flex",
                width: "200px",
                height: "200px",
                borderRadius: "80px",
                padding: "30px",
              }}
              src="https://media.istockphoto.com/photos/harvesting-picture-id182855744?s=612x612"
            />
          </td>
          <br></br>
          <td>
            {" "}
            <img
              style={{
                justifyContent: "space-around",
                display: "flex",
                width: "200px",
                height: "200px",
                borderRadius: "80px",
                padding: "30px",
              }}
              src="https://images.unsplash.com/photo-1635351461869-d04f9310f38c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFncmljdWx0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            />
          </td>
          <br></br>
        </tr>
      </tbody>

      <br></br>
      <br></br>
      <br></br>
      {/* <AppBar position="static">
      <Card.Header>
        <Card.Title>
          <center>
         <h2>BOOK NOW!</h2>
         </center>
        </Card.Title>
      </Card.Header>
      </AppBar>
      <Stocks /> */}
      <Card.Body
        style={{
          color: "blue",
          fontsize: "50px",
          fontFamily: "Bodoni 72 Oldstyle",
          justifyContent: "space-around",
          display: "flex",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
          borderTop: "1px solid grey",
          borderLeft: "10px solid grey",
          borderRight: "10px solid grey",
        }}
      >
        
      </Card.Body>
      <Shop/>
    </div>

  );
}

export default Home;
