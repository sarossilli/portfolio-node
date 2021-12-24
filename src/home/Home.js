import React, { useState, useEffect } from "react";
import Project from "../project/Project"
import './Home.css'
import db from '../utils/firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

function Home() {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const data = await getDocs(collection(db, "posts"));
    //setPosts([item.data()])
    setPosts(data.docs)
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div className="App">
      <div class="row">
        {
          posts && posts.map(post => {
            return (
              <div class="col-sm">
                <div className="post-container">
                  <Project post={post.data()}>

                  </Project>
                </div>
              </div>
            )
          })
        }
        </div>
    </div>
  );

}

export default Home;
