// import data from '../../db.json' assert {type: 'json'}
import {useState, useEffect} from '../lib'
import axios from 'axios'

var productPage = function() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/books")
        .then(({data}) => setData(data));
        
    }, [])
    
    return /*html*/ `
        <div class="mt-8 border-b-2 " >
            <ul class="flex mb-[10px]">
                <li class="pr-8 text-[#0D5CB6] font-medium"><a class="hover:border-b-4 hover:border-[#0D5CB6] pb-2 hover:text-[#0D5CB6]" href="">Phổ biến</a></li>
                <li class="pr-8 font-medium" ><a class="hover:border-b-4 hover:border-[#0D5CB6] pb-2 hover:text-[#0D5CB6]" href="">Bán chạy</a></li>
                <li class="pr-8 font-medium"><a class="hover:border-b-4 hover:border-[#0D5CB6] pb-2 hover:text-[#0D5CB6]" href="">Hàng mới</a></li>
                <li class="pr-8 font-medium"><a class="hover:border-b-4 hover:border-[#0D5CB6] pb-2 hover:text-[#0D5CB6]" href="">Giá thấp</a></li>
                <li class="pr-8 font-medium"><a class="hover:border-b-4 hover:border-[#0D5CB6] pb-2 hover:text-[#0D5CB6]" href="">Giá cao</a></li>
            </ul>
        </div>
        <div class="flex mt-6">
            <img class="bg-[#EEEEEE] p-2 rounded-[50px]" src="../../public/tiki.png" alt="">
            <img class="ml-8 bg-[#EEEEEE] p-2 rounded-[50px]" src="../../public/freeship.png" alt="">
        </div>

    <div class="grid grid-cols-4 gap-8">
    
        ${data.map(function(book, index) {
            return /*html*/`
                <div>
                    <a href="/product-detail/${book.id}">
                        <img class="w-[250px] h-[250px]" src="${book.images?.[0].base_url}"/>
                        <img src="../../public/tiki.png"/>
                        <p class="text-xs text-[#00AB56]">GIAO SIÊU TỐC 24H</p>
                        <h3 style="display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;" class="text-base font-medium ">${book.name}</h3>\
                        <div class="flex">
                            <div class="flex">
                                <img class="w-[15px]" src="../../public/svg/star.svg"/>
                                <img class="w-[15px]" src="../../public/svg/star.svg"/>
                                <img class="w-[15px]" src="../../public/svg/star.svg"/>
                                <img class="w-[15px]" src="../../public/svg/star.svg"/>
                                <img class="w-[15px]" src="../../public/svg/star.svg"/>
                            </div> 
                            <p class="text-[#787878]"> | Đã bán 1000</p>
                        </div>
                        <p class="text-[#FF424E] font-medium">${book.current_seller?.price} ₫</p>
                    </a>
                </div>
            `
        }).join('')}
    </div>
    `
}
export default productPage
