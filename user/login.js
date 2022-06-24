function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    // postlogin이라는 함수에 인자로 usernaem,password를 넣어준다
    postlogin(username,password)
}

