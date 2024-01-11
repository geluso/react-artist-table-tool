import { useState } from "react";
import PasswordRule from "./PasswordRule";

function PasswordProtector() {
    // TODO: Add state here.

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

    return <div>
        <div>
            <form>
                <p>Enter your password:</p>
                <input />

                <p>Confirm your password:</p>
                <input />

                <p>
                    <button type="submit">Create Password</button>
                </p>
            </form>
        </div>
    </div>
}

export default PasswordProtector;