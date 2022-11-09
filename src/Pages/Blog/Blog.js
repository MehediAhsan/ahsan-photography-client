import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center text-accent mt-20 mb-10'>Q/A</h1>
            <div className="grid grid-cols-1 w-full md:w-9/12 mx-auto">
                <div className="p-7 lg:p-10">
                    <h3 className="text-2xl font-semibold mb-4">Difference between SQL and NoSQL</h3>
                    <p className="text-gray-500 text-lg ml-8">SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.Example of SQL databases: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.Example of NoSQL databases: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</p>
                </div>
                <div className="p-7 lg:p-10">
                    <h3 className="text-2xl font-semibold mb-4">What is JWT, and how does it work?</h3>
                    <p className="text-gray-500 text-lg ml-8">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.User sign-in using username and password or google/facebook.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                </div>
                <div className="p-7 lg:p-10">
                    <h3 className="text-2xl font-semibold mb-4">What is the difference between javascript and NodeJS?</h3>
                    <p className="text-gray-500 text-lg ml-8">Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.Javascript can only be run in the browsers.We can run Javascript outside the browser with the help of NodeJS.Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.Some of the javascript frameworks are RamdaJS, TypedJS, etc. Some of the javascript frameworks are RamdaJS, TypedJS, etc. </p>
                </div>
                <div className="p-7 lg:p-10">
                    <h3 className="text-2xl font-semibold mb-4">How does NodeJS handle multiple requests at the same time?</h3>
                    <p className="text-gray-500 text-lg ml-8">NodeJS server uses an EventQueue, which queues incoming client requests and an EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded and acts as a listener for the EventQueue which processes incoming requests based on FIFO policy.When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client. Thus, even if an incoming request needs blocking IO, the thread pool allows it to run asynchronously in the background without blocking the EventLoop and it gives a seamless experience of NodeJS handling multiple incoming requests concurrently without any persistent delays or bottlenecks. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;