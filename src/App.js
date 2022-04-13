import './App.css';

import styles from './Div.module.css';

function App() {

    const user = "Kalid";

    const students = [
        {
            name: "Kalid",
            class: "CA181"
        },
        {
            name: "Fartun",
            class: "CA182"
        },
        {
            name: "Yusuf",
            class: "CA188"
        },
        {
            name: "Kalthuma",
            class: "CA188"
        },
    ];

    const divStyle = {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 15,
        color: "white"
    };

    function submitForm(event) {
        event.preventDefault();
        console.log("submitted");
        let username = document.getElementById("username");
        console.log(username.value);
        if (username.value.length < 3) {
            alert("make sure to have 3 or greater than");
        }
    }


    return (
        <div className={styles.something} >
            {/* <h1>Hello {user} age {2022 - 2004}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, rem?</p> */}

            {
                // rendreing List
                // students.map((student, index) => (
                //     <div key={index} className={styles.card}>
                //         <li>{student.name}</li>
                //         <li>{student.class}</li>
                //         <button onClick={() => alert("Clicked")}>See More</button>
                //     </div>
                // ))


            }

            <form onSubmit={submitForm}>
                <input id="username" type="text" />
                <button type="submit">Submnit</button>
            </form>


        </div>


    );
}

export default App;
