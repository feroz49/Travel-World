import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/about';
import Login from './views/login';
import Register from './views/register';
import Contact from './views/contact';
import GuideDetails from './views/guide-details'; // Importing the GuideDetails component
import TourGuide from './views/tourguide';
import ResetPassword from './views/reset-password'; // Importing the ResetPassword component
import ForgotPassword from './views/forgot-password'; // Importing the ForgotPassword component


import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/guide/:id" element={<GuideDetails guide={{} as Guide} />} /> */}
        <Route path="/tourguide" element={<TourGuide guides={[]} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>

      <Toaster
        position="top-center"
        toastOptions={{
          error: {
            duration: 5000,
          },
        }}
      />
    </>
  );
}

export default App;