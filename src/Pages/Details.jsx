import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams ,useLocation} from 'react-router-dom'

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

const Details = () => {

    const navigate=useNavigate()
    const location=useLocation();

    console.log(location)

    const [mern ,setMern]=useState(mernStack);
    const [detailsData, setDetailsData]=useState({});

    const  {name}=useParams()


    useEffect(()=>{

        const detailsData=mern.filter((item)=> item.name === name);
        setDetailsData(detailsData[0]);

    },[name])
  return (
    <div>
        <h1>Details</h1>
        <h1>{detailsData.name}</h1>
        <h2>{detailsData.type}</h2>
        <p>{detailsData.description}</p>
        <a href={`${detailsData.url}`}>url</a>


        <button onClick={()=>navigate('/contact')}>Goto Contact</button>

        <p>{location.state.description}</p>
        <p>{location.state.name}</p>
        <p>{location.state.type}</p>
    </div>
  )
}

export default Details