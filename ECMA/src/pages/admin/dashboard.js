import { useState, useEffect } from "../../lib"
const dashboard = () => {
    const [data, setData] = useState([])
    useEffect(function() {
        fetch('http://localhost:3000/books')
        .then(function(res){
            return res.json()
        })
        .then(function(dataFetch) {
            return setData(dataFetch)
        })
    }, [])

    useEffect(() => {
        const deleteBtn = document.querySelectorAll('.delete');
        deleteBtn.forEach((btn) => {
            btn.addEventListener('click',function() {
                // console.log(btn.dataset.id)
                const id = btn.dataset.id
                deleteBook(id)
            })
        })
    })
    const deleteBook = function(id) {
        fetch(`http://localhost:3000/books/${id}`, {
            method: "DELETE"
        })
        .then(() => alert("Xóa thành công"))
    }
    return /*html*/ `
        <div class="flex w-full min-h-screen bg-gray-900">
            <div class="w-full max-w-[1200px] mx-auto">
                <div class="">
                    <table class="table text-white border-separate space-y-6 text-sm">
                        <thead class="bg-gray-800 text-white">
                            <tr>
                                <th class="p-3 text-center w-[5%]">Stt</th>
                                <th class="p-3 text-center text-left w-[30%]">Tên</th>
                                <th class="p-3 text-center text-left w-[10%]">Hình Ảnh</th>
                                <th class="p-3 text-center text-left w-[10%]">Giá</th></th>
                                <th class="p-3 text-center text-left w-[30%]">Mô tả</th>
                                <th class="p-3 text-center text-left w-[10%]">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                        ${data.map((book, index) => /*html*/`
                            <tr class="bg-gray-800 hover:bg-[#c6a747]">
                                <td class="p-3">${index+1}</td>
                                <td class="p-3">${book.name}</td>
                                <td class="p-3">
                                    <img src="${book.images?.[0].base_url}"/>
                                </td>
                                <td class="p-3 font-bold text-[#d64229] ">${book.current_seller?.price} ₫</td>
                                <td style="display: -webkit-box;
                                -webkit-line-clamp: 4;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                                text-overflow: ellipsis;" class="my-[35px]" >${book.description}</td>
                                <td class="p-3 text-center">
                                    <button data-id="${book.id}" class="delete bg-[#ffebb3] text-black p-2 rounded-lg">Xóa</button>
                                    <button class="edit bg-[#d1f7c4] text-black p-2 rounded-lg"><a href="/admin/books/${book.id}">Sửa</a></button>
                                </td>
                            </tr>
                        `).join('')}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <style>
            .table {
                border-spacing: 0 15px;
            }

            i {
                font-size: 1rem !important;
            }

            .table tr {
                border-radius: 20px;
            }

            tr td:nth-child(n+6),
            tr th:nth-child(n+6) {
                border-radius: 0 .625rem .625rem 0;
            }

            tr td:nth-child(1),
            tr th:nth-child(1) {
                border-radius: .625rem 0 0 .625rem;
            }
        </style>
            `
        }

export default dashboard