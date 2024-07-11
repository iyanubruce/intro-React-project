import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notfound">
            <h1>sorry</h1>
            <p>the page you are looking for does noe exist pls try again later thank you
                <Link to={"/"}><button>click here to go back to our home page</button></Link>
            </p>
        </div>
      );
}
 
export default NotFound;