const links = ["About", "Passions", "Portfolio", "Contact Me"];

function Navbar() {
  return (
    <ul className="flex gap-5 absolute top-0 right-0 m-10 text-[#07253C]">
      {links.map((link, index) => (
        <li
          key={index}
          className={`group hover:bg-[#4581F6] hover:text-white hover:rounded hover:cursor-pointer p-1 ${
            link === "Contact Me" ? "bg-[#4581F6] text-white rounded" : ""
          }`}
        >
          {link}
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
