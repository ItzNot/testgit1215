import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";

function App() {

    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {hello} <br/>
            <a href="/api/hello">link spring</a><br/>
            <a href="/pytest">link python</a>
        </div>
    );


}

export default App;
