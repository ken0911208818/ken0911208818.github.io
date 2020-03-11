// var btn = document.querySelectorAll('.tab-title');
// var i =10;
// let bt;
// var content = document.querySelectorAll('.tab-content');
// for(var i = 0; i<btn.length; i++){
//     let bt = btn[i];
//     const con = content[i];
//     bt.onclick = function (){
//         remove();
//         bt.classList.add('active');
//         con.classList.add('active');
//     }

// }
//     function remove() {
//         for (let j = 0; j < btn.length; j++) {
//             btn[j].classList.remove('active');
//             content[j].classList.remove('active');
//         }
//     };
let btn = [$('#btn1'), $('#btn2'), $('#btn3')]
let con = [$('#content1'), $('#content2'), $('#content3')]
for (let i = 0; i < btn.length; i++) {
    btn[i].click(function () {
        remove();
        btn[i].addClass('active');
        con[i].addClass('active');
    })
}


// $('.tab-title').click(function(){
//     remove();
//     $('.tab-title').addClass('active');
//     $('.tab-content').addClass('active');
// })



function remove() {
    console.log('aaa');
    $('.tab-title').removeClass('active');
    $('.tab-content').removeClass('active');
}