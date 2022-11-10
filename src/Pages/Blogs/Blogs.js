import React from 'react';
import { Helmet } from 'react-helmet';
const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Viva-visa - blogs</title>
            </Helmet>
            <div>
                <h1 className="font-semibold text-3xl my-8">Question 1: What are the difference between SQL and NoSQL?</h1>
                <div className='flex w-full lg:flex-row sm:flex-col'>
                    <div className='lg:w-1/2 sm:w-full'>
                        <h3 className='text-3xl text-center my-2'>What is SQL?</h3>
                        <p className='p-8'>Structured Query language (SQL) pronounced as “S-Q-L” or sometimes as “See-Quel” is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables.
                            <br />
                            SQL programming can be effectively used to insert, search, update, delete database records.
                            <br />
                            That doesn’t mean SQL cannot do things beyond that. It can do a lot of things including, but not limited to, optimizing and maintenance of databases.
                            <br />
                            Relational databases like MySQL Database, Oracle, Ms SQL Server, Sybase, etc. use SQL.</p>
                    </div>
                    <div className='lg:w-1/2 sm:w-full'>
                        <h3 className='text-3xl text-center my-2'>What is NoSQL?</h3>
                        <p className='p-8'>
                            NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day.
                            <br />
                            NoSQL database stands for “Not Only SQL” or “Not SQL.” Though a better term would NoREL NoSQL caught on. Carl Strozz introduced the NoSQL concept in 1998.
                            <br />
                            Traditional RDBMS uses SQL syntax to store and retrieve data for further insights. Instead, a NoSQL database system encompasses a wide range of database technologies that can store structured, semi-structured, unstructured and polymorphic data.
                            <br />
                            Next, we will discuss the key diff between SQL and NoSQL.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="font-semibold text-3xl my-8">Question 2: What is JWT, and how does it work?</h1>
                <div className='p-8'>
                    <h3 className='text-3xl my-2'>What is JWT?</h3>
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    <h3 className='text-3xl my-2'>How it work?</h3>
                    <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        <br></br>
                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                </div>
            </div>
            <div>
                <h1 className="font-semibold text-3xl my-8">Question 3: What is the difference between javascript and NodeJS?</h1>
                <div className='flex w-full lg:flex-row sm:flex-col'>
                    <div className='lg:w-1/2 sm:w-full'>
                        <h3 className='text-3xl text-center my-2'>Javascript</h3>
                        <p className='p-8'>
                            JavaScript’s first version was launched in 1995 and it was developed by Brendan Eich of Netscape (then called LiveScript). As discussed earlier, JavaScript is a high-level programming language that has all the functionalities normally a programming language has. JavaScript is an Object-oriented programming language that can be used on the client-side as well as on the server-side and developers not only use it for creating web pages but also it is used for game development and mobile app development.
                        </p>
                    </div>
                    <div className='lg:w-1/2 sm:w-full'>
                        <h3 className='text-3xl text-center my-2'>NodeJS</h3>
                        <p className='p-8'>
                            Node.js was first introduced in 2009 developed by Ryan Dahl and is a runtime environment for JavaScript built on Google’s v8 engine whose main purpose is to run JavaScript on the server and hence JavaScript can be executed outside of the browser. The nicest part about Node.js is that it never blocks I/O, is event-driven, and can be used to create highly scalable apps. In Node.js everything is a module and using these modules developers make use of Node.js in creating web APIs, Rest API servers, command-line applications, and real-time chat applications.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mb-10'>
                <h1 className="font-semibold text-3xl my-8">Question 4: How does NodeJS handle multiple requests at the same time?</h1>
                <div className='p-8'>
                    We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.
                    <br />
                    How NodeJS handle multiple client requests?
                    <br />
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                    <br />
                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </div>
            </div>
        </div>
    );
};

export default Blogs;