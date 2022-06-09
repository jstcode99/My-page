import '../assets/css/nav.css';
import '../assets/css/sidebar.css';
import { Link } from "react-router-dom";

export default function LayoutMain(props) {
  return (
    <>
      <main>
        <div className="navbar-app" id="navbar-app">
          <a href="#home" className="active">
            <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 3.77778H19.6667M10.3333 1V3.77778M15.7778 21.8333H26.6667M16.1682 3.77778C14.6624 11.7917 8.88667 18.5139 1 22.0125M11.9636 16.9722C9.56816 14.7581 7.65075 12.1685 6.30756 9.33333L11.9636 16.9722ZM13.4444 26L21.2222 12.1111L29 26H13.4444Z"
                stroke="#B8B8B8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="sidebar-app">
          <div className="sidebar-app-brand">
            <div className="sidebar-app-brand-logo">
              <svg width="94" height="93" viewBox="0 0 94 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="47.551" width="40" height="40" rx="3" transform="rotate(-45.9151 0 47.551)" fill="#17FAEC"/>
                <rect x="33.1814" y="78.9677" width="65.3863" height="19.7265" rx="3" transform="rotate(-45.9151 33.1814 78.9677)" fill="#D9D9D9"/>
                <rect x="79.6257" y="59.0522" width="65.1802" height="19.7265" rx="3" transform="rotate(-136.71 79.6257 59.0522)" fill="#D9D9D9"/>
              </svg>
            </div>
            <h1>Web Developer</h1>
          </div>
          <div className="sidebar-app-menu">
            <Link to="/" className="active">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="body-app">
          {props.children}
        </div>
        <div className="stars-bg-stars"></div>
        <div className="stars-bg-stars-2"></div>
        <div className="stars-bg-stars-3"></div>
      </main>
    </>
  );
}