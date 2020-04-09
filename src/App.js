import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [categoria, setCategoria] = useState('');
  return (
    <Fragment>
      <Header titulo="Buscador de noticias"/>
      <div className="container white">
        <Form
          setCategoria={setCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
