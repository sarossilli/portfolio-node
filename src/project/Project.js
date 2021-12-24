import React from "react";
import './Project.css'
import Card from 'react-bootstrap/Card';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import db from '../utils/firebase'
const storage = getStorage();

function Project({ post }) {
    return (
        <div>
            <Card className="card mt-4 shadow bg-white rounded">
                <h1>{post.Title}</h1>
                <img className="img-fluid rounded p-1" src={post.img}/>
                <p>{post.Text}</p>
            </Card>
        </div>
    );
}

export default Project;
