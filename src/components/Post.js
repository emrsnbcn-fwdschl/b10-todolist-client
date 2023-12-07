import React, { useState } from "react";
import EditPost from "./EditPost";

function Post({ post, setPosts }) {
    const [editing, setEditing] = useState(false);

    let styles = {
        margin: "15px 30px",
        border: "3px solid black",
        borderRadius: "8px",
        padding: 20,
    };

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this post")) {
            // alert("post successfully deleted " + id);
            let posts = JSON.parse(localStorage.getItem("posts"));
            posts = posts.filter((post) => post.id !== id);
            localStorage.setItem("posts", JSON.stringify(posts));
            setPosts(posts);
            alert("Post was successfully deleted.");
        }
    };

    return (
        <div style={styles}>
            {editing ? (
                <EditPost setEditing={setEditing} post={post} setPosts={setPosts} />
            ) : (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={() => setEditing(true)}>Edit</button>
                    <button onClick={() => deleteHandler(post.id)}>Delete</button>
                </>
            )}
        </div>
    );
}

export default Post;
