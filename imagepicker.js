let pilihan = document.querySelector("#option");

pilihan.addEventListener("change", () => {
    if (pilihan.value == "kuda"){
        document.querySelector("#gambar").innerHTML =
'<img src="kuda.jpg" alt="">';
        alert("ini adalah kuda");
    }   else if (pilihan.value === "sapi"){
        document.querySelector("#gambar").innerHTML =
'<img src="sapi.jpg" alt="">';
        alert("ini adalah sapi");
    }else if (pilihan.value === "gajah"){
        document.querySelector("#gambar").innerHTML =
'<img src="gajah.jpg" alt="">';
        alert("ini adalah gajah");
    }else if (pilihan.value === "unta"){
        document.querySelector("#gambar").innerHTML =
'<img src="unta.jpg" alt="">';
        alert("ini adalah unta");
    }else if (pilihan.value === "jerapah"){
        document.querySelector("#gambar").innerHTML =
'<img src="jerapah.jpg" alt="">';
        alert("ini adalah jerapah");
    }
});

    