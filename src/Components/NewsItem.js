import React from 'react'

const NewsItem=(props)=>{
 
  
       let {title,description,publishedAt,author,date,imageUrl,source,newsUrl}=props;
    return (
      <div>
          <div className="card border border-warning rounded" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQt-ded68co0iix18lDzoVanoIucOtjIU_396S32NXA&s":imageUrl} className="card-img-top" alt="..."></img>
          <div className="card-body">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
           style={{left:"92%",ZIndex:"1"}}>
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn btn-sm btn-primary">Read more </a>

         </div>
    </div> 

      </div>
    )
  
}
 
export default NewsItem
