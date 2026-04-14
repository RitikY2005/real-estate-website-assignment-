import { useEffect, useState, useRef } from "react";
import axiosInstance from "../utils/axios-util";
import { Link } from 'react-router-dom';
import HomePageSkeleton from "../components/home-page-skeleton";

function HomePage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [openIndex, setOpenIndex] = useState(null);

    
    const heroRef = useRef(null);
    const overviewRef = useRef(null);
    const amenitiesRef = useRef(null);
    const aboutRef = useRef(null);
    const faqRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/api/content");
                setData(res.data.websiteContent);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    if (loading) return <HomePageSkeleton/>;

    return (
        <div className="font-sans">

            {/* navbar */}
            <nav className="fixed top-0 w-full bg-white shadow z-50 px-6 py-3 flex items-center justify-between">


                <div className="flex items-center">
                    <img src="/logo.svg" alt="Logo" className="h-24 w-auto" />
                </div>


                <div className="flex gap-6 text-sm absolute left-1/2 transform -translate-x-1/2">
                    <button className="cursor-pointer hover:text-blue-400" onClick={() => scrollTo(heroRef)}>Home</button>
                    <button className="cursor-pointer hover:text-blue-400" onClick={() => scrollTo(overviewRef)}>Overview</button>
                    <button className="cursor-pointer hover:text-blue-400" onClick={() => scrollTo(amenitiesRef)}>Amenities</button>
                    <button className="cursor-pointer hover:text-blue-400" onClick={() => scrollTo(aboutRef)}>About</button>
                    <button className="cursor-pointer hover:text-blue-400" onClick={() => scrollTo(faqRef)}>FAQs</button>
                </div>


                <div>
                    <Link to="/admin">
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                            Admin
                        </button>
                    </Link>
                </div>

            </nav>

            <div className="pt-20 space-y-20">

                {/* hero part */}
                <section ref={heroRef} className="relative w-full h-screen/2 pt-32">

                    {/* full size image  */}
                    <img
                        src={data.heroSection.image}
                        alt="hero"
                        className="w-full h-100 object-cover"
                    />

                    {/* text on top */}
                    <div className="absolute top-6 left-6 max-w-lg p-6 rounded-xl">

                        <h1 className="text-4xl font-bold mb-4">
                            {data.heroSection.title.toUpperCase().trim().split(" ").map((word, index, arr) => {
                                if (index === 0) {
                                    return (
                                        <span key={index} className="text-yellow-800 block">
                                            {word}{" "}
                                        </span>
                                    );
                                }

                                if (index >= arr.length - 2) {
                                    return (
                                        <span key={index} className="text-red-500">
                                            {word}{" "}
                                        </span>
                                    );
                                }

                                return (
                                    <span key={index} className="text-black">
                                        {word}{" "}
                                    </span>
                                );
                            })}
                        </h1>

                        <p className="text-black text-lg pt-1 font-serif rounded-lg bg-gradient-to-b from-white via-white/30 to-transparent">
                            {data.heroSection.subtitle}
                        </p>

                    </div>

                </section>

                {/* PROJECT OVERVIEW */}
                <section
                    ref={overviewRef}
                    className="px-6 py-16 bg-[#dfeaea] grid md:grid-cols-2 gap-12 items-center"
                >


                    <div className="relative w-full flex justify-center">


                        <img
                            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
                            alt="main"
                            className="w-[350px] h-[350px] object-cover rounded-full"
                        />


                        <img
                            src="https://images.unsplash.com/photo-1493809842364-78817add7ffb"
                            alt="small1"
                            className="w-[120px] h-[120px] object-cover rounded-full border-4 border-white absolute top-[-20px] left-[30px]"
                        />


                        <img
                            src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
                            alt="small2"
                            className="w-[120px] h-[120px] object-cover rounded-full border-4 border-white absolute bottom-[-20px] right-[30px]"
                        />

                    </div>

                    {/* text part */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">
                            About Project
                        </h2>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            {data.projectOverview.description}
                        </p>

                        <button className="bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600 transition">
                            Download Brochure
                        </button>
                    </div>

                </section>

                {/* CONNECTIVITY */}
                <section className="px-6 py-20 bg-gradient-to-b from-white to-gray-50 text-center">

                    <h2 className="text-4xl font-bold mb-4 text-gray-800">
                        Nearby Connectivity
                    </h2>

                    <div className="w-20 h-1 bg-green-500 mx-auto mb-6 rounded"></div>

                    {/* sepratae by comma here */}
                    <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                        {data.nearbyConnectivity.description
                            .split(",")
                            .map((item, index) => (
                                <span
                                    key={index}
                                    className="px-5 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-gray-700 text-sm hover:bg-green-50 hover:border-green-400 transition"
                                >
                                    {item.trim()}
                                </span>
                            ))}
                    </div>

                </section>

                {/* AMENITIES */}
                <section ref={amenitiesRef} className="px-6">
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        Amenities
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 items-center">

                        {/* Image */}
                        <img
                            src={data.amenities.image}
                            alt="amenities"
                            className="rounded-xl"
                        />

                        {/* Items */}
                        <div className="grid grid-cols-2 gap-4">
                            {data.amenities.items.map((item) => (
                                <div key={item._id} className="text-center p-4 border rounded-lg">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-10 mx-auto mb-2"
                                    />
                                    <h3 className="font-medium">{item.title}</h3>
                                    <p className="text-xs text-gray-500">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* ABOUT DEVELOPER */}
                <section ref={aboutRef} className="relative px-6 py-20 bg-[#dfeaea] text-center overflow-hidden">


                    <h2 className="text-4xl font-bold mb-4 text-gray-800">
                        About Developer
                    </h2>


                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        {data.aboutUs.description}
                    </p>

                    {/* hard coded stats */}
                    <div className="max-w-4xl mx-auto bg-green-200 rounded-xl shadow-md py-6 px-4 grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">

                        <div>
                            <h3 className="text-xl font-bold text-gray-800">6</h3>
                            <p className="text-sm text-gray-600">Projects</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800">1.32 LAC</h3>
                            <p className="text-sm text-gray-600">sq. ft. area developed</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800">449+</h3>
                            <p className="text-sm text-gray-600">Happy Families</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800">3.77 LAC</h3>
                            <p className="text-sm text-gray-600">sq. ft. ongoing</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800">2.7 LAC</h3>
                            <p className="text-sm text-gray-600">sq. ft. upcoming</p>
                        </div>

                    </div>

                    {/* CONSTRUCTION STATUS */}
                    <div className="mb-12 flex justify-center">
                        <span className="px-6 py-2 bg-green-100 text-green-800 font-semibold rounded-full shadow-sm">
                            {data.constructionUpdates.label}
                        </span>
                    </div>



                </section>



                {/* FAQ */}
                <section ref={faqRef} className="px-6 py-20 bg-gray-50">

                    <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
                        Frequently Asked Questions
                    </h2>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {data.faqs.map((faq, index) => {
    
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={faq._id}
                                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition"
                                >
                                    {/* Question */}
                                    <button
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : index)
                                        }
                                        className="w-full flex justify-between items-center p-5 text-left"
                                    >
                                        <span className="font-semibold text-gray-800">
                                            {faq.question}
                                        </span>

                                        <span
                                            className={`transform transition ${isOpen ? "rotate-180" : ""
                                                }`}
                                        >
                                            {isOpen?'-':'+'}
                                        </span>
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`px-5 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-5" : "max-h-0"
                                            }`}
                                    >
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </section>

            </div>

            <footer className="flex items-center justify-center py-10 text-sm">
                &copy;{new Date().getFullYear()} All rights reserved 
            </footer>
        </div>
    );
}

export default HomePage;