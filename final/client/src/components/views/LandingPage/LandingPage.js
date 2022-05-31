import React, {useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const history = useNavigate();

  const onCLickHandler = () => {
    axios.get('/api/users/logout')
    .then(response => {
      if(response.data.success){
        history('/login')
      } else {
        alert('로그아웃 실패')
      }
    })
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <h2>시작 페이지</h2>

      <button onClick={onCLickHandler}>
        Log Out
      </button>
    </div>
  )
}

export default LandingPage;