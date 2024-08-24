import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?term=${term}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
}

// Alternative but not recommended
// import { Form } from "react-router-dom";

// export default function SearchInput() {
//   return (
//     <Form action="/search">
//       <input name="term" />
//     </Form>
//   );
// }
