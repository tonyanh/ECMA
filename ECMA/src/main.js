import { render } from "./lib";
import homePage from "./pages/home";
import productPage from "./pages/product";
import detail from "./pages/product-detail";
import './style/main.css';
import { router } from "./lib"
import dashboard from "./pages/admin/dashboard";
import update from "./pages/admin/update";
import login from "./pages/login";
const app  = document.querySelector("#app");

router.on('/', function() {
    // render(homePage(), app)
    render(() => homePage(), app)
})

router.on('/product', function() {
    render(productPage(), app);
    // render(() => productPage(), app)
})
router.on('/product-detail/:id', function({data}) {
    console.log("Fpoly");
    // render(detail(data.id), app);          
    render(() => detail(data.id), app)
})
router.on('/admin', function() {
    render(dashboard, app);
})
router.on('/admin/books/:id', function({data}) {
    console.log(data)
    render(() => update(data.id), app);
})
router.on('/login' , function() {
    console.log("trung anh ")
    render(login, app);
})
router.resolve()