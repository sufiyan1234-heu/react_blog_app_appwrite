"use client"
import { Client, Databases, ID } from "appwrite";

export default function Home() {
    const client = new Client();

    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('65bfe70681b15bfd4089');

    const databases = new Databases(client);

    const a = [
        {
            "title": "Learn Javascript",
            "content": "<p>This is your HTML content. Start learning Javascript today!</p>",
            "slug": "learn-javascript",
            "views": 1200,
            "author": "John Doe",
            "is_published": true
        },
        {
            "title": "Mastering React Basics",
            "content": "<p>Explore the fundamentals of React and build powerful user interfaces.</p>",
            "slug": "mastering-react-basics",
            "views": 950,
            "author": "Jane Smith",
            "is_published": true
        },
        {
            "title": "Python for Beginners",
            "content": "<p>Begin your programming journey with Python. Learn syntax and basic concepts.</p>",
            "slug": "python-for-beginners",
            "views": 800,
            "author": "Alex Johnson",
            "is_published": true
        },
        {
            "title": "Web Development Trends 2022",
            "content": "<p>Stay updated on the latest trends in web development for the year 2022.</p>",
            "slug": "web-development-trends-2022",
            "views": 1500,
            "author": "Emily Davis",
            "is_published": true
        },
        {
            "title": "Introduction to Machine Learning",
            "content": "<p>Dive into the world of machine learning and understand its core concepts.</p>",
            "slug": "introduction-to-machine-learning",
            "views": 1800,
            "author": "Michael Brown",
            "is_published": true
        },
        {
            "title": "The Art of UI/UX Design",
            "content": "<p>Explore the principles and practices behind creating stunning user interfaces and experiences.</p>",
            "slug": "ui-ux-design",
            "views": 1200,
            "author": "Emma Johnson",
            "is_published": true
        },
        {
            "title": "Node.js Essentials",
            "content": "<p>Learn the essentials of Node.js for building scalable and efficient server-side applications.</p>",
            "slug": "node-js-essentials",
            "views": 1000,
            "author": "Matthew Clark",
            "is_published": true
        },
        {
            "title": "Data Science: A Comprehensive Guide",
            "content": "<p>Discover the world of data science, its tools, and applications in various domains.</p>",
            "slug": "data-science-guide",
            "views": 1300,
            "author": "Sophia White",
            "is_published": true
        },
        {
            "title": "Cybersecurity Best Practices",
            "content": "<p>Learn the best practices to enhance cybersecurity and protect your digital assets.</p>",
            "slug": "cybersecurity-best-practices",
            "views": 1100,
            "author": "David Miller",
            "is_published": true
        },
        {
            "title": "Getting Started with Docker",
            "content": "<p>Explore the basics of containerization and get started with Docker for efficient application deployment.</p>",
            "slug": "docker-getting-started",
            "views": 900,
            "author": "Olivia Turner",
            "is_published": true
        }
    ]

    for (let index = 0; index < a.length; index++) {
        const element = a[index];

        const promise = databases.createDocument(
            '65bfec2aa8fde70aa98e',
            '65bfec3307600ba7a7ec',
            ID.unique(),
            element

        );


        promise.then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    }
    return (
        <>
            navbar here
            <div>
                app here
            </div>
        </>
    );
}
