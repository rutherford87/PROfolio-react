import {Card, Row, Container, Button} from 'react-bootstrap';

function Friends() {
    return (
        <Container className="d-flex justify-content-center" fluid>
            <Row>
                <Card className="mb-3" style={{ color: "#000" }} style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title>Conect with me on LinkedIn!</Card.Title>
                        <Button variant="primary" href="https://www.linkedin.com/in/tyler-rutherford-99aa76107/">See Profile</Button>
                    </Card.Body>
                </Card>
                <Card className="mb-3" style={{ color: "#000" }} style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title>Check out my repos on GitHub!</Card.Title>
                        <Button variant="primary" href="https://github.com/rutherford87">See Repos</Button>
                    </Card.Body>
                </Card>
                <Card className="mb-3" style={{ color: "#000" }} style={{ width: '18rem' }}>
                    
                    <Card.Body>
                        <Card.Title>View my resume here!</Card.Title>
                        <Button className="fixedbottom" variant="primary" href="https://drive.google.com/file/d/1UXHRjqvzoMxtesYfgA9_qwHxPEEqfdsr/view?usp=sharing">Google Drive</Button>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}
//
export default Friends;