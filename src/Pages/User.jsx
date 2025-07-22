import React, { useState, useEffect } from 'react';

const User = () => {
  const [student, setStudent] = useState();

  useEffect(() => {
    fetch('http://localhost:5101/student')
      .then((res) => res.json()) // ✅ এখানে () দিতে হবে
      .then((data) => setStudent(data)) // ✅ student key থেকে array ধরছি
      .catch((err) => console.error('Fetch error:', err));
  }, []);



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
            </div>
        )
      })}

    </div>
  );
};

export default User;