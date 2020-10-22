import React, {useState}  from "react";

export default function Accordion() {

    const [isToggle, setIsToggle] = useState(false)
    // const showMe = isToggle ? (<h3>Show me</h3>) : "";

    return (
        <div>
            {/* {showMe}
            {isToggle ? (<h1>Show me Jacquit</h1>) : ""} */}
            {isToggle && <h3>Show me</h3>}
            <button onClick={() => setIsToggle(!isToggle)}>Toggle</button>
        </div>
    )
}