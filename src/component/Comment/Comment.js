import React from "react";
import {useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Comment = (props) => {
    //console.log(props)
    const addStyle = {
        //margin:'auto',
        //padding:'auto',
        //alignItems: 'center',
        marginLeft: '0%',
        border: '10px solid red',
        borderRadius: '105px',
        padding:"30px"
    }
    const {cComment} = useParams();
    const [comment,setComments] = useState([]);
    const {postId,id,name,email,body} = comment;
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/comments/${cComment}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setComments(data)
            //console.log(comment);
        })
        //https://jsonplaceholder.typicode.com/posts
       // https://jsonplaceholder.typicode.com/comments
    },[]) 
    
    return (
        <div style={addStyle}>
            <h1>All comment's are here:{cComment}</h1>
            <h1>PostId:{postId}</h1>
            <h1>User Id:{id}</h1>
            <h1>Name:{name}</h1>
            <h1>Email:{email}</h1>
            <p><h1>Comment:</h1>{body}</p>

        </div>
    );
};

export default Comment;