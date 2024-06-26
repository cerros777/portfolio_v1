import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import { ProjectCard } from "./ProjectCard";


export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3
        }
    ];


  return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col size={12}>
                <h2>Projects</h2>
                <p>dsf</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-ccenter align-items-center" id="pills-tab" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Tab3
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return(
                                            <ProjectCard key={index} {...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                                ergo umi algo
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                                ergo umi algo
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}/>
    </section>
  )
}
