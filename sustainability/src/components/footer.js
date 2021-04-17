import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Footer() {
    return (
        <Navbar expand="sm" bg="success" variant="dark" fixed="bottom" >
            <Container>
                <Navbar.Text>Project on <a href="https://github.com/minhd-vu/PatriotHacks-2021">GitHub</a>.</Navbar.Text>
            </Container>
        </Navbar>
    );
}