// import data from '../../db.json' assert {type: 'json'}
import {useState, useEffect} from '../lib'
import header from "./header"
import navigation from "./navigation"
import footer from "./footer"

const detail = function(id) {

    const[book, setBook] = useState({})
    useEffect(function() {
        fetch(`http://localhost:3000/books/${id}`)
        .then((res) => res.json())
        .then((data) => setBook(data))
    }, [])
    useEffect(() => {
        const read = document.querySelector(".read-more-btn");
        read.addEventListener('click', event => {
            const a = document.querySelector(".read-more-text")
            a.style.display = "block"
        })
    })

    return /*html*/`
    
    ${header()}
    ${navigation()}
    <div class="max-w-[1218px] mx-auto mt-10 grid grid-cols-[370px_minmax(auto,_1fr)]">
        <div>
            <img width="300px" src="${book.images?.[0].base_url}"/>
            <div class="flex">
            
            ${book?.images?.map(function(res) {
                return /*html*/`
                <img width="80px" class="py-0.5 px-0.5 cursor-pointer border border-indigo-600 " src="${res?.small_url}"/>
                `
            }).join('')}
            </div>
        </div>
        <div>
            <h2 class="text-lg font-medium">${book.name}</h2>
            <div class="flex">
            <div class="flex">
                <img class="w-[15px]" src="../../public/svg/star.svg"/>
                <img class="w-[15px]" src="../../public/svg/star.svg"/>
                <img class="w-[15px]" src="../../public/svg/star.svg"/>
                <img class="w-[15px]" src="../../public/svg/star.svg"/>
                <img class="w-[15px]" src="../../public/svg/star.svg"/>
                <p class=" text-[#787878] pl-2"> (Xem 2222 đánh giá)</p>
            </div> 
            <p class="text-[#787878] px-2">|</p>
            <p class="text-[#787878]">Đã bán 1000+</p>
            </div>
            <p class="text-[#FF424E] font-medium py-4 text-xl">${book.current_seller?.price} ₫</p>

            <p class="font-medium">Số lượng</p>
            <div class="py-4 opacity-100 inline-block flex whitespace-nowrap">
                <input class="minus is-form bg-[#ccc] h-8 w-8 border-[1px] border-[#ccc] rounded-l-lg" type="button" value="-">
                <input aria-label="quantity" class="w-8 h-8 min-w[2rem] text-center inline-block outline-none bg-white border-[1px] border-[#ccc]" max="Số tối đa" min="Số tối thiểu" name="" type="number" value="">
                <input class="plus is-form bg-[#ccc] h-8 w-8 border-[1px] border-[#ccc] rounded-r-lg" type="button" value="+">
            </div>
            <button class="bg-[#FF3945] text-white px-12 py-2 rounded-lg">Chọn mua</button>
        </div>
    </div>
    <div class="max-w-[1218px] mx-auto">
        <h3>Sản phảm tương tự</h3>
        <div>
            

            
        </div>
        <h2 class="text-lg font-medium py-4">${book.specifications?.[0].name}</h2>
        
        ${book.specifications?.[0].attributes.map(function(attribute) {
            return /*html*/`
            <table class="">
                <tr>
                    <td class="bg-[#EFEFEF] w-[27%] p-2">${attribute.name}</td>
                    <td class=" p-2 w-[400px]">${attribute.value}</td>
                </tr>
            </table>
            `
        }).join('')}
        <h2 class="text-lg font-medium py-4">Mô tả sản phẩm</h2>
        <div class="read-more-container">
            <div class="w-[75%]">
                <span class="">${book.description}</span>
                <span class="read-more-text hidden">${book.short_description}</span>
            </div>
            <div class="w-[75%] text-center pt-4">
                <button class="read-more-btn text-[#189EFF] border-2 border-[#189EFF] rounded-md p-2">Xem thêm nội dung</button>
            </div>
            
        </div>
        </div>
        ${footer()}
    `
}

export default detail