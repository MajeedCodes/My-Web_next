import Link from "next/link"

export default function Custom404() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-9xl font-extrabold text-red-700 animate-bounce">404</h1>
        <p className="text-3xl font-semibold text-gray-700 mt-4">Oops! Page not found</p>
        <p className="text-lg text-gray-600 mt-4">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            Return to Homepage
          </Link>
        </div>
     
        <div className="mt-12 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  )
}
