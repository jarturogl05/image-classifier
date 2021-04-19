import React, {useState, useEffect} from 'react'
import './fileUpload.css'

export default function FileUpload() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [imageURL, setImageURL] = useState();


    function handleSumbit (e){
        e.preventDefault();
    }

    function handleFile(e){
            
        if(e.target.files[0]){
            setImageURL({
                image: URL.createObjectURL(e.target.files[0])
            })
    
           setSelectedFile(e.target.files[0]);
            setIsFilePicked(true);
            console.log(selectedFile)
        }

    }


    return (
        <div className="fileUpload_container">
            <form onSubmit={handleSumbit}>
                <input type="file" onChange={handleFile} accept="image/*"></input>
                
                {isFilePicked ? (
                    <div className="image_info">
                        <p>{selectedFile.name}</p>
                        <img src={imageURL.image}></img>
                    </div>
                ):(
                    <p>uwu</p>
                )}

                <button type="submit" className="fileUpload_sendButton">Send</button>
            </form>
        </div>
    )
}
