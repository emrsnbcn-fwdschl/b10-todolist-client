import React, { useState } from "react";

function EditPost({ setEditing, post, setPosts }) {
    const [updatedPost, setUpdatedPost] = useState({
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body,
    });

    const onChangeHandler = (e) => {
        setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let posts = JSON.parse(localStorage.getItem("posts"));

        posts = posts.map((post) => {
            if (post.id === updatedPost.id) return { ...post, ...updatedPost };
            return post;
        });

        localStorage.setItem("posts", JSON.stringify(posts));
        setPosts(posts);
        setEditing(false);
        alert("Post updated successfully");
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title</label>
                <input type="text" name="title" value={updatedPost.title} onChange={onChangeHandler} />
            </div>
            <div>
                <label>Body</label>
                <input type="text" name="body" value={updatedPost.body} onChange={onChangeHandler} />
            </div>
            <button type="button" onClick={() => setEditing(false)}>
                Cancel
            </button>
            <button>Confirm</button>
        </form>
    );
}

export default EditPost;
