import React from 'react';
import './App.css';
import 'bootswatch/dist/darkly/bootstrap.min.css'

// import HelloWorld from './components/HelloWorld/HelloWorld';
import BasicLayout from './components/BasicLayout';
import Form from './components/Form';

// import styles from './css/ButtonError.module.css' // CSS Module

function App() {

  //TODO: User Object for HelloWorld Component example
  // const user = {
  //   name: 'Miguel Mendoza',
  //   age: 25,
  //   profession: 'Frontend Developer',
  //   country: 'Venezuela'
  // }

  //TODO: SayHello Function for HelloWorld Component example
  // const sayHello = (user) => {
  //   console.log(`Hola ${user.name}, tiene ${user.age} años de edad y es de ${user.country}. Su profesion es ${user.profession}`);
  // }

  return (
    <div className="App">
      <BasicLayout>
        <div className="App-header">
          <h2 className="full-name">Formulario</h2>
          <Form />
        </div>
      </BasicLayout>
    </div>
  );
}

export default App;
