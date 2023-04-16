import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Register</h3>
            <form>
                <input type="email" name="username" id="username" placeholder='Your Email' />
                <br />
                <input type="password" name="password" id="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;