import React, { Component } from 'react'
//import axios from 'axios'
//import {getPosts} from './service'
import { getAll, getOne } from './data';



export default function List () {

   const [loading, setLoading] = React.useState(false);   
   const [posts, setPosts] = React.useState([]);

   const initialUrl = `/api/post`;
    



   
   React.useEffect(() => {
    async function fetchData() {
      let response = await getAll(initialUrl);
      console.log(response);
     // setNextUrl(response.next);   https://apidbmongo.herokuapp.com/
     // setPrevUrl(response.previous);
     // await loadingPokemon(response.results);
      setPosts(response);
      setLoading(false);
  }
  fetchData();
  }, []);
  


 



    return (
      <div >
      <div className="col-md-6 offset-md-3">
         <div className="card card-body">
           <h4>Create a Note</h4>
             <form >
          
          {/* Name */}
          <div className="form-group">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  
                  name="title"
                 
                  required />
          </div>
          {/* surname */}
          <div className="form-group">
               <input
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                  name="description"
                 
                  required />
          </div>

          
        
          <button className="btn btn-primary">
              Save <i className="material-icons">
                  assignment
                   </i>
          </button>
      </form>
  </div>
</div>

      {
posts.map(post => (
    <article className="product" key={post._id}>
    <div className="img-container">
      <img src={post.image} alt={post.title || "default title"} />
    
    </div>
    <div className="product-footer">
      <p className="product-title">{post.title || "default title"}</p>
      <p className="product-price">${post.price || 0}</p>
    </div>
  </article>
  ))
}
        </div>





    )
}
