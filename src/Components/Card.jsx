import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom"

const MemeCard = (props) => {
    const navigate = useNavigate()

  return (
    <Card style={{width: "15rem", background: "#b0b0b0eb" , borderRadius: "10px", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)", transition: "transform 0.3s ease-in-out", cursor: "pointer", border: "1px solid black", margin: "10px" }}>
      <Card.Img
        variant="top"
        src={props.img}
      />
      <Card.Body className="text-white">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button onClick={(e) => {navigate(`/Edit/?url=${props.img}`)}} variant="primary">
          Search
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MemeCard;