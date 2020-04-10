import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=42de2bd7c4f54870ac8827df9314866f`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles);
      
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de noticias"/>
      <div className="container white">
        <Form
          setCategoria={setCategoria}
        />

        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
