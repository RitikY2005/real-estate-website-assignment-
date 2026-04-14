import { useEffect, useState, useRef } from "react";
import axiosInstance from "../utils/axios-util";
import { Link } from 'react-router-dom';

function HomePage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Refs for scrolling
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

    if (loading) return <div className="p-10 text-center">Loading...</div>;

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
                <section ref={heroRef} className="relative w-full h-screen py-32">

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
                <section ref={overviewRef} className="px-6 grid md:grid-cols-2 gap-8 items-center">
                    <img
                        src={data.projectOverview.image}
                        alt="overview"
                        className="rounded-xl"
                    />

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Project Overview
                        </h2>
                        <p className="text-gray-600">
                            {data.projectOverview.description}
                        </p>
                    </div>
                </section>

                {/* CONNECTIVITY */}
                <section className="px-6 text-center">
                    <h2 className="text-2xl font-semibold mb-3">
                        Nearby Connectivity
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {data.nearbyConnectivity.description}
                    </p>
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

                {/* ABOUT */}
                <section ref={aboutRef} className="px-6 text-center">
                    <h2 className="text-2xl font-semibold mb-3">
                        About Developer
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {data.aboutUs.description}
                    </p>
                </section>

                {/* CONSTRUCTION */}
                <section className="px-6 text-center">
                    <h2 className="text-2xl font-semibold mb-3">
                        Construction Update
                    </h2>
                    <p className="text-green-600 font-medium">
                        {data.constructionUpdates.label}
                    </p>
                </section>

                {/* FAQ */}
                <section ref={faqRef} className="px-6 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        FAQs
                    </h2>

                    <div className="space-y-4">
                        {data.faqs.map((faq) => (
                            <div key={faq._id} className="border rounded-lg p-4">
                                <h3 className="font-medium">{faq.question}</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}

export default HomePage;