import Card from 'react-bootstrap/Card';
import './About.css';


function About() {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <Card className="card flex-md-row mb-4 box-shadow h-md-250">
                <Card.Body class="card-body d-flex flex-column align-items-start">
                    <Card.Text>
                        <h3 class="mb-0">
                            About Me
                        </h3>
                        <p>
                            Hi 👋 Im Sam Rossilli. I'm a budding Systems Engineer. 4th-year student at University of Colorado: Colorado Springs Studying Data Analytics and Systems Engineering.
                            <br />
                            <br />
                            I'm an early-career systems engineer and data analyst who is obsessed with improving systems with the help of data.
                            <br />
                            <br />
                            I'm currently studying at the University of Colorado: Colorado Springs for a B.S in Data Analytics and Systems Engineering. I will be joining Amazon as a Software Development Engineer after graduation in June 2022!
                            <br />
                            <br />
                            My education and experience is in model-based systems engineering, software engineering, and data analytics. I have experience with Python, C/C++, Java, and Matlab and with concepts such as Object-oriented programing, the systems engineering life cycle, and the software engineering life cycle.
                            <br />
                            <br />
                            This past summer, I was an intern at USCellular, where I improved my Python skills and expanded my knowledge of real-time networks. I was an intern for the Voice Services group, where I developed a tool to monitor the status of components in the IMS Network.
                            <br />
                            <br />
                            I am open to learning more about positions related to Systems Engineering, Data Analytics, Software Development, or related engineering field.

                        </p>

                    </Card.Text>
                    <Card.Text>
                        <p class="card-text mb-auto pt-3">
                            <a href="https://www.github.com/sarossilli">
                                <img src='/git.png' width='75' style={{margin:'2rem'}}/>

                            </a>
                            <a href="https://www.linkedin.com/in/sarossilli/">
                                <img src='/lin.png' width='58' style={{margin:'1.5rem'}}/>
                            </a>
                        </p>
                    </Card.Text>
                </Card.Body>

                <Card.Img class="me" variant="right" src="/me.jpg" height='600' />
            </Card >
        </div >
    );
}

export default About;
