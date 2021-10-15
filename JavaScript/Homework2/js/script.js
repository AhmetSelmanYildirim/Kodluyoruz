const newElement = () => {
  let elementText = document.getElementById('task').value;

  if (elementText == "" || elementText.replace(/^\s+|\s+$/g, "").length == 0) {
    console.log("Text boş olamaz")
    $(".error").toast("show");
  }
  else {
    let li = document.createElement("li");
    const ul = document.getElementById("list")
    li.innerHTML = `${elementText} <span onclick="deleteElement(this)" class="close">x</span>`;
    ul.append(li);
    $(".success").toast("show");
    let date = new Date();
    let d = date.getDay();
    let mo = date.getMonth();
    d <10 ? d= "0"+d : d;
    mo <10 ? mo= "0"+mo : mo;
    let key = `${d}/${mo} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
    localStorage.setItem(key , elementText)
  }
  document.getElementById('task').value = "";
}

const deleteElement = (el) =>{
  var element = el.parentElement;
  element.remove();
}

const check = (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
}
let list = document.querySelector("ul");
list.addEventListener("click", check);