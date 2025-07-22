import React, { useState, useEffect, memo } from 'react';

const User = ({handleIncrement,count}) => {
  const [student, setStudent] = useState();

  console.log('render memo')

  useEffect(() => {
    fetch('http://localhost:5101/student')
      .then((res) => res.json()) // ✅ এখানে () দিতে হবে
      .then((data) => setStudent(data)) // ✅ student key থেকে array ধরছি
      .catch((err) => console.error('Fetch error:', err));
  }, []);


  const handleClick=()=>{
    handleIncrement();

  }


  return (
    <div>
      <h2>Users</h2>
      {student?.map((item)=>{
        const {name,age,course,email}=item
        return(
            <div key={name}>
                <h1>{name}</h1>
                <p>{age}</p>
                <p>{email}</p>
                <h3>{course}</h3>


<h1>{count}</h1>
                <button onClick={handleClick}>+</button>
            </div>
            
        )
      })}

    </div>
  );
};

export default memo(User);