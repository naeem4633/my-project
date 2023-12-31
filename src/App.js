import React from 'react';
import './App.css';
import Services from './pages/Services';
import Trainings from './pages/Trainings';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CisaTraining from './pages/CisaTraining';
import CisspTraining from './pages/CisspTraining';
import BusinessContinuity from './pages/BusinessContinuity';
import ItilTraining from './pages/ItilTraining';
import LinuxTraining from './pages/LinuxTraining';
import CloudComputing from './pages/CloudComputing';
import VirtualizationClouds from './pages/VirtualizationClouds';
import WebDesign from './pages/WebDesign';
import InformationSecurity from './pages/InformationSecurity';
import Contact from './pages/Contact';
import ServiceBusinessContinuity from './pages/ServiceBusinessContinuity';
import DataCenterServices from './pages/DataCenterServices';
import DataAndItService from './pages/DataAndItService';
import IncidentResponse from './pages/IncidentResponse';
import MainServicesPage from './pages/MainServicesPage';
import ErrorPage from './pages/ErrorPage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-body">
          <Routes>
            <Route path='/' element={<MainServicesPage/>}/>
            <Route path='/trainings' element={<Trainings/>}/>
            <Route path='/cisa-training' element={<CisaTraining/>}/>
            <Route path='/cissp-training' element={<CisspTraining/>}/>
            <Route path='/introduction-to-business-continuity-disaster-recovery' element={<BusinessContinuity/>}/>
            <Route path='/itil-training' element={<ItilTraining/>}/>
            <Route path='/linux-training' element={<LinuxTraining/>}/>
            <Route path='/cloud-computing' element={<CloudComputing/>}/>
            <Route path='/virtualization-and-clouds' element={<VirtualizationClouds/>}/>
            <Route path='/web-design-development' element={<WebDesign/>}/>
            <Route path='/information-security' element={<InformationSecurity/>}/>
            <Route path='/business-continuity' element={<ServiceBusinessContinuity/>}/>
            <Route path='/data-center-services' element={<DataCenterServices/>}/>
            <Route path='/data-and-it-service-management' element={<DataAndItService/>}/>
            <Route path='/incident-response' element={<IncidentResponse/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
