import { Link } from "react-router-dom";
const NotFoundPage = () => {
    return (
        <div>
            <p>Page not found</p>
            <Link to='/'>Return to Home page</Link>
        </div>
    )
}

export default NotFoundPage;