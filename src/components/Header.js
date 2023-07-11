import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showTraining, setShowTraining] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [hoveredItem, setHoveredItem] = useState('');
    const [hoveredLink, setHoveredLink] = useState('/');
    const servicesRef = useRef(null);
    const trainingRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleTrainingClick = () => {
    setShowTraining(true);
    setShowServices(false);
  };

  const handleServicesClick = () => {
    setShowTraining(false);
    setShowServices(true);
  };

  const handleItemHover = (item, link) => {
    setHoveredItem(item);
    setHoveredLink(link);
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setShowServices(false);
        setHoveredItem('CISA Training');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (trainingRef.current && !trainingRef.current.contains(event.target)) {
        setShowTraining(false);
        setHoveredItem('Information Security');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <section className='sticky top-0 w-full h-16 bg-gray-900 text-gray-200 z-50'>
        <div className='flex justify-between px-2'>
            <div className='flex items-center'>
                <img className='border border-white w-44 h-16 mr-4' src='' alt='logo'></img>
                <p className='hidden md:block p-4 hover:bg-gray-700 cursor-pointer hover:text-white'>About</p>
                <p className='hidden md:block p-4 hover:bg-gray-700 cursor-pointer hover:text-white' onClick={handleTrainingClick}>Trainings</p>
                <p className='hidden md:block p-4 hover:bg-gray-700 cursor-pointer hover:text-white' onClick={handleServicesClick}>Services</p>
                <p className='hidden md:block p-4 hover:bg-gray-700 cursor-pointer hover:text-white'>Contact Us</p>
            </div>
            <div className='flex items-center space-x-4 w-1/5 justify-end'> 
                <div className='hidden md:flex h-10 items-center'>
                    <input placeholder='Search' className='w-64 p-2 border border-white rounded text-black'></input>
                    <img src='../static/images/header-search.png' className='w-6 h-6 -translate-x-8 cursor-pointer'></img>
                </div>
                <img className='md:hidden w-10 h-10 cursor-pointer' src='../static/images/header-menu.png' alt='menu' onClick={handleMenuClick}></img>
            </div>
        </div>

        {showMenu && (
        <div className='header-mobile md:hidden menu absolute right-0 w-full bg-gray-800 text-gray-200 rounded'>
            <div className='flex flex-col items-center'>
                <div className='w-full flex flex-col space-y-4 text-center text-xl font-bold'>
                    <ul>
                        <li className='mx-auto w-3/4 p-6'>
                            <p>About</p>
                        </li>
                        <div className='mx-auto w-3/4 border border-gray-400'></div>
                        <li className='mx-auto w-3/4 p-6'>
                            <p>Training</p>
                        </li>
                        <div className='mx-auto w-3/4 border border-gray-400'></div>
                        <li className='mx-auto w-3/4 p-6'>
                            <p>Services</p>
                        </li>
                        <div className='mx-auto w-3/4 border border-gray-400'></div>
                        <li className='mx-auto w-3/4 p-6'>
                            <p>Contact Us</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )}

        {showServices && (
        <div className='services w-full bg-gray-800 text-gray-200' ref={servicesRef}>
          <div className='flex flex-row h-full'>
            <div className='w-1/4 flex flex-col justify-center p-4'>
              <Link to={'/services'} className='w-full p-8 flex flex-col items-center space-y-4 -translate-y-20'>
                <p className='text-4xl cursor-pointer'>Services</p>
                <img className='w-20 h-20' src='../static/images/header-services.png' alt='Training' />
              </Link>
            </div>
            <div className='my-6 border border-gray-400'></div>
            <div className='w-1/4 flex flex-col p-8'>
              <ul className='header h-full'>
                <li onMouseEnter={() => handleItemHover('Information Security', '/information-security')}>Information Security</li>
                <li onMouseEnter={() => handleItemHover('IT Service Management', '/information-security')}>IT Service Management</li>
                <li onMouseEnter={() => handleItemHover('Data Center Services', '/information-security')}>Data Center Services</li>
                <li onMouseEnter={() => handleItemHover('Business Continuity', '/information-security')}>Business Continuity</li>
                <li onMouseEnter={() => handleItemHover('Data Management', '/information-security')}>Data Management</li>
                <li onMouseEnter={() => handleItemHover('Cloud Computing', '/information-security')}>Cloud Computing</li>
                <li onMouseEnter={() => handleItemHover('Virtualization & Clouds', '/information-security')}>Virtualization &amp; Clouds</li>
                <li onMouseEnter={() => handleItemHover('Web Design & Development', '/information-security')}>
                  Web Design &amp; Development
                </li>
              </ul>
            </div>
            <div className='my-6 border border-gray-400'></div>
            <Link to={hoveredLink} className='w-1/4 flex flex-col p-8 ml-8'>
              <ul className='h-full space-y-8'>
                <p className='text-xl font-bold cursor-pointer'>{hoveredItem}</p>
                <button className='rounded w-32 p-2 bg-blue-700'>Explore</button>
              </ul>
            </Link>
          </div>
        </div>
        )}

        {showTraining && (
        <div className='training w-full bg-gray-800 text-gray-200' ref={trainingRef}>
            <div className='flex flex-row h-full'>
                <div className='w-1/4 flex flex-col justify-center p-4'>
                    <Link to={'/trainings'} className='w-full p-8 flex flex-col items-center space-y-4'>
                        <p className='text-4xl cursor-pointer'>Trainings</p>
                        <img className='w-20 h-20' src='../static/images/header-training.png' alt='Training' />
                    </Link>
                </div>
                <div className='my-6 border border-gray-400'></div>
                <div className='w-1/4 flex flex-col p-8'>
                    <ul className='header h-full'>
                        <Link to={'/cisa-training'}>
                          <li onMouseEnter={() => handleItemHover('CISA Training', '/cisa-training')}>CISA Training</li>
                        </Link>
                        <Link to={'/cissp-training'}>
                          <li onMouseEnter={() => handleItemHover('CISSP Training', '/cissp-training')}>CISSP Training</li>
                        </Link>
                        <Link to={'/introduction-to-business-continuity-disaster-recovery'}>
                          <li onMouseEnter={() => handleItemHover('Business continuity and disaster recovery', '/introduction-to-business-continuity-disaster-recovery')}>Business continuity and disaster recovery</li>
                        </Link>
                        <Link to={'/itil-training'}>
                          <li onMouseEnter={() => handleItemHover('ITIL v3 Foundation Training', '/itil-training')}>ITIL v3 Foundation Training</li>
                        </Link>
                        <Link to={'/linux-training'}>
                          <li onMouseEnter={() => handleItemHover('Linux Training', '/linux-training')}>Linux Training</li>
                        </Link>
                    </ul>
                </div>
                <div className='my-6 border border-gray-400'></div>
                <Link to={hoveredLink} className='w-1/4 flex flex-col p-8 ml-8'>
                    <ul className='h-full space-y-8'>
                        <p className='text-xl font-bold cursor-pointer'>{hoveredItem}</p>
                        <button className='rounded w-32 p-2 bg-blue-700'>Explore</button>
                    </ul>
                </Link>
            </div>
        </div>
        )}
    </section>
  )
}

export default Header