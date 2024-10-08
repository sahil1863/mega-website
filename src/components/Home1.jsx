import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Logo } from "../components"; // Replace with your actual components
import photo from "./Photos/sujjan.jpg";
import photo2 from "./Photos/shruti.jpg";

function Home() {
    return (
        <div className="relative min-h-screen text-white flex flex-col items-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" >
            
            {/* Semi-transparent overlay for dimming effect */}
            <div className="absolute inset-0  pointer-events-none"></div>

            {/* Main content section */}
            <main className="py-20 flex-1 w-full relative z-10">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-extrabold mb-8 animate-fade-in tracking-widest">
                            Welcome to Social-Shield
                        </h1>
                        <p className="text-xl mb-12 leading-relaxed animate-fade-in-up">
                        Your digital defense against fake identities. Detect fake social media accounts with advanced analysis tools. Protect your online presence and ensure authenticity.
                        </p>
                        <Link to="/signup">
                            <Button
                                bgColor="bg-green-500"
                                textColor="text-white"
                                className="transition duration-300 transform hover:scale-105 hover:bg-green-600 shadow-lg rounded-full px-8 py-3 animate-fade-in-up"
                            >
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </Container>
            </main>

            {/* Additional content or sections */}
            <section className="py-20  bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] w-full relative ">
                <Container>
                    <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
                        <p className="text-lg mb-10 leading-relaxed">
                            Our platform ensures your social media is free from fraudulent users and bots.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <Link to="/features">
                                <Button
                                    bgColor="bg-blue-500"
                                    textColor="text-white"
                                    className="transition duration-300 transform hover:scale-105 hover:bg-blue-600 shadow-lg rounded-full px-8 py-3"
                                >
                                    Features
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button
                                    bgColor="bg-red-500"
                                    textColor="text-white"
                                    className="transition duration-300 transform hover:scale-105 hover:bg-red-600 shadow-lg rounded-full px-8 py-3"
                                >
                                    About
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Testimonials section */}
            <section className=" bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] w-full relative z-10">
                <Container>
                    <div className="max-w-4xl mx-auto text-center animate-fade-in">
                        <h2 className="text-4xl font-bold mb-6">Testimonials</h2>
                        <p className="text-lg mb-10 leading-relaxed">
                            Hear from users who trust our platform for authenticity checks.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in">
                                <img src={photo} className="w-60 h-60 rounded-full mx-auto mb-4" />
                                <p className="text-lg">The impact Social Shield has had in improving online security is remarkable. Its real-time detection capabilities have made our work much easier and make us protected from threats.</p>
                                <p className="mt-2 text-gray-400">- Shivam Sujjan , Cybersecurity Expert</p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in">
                                <img src={photo2} className="w-60 h-60 rounded-full mx-auto mb-4" />
                                <p className="text-lg">As a social media user, knowing that a platform like Social Shield exists gives me confidence that the government is actively protecting us from the threats posed by fake accounts.</p>
                                <p className="mt-2 text-gray-400">- Shruti Kishore , General Public User</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Feedback Button */}
            <div className="py-10 flex justify-center w-full  bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative z-10">
                <Link to="/contact">
                    <Button
                        bgColor="bg-purple-600"
                        textColor="text-white"
                        className="transition duration-300 transform hover:scale-105 hover:bg-purple-700 shadow-lg rounded-full px-8 py-3"
                    >
                        Give Us Feedback
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
