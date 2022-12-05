import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css'
import Page from'./Page'
 const App =()=>{
  const[data,setData]=useState([]);
  const [perpage,setPerpage]=useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      res=>{setData(res.data);setPerpage(res.data.slice(0,10));}
    )
  },[])
  const pageHandler=(pageNumbers)=>{
   setPerpage(data.slice((pageNumbers*10)-10,pageNumbers*10));
  }
  return(
    <div className="App">
      {data.length>=1?
      <div>
        {perpage.map(post=><div>{post.title}</div>)}
        <Page data={data} pageHandler={pageHandler}/>
    </div>
    :
    <p>Data Not Loaded</p>
    
    }
    </div>
  )

 }
 export default App
