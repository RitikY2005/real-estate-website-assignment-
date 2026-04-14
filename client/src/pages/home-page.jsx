import { Link } from "react-router";

function Homepage(){
    return <div>
        Homepage 
        <Link to={"/admin/login"}>Admin Login page</Link>
    </div>
}

export default Homepage;