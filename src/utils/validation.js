export const signInValidation=(email,pswd)=>{
    if(email=="" || pswd=="") return "enter the feilds"
    const emailValidator=/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
    if(!emailValidator) return "Email isn't valid.";
    const passwordValidator = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pswd);
    if(!passwordValidator) return "Password isn't valid.";
    return "";
}


export const signUpValidation=(name,email,pswd,conPswd)=>{
    if(email=="" || pswd=="" || name=="") return "enter the feilds"
    if(pswd!==conPswd) return "password aren't matching";

    const nameValidator=/^[a-zA-Z ]{2,30}$/.test(name);
    if(!nameValidator) return "Name isn't valid.";
    const emailValidator=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    if(!emailValidator) return "Email isn't valid.";
    const passwordValidator = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pswd)
    if(!passwordValidator) return "Password isn't valid.";
    return "";
}