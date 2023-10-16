const user27Div = document.querySelector(".user-27");

user27Div.innerHTML = `
<h1 data-heading="User Number 27">
  <span contenteditable data-heading="User Number 27">User Number 27</span>
</h1>
`;

const span = document.querySelector("span");

span.addEventListener("input", function() {
	const  text = this.innerText;
	this.setAttribute("data-heading", text);
	this.parentElement.setAttribute("data-heading", text);
});