import Card from 'react-bootstrap/Card';
import './About.css';


function About() {
    return (
        <div className="About" class="card-body d-flex flex-column align-items-start" style={{width:'60%'}}>
            <Card>
                <Card.Body class="card-body d-flex flex-column align-items-start">
                    <Card.Text>
                        <h3 class="mb-0">
                            About Me
                        </h3>
                        <p>
                            Hi 👋 Im Sam Rossilli. I'm a budding Systems Engineer. 4th-year student at University of Colorado: Colorado Springs Studying Data Analytics and Systems Engineering.
                            <br/>
                            <br/>
                            I'm an early-career systems engineer and data analyst who is obsessed with improving systems with the help of data.

                            I'm currently studying at the University of Colorado: Colorado Springs for a B.S in Data Analytics and Systems Engineering. I will be joining Amazon as a Software Development Engineer after graduation in June 2022!

                            My education and experience is in model-based systems engineering, software engineering, and data analytics. I have experience with Python, C/C++, Java, and Matlab and with concepts such as Object-oriented programing, the systems engineering life cycle, and the software engineering life cycle.

                            This past summer, I was an intern at USCellular, where I improved my Python skills and expanded my knowledge of real-time networks. I was an intern for the Voice Services group, where I developed a tool to monitor the status of components in the IMS Network.

                            I am open to learning more about positions related to Systems Engineering, Data Analytics, Software Development, or related engineering field.

                        </p>

                    </Card.Text>
                </Card.Body>
                <Card.Img variant="right" width='325' src="/me.jpg"/>
            </Card >
        </div >
    );
}

export default About;
