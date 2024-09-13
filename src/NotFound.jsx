import oops from "./assets/notfound-oops.png";
import { Image,Button } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function NotFound() {
    const buttonStyle = {
        boxShadow: "3px 2px 15px #0081a7",
        
      };
  return (
    <div>
      <Image src={oops} />
      <h1 className="my-5"> This Address Does Not Exist! (404)</h1>
    <Button as={NavLink} to={'/'} style={buttonStyle}>
      Return To Homepage!
    </Button>
    </div>
  );
}

export default NotFound;
