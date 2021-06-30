import React from 'react';
import Candidate from './Candidate';

const CandidatesList = ({ candidates, setCandidates, filteredCandidates, setName }) => {

    return (
        <div>
            {filteredCandidates.map(candidate => (
                <Candidate
                    setName={setName}

                    key={candidate.id}
                    name={candidate.devName}
                    email={candidate.devEmail}
                    phone={candidate.devPhone}
                    location={candidate.devLoc}
                    price={candidate.devPrice}
                    descr={candidate.devDescr}
                    experience={candidate.devExp}
                    language={candidate.devLang}
                    linkedIn={candidate.devLink}

                    candidate={candidate}
                    candidates={candidates}
                    setCandidates={setCandidates}
                />
            ))}
        </div>
    )
}

export default CandidatesList;