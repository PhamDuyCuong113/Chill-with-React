import { useState } from "react";   

function ToDoList() {
    const [lang, setLang] = useState("vi");
    const [name, setName] = useState("");

    const handleLang = (e) => {
        setLang(e.target.value);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }


    return (
        <div>

        </div>
    );
}