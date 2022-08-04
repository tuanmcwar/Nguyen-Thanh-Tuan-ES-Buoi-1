const diemTB = (...param) => {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum += param[i];
  }
  sum = sum / param.length;
  //   console.log("value", sum);

  return sum;
};
document.querySelector("#btnKhoi1").onclick = function () {
  let toan = Number(document.querySelector("#inpToan").value);
  let ly = Number(document.querySelector("#inpLy").value);
  let hoa = Number(document.querySelector("#inpHoa").value);

  document.querySelector("#tbKhoi1").innerHTML = diemTB(toan, ly, hoa).toFixed(
    2
  );
};
document.querySelector("#btnKhoi2").onclick = function () {
  let van = Number(document.querySelector("#inpVan").value);
  let su = Number(document.querySelector("#inpSu").value);
  let dia = Number(document.querySelector("#inpDia").value);
  let anh = Number(document.querySelector("#inpEnglish").value);

  document.querySelector("#tbKhoi2").innerHTML = diemTB(
    van,
    su,
    dia,
    anh
  ).toFixed(2);
};
