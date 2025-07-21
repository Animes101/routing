import React from 'react'
import { useState } from 'react'
import { Link,useSearchParams} from 'react-router-dom'



const Contack = () => {
  const [searchParems, setSearchParems]=useSearchParams();
  const [users, setUsers]=useState({name:'',age:''});
  const {name,age}=users;


  const handleChange=(e)=>{

    const {name,value}=e.target


    setUsers({...users,[name]:value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newUser={
      name,
      age,
    }

    console.log(newUser)
    setSearchParems({name:name, age:age})

    setUsers({name:'', age:''})


  }


  return (
    <div>
        <h1>Contack</h1>
        
        <form onSubmit={handleSubmit} action="">
          <input onChange={handleChange} value={name} type="text" name="name" placeholder='Name' id="" />
          <input onChange={handleChange} value={age} type="number" name="age" placeholder='Age' id="" />
          <button>Submit</button>
        </form>
        <Link to={'/'}>Go To Home</Link>
        <div>
          <h1>{searchParems.get('name')}</h1>
          <h1>{searchParems.get('age')}</h1>
        </div>

        
    </div>
  )
}

export default Contack