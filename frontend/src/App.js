import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";

function App() {

    let [hello, setHello] =  useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다22222123 : {hello} <br/>
            <a href="/api/hello">link spring</a><br/>
        </div>
    );


}

export default App;
