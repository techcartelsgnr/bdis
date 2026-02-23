import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import AdmissionForm from './Pages/Admission/AdmissionForm';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import PublicMandatory from './Pages/PublicMandatory/PublicMandatory';
import Facility from './Pages/Facility/Facility';
import ActivityAll from './Pages/ActivityAll/ActivityAll';
import Activity from './Pages/Activity/Activity';
import OnlineFee from './Pages/OnlineFee/OnlineFee';
import RulesRegulation from './Pages/RulesRegulation/RulesRegulation';
import BoardResult from './Pages/BoardResult/BoardResult';
import Curriculum from './Pages/Curriculum/Curriculum';
import Scholarship from './Pages/Scholarship/Scholarship';
import ExaminationChange from './Pages/ExaminationChange/ExaminationChange';
import Curriculars from './Pages/Circulars/Circulars';
import SamplePaper from './Pages/SamplePaper/SamplePaper';
import Notification from './Pages/Notification/Notification';
import TcDownload from './Pages/TcDownload/TcDownload';
import Highlight from './Pages/Highlight/Highlight';
import Bdps from './Pages/Bdps/Bdps';
import EnquiryForm from './Pages/EnquiryForm/EnquiryForm';
import Faq from './Pages/Faq/Faq';

const App = () => {


  return (
    <Router>
      <Routes>

        {/* Layout Routing */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/highlight/:slug' element={<Highlight />} />
          <Route path='about/:slug' element={<About />} />
          <Route path='/bdps' element={<Bdps />} />
          <Route path='/admission-form' element={<AdmissionForm />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/mandatory' element={<PublicMandatory />} />
          <Route path='/admission-policy' element={<OnlineFee />} />
          <Route path="/facility/:slug" element={<Facility />} />
          <Route path="/activity/:category" element={<ActivityAll />} />
          

          <Route path="/activities/:slug" element={<Activity />} />
          
          <Route path="/rules-regulation" element={<RulesRegulation />} />
          <Route path="/board-result" element={<BoardResult />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/examination-updates" element={<ExaminationChange />} />
          <Route path="/curriculars" element={<Curriculars />} />
          <Route path="/academic-calendar" element={<SamplePaper />} />
          {/* <Route path="/notification" element={<Notification />} /> */}
          <Route path="/faq" element={<Faq />} />
          <Route path="/tc-download" element={<TcDownload />} />
          <Route path="/enquiry" element={<EnquiryForm />} />
          {/* <Route path='/auditorium' element={<Facility />} />
          <Route path='/computerlab' element={<Facility />} />
          <Route path='/sportscomplax' element={<Facility />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App