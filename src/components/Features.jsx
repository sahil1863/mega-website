import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "./index";

const FeaturesPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <main className="py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-8 text-blue-400">Features</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-950">
                                <h2 className="text-2xl font-bold mb-4 text-blue-400">Reading and Gaining Insights</h2>
                                <p className="text-lg mb-4">
                                Read other blog posts to gain insights and expand your knowledge on various topics.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-950">
                                <h2 className="text-2xl font-bold mb-4 text-blue-400">S-Shield Score
                                </h2>
                                <p className="text-lg mb-4">
                                Our AI system assigns an S-Shield Score to each flagged account based on parameters like follower behavior, activity, and content authenticity, helping identify high-risk fake accounts.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-950">
                                <h2 className="text-2xl font-bold mb-4 text-blue-400">Direct API Integration
                                </h2>
                                <p className="text-lg mb-4">
                                Integrated with Facebook, Instagram, and Twitter, Social Shield automates the reporting process, instantly sending takedown requests for detected fake accounts.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-950">
                                <h2 className="text-2xl font-bold mb-4 text-blue-400">24/7 Monitoring
                                </h2>
                                <p className="text-lg mb-4">
                                Social Shield continuously tracks social media, providing real-time alerts for suspicious activities or accounts, ensuring swift response and action.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-950">
                                <h2 className="text-2xl font-bold mb-4 text-blue-400">Real-time Editor</h2>
                                <p className="text-lg mb-4">
                                Apply custom styles to your content using our real-time editor.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-950">
                                <h2 className="text-2xl font-bold mb-4 text-blue-400">Dynamic Dashboard</h2>
                                <p className="text-lg mb-4">
                                The AI-powered dashboard offers real-time analytics on follower patterns, post engagement, and flagged profiles, enabling data-driven decisions and efficient monitoring.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12">
                            <Link to="/" className="block mx-auto w-max">
                                <Button
                                    bgColor="bg-blue-300"
                                    textColor="text-black"
                                    className="transition-transform duration-300 transform hover:scale-105 hover:bg-blue-800"
                                >
                                    Go Back to Home
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </main>
        </div>
    );
};

export default FeaturesPage;
