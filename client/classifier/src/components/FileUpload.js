import React, {useState} from 'react'
import './fileUpload.css'

export default function FileUpload() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    function handleSumbit (e){
        e.preventDefault();
    }

    function handleFile(e){
        setSelectedFile(e.target.files[0]);
        console.log(selectedFile);
    }

    return (
        <div className="fileUpload_container">
            <form onSubmit={handleSumbit}>
                <input type="file" onChange={handleFile} accept="image/*"></input>
                <button type="submit" className="fileUpload_sendButton">Send</button>
            </form>
        </div>
    )
}
