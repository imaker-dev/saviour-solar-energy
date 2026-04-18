import Link from "next/link";

export default function NotFound() {
return ( <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary-50 to-white px-6 text-center">

  {/* Big 404 */}
  <h1 className="text-7xl font-extrabold text-primary-500 drop-shadow-sm">
    404
  </h1>

  {/* Heading */}
  <h2 className="mt-4 text-2xl font-semibold text-gray-800">
    Oops! Page not found
  </h2>

  {/* Description */}
  <p className="mt-2 max-w-md text-gray-500">
    The page you’re looking for doesn’t exist or has been moved.
  </p>

  {/* Buttons */}
  <div className="mt-6 flex gap-4">
    <Link
      href="/"
      className="rounded-lg bg-primary-500 px-6 py-3 text-white shadow-md transition hover:bg-primary-600"
    >
      Go Home
    </Link>

    <Link
      href="/about"
      className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 transition hover:bg-gray-100"
    >
      About Us
    </Link>
  </div>

</div>
);
}
