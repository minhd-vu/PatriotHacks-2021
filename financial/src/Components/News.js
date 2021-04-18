import Search from "./Search"
import LinkList from "./LinkList"
import { Container, Row, Col } from "react-bootstrap"

function News() {
    return (
        <Container>
            <Row>
                <Col>
                    <Search />
                </Col>
                <Col>
                    <LinkList />
                </Col>
            </Row>
        </Container>
    );
}

export default News;