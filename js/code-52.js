const user52 = document.querySelector(".user-52")
const user52Btn = document.createElement('button')

user52.textContent="WeHelp Team Work!";
user52Btn.textContent = "Bold";
user52Btn.classList.add('user-52__btn')
user52.appendChild(user52Btn)

user52Btn.addEventListener('click', e => {
  user52.classList.toggle('bold')
})