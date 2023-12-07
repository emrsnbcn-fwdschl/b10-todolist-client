import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import AddPost from "./components/AddPost";

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    //useEffect runs on every render. It will also run if there is a state change.
    useEffect(() => {
        let fetchData = async () => {
            let res = await fetch("https://jsonplaceholder.typicode.com/posts");
            let data = await res.json();
            if (localStorage.getItem("posts")) {
                setPosts(JSON.parse(localStorage.getItem("posts")));
            } else {
                localStorage.setItem("posts", JSON.stringify(data));
                setPosts(data);
            }
            setLoading(false);
        };

        fetchData();

        //if the array is empty it would only run this useEffect once.
    }, []); //dependency array

    let showPosts = !loading ? posts.map((post) => <Post key={post.id} post={post} setPosts={setPosts} />).reverse() : null;

    return (
        <div>
            <AddPost setPosts={setPosts} />
            {loading ? <h2>Loading...</h2> : showPosts}
        </div>
    );
}

export default App;
