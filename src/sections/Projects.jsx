import React from 'react'
import '../styles/projects.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import schoeps from '../uploads/icecream.jpg'
import mplayer from '../uploads/mediaplayer.png'
import travelimg from '../uploads/travelix.jpg'



function Projects() {
    return (
        <div className='projects' id='pr' >
            <div className='divider-section3'>
                <div className='divider1' ></div>
                <div className='divider-center'>
                    <h2 className='project-text'>PROJECTS</h2>
                </div>
                <div className='divider2' ></div>
            </div>

            <div className='cards'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={schoeps} />
                    <Card.Body>
                        <Card.Title>schoeps</Card.Title>
                        <Card.Text>
                            Ice cream shop website
                        </Card.Text>
                        <a href="" target='_blank'><Button className='tra' variant="primary">Get Code</Button></a>

                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={mplayer} />
                    <Card.Body>
                        <Card.Title>Media player</Card.Title>
                        <Card.Text>
                            Online platform to watch videos
                        </Card.Text>
                        <a href="" target='_blank'><Button className='tra' variant="primary">Get Code</Button></a>


                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={travelimg} />
                    <Card.Body>
                        <Card.Title>Travel website</Card.Title>
                        <Card.Text>
                            Traveling guide website

                        </Card.Text>
                        <a href=" " target='_blank'><Button className='tra' variant="primary">Get Code</Button>
                        </a>

                    </Card.Body>
                </Card>

            </div>



        </div>


    )
}

export default Projects
