export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 ">
      <p className="text-sm">
        © {new Date().getFullYear()} Didymus UI Project. All rights reserved.
      </p>
      <p className="text-xs mt-2">Built with ❤️ using Next.js + Tailwind</p>
    </footer>
  );
}
