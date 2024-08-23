import { useState } from "react";

export default function SearchInput() {
  const [term, setTerm] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
}
