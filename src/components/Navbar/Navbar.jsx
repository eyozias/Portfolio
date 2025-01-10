import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {
	AiOutlineContacts,
	AiOutlineHome,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { FaBlog } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';

function NavBar() {
	const [expand, updateExpanded] = useState(false);
	const [navColour, updateNavbar] = useState(false);

	function scrollHandler() {
		if (window.scrollY >= 20) {
			updateNavbar(true);
		} else {
			updateNavbar(false);
		}
	}

	window.addEventListener('scroll', scrollHandler);

	return (
		<Navbar
			expanded={expand}
			fixed='top'
			expand='md'
			className={navColour ? 'sticky' : 'navbar'}>
			<Container>
				<Navbar.Toggle
					aria-controls='responsive-navbar-nav'
					onClick={() => {
						updateExpanded(expand ? false : 'expanded');
					}}>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav
						className='ms-auto'
						defaultActiveKey='#home'>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/'
								onClick={() => updateExpanded(false)}>
								<AiOutlineHome
									style={{ marginBottom: '2px' }}
								/>{' '}
								Home
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/skillset'
								onClick={() => updateExpanded(false)}>
								<GiSkills style={{ marginBottom: '2px' }} />{' '}
								Skillset
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/blog'
								onClick={() => updateExpanded(false)}>
								<FaBlog style={{ marginBottom: '2px' }} /> Blogs
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/resume'
								onClick={() => updateExpanded(false)}>
								<CgFileDocument
									style={{ marginBottom: '2px' }}
								/>{' '}
								Resume
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/contact'
								onClick={() => updateExpanded(false)}>
								<AiOutlineContacts
									style={{ marginBottom: '2px' }}
								/>{' '}
								Contact Me
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
