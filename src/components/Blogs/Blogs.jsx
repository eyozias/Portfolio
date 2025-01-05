import React from 'react';
import AOP from '../../assets/AOP.png';
import './Blog.css';

const Blog = () => {
	const post = {
		link: 'https://medium.com/@eyosiasmitiku/the-rise-of-ai-in-development-ba7aeaa539dc',
		title: 'The Rise of AI in Development',
		description:
			'Artificial Intelligence (AI) is no longer just a buzzword; it’s a transformative force reshaping industries, from healthcare to e-commerce. For developers and tech enthusiasts, AI isn’t merely about ...',
		thumbnail: AOP,
	};

	return (
		<div className='blogContainer'>
			<a
				href={post.link}
				target='_blank'
				rel='noopener noreferrer'
				className='blogPostLink'>
				<div className='blogPost'>
					<img
						src={post.thumbnail}
						alt='Post Thumbnail'
						className='thumbnail'
					/>
					<h2 className='title'>{post.title}</h2>
					<p className='description'>{post.description}</p>
				</div>
			</a>
		</div>
	);
};

export default Blog;
