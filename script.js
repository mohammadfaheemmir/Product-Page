let productImg = document.getElementById('productImg');
let btn = document.getElementsByClassName('btn');

btn[0].onclick = function () {
    productImg.src = "Images/image1.png";
    for(bt of btn){
        btn.classList.remove("active");
    }
    this.classList.add("active");
}

btn[1].onclick = function () {
    productImg.src = "Images/image2.png";
    for(bt of btn){
        btn.classList.remove("active");
    }
    this.classList.add("active");
}

btn[2].onclick = function () {
    productImg.src = "Images/image3.png";
    for(bt of btn){
        btn.classList.remove("active");
    }
    this.classList.add("active");
}