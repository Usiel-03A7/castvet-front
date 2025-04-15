export default function NavLink({ href, text, mobile = false }) {
  return (
    <a
      href={href}
      className={`${mobile ? "block" : "inline"} px-3 py-2 rounded-md text-lg font-medium text-gray-800 hover:bg-amber-100 hover:text-amber-800 transition-colors`}
    >
      {text}
    </a>
  );
}
