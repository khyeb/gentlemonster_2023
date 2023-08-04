//header, footer JS
//header 전체메뉴 스크립트 flow
// 1. open-nav 초기 숨기기
// 2. 햄버거 메뉴(nav) 클릭 시 open-nav 출력
// 3. open-nav 안 X버튼(nav_close) 클릭 시 open-nav 숨기기
const nav_btn = document.querySelector('#nav')//햄버거메뉴
const open_nav = document.querySelector('#open_nav')//nav 클릭시 open대상
const nav_close = document.querySelector('#nav_close')//x닫기
console.log(nav_btn,open_nav,nav_close)
// 1. open-nav 초기 숨기기
// #open_nav {transform:translateX}
open_nav.style.transform='translateX(100%)'
open_nav.style.transition='all 1s'
// 2. 햄버거 메뉴(nav) 클릭 시 open-nav출력
nav_btn.addEventListener('click',function(){
    open_nav.style.transform='translateX(0)'
    //display:none으로 숨긴대상을 다시보이게 할 경우
    //기존 디자인css에서 flex로 정렬한 대상이면 display='flex'
    //기존 디자인css에서 flex로 설정이 없었다면 display='block'
})
// 3.open-nav 안 x 버튼(nav_close) 클릭 시 open-nav숨기기
nav_close.addEventListener('click',function(){
    open_nav.style.transform='translateX(100%)'
}) 
// swiper-slide open-nav 광고영역
const nav_adver = new Swiper('#nav_adver',{
    direction:'horizontal',
    autoplay:{delay:1000},
    loop:true,
    navigation: {
        nextEl: '#nav_adver .swiper-button-next',
        prevEl: '#nav_adver .swiper-button-prev',
    },
})