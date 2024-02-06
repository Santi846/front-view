import React from 'react';
import axios from 'axios';

export class Prueba extends React.Component {

    state = {
    pruebas: [],
  }

  

  componentDidMount() {
    const apiUrl = import.meta.env.VITE_API_URL;

    // axios.get(`http://127.0.0.1:8000/`)
    axios.get(`${apiUrl}`)
      .then(res => {
        const pruebas = res.data;
        this.setState({ pruebas });
      })
  }

  render() {
    return (
      <>
      <ul>
        {
          this.state.pruebas
            .map(prueba =>
              <>
              <li key={prueba.id}>{prueba.title}<button>Edit</button><button>Delete</button></li>
              
              </>
            )
        }
      </ul>
      
      </>
    )
  }
}