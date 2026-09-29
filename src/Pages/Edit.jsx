import react from "react";
import {useSearchParams} from "react-router-dom"
import {useState, useRef} from "react"
import { Button } from "react-bootstrap";
import Text from "../Components/Text.jsx"
import { toPng } from "html-to-image";

const EditPage = () => {
    const [params] = useSearchParams()
    const [count,setCount] = useState(0)

    const addText = () => {
        setCount(count + 1)

    }

    const downloadImage = async () => {
        if (!memeRef.current) return;

        const dataUrl = await toPng(memeRef.current);

        const link = document.createElement("a");
        link.download = "meme.png";
        link.href = dataUrl;
        link.click();
    }

    const memeRef = useRef()

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 style={{color:"green", fontFamily: "'Banger', cursive",fontWeight: "bold"}}>CREATE YOUR MEME :)</h1>
            <div ref={memeRef} className="d-flex flex-column align-items-center justify-content-center" style={{width : "600px"}}>
                <img style={{ width: "25rem", background: "#b0b0b05a" , borderRadius: "10px", boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)", transition: "transform 0.3s ease-in-out", cursor: "pointer", border: "1px solid white", margin: "10px" }} src={params.get("url")} alt="Meme" />
                {
                    Array(count)
                    .fill(0)
                    .map((_,index) => (<Text key={index}/>))
                }
            </div>
                <div style={{display: "flex" , flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <Button onClick={addText}>add text</Button>
                    <Button onClick={downloadImage} style={{ margin: "20px" }}>Save</Button>
                </div>
        </div>
    )
}

export default EditPage