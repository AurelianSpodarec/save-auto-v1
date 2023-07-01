import { Link } from "react-router-dom";

import { configPages } from "config/configPages";

import Container from "atoms/Container";
import Card from "atoms/Card";

function NotFound() {
    return (
        <Container>

            <Card>
                <h1>404 Not Found :-(</h1>
                <p>You are not allowed to access the requested page.</p>
                <Link to={configPages.DASHBOARD.path}>Back home</Link>
            </Card>
        </Container>
    )
}

export default NotFound;
