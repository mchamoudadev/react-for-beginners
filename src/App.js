import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { toast } from 'react-toastify';

import styles from './Div.module.css';

function App() {



    let [count, setCount] = useState(0);
    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");

    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState({ title: "", content: "" });
    const [userName, setUserName] = useState("");
    const [userInfo, setUserInfo] = useState("");
    const [loading, setLoading] = useState(false);
    const base_url = `https://api.github.com/users/`;


    const titleRef = useRef();
    const userRef = useRef();

    const divStyle = {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 15,
        color: "white"
    };

    const submitForm = (e) => {
        e.preventDefault();

        setUserName(userRef.current.value);
        console.log("ciuree", userRef.current.value);
        console.log("user", userName);

        // console.log("title ref", titleRef.current.value);

        // titleRef.current.focus();

        // setPosts([{ title: currentPost.title, content: currentPost.content }, ...posts]);
        // setCurrentPost({ title: "", content: "" });


    };



    const getUserInfo = async () => {
        try {
            setLoading(true);
            // const { data } = await axios.get(base_url + userName);
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos/1');
            setUserInfo(data);
            setLoading(false);
            // toast.success("Successfully");
        } catch (err) {
            setLoading(false);
            setUserInfo("");
            toast.error("Unknown User");
        }


    };
    useEffect(() => {
        getUserInfo();
    }, [userName]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className={styles.something} >
            <h1>Total : {count}</h1>
            {/* <h1>Name : {name}</h1> */}

            <form onSubmit={submitForm}>

                <input type="text" placeholder="enter username"
                    ref={userRef}

                />

                {/* <input type="text" placeholder="title"
                    onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                    value={currentPost.title}
                    ref={titleRef}
                />
                <input type="text" placeholder="content"
                    onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                    value={currentPost.content}
                /> */}
                <button type="submit">Submnit</button>
                {userInfo &&
                    // <div className="userInfo">
                    //     <h2>{userInfo.name}</h2>
                    //     <p>{userInfo.bio}</p>
                    //     <img src={userInfo.avatar_url} width={100} height={100} alt="" />
                    // </div>
                    <div className="userInfo">
                        <h2>{userInfo.title}</h2>
                        {/* <p>{userInfo.bio}</p> */}
                        <img src={userInfo.thumbnailUrl} width={100} height={100} alt="" />
                    </div>
                }


            </form>

            {/* <h1>{posts.length > 0 && posts[0].title}</h1>
            <p>{posts.length > 0 && posts[0].content}</p> */}

            {
                posts.length > 0 && posts.map((post, index) => (
                    <div key={index}>
                        <h4>{post.title}</h4>
                        <p>{post.content}</p>
                    </div>
                ))
            }

            {/* <button>Plus</button> */}
        </div>


    );
}

export default App;
