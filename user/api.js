const BASE_URL = 'http://127.0.0.1:8000'

function get_cookie(name) {
    let cookie_value = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookie_value = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookie_value;
}
const csrftoken = get_cookie('csrftoken')

async function postlogin(username,password){
    // username, password 를 받아온다
    const loginData ={
        username : username,
        password : password,

    }
    const response = await fetch(BASE_URL + '/login/',{
        method: 'POST',
        headers:{
                'Content-Type': 'application/json',           
                'X-CSRFToken': csrftoken,
                'Accept': 'application/json',
            
            },
        body : JSON.stringify(loginData),
        
    }
    )
    console.log(response)
    if (response.status == 200){
        location.replace('/user/main.html')
    }else{
        alert(response.status)
    }
    }


