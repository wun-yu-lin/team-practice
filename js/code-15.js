const newDiv = document.createElement("div");
newDiv.classList.add("user-15");

const catImg = document.createElement("img");
const catImgSrc =
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";
catImg.classList.add("cat-image");
catImg.setAttribute("src", catImgSrc);
catImg.setAttribute("alt", "cat image");

console.log(newDiv);
newDiv.appendChild(catImg);

const userDiv = document.getElementById("users");

console.log(userDiv);

userDiv.appendChild(newDiv);
