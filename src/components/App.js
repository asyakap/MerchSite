import React from "react";
import './App.css';
import Header from "./Header";
import ItemControl from "./ItemControl";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Container>
      <Header />
      <ItemControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
