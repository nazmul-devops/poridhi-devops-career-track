import { useState , useEffect} from 'react'
import { CreateTodo } from './CreateTodo'
//import './App.css'
// import { AboutMe } from './AboutMe';
// import { ContactMe } from './ContactMe';




function App() {
  // const [count, setCount] = useState(0)
  // const [currentText, setCurrentText] = useState('You type something in the text box to see here.')
  // const [data, setData] = useState(null)
  // const [image, setImage] = useState(null)
  // const [notice, setNotice] = useState(null)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos?_limit=2')
  //     .then(response => response.json())
  //     //.then(data => console.log(data))
  //     .then(data => setData(data));
  // },[]); 
  
  // useEffect(() => {
  //   fetch('https://trmis-stage.inneedcloud.com/api/gallery/')
  //     .then(response => response.json())
  //     //.then(data => console.log(data))
  //     .then(image => setImage(image));
  // },[]); 

  // useEffect(() => {
  //   fetch('https://trmis-stage.inneedcloud.com/api/notice/?_limit=2')
  //     .then(response => response.json())
  //     //.then(data => console.log(data))
  //     .then(notice => setNotice(notice));
  // },[]);


  // function handleChange(event) {
  //   setCurrentText(event.target.value)
  // }

  return (
    <div style={{margin: "3em"}}>
      {/*  <h1>Nazmul's demo react app.</h1>
      <button onClick={ () => setCount(count +1)}>You Clicked {count} times</button>
      <br /><br />
      <input type="text" placeholder='Type Something' name="demo" id="" onChange={handleChange}/> 
      
      <p>{currentText}</p> */}

      <h2>axios API Testing</h2>
      <h3>put request axios api data</h3>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
      {data && data.map((item) => {
        return (
            <div key={item.id} style={{border: "2px dotted #666", padding: "10px", marginBottom: "1em", width: "500px"}}>
              <h3>ID: {item.id}</h3>
              <h3>Title: {item.title}</h3>
            </div>
        );
      } )}
       </div> */}
      {/* <h3>Trmis notice api data</h3>
      <pre>{JSON.stringify(notice, null, 2)}</pre>      
      <h3>Trmis image gallery api data</h3>
     <pre>{JSON.stringify(image, null, 2)}</pre>  
      <div>
      {image && image.map((item) => {
        return (
            <div key={item.id} style={{border: "2px dotted #666", padding: "10px", marginBottom: "1em", width: "500px"}}>
              <h4>ID: {item.id}</h4>
              <h4>Title: {item.title}</h4>
              <h4>Description: {item.description}</h4>
              <h4>Category: {item.category_name}</h4>
            </div>
        );
      } )}
       </div> */}
         <CreateTodo />
    </div> 
  );
}

export default App
