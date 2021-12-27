import ReactStars from "react-rating-stars-component";
 import "./Filter.css"
 const Filter= ({ movies}) => {

     return (
         <div className="acc">
            {movies.map(Filter =>{
 return(
     <div className="acc">
         <img className="img" src={Filter.image}/>
         <h4 className="name">{Filter.title}</h4>
         <h5 className="date"> {Filter.date} </h5>
         <div className="rate">
         <ReactStars
         count={5}
         value={Filter.rate}
         size={24}
         isHalf={false}
         edit={false}
         emptyIcon={<i className="far fa-star"></i>}
         halfIcon={<i className="fa fa-star-half-alt"></i>}
         fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700" />
         </div>
  </div>
 )
     })}
         </div>
     ) 
 }
 
 export default Filter
 