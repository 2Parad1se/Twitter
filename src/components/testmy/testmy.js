import React from "react";

// const TestMy = () => {
//     return (
//         <div> test test test</div>
//     )
// }

function TestMy({name, link, surname}) {
    return(
            <>
                <h1>My name {name}, my surname {surname} </h1>
                <a href={link}>my profile</a>
            </>
    )
}
export default TestMy;