import { useEffect, useState } from "react";

export function useHello() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch hello message");
        }
        return res.text();
      })
      .then((data) => setMessage(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { message, loading, error };
}