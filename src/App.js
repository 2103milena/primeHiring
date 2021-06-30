import React, { useEffect, useState } from 'react';
import './App.css';
import CandidatesList from './components/Candidates/CandidatesList';
import InfoData from './components/Form/InfoData';
import SelectFilter from './components/SelectFilter/SelectFilter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [candidates, setCandidates] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredCandidates, setFilteredCandidates] = useState([]);

  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [descr, setDescr] = useState('');
  const [experience, setExperience] = useState('');
  const [language, setLanguage] = useState('');
  const [linkedIn, setLinkedIn] = useState('');

  useEffect(() => {
    getLocalStorage()
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalStorage();
  }, [candidates, status])



  const filterHandler = () => {
    switch (status) {
      case "hired":
        setFilteredCandidates(candidates.filter(candidate => candidate.hired === true))
        break;
      case "notHired":
        setFilteredCandidates(candidates.filter(candidate => candidate.hired === false))
        break;

      default:
        setFilteredCandidates(candidates)
        break;
    }
  }

  const saveLocalStorage = () => {
    localStorage.setItem('candidates', JSON.stringify(candidates))
  }

  const getLocalStorage = () => {
    if (localStorage.getItem('candidates') === null) {
      localStorage.setItem('candidates', JSON.stringify([]));
    } else {
      let localCandidates = JSON.parse(localStorage.getItem('candidates'));
      setCandidates(localCandidates)
    }
  }


  return (
    <div className="App">
      <div className="title">ENTER THE CANDIDATE:</div>

      <FontAwesomeIcon className="icon" icon={faArrowDown} />

      <InfoData
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        location={location}
        setLocation={setLocation}
        price={price}
        setPrice={setPrice}
        descr={descr}
        setDescr={setDescr}
        experience={experience}
        setExperience={setExperience}
        language={language}
        setLanguage={setLanguage}
        linkedIn={linkedIn}
        setLinkedIn={setLinkedIn}

        candidates={candidates}
        setCandidates={setCandidates}

      />

      <div className="title">CHOOSE THE STATUS OF CANDIDATE(S):</div>
      <FontAwesomeIcon className="icon" icon={faArrowDown} />


      <SelectFilter
        status={status}
        setStatus={setStatus}
      />

      <div className="title">LIST THE CANDIDATES:</div>
      <FontAwesomeIcon className="icon" icon={faArrowDown} />

      <CandidatesList
        candidates={candidates}
        setCandidates={setCandidates}
        filteredCandidates={filteredCandidates}

        setName={setName}

      />
    </div>
  );
}

export default App;
