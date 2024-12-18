import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

export default function Body() {
    return (
        <div className="grid-container">
                <Title name="About Me" />
                <div className="grid-item">
                    <img className="aboutImg" src="../../public/images/about.jpg" alt="Profile picture" />
                </div>
                <div className="grid-item">
                    <h1>Hi &#x1F44B;, My name is <span>Samuel Njathi</span></h1>
                    <p>
                        I'm a web developer with a strong focus on building efficient and scalable web applications. 
                        My core expertise lies in Node.js and Express.js for backend development, 
                        where I create robust APIs and handle complex server-side logic. For frontend development, 
                        I work with React to deliver interactive, user-friendly interfaces, leveraging JavaScript, HTML, and CSS to
                        bring designs to life. I'm skilled in using PostgreSQL for database management, ensuring data is stored
                        and retrieved with optimal performance. I also incorporate Bootstrap to streamline responsive design,
                        making sure applications look great across all devices. I’m passionate about writing clean, 
                        maintainable code and staying up-to-date with the latest web development trends and best practices.
                    </p>
                    <button className="learn">
                        <Link to="/about">
                            Learn More
                        </Link>  
                    </button>
                </div>
                <Title name="My Projects" />
                
                <div className="grid-item">
                    <p>
                        Throughout my career, I have worked on a diverse range of projects that showcase my skills in web development
                        and problem-solving. From building dynamic, user-friendly websites to developing complex backend systems, each 
                        project reflects my dedication to creating high-quality, efficient solutions. Whether it's crafting responsive
                        interfaces, optimizing database performance, or integrating advanced features, I strive to deliver results
                        that exceed expectations. Curious to see my work? Click the button below to explore the projects I’ve completed 
                        and learn more about the impact they’ve made!
                    </p>
                    <button className="learn">
                        <Link to="/projects">
                            See Projects
                        </Link>
                    </button>
                </div>
                <div className="grid-item">
                    <img src="../../public/images/projects.jpg" alt="Projects image" />
                </div>
                <Title name="Books" />
                <div className="grid-item">
                    <img src="../../public/images/books.jpg" alt="Books image" />
                </div>
                <div className="grid-item">
                    <p>
                        I am an avid reader who finds inspiration and knowledge in a wide range of books. From thought-provoking
                        non-fiction that deepens my understanding of technology, personal growth, and innovation, to gripping 
                        fiction that fuels my imagination, every book I read shapes my perspective and creativity. I enjoy 
                        exploring works on programming and software development to refine my skills, as well as diving into 
                        classic and contemporary literature that offers fresh insights into storytelling and human experiences. 
                        Through reading, I continuously broaden my horizons and draw ideas that influence both my personal and
                        professional life. Interested in seeing how my inspirations translate into my work?
                    </p>
                    <button className="learn">
                        <Link to="/books">
                            Show Books
                        </Link>          
                    </button>
                </div>
                <Title name="Blog" />
                <div className="grid-item">
                    <p>
                        In my blogs, I share my passion for web development, covering topics that range from coding techniques and 
                        industry trends to problem-solving strategies and project insights. Whether it’s a deep dive into JavaScript
                        frameworks, tips for optimizing performance, or lessons learned from real-world projects, my goal is to 
                        provide valuable content for developers of all levels. Ready to dive in? Click the button below to explore
                        my blogs and join the conversation!
                    </p>
                    <button className="learn">
                        <Link to="/blog">
                            See Blogs
                        </Link>
                    </button>
                </div>
                <div className="grid-item">
                    <img src="../../public/images/blog.jpg" alt="Blog image" />
                </div>
        </div>

    );
}