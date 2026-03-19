import { useState, useEffect} from 'react'


function App() {
  const [title, setTitle] = useState('');

    useEffect(() => {
     console.log('Mounted', title);
    })
    return (
        <div className='App'>  
            <input 
                value={title} 
                onChange={e => setTitle(e.target.value)}
            />

        </div>
    );
}
export default App
