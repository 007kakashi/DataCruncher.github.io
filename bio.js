const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelector(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click', (e) =>{
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);



const btn_num = p_btn_clicked.dataset.btnNum;
console.log(btn_num);



const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
p_img_elem.forEach((curElem) => curElem.classList.add("p-img-not-active"));
img_active.forEach((curElem) => curElem.classList.remove("p-img-not-active"));

});