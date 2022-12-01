import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';

const Home = () => {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/posts') 
         .then(res => res.json())
         .then(data => setPosts(data));
         //console.log(data);     
    },[])
    return (
        <div>
            <h1>Post:{posts.length}</h1>
            {
                posts.map(post =><Details key={post.id} post={post}></Details>)
            }
        </div>
    );
};

export default Home;