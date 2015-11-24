var PRODUCTS = [
{bay: 'a10', name: "rubber band"},
{bay: 'a9', name: "glowstick"},
{bay: 'a8', name: "model car"},
{bay: 'a7', name: "bookmark"},
{bay: 'a6', name: "shovel"},
{bay: 'a5', name: "rubberduck"},
{bay: 'a4', name: "hanger"},
{bay: 'a3', name: "blouse"},
{bay: 'a2', name: "stop sign"},
{bay: 'a1', name: "needle"},
{bay: 'c1', name: "rusty nail"},
{bay: 'c2', name: "drill press"},
{bay: 'c3', name: "chalk"},
{bay: 'c4', name: "wordsearch"},
{bay: 'c5', name: "thermometer"},
{bay: 'c6', name: "face wash"},
{bay: 'c7', name: "paint brush"},
{bay: 'c8', name: "candy wrapper"},
{bay: 'c9', name: "shoe lace"},
{bay: 'c10', name: "leg warmers"},
{bay: 'b1', name: "tyre swing"},
{bay: 'b2', name: "sharpie"},
{bay: 'b3', name: "picture frame"},
{bay: 'b4', name: "photo album"},
{bay: 'b5', name: "nail filer"},
{bay: 'b6', name: "tooth paste"},
{bay: 'b7', name: "bath fizzers"},
{bay: 'b8', name: "tissue box"},
{bay: 'b9', name: "deodorant"},
{bay: 'b10', name: "cookie jar"}
];
function showByName() {
  for (var i=0; i<=PRODUCTS.length-1; i++) {
    document.write("<input id='"+i+"'name='mycheckboxes' type='checkbox' value='" + PRODUCTS[i].bay +"'>" + PRODUCTS[i].name + "</input>");
  };
  document.write("<br><button type='submit' id='submitproducts'>Submit</button>");
  document.getElementById('submitproducts').addEventListener("click", function(e) {
    var checkedBoxes = document.querySelectorAll('input[name=mycheckboxes]:checked');
    var products = [];
    var baynumbers = [];
    for (y=0; y<checkedBoxes.length; y++) {
      products[y] = PRODUCTS[checkedBoxes[y].id].bay;
      baynumbers[y] = checkedBoxes[y].id;
    }
    var totalsteps = parseInt(baynumbers[baynumbers.length-1]) - parseInt(baynumbers[0]);
    document.write("<br>You must visit " + products.join(', ') + ". A total of " + totalsteps + " steps!");
  });
};



function showByBay() {
  for (var i=0; i<=PRODUCTS.length-1; i++) {
    document.write("<input name='mycheckboxes' id='"+i+"' type='checkbox' value='" + PRODUCTS[i].bay +"'>" + PRODUCTS[i].bay + "</input>");
  };
  document.write("<br><button type='submit' id='submitbays'>Submit</button>");
  document.getElementById('submitbays').addEventListener("click", function(e)
  {
    var checkedBoxes = document.querySelectorAll('input[name=mycheckboxes]:checked');
    // console.log(checkedBoxes);
    var bays = [];
    for (y=0;y<checkedBoxes.length;y++){
      bays[y] = PRODUCTS[checkedBoxes[y].id].name;
      
    };
    document.write("<br>You selected " + bays.join(', '));
  });
};

document.getElementById('lookup_name').addEventListener("click", function(e)
{
  showByName();
});
document.getElementById('lookup_bay').addEventListener("click", function(e)
{
  showByBay();
})

