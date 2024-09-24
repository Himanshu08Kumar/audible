import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [data, setData] = useState();
  return (
    <div className="header">
      <ul className="header-list">
        <li>Home</li>
        <li>
          <select name="" value="Browse" id="">
            Browse
            <option value="">Browse</option>
            <option value="">Fiction</option>
            <option value="">Horror</option>
          </select>
        </li>
        <li>About Membership</li>
      </ul>
      <span>
        <input
          type="text"
          value={data}
          onInput={(e) => setData(e.target.value)}
        />
        <CiSearch />
      </span>
    </div>
  );
};

export default Header;
