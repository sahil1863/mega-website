import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Button, Container, Logo } from "../components"; // Replace with your actual components
import { useSelector } from "react-redux";
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LineController,
  ArcElement,
} from 'chart.js';
import 'chart.js/auto';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, LineController, ArcElement);

const getRandomUserName = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Fiona', 'George', 'Hannah'];
  const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomNum = Math.floor(Math.random() * 1000);
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  return `${randomName}${randomNum}${randomSymbol}`;
};
function Home() {

    const userData = useSelector((status) => status.auth.userData);
    const name = userData ? userData?.name : null;
    const [imageFile, setImageFile] = useState(null);
  const [userId, setUserId] = useState('');
  const [platform, setPlatform] = useState('instagram');
  const [fakeness, setFakeness] = useState(null);
  const [showFakeScorePopup, setShowFakeScorePopup] = useState(false);
  const [showImageSearchPopup, setShowImageSearchPopup] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [usersData, setUsersData] = useState([]);

  const handleCheckFakeness = (e) => {
    e.preventDefault();

    // Generate random data for fakeness score and display popup
    const randomFakeness = Math.floor(Math.random() * 101);
    const followers = Math.floor(Math.random() * 50) + 1;
    const following = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
    const followToFollowerRatio = (following / followers).toFixed(2);

    setUserDetails({ followers, following, followToFollowerRatio });
    setFakeness(randomFakeness);
    setShowFakeScorePopup(true);
  };

  const handleImageSearch = () => {
    // Simulate up to 8 users who posted the image with realistic user IDs
    const users = Array.from({ length: Math.floor(Math.random() * 8) + 1 }, () => ({
      userId: getRandomUserName(),
      followers: Math.floor(Math.random() * 50) + 1,
      following: Math.floor(Math.random() * (5000 - 500 + 1)) + 500,
      likes: Math.floor(Math.random() * 15) + 1,
      fakeScore: Math.floor(Math.random() * 101),
    }));

    users.forEach((user) => {
      user.followToFollowerRatio = (user.following / user.followers).toFixed(2);
    });

    setUsersData(users);
    setShowImageSearchPopup(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  // Data for the Bar chart
  const chartData = {
    labels: usersData.map((user) => user.userId),
    datasets: [
      {
        label: 'Followers',
        data: usersData.map((user) => user.followers),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Following',
        data: usersData.map((user) => user.following),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Likes',
        data: usersData.map((user) => user.likes),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Fakeness Score (%)',
        data: usersData.map((user) => user.fakeScore),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'User Data Analysis',
      },
    },
  };

  // Line chart data
  const lineChartData = {
    labels: usersData.map((user) => user.userId),
    datasets: [
      {
        label: 'Engagement Over Time',
        data: usersData.map((user) => user.likes + user.followers), // Example data for engagement
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'User Engagement',
      },
    },
  };

  // Pie chart data
  const pieChartData = {
    labels: usersData.map((user) => user.userId),
    datasets: [
      {
        label: 'Fakeness Scores',
        data: usersData.map((user) => user.fakeScore),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(100, 200, 100, 0.6)',
          'rgba(200, 100, 200, 0.6)',
        ],
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Fakeness Score Distribution',
      },
    },
  };
    return (
        <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black min-h-screen text-white flex flex-col items-center">
            {/* Main content section */}
            <main className="py-20 flex-1 w-full">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="text-5xl font-extrabold mb-8 animate-fade-in tracking-wide">
                            Welcome <span className="text-teal-400">{userData?.name}</span>
                        </div>
                        <p className="text-xl mb-10 leading-relaxed">
                            Welcome back! Dive into the latest posts or share your own story
                        </p>
                        <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 p-4 relative">
                            {/* Background Texture */}
                            <div className="absolute inset-0 opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                            {/* Main container */}
                            <div className="relative flex-grow flex flex-col items-center justify-center p-4 z-10">
                                <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg transition-all hover:shadow-xl space-y-8">
                                <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8 tracking-tight">
                                    Fakeness Checker
                                </h1>

                                {/* Image Upload Section */}
                                <div className="mb-6">
                                    <label className="block text-lg text-gray-700 font-semibold mb-2">Upload Post Image</label>
                                    <input
                                    type="file"
                                    accept="image/*"
                                    className="w-full px-4 py-3 border-2 border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                    onChange={handleFileChange}
                                    required
                                    />
                                    <button
                                    onClick={handleImageSearch}
                                    className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-bold text-lg tracking-wide transform hover:scale-105 hover:shadow-md transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                    >
                                    Search Post
                                    </button>
                                </div>

                                {/* Platform User ID and Submit */}
                                <form onSubmit={handleCheckFakeness} className="space-y-6">
                                    <div>
                                    <label className="block text-lg text-gray-700 font-semibold mb-2">User ID</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border-2 text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                        value={userId}
                                        onChange={(e) => setUserId(e.target.value)}
                                        required
                                    />
                                    </div>

                                    <div>
                                    <label className="block text-lg text-gray-700 font-semibold mb-2">Platform</label>
                                    <select
                                        value={platform}
                                        onChange={(e) => setPlatform(e.target.value)}
                                        className="w-full px-4 py-3 border-2 text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                    >
                                        <option value="instagram">Instagram</option>
                                        <option value="twitter">Twitter</option>
                                        <option value="facebook">Facebook</option>
                                    </select>
                                    </div>

                                    <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-bold text-lg tracking-wide transform hover:scale-105 hover:shadow-md transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                    >
                                    Check Fakeness
                                    </button>
                                </form>
                                </div>

                                {/* User Data Display */}
                                {showImageSearchPopup && (
                                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
                                    <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl p-8 relative overflow-y-auto" style={{ maxHeight: '80vh' }}>
                                    <button
                                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
                                        onClick={() => setShowImageSearchPopup(false)}
                                    >
                                        &times;
                                    </button>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">User Data</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {usersData.map((user) => (
                                        <div key={user.userId} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                            <h3 className="font-semibold text-lg">{user.userId}</h3>
                                            <p>Followers: {user.followers}</p>
                                            <p>Following: {user.following}</p>
                                            <p>Likes: {user.likes}</p>
                                            <p>Fakeness Score: {user.fakeScore}%</p>
                                            <p>Follow-to-Follower Ratio: {user.followToFollowerRatio}</p>
                                        </div>
                                        ))}
                                    </div>

                                    <div className="mt-8">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Bar Chart of User Data</h3>
                                        <Bar data={chartData} options={chartOptions} />
                                    </div>

                                    <div className="mt-8">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Line Chart of Engagement</h3>
                                        <Line data={lineChartData} options={lineChartOptions} />
                                    </div>

                                    <div className="mt-8">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Pie Chart of Fakeness Scores</h3>
                                        <Pie data={pieChartData} options={pieChartOptions} />
                                    </div>
                                    </div>
                                </div>
                                )}

                                {/* Larger Div for Fakeness Score Popup */}
                                {showFakeScorePopup && (
                                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
                                    <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-8">
                                    <button
                                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
                                        onClick={() => setShowFakeScorePopup(false)}
                                    >
                                        &times;
                                    </button>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Fakeness Score</h2>
                                    <div className="flex flex-col items-center">
                                        <div className="relative">
                                        <CircularProgressbar
                                            value={fakeness}
                                            text={`${fakeness}%`}
                                            styles={buildStyles({
                                            pathColor: fakeness > 50 ? 'red' : 'green',
                                            textColor: '#000',
                                            trailColor: '#d6d6d6',
                                            })}
                                        />
                                        </div>
                                        <p className="mt-4 text-lg">Followers: {userDetails.followers}</p>
                                        <p className="text-lg">Following: {userDetails.following}</p>
                                        <p className="text-lg">Follow-to-Follower Ratio: {userDetails.followToFollowerRatio}</p>
                                    </div>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </main>

            {/* Additional content */}
            <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 w-full">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8 text-white">Why Choose Us?</h2>
                        <p className="text-lg mb-10 leading-relaxed text-gray-300">
                            Discover why thousands of writers and readers love using our platform.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <Link to="/features">
                                <Button
                                    bgColor="bg-blue-600"
                                    textColor="text-white"
                                    className="transition duration-300 transform hover:scale-105 hover:bg-blue-700 shadow-lg rounded-full px-8 py-3"
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

            {/* Feedback Button */}
            <div className="py-10 flex justify-center w-full bg-gradient-to-b from-gray-900 to-gray-800">
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