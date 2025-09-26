import React, { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import MainBody from "./components/MainBody/MainBody";
import "./App.css";

//Temp Book Array
const books = [
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    description: "Distributed systems have become more fine-grained in the past 10 years, shifting from code-heavy monolithic applications to smaller, self-contained microservices. But developing these systems brings its own set of headaches. With lots of examples and practical advice, this book takes a holistic view of the topics that system architects and administrators must consider when building, managing, and evolving microservice architectures. Microservice technologies are moving quickly. Author Sam Newman provides you with a firm grounding in the concepts while diving into current solutions for modeling, integrating, testing, deploying, and monitoring your own autonomous services. You’ll follow a fictional company throughout the book to learn how building a microservice architecture affects a single domain. Discover how microservices allow you to align your system design with your organization’s goals Learn options for integrating a service with the rest of your system Take an incremental approach when splitting monolithic codebases Deploy individual microservices through continuous integration Examine the complexities of testing and monitoring distributed services Manage security with user-to-service and service-to-service models Understand the challenges of scaling microservice architectures"
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
    cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    description: "A comprehensive overview of the challenges teams face when moving to microservices, with industry-tested solutions to these problems.\" - Tim Moore, Lightbend 44 reusable patterns to develop and deploy reliable production-quality microservices-based applications, with worked examples in Java Key Features 44 design patterns for building and deploying microservices applications Drawing on decades of unique experience from author and microservice architecture pioneer Chris Richardson A pragmatic approach to the benefits and the drawbacks of microservices architecture Solve service decomposition, transaction management, and inter-service communication Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications. About The Book Microservices Patterns teaches you 44 reusable patterns to reliably develop and deploy production-quality microservices-based applications. This invaluable set of design patterns builds on decades of distributed system experience, adding new patterns for composing services into systems that scale and perform under real-world conditions. More than just a patterns catalog, this practical guide with worked examples offers industry-tested advice to help you design, implement, test, and deploy your microservices-based application. What You Will Learn How (and why!) to use microservices architecture Service decomposition strategies Transaction management and querying patterns Effective testing strategies Deployment patterns This Book Is Written For Written for enterprise developers familiar with standard enterprise application architecture. Examples are in Java. About The Author Chris Richardson is a Java Champion, a JavaOne rock star, author of Manning’s POJOs in Action, and creator of the original CloudFoundry.com. Table of Contents Escaping monolithic hell Decomposition strategies Interprocess communication in a microservice architecture Managing transactions with sagas Designing business logic in a microservice architecture Developing business logic with event sourcing Implementing queries in a microservice architecture External API patterns Testing microservices: part 1 Testing microservices: part 2 Developing production-ready services Deploying microservices Refactoring to microservices"
  },
  {
    id: 3,
    title: "Book 3",
    author: "Author 3",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    description: "Microservices: Patterns and ApplicationsMicroservices are the next big thing in designing scalable, easy to maintain applications. This book will explain everything you need to know about Microservices to make your next project successful. You will learn: Microservice PatternsThis book goes into great detail on all of the Microservice Architecture patterns including * Monolithic Architecture* Microservice Architecture* Service Discovery* Gateway / Proxy API* Orchestrated API* Service Registration* CQRS and Event Sourcing* Bulk Heads* Circuit Breaker* Message BrokerThe most important thing about Microservices is when and how to apply a pattern, along with explaining what choices you must make and why. Every system is different so it is vital to understand a lot of basics before designing and developing your own Microservices. From Monolithic to Microservice The basics here are how to decompose a Monolithic system into a Microservice and this book shows exactly how this process is completed. Service Oriented Architecture to MicroserviceA more common need is to migrate your system from a SOA based architecture to Microservices, there are many advantages and the process is not as straightforward as you would expect.New MicroservicesIf you want to build a brand-new system and leverage the power of Microservices this book outlines the pitfalls, strategies and tactics needs to make this work for you. It is not as easy as it would seem and you will understand why after reading this book. Microservice TechnologiesYou'll learn about what technologies you need to use and understand for successful Microservices. *Virtualization*Containers (Docker and Rocket)*Databases*Security (JSON Web Tokens)*Logging*Exceptions*Caching*Timeouts*Scalability (CAP, Cube)*Platform as a Service (PaaS)*Cloud architecture*Technology agnosticWhy Microservices? Isn't this just the latest buzz word?While Microservices may be a recent trend and is gaining traction across the industry as a silver-bullet. It is not a silver-bullet. In this book you will learn important reasons why you cannot treat Microservices or any technology or technique as a silver-bullet. There are tradeoffs and advnatages to every architectural decision, you will understand the details by reading this book. Most importantly you will understand how Microservices is what SOA had promised and never delivered. Author: Lucas KrauseLucas has been in the technology industry as a consultant, contractor, architect, engineer, and manager and understands and has used Microservices successfully to solve his client problems. Philosophy of MicroservicesYou'll learn about what the philosophy of Microservices is and why this is important. It is critical to understand the philosophy as that is what makes Microservices work at so many other companies and solutions.If you are looking to gain an understanding of Microservices along with the patterns and application around the process to implementing them than, this is the book for you! Ready to learn about Microservices? Let's go! Want To Be brought up to speed on the latest innovations and techniques with Microservices? Want to Understand Why Microservices? What Makes Microservices so Special? What are the potential pitfalls? Why Are Microservices so popular? How do I make my projects successful?"
  },
  {
    id: 4,
    title: "Book 4",
    author: "Author 4",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    description: "How do you detangle a monolithic system and migrate it to a microservice architecture? How do you do it while maintaining business-as-usual? As a companion to Sam Newman’s extremely popular Building Microservices, this new book details a proven method for transitioning an existing monolithic system to a microservice architecture. With many illustrative examples, insightful migration patterns, and a bevy of practical advice to transition your monolith enterprise into a microservice operation, this practical guide covers multiple scenarios and strategies for a successful migration, from initial planning all the way through application and database decomposition. You’ll learn several tried and tested patterns and techniques that you can use as you migrate your existing architecture. Ideal for organizations looking to transition to microservices, rather than rebuild Helps companies determine whether to migrate, when to migrate, and where to begin Addresses communication, integration, and the migration of legacy systems Discusses multiple migration patterns and where they apply Provides database migration examples, along with synchronization strategies Explores application decomposition, including several architectural refactoring patterns Delves into details of database decomposition, including the impact of breaking referential and transactional integrity, new failure modes, and more"
  },
  {
    id: 5,
    title: "Book 5",
    author: "Author 5",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    description: ""
  },
  {
    id: 6,
    title: "Book 6",
    author: "Author 6",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    description: ""
  },
  {
    id: 7,
    title: "Book 7",
    author: "Author 7",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    description: ""
  },
  {
    id: 8,
    title: "Book 8",
    author: "Author 8",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    description: ""
  },
  {
    id: 9,
    title: "Book 9",
    author: "Author 9",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    description: ""
  },
  {
    id: 10,
    title: "Book 10",
    author: "Author 10",
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    description: ""
  }
];

console.log(books); 
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  };

  const removeBook = (id) => {
    console.log("Removing Book with ID: ", id);
    //removeBook logic later
  }

  const addBook = (id) => {
    console.log("Add Book with ID: ", id);
    //addBook logic later
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} books={books} removeBook={removeBook} />
      <div className={`app-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <MainBody books={books} onAdd={addBook} />
      </div>
    </>
  )
}

export default App
