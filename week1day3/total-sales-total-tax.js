function calculateSales(salesData){
  for (var i = 0; i < salesData.length; i++){
    salesData[i].sales = sum(salesData[i].sales);
  }
  return salesData;
}

function sum(arr){
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
}

function addLocalTax(sales, taxRates){
  var arr = calculateSales(sales);
  for (var i = 0; i < sales.length; i++){
    var prov = arr[i].province;
    var tax = arr[i].sales * taxRates[prov];

    arr[i].localTax = tax;
  }
  return arr;
}

function calculateSalesTax(sales, taxRates){
  var arr = addLocalTax(sales, taxRates);
  var newObj = {};
  for (var i = 0; i < arr.length; i++){
    var obj = arr[i];

    if (newObj.hasOwnProperty(obj.name)){
      newObj[obj.name].totalSales += obj.sales;
      newObj[obj.name].totalTaxes += obj.localTax;
    }else{
      newObj[obj.name] = {};
      newObj[obj.name].totalSales = obj.sales;
      newObj[obj.name].totalTaxes = obj.localTax;
    }
  }
  return newObj;
}

var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

console.log(calculateSalesTax(companySalesData, taxRates));
