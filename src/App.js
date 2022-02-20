import "./styles.css";

export default function App() {
  return (
    <>
      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#home">News</a>
        <div className="dropdown">
          <button className="dropbtn">
            dropdown <i class="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <div className="header">
              <h2>Mega Dropdown</h2>
            </div>
            <div className="row">
              <div className="column">
                <h3>Category 1</h3>
                <a href="#home">Link1</a>
                <a href="#home">Link2</a>
                <a href="#home">Link3</a>
              </div>
              <div className="column">
                <h3>Category 2</h3>
                <a href="#home">Link1</a>
                <a href="#home">Link2</a>
                <a href="#home">Link3</a>
              </div>
              <div className="column">
                <h3>Category 2</h3>
                <a href="#home">Link1</a>
                <a href="#home">Link2</a>
                <a href="#home">Link3</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px" }}>
        <h3>Responsive Mega Menu (Full-width dropdown in navbar)</h3>
        <p>Hover over the "Dropdown" link to see the mega menu.</p>
        <p>Resize the browser window to see the responsive effect.</p>
      </div>
    </>
  );
}
