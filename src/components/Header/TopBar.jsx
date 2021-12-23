import React from 'react'
import {Container,Navbar, Nav, NavItem, NavDropdown, MenuItem,} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import Protfolio from '../../containers/Portfolio/Protfolio';
import Home from '../../containers/Home/Home';
import Blog from '../../containers/Blog/Blog';
import BlogAddForm from '../../containers/Blog/BlogAddForm';
import '../Header/topbar.css'
import PortfolioAddForm from '../../containers/Portfolio/PortfolioAddForm';
import PortfolioEditForm from '../../containers/Portfolio/PortfolioEditForm';



export default function TopBar() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    const title = "FPortfolio Admin"

    return (
      <Router>
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <LinkContainer to="/">
  <Navbar.Brand>{title}</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    
      <Nav.Link as={Link} to="/">Home</Nav.Link>
    
    
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
      <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
     
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<div className='ftopbar'>
                    <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/blog' element={<Blog/>} />
                    <Route path='/portfolio' element={<Protfolio/>} />
                    <Route path='/blog/add' element={<BlogAddForm/>} />
                    <Route path='/portfolio/add' element={<PortfolioAddForm/>} />
                    <Route path='/portfolio/edit/:id' element={<PortfolioEditForm/>} />
                    </Routes>
                </div>
                
</Router>

    )
}
