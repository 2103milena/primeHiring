import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';

const Candidate = ({ name, email, phone, location, price, descr, experience, language, linkedIn, candidate, candidates, setCandidates }) => {

    const [editedName, setEditedName] = useState(name);
    const [editedEmail, setEditedEmail] = useState(email);
    const [editedPhone, setEditedPhone] = useState(phone);
    const [editedLoc, setEditedLoc] = useState(location);
    const [editedPrice, setEditedPrice] = useState(price);
    const [editedDescr, setEditedDescr] = useState(descr);
    const [editedExp, setEditedExp] = useState(experience);
    const [editedLang, setEditedLang] = useState(language);
    const [editedLink, setEditedLink] = useState(linkedIn);

    const deleteHandler = () => {
        setCandidates(candidates.filter(el => el.id !== candidate.id))
    };

    const hireHandler = () => {
        setCandidates(candidates.map(el => {
            if (el.id === candidate.id) {
                return {
                    ...el,
                    hired: !el.hired
                }
            }
            return el;
        }))
    };

    return (
        <div className={`candidate ${candidate.hired ? "hired" : "notHired"}`}>
            <div>
                <label>
                    Full Name :
                    <input
                        className={`${candidate.hired ? "hired" : "notHired"}`}
                        type="text"
                        id={candidate.id}
                        defaultValue={editedName}
                        onChange={(e) => { setEditedName(e.target.value) }}
                    />
                </label>
                <label>
                    Email :
                    <input
                        className={`${candidate.hired ? "hired" : "notHired"}`}
                        type="email"
                        id={candidate.id}
                        defaultValue={editedEmail}
                        onChange={(e) => { setEditedEmail(e.target.value) }}
                    />
                </label>
                <label>
                    Phone :
                    <input
                        className={`${candidate.hired ? "hired" : "notHired"}`}
                        type="text"
                        id={candidate.id}
                        defaultValue={editedPhone}
                        onChange={(e) => { setEditedPhone(e.target.value) }}
                    />
                </label>
                <label>
                    Location :
                    <input
                        className={`${candidate.hired ? "hired" : "notHired"}`}
                        type="text"
                        id={candidate.id}
                        defaultValue={editedLoc}
                        onChange={(e) => { setEditedLoc(e.target.value) }}
                    />
                </label>
                <label>
                    Price :
                    <input
                        className={`${candidate.hired ? "hired" : "notHired"}`}
                        type="text"
                        id={candidate.id}
                        defaultValue={editedPrice}
                        onChange={(e) => { setEditedPrice(e.target.value) }}
                    />
                </label>

                <label>
                    Description :
                    <input
                        className={`${candidate.hired ? "hired" : "notHired"}`}
                        type="text"
                        id={candidate.id}
                        defaultValue={editedDescr}
                        onChange={(e) => { setEditedDescr(e.target.value) }}
                    />
                </label>
                <label>
                    Experience :
                    <input
                        className={`${candidate.hired ? "hired" : "notHired"}`}
                        type="text"
                        id={candidate.id}
                        defaultValue={editedExp}
                        onChange={(e) => { setEditedExp(e.target.value) }}
                    />
                </label>
                <label>
                    Language :
                    <input
                        className={`${candidate.hired ? "hired" : "notHired"}`}
                        type="text"
                        id={candidate.id}
                        defaultValue={editedLang}
                        onChange={(e) => { setEditedLang(e.target.value) }}
                    />
                </label>
                <label>
                    LinkedIn :
                    <input
                        className={`${candidate.hired ? "hired" : "notHired"}`}
                        type="text"
                        id={candidate.id}
                        defaultValue={editedLink}
                        onChange={(e) => { setEditedLink(e.target.value) }}
                    />
                </label>

            </div>
            <button
                className="btnCand"
                onClick={deleteHandler}>
                <FontAwesomeIcon className="iconCand" icon={faTrash} />
            </button>
            <button
                className="btnCand"
                onClick={hireHandler}>
                <FontAwesomeIcon className="iconCand" icon={faBusinessTime} />

            </button>
        </div >
    )
}

export default Candidate;