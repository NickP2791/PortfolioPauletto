import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "v",
  padding: "96px",
  fontFamily: "-apple-system, Raleway, Roboto, sans-serif, serif",
  background: "var(--dark)",
  height: "100vh",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  fontSize: "4.5rem",
};

const paragraphStyles = {
  marginBottom: 48,
  color: "var(--light)",
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role='img' aria-label='Pensive emoji'>
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        <Link to='/' style={{ color: "var(--lightblue)" }}>
          Go back to portfolio home
        </Link>
        .
      </p>
    </main>
  );
};

export default NotFoundPage;
