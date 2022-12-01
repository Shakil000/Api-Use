import React from 'react';
import { useHistory} from 'react-router-dom';


const Details = (props) => {
    //console.log(props);
    const history = useHistory();
    const {userId,id,title,body} = props.post;
    const btnStyle = {backgroundColor:'#f1c40f',height:'30px',width:'150px',fontSize:'20px',fontWeight:'bold',borderRadius:'5px',marginLeft:'40%'}
    const addStyle = {border: '10px solid red',backgroundColor:'gray',borderRadius:'105px',padding: '30px',margin: '10px'}
    

    const handleAddComment = (comment) => {
        const url = `/comments/${comment}`;
        history.push(url);
    }
    return (
        <div style={addStyle}>
            <p>UserId:{userId}</p>
            <p>Id:{id}</p>
            <h2>Title:{title}</h2>
            <h1>Body:{body}</h1>
            <button onClick={() =>handleAddComment(id)} style={btnStyle}>See More...</button>
        </div> 
    );
};

export default Details;