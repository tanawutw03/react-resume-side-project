import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <div className="absolute top-0 left-0 m-10">
        <Link to="/" className="text-[#07253C] p-1">
          <span className="text-[#002265]">Tanawut</span>
          <span className="text-[#14279B]"> Wongboot</span>
        </Link>
      </div>
    </>
  );
}

export default Logo;
