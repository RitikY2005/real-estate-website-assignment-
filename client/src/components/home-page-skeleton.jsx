function HomePageSkeleton() {

    return (
        <div className="animate-pulse">

            {/* NAVBAR */}
            <div className="fixed top-0 w-full bg-white px-6 py-3 flex justify-between items-center shadow">
                <div className="h-10 w-32 bg-gray-200 rounded"></div>
                <div className="flex gap-6">
                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
                <div className="h-8 w-20 bg-gray-200 rounded"></div>
            </div>

            <div className="pt-20 space-y-20">

                {/* HERO */}
                <div className="h-screen w-full bg-gray-200 relative">
                    <div className="absolute top-10 left-10 space-y-4">
                        <div className="h-10 w-64 bg-gray-300 rounded"></div>
                        <div className="h-4 w-80 bg-gray-300 rounded"></div>
                    </div>
                </div>

                {/* OVERVIEW */}
                <div className="px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center relative">
                        <div className="w-[300px] h-[300px] bg-gray-200 rounded-full"></div>
                        <div className="w-[100px] h-[100px] bg-gray-300 rounded-full absolute top-0 left-10"></div>
                        <div className="w-[100px] h-[100px] bg-gray-300 rounded-full absolute bottom-0 right-10"></div>
                    </div>

                    <div className="space-y-4">
                        <div className="h-8 w-48 bg-gray-200 rounded"></div>
                        <div className="h-4 w-full bg-gray-200 rounded"></div>
                        <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                        <div className="h-10 w-40 bg-gray-300 rounded"></div>
                    </div>
                </div>

                {/* CONNECTIVITY */}
                <div className="px-6 text-center space-y-6">
                    <div className="h-8 w-64 mx-auto bg-gray-200 rounded"></div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {Array(6).fill().map((_, i) => (
                            <div key={i} className="h-8 w-24 bg-gray-200 rounded-full"></div>
                        ))}
                    </div>
                </div>

                {/* AMENITIES */}
                <div className="px-6 grid md:grid-cols-2 gap-8 items-center">
                    <div className="h-[300px] bg-gray-200 rounded-xl"></div>

                    <div className="grid grid-cols-2 gap-4">
                        {Array(4).fill().map((_, i) => (
                            <div key={i} className="p-4 border rounded-lg space-y-2">
                                <div className="h-10 w-10 mx-auto bg-gray-200 rounded"></div>
                                <div className="h-4 w-20 mx-auto bg-gray-200 rounded"></div>
                                <div className="h-3 w-24 mx-auto bg-gray-200 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ABOUT */}
                <div className="px-6 py-20 text-center space-y-6">
                    <div className="h-8 w-64 mx-auto bg-gray-200 rounded"></div>
                    <div className="h-4 w-3/4 mx-auto bg-gray-200 rounded"></div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                        {Array(5).fill().map((_, i) => (
                            <div key={i} className="space-y-2">
                                <div className="h-6 w-12 mx-auto bg-gray-200 rounded"></div>
                                <div className="h-3 w-20 mx-auto bg-gray-200 rounded"></div>
                            </div>
                        ))}
                    </div>

                    <div className="h-8 w-40 mx-auto bg-gray-200 rounded-full"></div>
                </div>

                {/* FAQ */}
                <div className="px-6 space-y-4 max-w-3xl mx-auto">
                    <div className="h-8 w-64 mx-auto bg-gray-200 rounded"></div>

                    {Array(4).fill().map((_, i) => (
                        <div key={i} className="p-5 bg-gray-100 rounded-xl space-y-3">
                            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                            <div className="h-3 w-full bg-gray-200 rounded"></div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );

}

export default HomePageSkeleton;