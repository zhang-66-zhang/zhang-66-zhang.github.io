function validateForm1() {
    if(login.name.value==""||login.pwd1.value==""||login.pwd2.value==""){
    alert("请输入账号或密码");
    return;
    }
    if(login.pwd1.value!=login.pwd2.value){
    alert("两次密码不一致,注册失败");
    return };
    
}