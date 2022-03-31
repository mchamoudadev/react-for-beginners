import React from 'react';
import Post from './components/Post';
import image1 from './images/33.jpeg';



function App() {

    // content driven
    const posts = [
        {
            title: "Post One",
            content: "This is post one content",
            date: "2022-10-20",
            img: { image1 }
        },
        {
            title: "Post Two",
            content: "This is post one content",
            date: "2022-10-20",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        {
            title: "Post Three",
            content: "This is post one content",
            date: "2022-10-20",
            img: "https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage"
        },
        {
            title: "Post Four",
            content: "This is post one content",
            date: "2022-10-20",
            img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        {
            title: "Post five",
            content: "This is post five content",
            date: "2022-10-20",
            img: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        }

    ];

    console.log(posts);

    return (
        <>


            {
                posts.length ?
                    posts.map((post, index) => (
                        <Post
                            key={index}
                            title={post.title}
                            content={post.content}
                            date={post.date}
                            img={post.img}
                        />
                    ))
                    : "Data Not Found..."
            }
        </>
    );

    ;
}

export default App;