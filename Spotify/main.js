const toggleBtn = document.querySelector('body > div.Question > div.Question_list > div.Question_01 > div.icon_js > i');
const p = document.querySelector('body > div.Question > div.Question_list > div.Question_07.hidden');
const Question1 = document.querySelector('.Question_01');
const toggle = document.querySelector('hidden_icon');
const downtoggle = document.querySelector('body > div.Question > div.Question_list > div.Question_07 > div.icon_js > i');
toggleBtn.addEventListener('click', () => {
    p.classList.remove("hidden");
    
});
downtoggle.addEventListener('click', () =>{
    p.classList.add("hidden");
})