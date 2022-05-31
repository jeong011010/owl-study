import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { registerUser } from '../../../_actions/user_action'

import { useNavigate } from 'react-router-dom'

function RegisterPage() {

  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  }

  const history = useNavigate();

  const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log("email- > ", Email);
        console.log("password -> ",Password);

        if(Password !== ConfirmPassword) {
            return alert("비밀번호가 동일하지 않습니다.");
        }

        let body = {
            email: Email,
            name: Name,
            password: Password
        }

        // redux dispatch를 이용해 action을 취함
        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success){
                //props.history.push('/login');
                history('/');
            }else{
                alert('Error')
                console.log(response)
            }
        })
    }
  
  return (    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <form style={{ display:'flex', flexDirection: 'column'}}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        
        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />
        
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        
        <label>Confirm Password</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

        <br />
        <button>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterPage