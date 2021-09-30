const fees = [
  {
    price: 10.75,
    title: "Normal fee"
  }, {
    price: 9.75,
    title: "Discounted fee"
  }, {
    price: 8.05,
    title: "Kinepolis Student Card"
  }
];

const extras = [
  {
    price : 2.00,
    title : "Supplement 3D"
  }, {
    price : 2.00,
    title : "Supplement Escape"
  }, {
    price : 3.00,
    title : "Supplement HFR 3D"
  }, {
    price : 0.75,
    title : "Supplement Long Duration Movie"
  }, {
    price : 2.50,
    title : "Supplement Cosy Zone"
  }, {
    price : 1.00,
    title : "Supplement Atmos"
  }
];
document.write("<ul>");
for (fe of fees){
  document.write(`<li>${fe.title} €${fe.price}</li>`)
  for(extr of extras){
    document.write(`<li>${fe.title} + ${extr.title} = (${fe.price} + ${extr.price} => €${fe.price + extr.price}</li>`)
  }
}
document.write("</ul>");