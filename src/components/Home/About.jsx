import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';
import LaptopImg from '../../assets/home-main.svg';

const About = () => {
	return (
		<Container
			fluid
			className='home-about-section'
			id='about'>
			<Container>
				<Row>
					<Col
						md={8}
						className='home-about-description'>
						<h1 style={{ fontSize: '2.6em' }}>
							LET ME <span className='yellow'> INTRODUCE </span>{' '}
							MYSELF
						</h1>
						<p className='home-about-body'>
							Hi, my name is{' '}
							<span className='yellow'>Eyosias Mekonnen </span>
							and I live in{' '}
							<span className='yellow'> New Jersey.</span>
							<br />
							<br />I have a passion for working with{' '}
							<b className='yellow'>Java, Spring Boot, Kotlin, Kafka</b> and
							<i>
								<b className='yellow'>
									{' '}
									modern Javascript libraries and frameworks
								</b>
								with
								<b className='yellow'> React and Angular.</b>
							</i>
							<br />
							<br />
							As a<b className='yellow'> Full-Stack </b>developer, I enjoy
							tackling new challenges and continuously expanding
							my skillset.
							<br />
							<br />I am proficient in
							<b className='yellow'> Java, </b>
							<b className='yellow'> Spring Boot, </b>
							<b className='yellow'> JavaScript, </b>
							<b className='yellow'> React, and</b>
							<b className='yellow'> AWS, </b>
							as well as have basic knowledge in other programming
							languages such as Kotlin, Python, and
							<b className='yellow'> GraphQL.</b>
							<br />
							<br />
							I am currently pursuing my master's in Computer
							Science. I graduated with a Bachelor's degree in
							Computer Engineering.
							<br />
							<br />I am also interested in building new
							<i>
								<b className='yellow'>
									{' '}
									Web Technologies and Products,{' '}
								</b>
								as well as exploring areas related to
								<b className='yellow'>
									{' '}
									Artificial Intelligence.
								</b>
							</i>
							<br />
						</p>
					</Col>
					<Col
						md={4}
						className='myAvtar'>
						<Tilt>
							<img
								src={LaptopImg}
								className='img-fluid'
								alt='avatar'
							/>
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col
						md={12}
						className='home-about-social'>
						<h1>FIND ME ON</h1>
						<p>
							Please don't hesitate to reach out to me and{' '}
							<span className='yellow'>connect.</span>
						</p>
						<ul className='home-about-social-links'>
							<li className='social-icons'>
								<a
									href='https://github.com/eyozias'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
									aria-label='github'>
									<AiFillGithub />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://www.linkedin.com/in/eyosias-mekonnen'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
									aria-label='linkedin'>
									<FaLinkedinIn />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default About;
