function AdminCmsSkeleton() {
  return (
    <div className="flex min-h-screen bg-gray-100 animate-pulse">

      
      <div className="w-64 bg-green-800 p-6 space-y-6">
        <div className="h-10 bg-green-700 rounded"></div>
        <div className="h-10 bg-green-600 rounded"></div>
        <div className="h-10 bg-green-700 rounded"></div>
      </div>

      
      <div className="flex-1 p-8 space-y-6">

        
        <div className="h-8 w-48 bg-gray-300 rounded"></div>

        
        <div className="bg-white p-6 rounded shadow space-y-5">
          <div className="h-6 w-40 bg-gray-300 rounded"></div>

          <div className="flex gap-6">
            
            <div className="w-1/3 space-y-3">
              <div className="w-full h-40 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>

            
            <div className="flex-1 space-y-4">
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="bg-white p-6 rounded shadow space-y-4">
          <div className="h-6 w-48 bg-gray-300 rounded"></div>

          <div className="flex gap-6">
            <div className="w-1/3 space-y-3">
              <div className="w-full h-40 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>

            <div className="flex-1">
              <div className="h-40 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        
        <div className="bg-white p-6 rounded shadow space-y-4">
          <div className="h-6 w-32 bg-gray-300 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>

        
        <div className="bg-white p-6 rounded shadow space-y-4">
          <div className="h-6 w-32 bg-gray-300 rounded"></div>

          {[1, 2].map((_, i) => (
            <div key={i} className="border rounded-lg p-4 grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gray-200 rounded"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </div>

              <div className="col-span-2 space-y-3">
                <div className="h-8 bg-gray-200 rounded"></div>
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}

          <div className="h-10 w-40 bg-gray-300 rounded"></div>
        </div>

       
        <div className="bg-white p-6 rounded shadow space-y-4">
          <div className="h-6 w-48 bg-gray-300 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>

        
        <div className="bg-white p-6 rounded shadow space-y-4">
          <div className="h-6 w-56 bg-gray-300 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>

        
        <div className="bg-white p-6 rounded shadow space-y-4">
          <div className="h-6 w-24 bg-gray-300 rounded"></div>

          {[1, 2].map((_, i) => (
            <div key={i} className="border rounded-lg p-4 space-y-3">
              <div className="h-8 bg-gray-200 rounded"></div>
              <div className="h-16 bg-gray-200 rounded"></div>
            </div>
          ))}

          <div className="h-10 w-40 bg-gray-300 rounded"></div>
        </div>

        
        <div className="h-12 bg-gray-300 rounded"></div>

      </div>
    </div>
  );
}

export default AdminCmsSkeleton;