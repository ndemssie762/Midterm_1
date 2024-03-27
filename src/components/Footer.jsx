import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Nathan Demssie ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
