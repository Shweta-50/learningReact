
import { useEffect, useState } from 'react';
import './App.css';
import { formatDate } from './utils/utils';

function App() {
  const [data,setData] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
        try {
          const method = "POST";
          const formData = [{name:""}]
          const header = {authorization:"sgds",}
          const res = await fetch("url",method,data)

        } catch (error) {
          console.log("Error",error);
        }
    }
  },[])

  return (
    <div className="App">
     <h1>Hello React JS 
      <div>
      {
        formatDate("09-10-2024 06:41")
      }
      </div>

     </h1>
    </div>
  );
}

export default App;
