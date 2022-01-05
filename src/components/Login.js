import { Button } from "@material-ui/core"
import styled from "styled-components"
import { auth, provider } from "../firebase";


function Login() {
    const signIn = e =>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error=> alert(error.message))
    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img
                    src="https://images.ctfassets.net/b7g9mrbfayuu/2X9HSx11okCecIGeEuEw4C/31a4112ed93e95eaf39e8cdef15ce5e4/Slack_Mark_Web.png?q=80&fm=webp&w=500"
                    alt="logo" />

                <h1>Sign in to the GroupChat</h1>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius:10px;
    box-shadow:0 1px 3px rgba(0, 0, 0, 0.12), 
    0 1px 2px rgba(0, 0, 0, 0.24);

    >img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button{
        margin-top:50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color:white;
    }
`