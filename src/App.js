import React from 'react';
import MainPage from './pages/MainPage';
import Auth from './pages/Auth';
import SignUp from './pages/SignUp';
import LendingPage from './pages/LendingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubsCreateModal from './components/SubsCreateModal';
import SubsEditPageModal from './components/SubsEditPageModal';

export default function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<LendingPage/>}/>
          <Route path="/login" element={<Auth/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/subscriptions" element={<MainPage/>}/>
          <Route path="/subscriptions/createSubscription" element={<SubsCreateModal/>}/>
          <Route path="/subscriptions/editSubscription" element={<SubsEditPageModal/>}/>
      </Routes>
    </Router>
  );
}
