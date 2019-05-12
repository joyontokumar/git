// show data

const myobj = {
  name: "joyonto",
  age: 23,
  city: "nilphamari",
  address: "kundupkur"
};

// show data html
let data = "";
data += `<div class="datashow">
    <h3>${myobj.name}</h3>
    <h4>${myobj.age}</h4>
    <h5>${myobj.city}</h5>
    <h6>${myobj.address}</h6>
</div>`;

document.getElementById("message").innerHTML = data;

// settime out

window.onload = function() {
  document.body.style.backgroundColor = "orange";
  setTimeout(() => {
    console.log("this is settime out function");
  }, 2000);
};
