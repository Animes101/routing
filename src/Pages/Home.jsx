import { useCallback, useMemo, useState } from "react"
import User from "./User";

const Home = () => {
  const [count, setCount]=useState(0);
  const [toggle, setToggle]=useState(false);

  console.log('render')

  const handleIncrement=useCallback(
    ()=>{
    setCount((prev)=> prev +1);

  }
  )

 const calculatedNumber=useMemo(()=>{

   let number=0;
  for(let x=0; x<5000000000; x++){
    
    number++
  }

  return number
 },[])

  return (
    <div>
        <h1>Home</h1>
        <h6>{calculatedNumber}</h6>
        <h2>{count}</h2>
        <p>{toggle ? 'ýes': 'No'}</p>
        <button onClick={()=>setToggle(!toggle)}>toggle</button>
        <User count={count}  handleIncrement={handleIncrement}/>
    </div>
  )
}

export default Home;