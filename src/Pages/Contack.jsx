import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Contack = () => {
    const navigate=useNavigate();
  return (
    <div>
        <h1>Contack</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus eligendi eos voluptatum obcaecati distinctio omnis earum hic placeat quos nemo nesciunt delectus culpa odit soluta, assumenda minima, voluptate facere?

        </p>
        <Link to={'/'}>Go To Home</Link>


        {/* useNavigate */}

        <button onClick={()=>navigate('/contact')}>Goto Contact</button>
    </div>
  )
}

export default Contack