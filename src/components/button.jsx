import React from 'react';
import axios from 'axios';

export class Button extends React.Component {

    state = {
    pruebas: [],
  }

  

  componentDidMount() {
    axios.get(`http://127.0.0.1:8006/`)
      .then(res => {
        const pruebas = res.data;
        this.setState({ pruebas });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.pruebas
            .map(prueba =>
              <li key={prueba.id}>{prueba.title}</li>
            )
        }
      </ul>
    )
  }
}