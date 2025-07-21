import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const mernStack = [
  {
    name: "MongoDB",
    type: "Database",
    description: "A NoSQL document database used to store application data as JSON-like documents.",
    url: "https://www.mongodb.com/"
  },
  {
    name: "Express.js",
    type: "Backend Framework",
    description: "A fast, minimalist web framework for Node.js to build APIs and web applications.",
    url: "https://expressjs.com/"
  },
  {
    name: "React.js",
    type: "Frontend Library",
    description: "A JavaScript library for building user interfaces, developed by Facebook.",
    url: "https://reactjs.org/"
  },
  {
    name: "Node.js",
    type: "Runtime Environment",
    description: "A JavaScript runtime built on Chrome's V8 engine that allows running JS on the server.",
    url: "https://nodejs.org/"
  }
];

const Blogs = () => {
  const [stack, setStack]=useState(mernStack);

  const trancket=(str,numb)=>{
    if(str.length > numb){
      return str.slice(0,numb)+ '...'
    }else{
      return str;
    }

  }


  return (
    <div>
      <h1>Blogs</h1>
      {stack.map((item)=>{
        const {name,type,description,url}=item;
        return(
          <div key={name}>
            <h1>{name}</h1>
            <h3>{type}</h3>
            <p>{trancket(description,10)}</p>
            <Link to={name} >Learn More</Link>
            <a target='_blank' href={`${url}`}>Resorch</a>


          </div>
          
        )
      })}
    </div>
  )
}

export default Blogs