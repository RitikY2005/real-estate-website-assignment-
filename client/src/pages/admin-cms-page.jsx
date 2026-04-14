import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios-util";
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/auth-context';
import { useNavigate } from 'react-router-dom';
import AdminCmsSkeleton from "../components/admin-cms-skeleton";

function AdminCmsPage() {
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { logout,isAdmin } = useAuth();
    const navigator = useNavigate();

    const handleChange = (section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };


    const updateAmenity = (index, field, value) => {
        const updated = [...formData.amenities.items];
        updated[index][field] = value;

        setFormData({
            ...formData,
            amenities: {
                ...formData.amenities,
                items: updated
            }
        });
    };

    const addAmenity = () => {
        setFormData({
            ...formData,
            amenities: {
                ...formData.amenities,
                items: [...formData.amenities.items, { title: "", description: "", image: "\logo.svg" }]
            }
        });
    };

    const removeAmenity = (index) => {
        const updated = formData.amenities.items.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            amenities: {
                ...formData.amenities,
                items: updated
            }
        });
    };


    const updateFaq = (index, field, value) => {
        const updated = [...formData.faqs];
        updated[index][field] = value;
        setFormData({ ...formData, faqs: updated });
    };

    const addFaq = () => {
        setFormData({
            ...formData,
            faqs: [...formData.faqs, { question: "", answer: "" }]
        });
    };

    const removeFaq = (index) => {
        const updated = formData.faqs.filter((_, i) => i !== index);
        setFormData({ ...formData, faqs: updated });
    };

    const handleSubmit = async () => {
        try {
            const { data } = await axiosInstance.put("/api/admin/content", formData);
            toast(data.message);
        } catch (err) {
            toast.error(err.message);
        }
    };

    const handleLogout = async () => {
        const { success, message } = await logout();
        if (success) {
            toast.success(message);
            navigator('/admin/login');
        } else {
            toast.success(message);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosInstance.get("/api/content");
                setFormData(data.websiteContent);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    
    useEffect(() => {
        // if not loegeed in , please navigate to login
        if(!isAdmin){
            navigator('/admin/login');
        }
    }, [isAdmin]);

    if (loading || !formData) return <AdminCmsSkeleton/>;

    return (
        <div className="flex min-h-screen bg-gray-100">

            {/* Sidebar */}
            <div className="w-64 bg-green-800 text-white p-6 space-y-6">
                <div className="w-full flex items-center justify-center">
                    <div className="w-48 flex items-center justify-center">
                        <img src="/logo2.svg" alt="website logo" className="object-fit" />
                    </div>
                </div>
                <button className="block w-full text-left bg-green-600 px-4 py-2 rounded">
                    Edit Content
                </button>
                <button className="block w-full text-left px-4 py-2" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            {/* Main */}
            <div className="flex-1 p-8 space-y-6">

                <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

                {/* Hero Section */}
                <div className="bg-white p-6 rounded shadow space-y-5">
                    <h2 className="font-medium text-lg">Hero Section</h2>

                    <div className="flex gap-6 items-start">

                        {/* shwo image + url */}
                        <div className="w-1/3 space-y-3">

                            <img
                                src={formData.heroSection.image}
                                alt="hero"
                                className="w-full h-40 object-cover rounded border"
                                onError={(e) => {
                                    e.target.src =
                                        "https://via.placeholder.com/300x200?text=No+Image";
                                }}
                            />

                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder=" "
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                                    value={formData.heroSection.image}
                                    onChange={(e) =>
                                        handleChange("heroSection", "image", e.target.value)
                                    }
                                />
                                <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-600">
                                    Image URL
                                </span>
                            </div>
                        </div>

                        {/* title and subtitle */}
                        <div className="flex-1 space-y-4">


                            <div className="relative w-full">
                                <input
                                    placeholder=" "
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                                    value={formData.heroSection.title}
                                    onChange={(e) =>
                                        handleChange("heroSection", "title", e.target.value)
                                    }
                                />
                                <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-600">
                                    Title
                                </span>
                            </div>


                            <div className="relative w-full">
                                <input
                                    placeholder=" "
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                                    value={formData.heroSection.subtitle}
                                    onChange={(e) =>
                                        handleChange("heroSection", "subtitle", e.target.value)
                                    }
                                />
                                <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-600">
                                    Subtitle
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Project Overview */}
                <div className="bg-white p-6 rounded shadow space-y-4">
                    <h2 className="font-medium text-lg">Project Overview</h2>

                    <div className="flex gap-6 items-start">

                        {/* image + it's url */}
                        <div className="w-1/3 space-y-3">

                            <img
                                src={formData.projectOverview.image}
                                alt="Project"
                                className="w-full h-40 object-cover rounded border"
                                onError={(e) => {
                                    e.target.src =
                                        "https://via.placeholder.com/300x200?text=No+Image";
                                }}
                            />

                            <input
                                type="text"
                                placeholder="Paste image URL"
                                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                value={formData.projectOverview.image}
                                onChange={(e) =>
                                    handleChange("projectOverview", "image", e.target.value)
                                }
                            />
                        </div>

                        {/* right description area  */}
                        <div className="flex-1">
                            <textarea
                                className="w-full min-h-48 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Project description..."
                                value={formData.projectOverview.description}
                                onChange={(e) =>
                                    handleChange("projectOverview", "description", e.target.value)
                                }
                            />
                        </div>

                    </div>
                </div>

                {/* About secton */}
                <div className="bg-white p-6 rounded shadow space-y-4">
                    <h2 className="text-lg font-medium">About Us</h2>

                    <div className="relative w-full">
                        <textarea
                            placeholder=" "
                            className="w-full px-4 pt-1 pb-2 border border-gray-300 rounded-lg text-sm min-h-[150px] bg-white focus:outline-none focus:ring-2 focus:ring-green-500 peer"
                            value={formData.aboutUs.description}
                            onChange={(e) =>
                                handleChange("aboutUs", "description", e.target.value)
                            }
                        />
                        
                    </div>
                </div>

                {/* Amenities */}
                <div className="bg-white p-6 rounded shadow space-y-4">
                    <h2 className="text-lg font-medium">Amenities</h2>

                    {formData.amenities.items.map((item, i) => (
                        <div
                            key={i}
                            className="border rounded-lg p-4 grid grid-cols-3 gap-4 items-start"
                        >

                            {/* icon preview */}
                            <div className="space-y-2">
                                <img
                                    src={item.image}
                                    alt="amenity"
                                    className="w-12 h-12 object-cover rounded border"
                                    onError={(e) => {
                                        e.target.src =
                                            "https://via.placeholder.com/150?text=No+Image";
                                    }}
                                />

                                <input
                                    type="text"
                                    placeholder="Image URL"
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                    value={item.image}
                                    onChange={(e) =>
                                        updateAmenity(i, "image", e.target.value)
                                    }
                                />
                            </div>

                            {/* title + desc */}
                            <div className="col-span-2 space-y-3">

                                <div>
                                    <label className="text-xs text-gray-500">Title</label>
                                    <input
                                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                        value={item.title}
                                        onChange={(e) =>
                                            updateAmenity(i, "title", e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-gray-500">Description</label>
                                    <textarea
                                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm min-h-[70px] focus:outline-none focus:ring-2 focus:ring-green-500"
                                        value={item.description}
                                        onChange={(e) =>
                                            updateAmenity(i, "description", e.target.value)
                                        }
                                    />
                                </div>

                                {/* remvoe this amenity */}
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => removeAmenity(i)}
                                        className="text-red-500 text-sm hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}

                    {/* add a new amenity */}
                    <button
                        onClick={addAmenity}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
                    >
                        + Add Amenity
                    </button>
                </div>

                {/* Construction  */}
                <div className="bg-white p-6 rounded shadow space-y-4">
                    <h2 className="text-lg font-medium">Construction Updates</h2>

                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder=" "
                            className="w-full px-4 pt-1 pb-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 peer"
                            value={formData.constructionUpdates.label}
                            onChange={(e) =>
                                handleChange("constructionUpdates", "label", e.target.value)
                            }
                        />
                       
                    </div>
                </div>

                {/* Nneaby connectivity sec */}
                <div className="bg-white p-6 rounded shadow space-y-4">
                    <h2 className="text-lg font-medium">Nearby Connectivity</h2>

                    <div className="relative w-full">
                        <textarea
                            placeholder=" "
                            className="w-full px-4 pt-1 pb-2 border border-gray-300 rounded-lg text-sm min-h-[120px] bg-white focus:outline-none focus:ring-2 focus:ring-green-500 peer"
                            value={formData.nearbyConnectivity.description}
                            onChange={(e) =>
                                handleChange("nearbyConnectivity", "description", e.target.value)
                            }
                        />
                        
                    </div>
                </div>

                {/* FAQs Section */}
                <div className="bg-white p-6 rounded shadow space-y-4">
                    <h2 className="text-lg font-medium">FAQs</h2>

                    {formData.faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="border rounded-lg p-4 space-y-3 bg-gray-50"
                        >
                            {/* Question */}
                            <div>
                                <label className="text-xs text-gray-500">Question</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                    value={faq.question}
                                    onChange={(e) =>
                                        updateFaq(i, "question", e.target.value)
                                    }
                                />
                            </div>

                            {/* Answer */}
                            <div>
                                <label className="text-xs text-gray-500">Answer</label>
                                <textarea
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm min-h-[90px] focus:outline-none focus:ring-2 focus:ring-green-500"
                                    value={faq.answer}
                                    onChange={(e) =>
                                        updateFaq(i, "answer", e.target.value)
                                    }
                                />
                            </div>

                            {/* Actions */}
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400">
                                    FAQ #{i + 1}
                                </span>

                                <button
                                    onClick={() => removeFaq(i)}
                                    className="text-red-500 text-sm hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}


                    <button
                        onClick={addFaq}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
                    >
                        + Add FAQ
                    </button>
                </div>

                {/* Save */}
                <button
                    onClick={handleSubmit}
                    className="w-full bg-green-700 text-white py-3 rounded"
                >
                    Save Changes
                </button>

            </div>
        </div>
    );
}

export default AdminCmsPage;