import React from 'react';

// import './HelloWorld.css'; // CSS
import './HelloWorld.scss'; // SASS

export default function HelloWorld(props) {

    const { userData: { name, age, profession, country }, sayHello } = props;

    const user = { name, age, profession, country };

    return (
        <div className="hello-world">
            <p className="full-name">Name: {name}</p>
            <p className="profession">Profession: {profession}</p>
            <button onClick={ () => sayHello(user) }>Hello !</button>
        </div>
    )
}