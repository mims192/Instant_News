import React from 'react';

function Newsitem(props) {
  return (
    <div className="my-3">
      <div className="card   mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ width: '18rem',backgroundColor:"black",color:"white" }}>
        <img src={props.imgurl ? props.imgurl : 'https://static.toiimg.com/photo/109885795.cms'}  className="card-img-top" alt="..." />
        <div  className="card-body">
          <h5 style={{ marginBottom: '5px' }} className="card-title">{props.title}...</h5>
          <p style={{ marginBottom: '10px' }} className="card-text">{props.description}...</p>
          <p className="card-text"><small >By {props.author?props.author:"unknown"} on {new Date(props.date).toGMTString()}</small></p>
          <a rel="noreferrer"  href={props.newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a> {/* btn -sm added */}
        </div>
      </div>
    </div> 
  );
}

export default Newsitem;

/* target="_blank" opens that link in new page*/
{/* btn -sm added    btn primary ko btn-dark kroge toh sare button dark ho jayenge
video no. 32 mai source*/}
