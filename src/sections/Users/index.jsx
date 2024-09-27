import { useState, useEffect } from "react";

export default function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/hermagst/contact")
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((user) => (
            <li key={user.id} style={{ background: "#0d7f26" }}>
              <img src={user.profileImage} alt={user.firstName} />
              <h3>{user.firstName}</h3>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
