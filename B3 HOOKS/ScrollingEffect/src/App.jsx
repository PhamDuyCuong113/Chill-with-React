import { useState, useEffect} from 'react'  

const tabs = ["users", "comments", "albums"];

function App() {
    const [users, setUsers] = useState([]);
    const [key, setKey] = useState("");
    const [type, setType] = useState("users");
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [words, setWords] = useState("");

    useEffect(()=>{
      console.log("Type change");
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(data => setUsers(data))
    },[type]);

    // const handleChange = (e) =>{
    //   setKey(e.target.value);
    // }
    useEffect(()=>{
      console.log('Scrolling');
      const handleScroll = ()=>{
        if (window.scrollY > 20) {
            setShowGoToTop(true);
        }else {
            setShowGoToTop(false);
        }
      }
      window.addEventListener('scroll',handleScroll );

      // return () => {
      //   window.removeEventListener('scroll', handleScroll);
      // };
    },[]);

    const handleClick= () =>{
      setShowGoToTop(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
    const handleChange = (e) =>{
      setWords(e.target.value)
    }

    return(
      <div>
        <h1>DANH SÁCH</h1>
        <input value ={words} onChange={handleChange}/>
        {tabs.map(tab => (
          <button 
            key={tab} 
            style={type=== tab ? {color:'#333', backgroundColor :'#fff'}:{}}
            onClick={()=>setType(tab)}>{tab}
          </button>
        ))}
        
        <ul>  
          {users.map(user => {
            const text = (user.name || user.title || "").toLowerCase();
            return (
              text.includes(words.toLowerCase()) &&<li key={user.id}>{user.id} : {user.title||user.name} </li>
            );
          })}
        </ul>

        {
          showGoToTop && 
          <button 
            value={showGoToTop} 
            onClick={handleClick}
            style={{
              position : 'fixed',
              bottom: 20,
              right:20

            }}
          >
            Go to top
          </button>
        }

      </div>
    );
}

export default App
