import React,{useState,useEffect} from "react";
import Project from "../project/Project"
import './Home.css'
import db from '../utils/firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

function Home() {
    const [posts,setPosts]=useState([])

    const fetchPosts=async()=>{
        const data = await getDocs(collection(db, "posts"));
      data.docs.forEach(item=>{
        console.log(item);
        setPosts([item.data()])
      })
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <div className="App">
          {
            posts && posts.map(post=>{
              return(
                <div className="post-container">
                    <Project post={post}>
                      
                    </Project>
                </div>
              )
            })
          }
        </div>
      );
}

export default Home;
