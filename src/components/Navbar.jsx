function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
      <button style={{ padding: "8px 16px" }}>Home</button>
      <button style={{ padding: "8px 16px" }}>About</button>
      <button style={{ padding: "8px 16px" }}>Services</button>
      <button style={{ padding: "8px 16px" }}>Projects</button>
    </nav>
  );
}

export default Navbar;
