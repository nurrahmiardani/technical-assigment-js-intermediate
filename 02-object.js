// soal 1
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function() {
      console.log("hello world")
    }
  }
  
  /// EDIT HERE
  person.name = "nurrahmi ardani risqy"
  person.favDrinks[1] = "tap water"
  person.greeting = function(name){
    return "Hello, " + name
  }
  
  /// STOP
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greeting("John Watson"));

// soal 2
function getObjectValue(obj, path) { 
    if (path.includes(".")){
      let result = path.split(".")
      let element = obj
      for (let i = 0; i < result.length; i++){
        element = element[result[i]]
      }
      if (typeof element !== 'undefined'){
        return element
      } else {
        return null
      }
    } else {
      return obj[path]
    }
  }
  
  const milkBasedCoffee = {
    name: "latte",
    ingredients: {
      espresso: {
        origin: "lampung",
        roastProfile: "medium to dark",
        ratio: 1
      },
      milk: {
        brand: "susu murni",
        isVegan: false,
        ratio: 5
      }
    },
  }
  
  const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
  const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
  const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");
  
  console.log(espresso);
  console.log(coffeeBrand);
  console.log(isMilkVegan)

// soal 3
const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];
  
  const calculateIncome = (items) => {
    return items.reduce((acc, cur) =>{
      const btcSum = cur.btc.sell - cur.btc.buy
      const dogeSum = cur.doge.sell - cur.doge.buy
      const ethSum = cur.eth.sell - cur.eth.buy
      
      
      return {
          btc: acc.btc + btcSum,
          doge: acc.doge + dogeSum,
          eth: acc.eth + ethSum
          
      }
  },
  {
      btc: 0,
      doge: 0,
      eth: 0
      
  })
  }
  
  console.log(calculateIncome(items))
  