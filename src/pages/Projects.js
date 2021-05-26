import {Card, Row, Container, Button} from 'react-bootstrap';
import freelancer from '../assets/FreelancR.PNG'
import newintown from '../assets/New2Town.PNG'
import './pages.css';



function Search() {
    return (
        <div>
            <Container className="d-flex justify-content-center" fluid>
                <Card className="mb-3 marg-top new" style={{ color: "#000" }} style={{ width: '36rem' }}>
                    <Card.Img src={freelancer}/>

                    <Card.Body>
                            <Card.Title>FreelancR</Card.Title>
                            <Card.Text>A website that two different user types, freelancers and clients, can connect to expedite projects and quicly earn chops as a dev.</Card.Text>
                        <Button className="deploy" variant="primary" href="https://github.com/ydefrawi/FreelancR">GitHub Repo</Button>
                        <Button className="deploy" variant="primary" href="https://freelancr-excellence.herokuapp.com/">Launch Application!</Button>
                        </Card.Body>

                </Card>
            </Container>

            <Container className="d-flex justify-content-center" fluid>
            <div>
                <Row>
                    
                    <Card className="mb-3 new" style={{ color: "#000" }} style={{ width: '18rem' }}>
                        <Card.Img src={newintown} />
                        <Card.Body>
                        <Card.Title>NewInTown</Card.Title>
                        <Card.Text>An application that combines two APIs to make travelling and exploring a new city fun and easy.</Card.Text>
                        <Button variant="primary" href="https://github.com/rutherford87/NewInTown">GitHub Repo</Button>
                        <Button className="deploy" variant="primary" href="https://rutherford87.github.io/NewInTown/">Website coming soon!</Button>
                    </Card.Body>
                    </Card>
                    
                    <Card className="mb-3 new" style={{ color: "#000" }} style={{ width: '18rem' }}>
                        <Card.Img src="https://picsum.photos/200/100" className="size"/>
                        <Card.Body>
                        <Card.Title>My first portfolio</Card.Title>
                        <Card.Text>See how far I've come as a developer</Card.Text>
                        <div className="marg-top">
                        <Button variant="primary" href="https://github.com/rutherford87/PROfolio_TPR">GitHub Repo</Button>
                        <Button className="deploy" variant="primary" href="https://rutherford87.github.io/PROfolio_TPR/">Website coming soon!</Button>
                        </div>
                    </Card.Body>
                    </Card>
                   
                
                </Row>
                </div>
            </Container>
            <Container className="d-flex justify-content-center" fluid>
                <Row>
                    <Card className="mb-3" style={{ color: "#000" }} style={{ width: '18rem' }}>
                        <Card.Img src="https://picsum.photos/200/100" />
                        <Card.Body>
                            <Card.Title>Test</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="mb-3" style={{ color: "#000" }} style={{ width: '18rem' }}>
                        <Card.Img src="https://picsum.photos/200/100" />
                        <Card.Body>
                            <Card.Title>Test</Card.Title>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>

        </div>
    );
}

export default Search;