import react from "react";
import MemeCard from "../Components/Card.jsx";
import {useEffect,useState} from "react";
import {getMemes} from "../api/meme.js"

const  HomePage = () => {
    const [data,setData] = useState([])

    useEffect(() =>{
        getMemes().then((memes) => {setData(memes.data.memes)})

    },[])
    return (
        <div style={{display: "flex" , flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <h1 className="font-shadow" style={{fontFamily: "'Banger', cursive" ,color: "orange", fontWeight: "bold"}}>GENERATE MEMES!!!!!!!</h1>
            <div className="d-flex flex-wrap justify-content-center align-items-center" style={{width: "80%"}}>
                {data.map((meme) => (
                    <MemeCard key={meme.id} img={meme.url} title={meme.name} />
                ))}
            </div>
        </div>
    )
}

export default HomePage