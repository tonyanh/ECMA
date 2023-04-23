import data from '../../db.json' assert {type: 'json'}
function cate() {
    return /*html*/ `
    
                <div>
                    <h2 class="text-lg font-medium">Danh mục sản phẩm</h2>
                    <ul>
                        <li><a href="">English Books</a></li>
                        <li><a href="">Sách tiếng việt</a></li>
                        <li><a href="">Văn phòng phẩm</a></li>
                        <li><a href="">Quà lưu niệm</a></li>
                    </ul>
                </div>
            `
}

export default cate

