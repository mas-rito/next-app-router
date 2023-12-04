export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5">
        <div className="relative m-10 flex max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md w-80 animate-pulse">
          <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"></div>
          <div className="mt-4 px-5 pb-5">
            <div>
              <h5 className="text-xl tracking-tight text-slate-900 truncate"></h5>
            </div>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900"></span>
              </p>
            </div>
            <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 h-10"></div>
          </div>
        </div>
        <div className="relative m-10 flex max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md w-80 animate-pulse">
          <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"></div>
          <div className="mt-4 px-5 pb-5">
            <div>
              <h5 className="text-xl tracking-tight text-slate-900 truncate"></h5>
            </div>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900"></span>
              </p>
            </div>
            <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 h-10"></div>
          </div>
        </div>
        <div className="relative m-10 flex max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md w-80 animate-pulse">
          <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"></div>
          <div className="mt-4 px-5 pb-5">
            <div>
              <h5 className="text-xl tracking-tight text-slate-900 truncate"></h5>
            </div>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900"></span>
              </p>
            </div>
            <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 h-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
