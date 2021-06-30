import React, { useState } from 'react';

const InfoData = ({ name, setName, email, setEmail, phone, setPhone, location, setLocation, price, setPrice, descr, setDescr, experience, setExperience, language, setLanguage, linkedIn, setLinkedIn, candidates, setCandidates }) => {

    const [nameErr, setNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [phoneErr, setPhoneErr] = useState({});
    const [locErr, setLocErr] = useState({});
    const [priceErr, setPriceErr] = useState({});
    const [expErr, setExpErr] = useState({});
    const [langErr, setLangErr] = useState({});

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }
    const mailChangeHandler = (e) => {
        setEmail(e.target.value)
    }
    const phoneChangeHandler = (e) => {
        setPhone(e.target.value)
    }
    const LocChangeHandler = (e) => {
        setLocation(e.target.value)
    }
    const priceChangeHandler = (e) => {
        setPrice(e.target.value)
    }
    const descrChangeHandler = (e) => {
        setDescr(e.target.value)
    }
    const expChangeHandler = (e) => {
        setExperience(e.target.value)
    }
    const langChangeHandler = (e) => {
        setLanguage(e.target.value)
    }
    const linkedChangeHandler = (e) => {
        setLinkedIn(e.target.value)
    }


    const submitInfoHandler = (e) => {
        e.preventDefault();

        const formValidation = () => {
            const nameErr = {};
            const emailErr = {};
            const phoneErr = {};
            const locErr = {};
            const priceErr = {};
            const expErr = {};
            const langErr = {};

            let isValid = true;

            if (name.trim().length < 1) {
                nameErr.nameShort = 'Full Name is required';
                isValid = false;
            }
            if (email.trim().length < 1) {
                emailErr.mailShort = 'Email is required';
                isValid = false;
            }
            if (phone.trim().length < 1) {
                phoneErr.phoneShort = 'Phone is required';
                isValid = false;
            }
            if (location.trim().length < 1) {
                locErr.phoneShort = 'Location is required';
                isValid = false;
            }
            if (price.trim().length < 1) {
                priceErr.priceShort = 'Price per Hour is required';
                isValid = false;
            }
            if (experience.trim().length < 1) {
                expErr.expShort = 'Years of Experience is required';
                isValid = false;
            }
            if (!language.includes('serbian') && !language.includes('bulgarian') && !language.includes('english')) {
                langErr.langShort = 'Language must be serbian, bulgarian or english';
                isValid = false;
            }
            else {

                setCandidates([
                    ...candidates,
                    {
                        devName: name,
                        devEmail: email,
                        devPhone: phone,
                        devLoc: location,
                        devPrice: price,
                        devDescr: descr,
                        devExp: experience,
                        devLang: language,
                        devLink: linkedIn,
                        id: Math.random() * 1000,
                        hired: false
                    }
                ]);
                isValid = true;

            }

            setNameErr(nameErr);
            setEmailErr(emailErr);
            setPhoneErr(phoneErr);
            setLocErr(locErr);
            setPriceErr(priceErr);
            setExpErr(expErr);
            setLangErr(langErr);

            return isValid;
        }

        const isValid = formValidation();

        if (isValid) {
            setName("");
            setEmail("");
            setPhone("");
            setLocation("");
            setPrice("");
            setDescr("");
            setExperience("");
            setLanguage("");
            setLinkedIn("");
        }
    }


    return (
        <form className="form">
            
            <input
                type="text"
                placeholder="Full Name"
                onChange={nameChangeHandler}
                value={name}
            />
            {Object.keys(nameErr).map((key) => {
                return <div style={{ color: "red" }}>{nameErr[key]}</div>
            })}
            <input
                type="email"
                placeholder="Email"
                onChange={mailChangeHandler}
                value={email}
            />
            {Object.keys(emailErr).map((key) => {
                return <div style={{ color: "red" }}>{emailErr[key]}</div>
            })}
            <input
                type="text"
                placeholder="Phone"
                onChange={phoneChangeHandler}
                value={phone}
            />
            {Object.keys(phoneErr).map((key) => {
                return <div style={{ color: "red" }}>{phoneErr[key]}</div>
            })}
            <input
                type="text"
                placeholder="Location"
                onChange={LocChangeHandler}
                value={location}
            />
            {Object.keys(locErr).map((key) => {
                return <div style={{ color: "red" }}>{locErr[key]}</div>
            })}
            <input
                type="text"
                placeholder="Price per Hour"
                onChange={priceChangeHandler}
                value={price}
            />
            {Object.keys(priceErr).map((key) => {
                return <div style={{ color: "red" }}>{priceErr[key]}</div>
            })}
            <input
                type="text"
                placeholder="Description"
                onChange={descrChangeHandler}
                value={descr}
            />
            <input
                type="text"
                placeholder="Experience"
                onChange={expChangeHandler}
                value={experience}
            />
            {Object.keys(expErr).map((key) => {
                return <div style={{ color: "red" }}>{expErr[key]}</div>
            })}
            <input
                type="text"
                placeholder="Native Language"
                onChange={langChangeHandler}
                value={language}
            />
            {Object.keys(langErr).map((key) => {
                return <div style={{ color: "red" }}>{langErr[key]}</div>
            })}
            <input
                type="text"
                placeholder="LinkedIn link"
                onChange={linkedChangeHandler}
                value={linkedIn}
            />

            <button
                type="submit"
                onClick={submitInfoHandler}
            >
                Submit
            </button>
        </form>
    )
}

export default InfoData;