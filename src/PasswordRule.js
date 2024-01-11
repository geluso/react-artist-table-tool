function PasswordRule({rule, pw1, pw2}) {
    const PASS = <span>✅</span>;
    const FAIL = <span>❌</span>;
    return <div>
        {rule.isPassing(pw1, pw2) ? PASS : FAIL }
        {' '}
        {rule.description}
    </div>
}

export default PasswordRule;