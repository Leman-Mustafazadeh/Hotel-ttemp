const tb = document.querySelector(".tb");
const contactF = document.querySelector(".contactF");
const contactT = document.querySelector(".contactT");
const contactE = document.querySelector(".contactE");
const contactA = document.querySelector(".contactA");
const sendBTN = document.querySelector(".sendBTN");
const header = document.querySelector("header");
window?.addEventListener("scroll", function () {
    if (this.window.scrollY > 200) {
        header.style.backgroundColor = "gainsboro";
    } else {
        header.style.backgroundColor = "transparent";
    }
});
const contactArr = [];
let id = 0;
console.log(sendBTN);
contactF.addEventListener("submit", (e) => {
    e.preventDefault();

    if (contactT.value.trim() === "" || contactE.value.trim() === "" || contactA.value.trim() === "") {
        sendBTN.style.backgroundColor = "red";
        sendBTN.style.disabled = "disabled";
        setTimeout(() => {
            sendBTN.style.backgroundColor = "";
            sendBTN.style.disabled = "";
        }, 1000)
    } else {
        id++;
        const contactData = {
            id: id,
            name: contactT.value.trim(),
            email: contactE.value.trim(),
            messaje: contactA.value.trim()
        }
        contactArr.push(contactData);
        addTables(contactData)
        contactA.value = "";
        contactE.value = "";
        contactT.value = "";
    }
})


function addTables(data) {
    console.log(data);
    tb.innerHTML += `<tr>
    <th scope="row">${data.id}</th>
    <td>${data.name}</td>
    <td>${data.email}</td>
    <td>${data.messaje} </td>
  </tr>`
}
