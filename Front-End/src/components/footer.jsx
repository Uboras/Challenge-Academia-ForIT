import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark display-flex text-white position-absolute w-100 bottom-0 left-0">
      <div className="container  text-center">
        <p className="">© {new Date().getFullYear()} Hernan Manera (Ubora)</p>
        
          <h6>Tecnologías usadas</h6>
          <p className="mb-0">
            <strong>Frontend:</strong> React, Bootstrap, JavaScript
          </p>
          <p>
            <strong>Backend:</strong> Node.js y express
          </p>
        </div>
     
    </footer>
  );
}
