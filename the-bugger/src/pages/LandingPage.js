import React from 'react'; 

function LandingPage() {
  return (<div className="landing-page">
  <header className="header">
    <button className="login-button">Log in</button>
  </header>
  <main className="content-container">
    <h1>The Bugger</h1>
    <div className="input-group">
      <input type="text" placeholder="Code" className="code-input" />
      <button className="join-button">Join</button>
    </div>
    <button className="create-room-button">Create your own room</button>
  </main>
</div>);
}

export default LandingPage;