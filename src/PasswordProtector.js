import { useState } from "react";
import PasswordRule from "./PasswordRule";

function PasswordProtector() {
    let [password1, setPassword1] = useState('');
    let [password2, setPassword2] = useState('');
    let [isDisabled, setIsDisabled] = useState(true);
    let [isSubmitted, setIsSubmitted] = useState(false);

    const containsOneOfTheseCharacters = (haystack, needles) => {
        let ss = new Set(haystack.split(''));
        console.log(ss, needles);
        for (let i = 0; i < needles.length; i++) {
            if (ss.has(needles[i])) {
                return true;
            }
        }
        return false;
    }

    let rules = [
        {
            description: "Password must be at least 8 characters long.",
            isPassing: (pw1, pw2) => pw1.length >= 8
        },
        {
            description: "Password must include a number.",
            isPassing: (pw1, pw2) => containsOneOfTheseCharacters(pw1, "0123456789")
        },
        {
            description: "Password must include a symbol.",
            isPassing: (pw1, pw2) => containsOneOfTheseCharacters(pw1, "!@#$%^&*(){}[];:<>,.?/'\"`~")
        },
        {
            description: "Passwords must match.",
            isPassing: (pw1, pw2) => pw1 === pw2
        },
    ]

    const changePassword1 = (ev) => {
        let value = ev.target.value;
        setPassword1(value);
        testPasswords(value, password2);
    }

    const changePassword2 = (ev) => {
        let value = ev.target.value;
        setPassword2(value);
        testPasswords(password1, value);
    }


    const testPasswords = (pw1, pw2) =>{
        console.log('testing', pw1, pw2);
        // Assume the apsswords match all required rules.
        let isLegal = true;
        rules.forEach(rule => {
            if (!rule.isPassing(pw1, pw2)) {
                // Until they don't.
                isLegal = false;
            }
        });

        // The button is disabled if anything is not legal.
        setIsDisabled(!isLegal);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log('submitted')
        setIsSubmitted(true);
    }

    return <div>
        <div>
            <form onSubmit={handleSubmit}>
                <p>Enter your password:</p>
                <input value={password1} onChange={changePassword1} />

                <p>Confirm your password:</p>
                <input value={password2} onChange={changePassword2} />

                <p>
                    <button type="submit" disabled={isDisabled}>Create Password</button>
                </p>
            </form>

            {rules.map((rule, index) => {
                return <PasswordRule key={index} rule={rule} pw1={password1} pw2={password2} />
            })}

            {isSubmitted && <div>Submitted!</div>}
        </div>
    </div>
}

export default PasswordProtector;