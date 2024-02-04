import { useEffect, useState } from 'react';
import axios from 'axios';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Button} from '../src/components/button'

function App() {
  // const [count, setCount] = useState(0)
  
  // const [data, setData] = useState([]);

    // const apiUrl = import.meta.env.VITE_API_URL;
    // const apiUrl = 'http://127.0.0.1:8000';

    // one way ////////////////////////////////////////////
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('http://127.0.0.1:8000');
    //             setData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);


    // another way ////////////////////////////////////////////

    // useEffect(() => {
    //       const fetchData = async () => {
    //           try {
    //               const response = await axios.get(apiUrl);
    //               setData(response.data);
    //           } catch (error) {
    //               console.error('Error fetching data:', error);
    //           }
    //       };
  
    //       fetchData();
    //   }, []);

  // another way ////////////////////////////////////////////

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       fetch(`${apiUrl}`)
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  //       .catch(error => console.error('Error fetching data:', error));
      
  //     };

  //     fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${apiUrl}`);
  //       setData(response);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [apiUrl]);

  return (
    <>
      <div className="main_container">
        <h1 id="title">
          Home Page
        </h1>
        <h2 id="sub_title">
          Get Data
        </h2>
        <Button></Button>
        {/* {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))} */}
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
