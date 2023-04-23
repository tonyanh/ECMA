import header from "./header"
import navigation from "./navigation"
import slide from "./slide"
import cate from "./cate"
import productPage from "./product"
import detail from "./product-detail"
import footer from "./footer"

function homePage() {
    return /*html*/`
    <div>
        ${header()}
        ${navigation()}
        <div class="max-w-[1218px] mx-auto mt-4 grid grid-cols-[200px_minmax(auto,_1fr)]">
            ${cate()}
            <div>
                ${slide()}
                ${productPage()}
            </div>
        </div>
        ${footer()}
        
    </div>
    
    `
}
export default homePage