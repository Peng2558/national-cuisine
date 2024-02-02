 import SignUpForm from "../../components/SignUpForm/SignUpForm";
 import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({setUser}){
return (
  
      <main className="auth-page-main"> 
          <SignUpForm setUser={setUser}/>
          <LoginForm setUser={setUser}/>
      </main>  
  
        );

}