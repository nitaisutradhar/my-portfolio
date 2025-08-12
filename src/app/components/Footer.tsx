export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Nitai Chandra Sutradhar. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-400">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}