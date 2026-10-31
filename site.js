const menu=document.querySelector('.menu'),links=document.querySelector('.links');
if(menu)menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.brand img,.hero-logo').forEach(img=>{
  img.onerror=()=>{if(!img.dataset.fallback){img.dataset.fallback='1';img.src='logo.jpg';}};
});
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.links a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active');});