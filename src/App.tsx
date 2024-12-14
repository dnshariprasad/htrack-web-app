import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddNote from "./pages/AddNote";
import NoteList from "./pages/NoteList";
import NoteDetail from "./pages/NoteDetail";
import styled from "styled-components";
import {
  PAGE_HOME,
  PAGE_NOTE_ADD,
  PAGE_NOTE_DETAIL,
  PAGE_NOTE_EDIT,
} from "./constants";

const Navbar = styled.nav`
  padding: 15px 20px; /* Adjust padding as needed */
  background-color: #f8f9fa; /* Optional: Background color */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Subtle shadow */
`;

const App: React.FC = () => {
  return (
    <Router>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            HtracK
          </Link>
          <div>
            <Link to="/add" className="nav-link d-inline-block">
              Add Note
            </Link>
          </div>
        </div>
      </Navbar>
      <Routes>
        <Route path={PAGE_HOME} element={<NoteList />} />
        <Route path={PAGE_NOTE_ADD} element={<AddNote />} />
        <Route path={PAGE_NOTE_DETAIL} element={<NoteDetail />} />
        <Route path={PAGE_NOTE_EDIT} element={<AddNote />} />
      </Routes>
    </Router>
  );
};

export default App;
