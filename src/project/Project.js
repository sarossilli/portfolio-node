
import React from "react";
import './Project.css'
import Card from 'react-bootstrap/Card';
function Project({title,text}) {
    return (
        <div>
        <Card className="card mt-4 shadow bg-white rounded">
            <h1>{title}</h1>
            <img className="img-fluid rounded p-1" src="https://via.placeholder.com/700x500" width='500' height='700'/>
            <p1>{text}</p1>
        </Card>
        </div>
    );
}

export default Project;
