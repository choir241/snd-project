import { useEffect, useState } from "react";

export default function AuthLink() {
  const [authLink, setAuthLink] = useState("");

  useEffect(() => {
    async function generateToken() {
      try {
        const generatedToken = await axios.get(
          "http://localhost:8000/generateToken"
        );
        setAuthLink(generatedToken.data.url);
      } catch (err) {
        console.error(`There was an error grabbing the generateToken endpoint: ${err.message}`);
        throw new Error(`There was an error grabbing the generateToken endpoint: ${err.message}`);
      }
    }
    generateToken();
  }, []);

  return (
    <a href={authLink} className="button">
      Login
    </a>
  );
}
