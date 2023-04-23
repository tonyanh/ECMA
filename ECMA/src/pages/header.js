function header() {
    return /*html*/ `
        <div class=" flex items-center px-[150px] justify-between h-16 bg-[#1A94FF]">
            <div class="">
                <a href="/"><img class="w-[65px]" src="../../public/tiki.svg" alt=""></a>
            </div>
            
            <div class="ml-[15%]">
                <form action="">
                    <input class="w-[400px] p-[5px] outline-none" type="text">
                    <button class="bg-[#0D5CB6] p-[5px] ml-[-10px] text-white">
                    <img class="inline-block" src="../../public/svg/search.svg" alt="">
                    Tìm kiếm</button>
                </form>
            </div>

            <div class="flex">
            <img class="inline-block mr-4" src="../../public/svg/user.svg" alt="">
                <div class="mr-4">
                        <ul class="text-white flex">
                            <li ><a href="/login">Đăng nhập / </a></li>
                            <li><a href="">Đăng ký</a></li>
                        </ul>  
                    <div class="flex">
                        <p class="text-white"><a href="">Tài khoản</a></p>
                        <p class="text-white pl-4"><a href="./admin">Admin</a></p>
                        <img class="inline-block mr-4" src="../../public/svg/bottom.svg" alt="">
                    </div>
                </div>
                <div class="flex">
                    <img class="inline-block mr-4 w-[40px]" src="../../public/svg/cart.svg" alt="">
                    <p class="text-white mt-[10px]"><a href="">Giỏ hàng</a></p>
                </div>
            </div>
        </div>
    `
}

export default header