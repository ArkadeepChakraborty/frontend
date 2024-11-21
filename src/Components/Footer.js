// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white py-4">
//       <div className="container text-center">
//         <p>&copy; 2024 EduStream. All rights reserved.</p>
//         <p>
//           <a href="https://www.twitter.com" className="text-white me-3">
//             <i className="fab fa-twitter"></i> Twitter
//           </a>
//           <a href="https://www.facebook.com" className="text-white me-3">
//             <i className="fab fa-facebook"></i> Facebook
//           </a>
//           <a href="https://www.instagram.com" className="text-white">
//             <i className="fab fa-instagram"></i> Instagram
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import "../styles/Footer.css"; // External CSS for the torn effect

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container text-center">
        <p>&copy; 2024 EduStream. All rights reserved.</p>
        <p>
          <a href="https://www.twitter.com" className="text-white me-3">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://www.facebook.com" className="text-white me-3">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://www.instagram.com" className="text-white">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

