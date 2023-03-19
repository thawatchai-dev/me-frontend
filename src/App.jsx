import React, { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API + "/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.length > 0
        ? users.map((obj, index) => (
            <ul key={index}>
              <li>
                {obj.id} {obj.name} {obj.email}
              </li>
            </ul>
          ))
        : ""}
    </div>
  );
};

export default App;
