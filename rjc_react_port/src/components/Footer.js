import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-light py-3 mt-5 fixed-bottom">
      <ul className="d-flex justify-content-center list-unstyled mb-0">
        <li className="px-3">
          <a className="text-light" href="https://github.com/rjclemmer">
            GITHUB
          </a>
        </li>
        <li className="px-3">
          <a className="text-light" href="https://www.linkedin.com/in/rjclemmer">
            LinkedIn
          </a>
        </li>
        <li className="px-3">
          <a className="text-light" href="clemmer.robert.j@gmail.com">
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
