
import React from "react"
import {Container,Navbar,Form,Button} from 'react-bootstrap';
import "./MainNavbar.css";
import ReactStars from "react-rating-stars-component";

function MainNavbar({search,handleSearch,rating,handleRating,handleModal}) {
    return (
        <div className="Nav">
             <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="data:image/png;base64,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"
          width="60"
          height="40"
          className="d-inline-block align-top"
        />{'  '}
      Movies liste 
      <Button className="button" onClick={handleModal}>AddMovies</Button>
      </Navbar.Brand>
        </Container>
        <Form className="d-flex"
        >
        <input 
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={search}
          onChange={handleSearch}
        />
        <Button className="buts" variant="outline-success">Search</Button> 
         
       <div className="star"> <ReactStars 
         count={5}
         size={24} 
         value={rating}
         onChange={handleRating}
         isHalf={false}
         emptyIcon={<i className="far fa-star"></i>}
         halfIcon={<i className="fa fa-star-half-alt"></i>}
         fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700" />
          
          </div> 
      </Form>
     
        </Navbar>
    


        </div>
    )
}

export default MainNavbar
