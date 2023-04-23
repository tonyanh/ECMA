import {useState, useEffect} from '../lib'
import axios from 'axios'
const login = function() {
    const [data, setData] = useState([])
    useEffect(function() {
        fetch('http://localhost:3000/user')
        .then(function(res){
            return res.json()
        })
        .then(function(dataFetch) {
            return setData(dataFetch)
        })
    }, [])

    useEffect(() => {
        // console.log(data)
        const username = document.querySelector(".input-login-username");
        const password = document.querySelector(".input-login-password");
        const bntLogin = document.querySelector(".login__signInButton");

        bntLogin.addEventListener("click", (e) => {
            e.preventDefault();
            if (username.value == "" || password.value == "") {
                alert("Please enter your username and password");
            } else {
                // const user = setData.find(
                //     (user) =>
                //     user.username == username.value && user.password == password.value
                // );
                fetch('http://localhost:3000/user').then(find(
                    (user) =>
                    user.username == username.value && user.password == password.value
                ))
                console.log("dang nhap thanh cong")
                window.location.href = "http://127.0.0.1:5173/"
            }
        });
    })



    return /*html*/ `
        <div class="w-full max-w-[1200px] mx-auto mt-[10%] max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
            <label class="input-login-username block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
            <label class="input-login-password block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
        </div>
        <div class="flex items-center justify-between">
            <button class="login__signInButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
            </a>
        </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
        </p>
    </div>
    `
}

export default login