import { useState, useEffect } from "../../lib"
import axios from "axios";
const update = function(id) {
    const [book, setBook] = useState({});
    
    useEffect(() => {
        axios.get(`http://localhost:3000/books/${id}`).then(({data}) => setBook(data));
    },  []);

    const updateBook = function() { 
        const name = document.querySelector("#name").value;
        const price = document.querySelector("#price").value;
        const description = document.querySelector("#description").value;
        axios.put(`http://localhost:3000/books/${id}`, {
            ...book,
            name,
            price,
            description
        }).then(function(res) {
            console.log(res)
        })
    }

    useEffect(function() {
        document.querySelector("#update").onsubmit = function(e) {
            e.preventDefault()
            updateBook() ? "" : alert("Cập nhật thàng công")
        }
    })
    return /*html*/`
    <section class="flex w-full min-h-screen bg-gray-900">
    <div class="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <div class="rounded-lg h-[68%] bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form id="update" class="space-y-4 w-[400px]">
                <div>
                    <label class="sr-only" for="name">Tên sách</label>
                    <input value="${book.name}" class="w-full rounded-lg bg-gray-800 text-white p-3 text-sm"
                    placeholder="Tên sách" id="name"
                    />
                </div>
                <div class=" sm:grid-cols-2">
                    <div>
                    <label class="sr-only" for="email">Giá thành</label>
                    <input value="${book.current_seller?.price}"  class="w-full rounded-lg bg-gray-800 text-white p-3 text-sm mb-2"
                        placeholder="Giá thành" id="price"/>
                </div>

                <div>
                    <label class="sr-only" for="message">Mô tả</label>
                    <textarea
                    class="w-full rounded-lg bg-gray-800 text-white p-3 text-sm"
                    placeholder="Mô tả" rows="8" id="description"
                    >${book.description}</textarea>
                </div>

                <div class="mt-4">
                    <div class="wrapper">
                        <div class="link_wrapper">
                            <button id="add">
                                <span>Cập nhật</span>
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    </div>
    </section>
    <style>
    .wrapper{
        position: fixed;
        top: 59%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .link_wrapper{
        position: relative;
    }

    span{
    display: block;
    width: 250px;
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    text-decoration: none;
    background: #333;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 3px solid #333;
    transition: all .35s;
    }

    .icon{
    width: 50px;
    height: 50px;
    border: 3px solid transparent;
    position: absolute;
    transform: rotate(45deg);
    right: 0;
    top: 0;
    z-index: -1;
    transition: all .35s;
    }

    .icon svg{
    width: 30px;
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    transform: rotate(-45deg);
    fill: #2ecc71;
    transition: all .35s;
    }

    span:hover{
    width: 200px;
    border: 3px solid #2ecc71;
    background: transparent;
    color: #2ecc71;
    }

    span:hover + .icon{
    border: 3px solid #2ecc71;
    right: -25%;
    }

    </style>
    `
}

export default update
{/* <button style="--color: #fe0000" type="submit" class=" rounded-lg bg-black px-5 py-3 text-white sm:w-auto">
                    <p class="font-medium">Send Enquiry</p>
                    </button> */}