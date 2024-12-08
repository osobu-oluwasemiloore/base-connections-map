import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Graph from './Graph';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; 
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from './firebase';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        name: email.split('@')[0],
        connections: [],
      });

      console.log('User signed up and stored in Firestore:', user);
      navigate('/graph'); // Redirect to Graph
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', email);
      navigate('/graph'); // Redirect to Graph
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <form>
        <h1>Sign Up / Login</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={handleSignUp}>Sign Up</button>
        <button type="button" onClick={handleLogin}>Log In</button>
      </form>
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
