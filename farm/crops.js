import React from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';//
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import  Button  from '@mui/material/Button';
import { Card, Form, Row, Col } from "react-bootstrap";
import { Container } from "@mui/material";
import TextField from '@mui/material/TextField';

// export const Crops = () => {
const Crops = () => {
  //   return function Crops() {
  const [crop_name, setcrop_name] = useState("");
  const [land_size, setland_size] = useState(0);
  const [irrigation, setirrigation] = useState("");
  const [month_plow, setmonth_plow] = useState("");

  const [CropList, setCropList] = useState([]);

  const addCrop = () => {
    Axios.post("http://localhost:3001/createcrops", {
      crop_name: crop_name,
      land_size: land_size,
      irrigation: irrigation,
      month_plow: month_plow,
    }).then(() => {
      setCropList([
        ...CropList,
        {
          crop_name: crop_name,
          land_size: land_size,
          irrigation: irrigation,
          month_plow: month_plow,
        },
      ]);
    });
  };
  useEffect(() => {
    return () => {
      Axios.get("http://localhost:3001/Cropsdata").then((response) => {
        setCropList(response.data);
      });
    };
  }, []);

  const getCrops = () => {};

  return (
    <>
      <Container>
        <Card.Header>
          <Card.Title
            as="h4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            CURRENT CROPS IN FARM
          </Card.Title>
        </Card.Header>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650}} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell>Key</TableCell> */}
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">size_of_land</TableCell>
                <TableCell align="center">Irrigation type</TableCell>
                <TableCell align="center">Month Plowed</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {CropList.map((res) => (
                <TableRow
                  key={res.key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
              {row.name}
            </TableCell> */}
                  <TableCell align="center">{res.id}</TableCell>
                  <TableCell align="center">{res.crop_name}</TableCell>
                  <TableCell align="center">{res.land_size}</TableCell>
                  <TableCell align="center">{res.irrigation}</TableCell>
                  <TableCell align="center">{res.month_plow}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <br></br>
        <br></br>
        <br></br>
        <Card.Header>
          <Card.Title>
          <AppBar position="static">
            {/* <header className="App-header"> */}
             <div className="Reg"> 
                <center>
                  <h2>Crop Registration</h2>
                </center>
              </div> 
            {/* </header> */}
            </AppBar>
          </Card.Title>
        </Card.Header>
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
          <Form>
          <TextField  variant="outlined" 
              label="Crop Name:"
              input
                type="text"
                onChange={(event) => {
                  setcrop_name(event.target.value);
                }}
          />
          <br></br>
          <TextField  variant="outlined" 
              label="Land Size:"
              input
                type="int"
                onChange={(event) => {
                  setland_size(event.target.value);
                }}
              
          />
          <br></br>
          <TextField  variant="outlined" 
              label="Type of Irrigation"
              input
                type="text"
                onChange={(event) => {
                  setirrigation(event.target.value);
                }}
              
          />
          <br></br>
          <TextField  variant="outlined" 
              label="Month Plowed"
              input
                type="text"
                onChange={(event) => {
                  setmonth_plow(event.target.value);
                }}
            />
            <div className="regbutton">
              <center>
                <br></br>
                <Button variant="contained" onClick={addCrop}>Update</Button>
              </center>
            </div>
            <div className="clearfix"></div>
          </Form>
        </Card.Body>
      </Container>
    </>
  );
  //   };
};

export default Crops;
