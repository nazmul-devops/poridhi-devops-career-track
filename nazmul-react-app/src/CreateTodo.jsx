import { useState , useEffect} from 'react'
import axios from 'axios'

export const CreateTodo = () => {

    const [userID, setUserID] = useState("Try me! I'm a React useState hook with onChange function.")
    const [title, setTitle] = useState()
    const [status, setStatus] = useState(false)
    const [click, setClick] = useState(0)

    const handleClick = async () => {
//         fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify({
//         id: 1,
//         UserID: userID,
//         Title: title,
//         CompletionStatus: status,
//   }),
//      headers: {
//      'Content-type': 'application/json; charset=UTF-8',
//   },
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
        const body = {
            id: 1,
            UserID: userID,
            Title: title,
            CompletionStatus: status,
        }
        try {
        const response = await 
        axios.put('https://jsonplaceholder.typicode.com/postsnh/1', body)
        console.log(response.data)
        }
        catch(error) {
            console.log({error})
        }
    }

    return(
        <div>
            <h2>These contents from Create Todo page.</h2>
            <h3>{userID}</h3>
            <label htmlFor="">User ID:</label> <br />
            <input type="number" onChange={(event) => {
               const num = Number(event.target.value)
            setUserID(num);}} /> <br />
            <label htmlFor="">Title:</label> <br />
            <input type="text" onChange={(event) => setTitle(event.target.value)}/> <br />
            <label htmlFor="">Completion Status:</label> <br />
            <input type="checkBox" onChange={() => setStatus(!status)}/> <br />
            <button onClick={handleClick}>Post Data</button>
            <h3>This is a demo of React useState hook with onClick function</h3>
            <button onClick={() => setClick(click + 1)}>You Clicked me {click} times</button>
        </div>
        
    )
}