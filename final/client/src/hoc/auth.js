import React, { useDebugValue, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {auth} from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

export default function (SpecificComponent, option, adminRoute = null){

    //option (null:아무나 출입가능, true: 로그인유저만 출입가능, false: 로그인 유저는 출입불가능)
    function AuthenticationCheck(props) {
        const history = useNavigate();
        const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(auth())
            .then(response => {
                console.log(response)
                if(!response.payload.isAuth){
                    if(option){
                        alert("로그인이 필요합니다.")
                        history('/login')
                    }
                } else {
                    if(adminRoute && !response.payload.isAdmin){
                        alert("관리자만 출입 가능합니다.")
                        history('/')
                    } else {
                        if(option === false){
                            alert("이미 로그인했습니다.")
                            history('/')
                        }
                    }
                }
            })
        }, [])
        return(
            <SpecificComponent />
        )
    }
    
    return AuthenticationCheck
}