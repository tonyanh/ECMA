

var sinhVien = {
    name: "Quach Trung Anh",
    age: 19,
    study: "Cao Dang FPT",
    method: function() {
        return this.name + " " + this.age + " " + this.study;
    }
}
console.log(sinhVien.method());

// Cach 2
function sinhVien() {
    this.name = "Trung Anh",
    this.age =  19,
    this.address = "Ha Noi",
    this.showInf = function() {
        
    }
}
// var sv = new sinhVien();
console.log(sinhVien)