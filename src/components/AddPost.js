import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function AddPost({ setPosts }) {
    let [post, setPost] = useState({
        userId: 1,
        id: uuid(),
        title: "",
        body: "",
    });

    const onChangeHandler = (e) => setPost({ ...post, [e.target.name]: e.target.value });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let posts = JSON.parse(localStorage.getItem("posts"));
        posts.push(post);
        localStorage.setItem("posts", JSON.stringify(posts));
        setPosts(posts);
        alert("Post successfull added");
        e.target.reset();
    };

    return (
        <form onSubmit={onSubmitHandler} method="POST">
            <div>
                <label>Title</label>
                <input type="text" name="title" onChange={onChangeHandler} />
            </div>
            <div>
                <label>Body</label>
                <input type="text" name="body" onChange={onChangeHandler} />
            </div>
            <button>Add Post</button>
        </form>
    );
}

export default AddPost;
