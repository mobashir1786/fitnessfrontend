import React from 'react'

function Signup() {
    const handleSignup = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const number = event.target[1].value;
        const email = event.target[2].value;
        const password = event.target[3].value;

        alert(name+ number+ email+ password);
    }
    return (
        <div className='signup'>
            <form onSubmit={handleSignup}>
                <label  >Name</label><br />
                <input type="text" /><br />

                <label  >Phone Number</label><br />
                <input type="number" /><br />

                <label  >Email address</label><br />
                <input type="email" /><br />

                <label  >Password</label><br />
                <input type="password" /><br />

                <button type="submit" >Signup</button>
            </form>
        </div>
    )
}

export default Signup