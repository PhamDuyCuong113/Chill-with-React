import { useState, useEffect} from 'react'
import Content from './Content.jsx'

const tabs = ["posts", "comments", "users"];

function App() {
    const [title, setTitle] = useState("");
    const [show, setShow] = useState(false);
    const [users, setUsers] = useState([]);
    const [type, setType] = useState("users");
    
    useEffect(() => {
        document.title = title;
        console.log({type});
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [type]);

    const handleShow    = () => {
        setShow(!show);
    } 
    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    return (
        <div >  
            <button onClick={handleShow}>SHOW</button>
            {show && <Content />}
            <input type="text" value={title} onChange={handleChange} placeholder="Enter title..." />
            {tabs.map(tab => (
                <button 
                    key={tab} 
                    style={type === tab ? {
                        color : '#fff',
                        backgroundColor : '#333'
                    } : {}
                    }
                    onClick={() => setType(tab)}>
                
                    {tab}
                </button>
            ))}]
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.id} : {user.name || user.title}</li>
                ))}
            </ul>
            
        </div>
    );
}
export default App
