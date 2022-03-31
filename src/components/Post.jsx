

function Post({ title, content, date, img }) {

    console.log(img);
    return (
        <>
            <h1> {title}</h1>
            <p>{content}</p>
            <p>{date}</p>
            <img src={img.image1 ? img.image1 : img} />

        </>
    );

}

export default Post;