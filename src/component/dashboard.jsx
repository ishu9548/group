function Dashboard() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>📊 Dashboard</h1>
  
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          
          <div style={cardStyle}>
            <h3>🟢 Uptime</h3>
            <p>99.9%</p>
          </div>
  
          <div style={cardStyle}>
            <h3>⚡ Response Time</h3>
            <p>120ms</p>
          </div>
  
          <div style={cardStyle}>
            <h3>🚨 Incidents</h3>
            <p>2 Issues</p>
          </div>
  
        </div>
      </div>
    );
  }
  
  const cardStyle = {
    background: "#1e293b",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
  };
  
  export default Dashboard;