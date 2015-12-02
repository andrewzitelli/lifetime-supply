function calcSatFat(){
  birthyear = document.getElementById('bYear').value
  units = document.getElementById('units').value
  x = parseInt(birthyear);
  var age;
  age = 2015 - x;
  if (1914 >= x || x >= 2016){
    document.getElementById('result').innerHTML = "Please enter a year between 1915 and 2015!";
  }
  else if (x <= 2016 && units == "boxes"){
      // One 200 gram box contains 10 days worth of fat!
      numUnits = (((100 - age) * 365) / 10);
      document.getElementById('result').innerHTML = Math.round(numUnits) + " " + units + " of fat will be delivered to your home tonight. Congrats! You're set for life!";
    }
  else if (x <= 2016 && units == "bags"){
      // One garbage bag full of fat contains 30 days worth of fat!
      numUnits = (((100 - age) * 365) / 30);
      document.getElementById('result').innerHTML = Math.round(numUnits) + " " + units + " of fat will be delivered to your home tonight. Congrats! You're set for life!";
    }
  else if (x <= 2016 && units == "fistfuls"){
      // 1 fist full of fat is about 40 grams - 2 days worth
      numUnits = (((100 - age) * 365) / 2);
      document.getElementById('result').innerHTML = Math.round(numUnits) + " " + units + " of fat will be delivered to your home tonight. Congrats! You're set for life!";
    }
  else if (x <= 2016 && units == "grams"){
      // Based on a diet of 20 grams of fat per day
      numUnits = (((100 - age) * 365) * 20);
      document.getElementById('result').innerHTML = Math.round(numUnits) + " " + units + " of fat will be delivered to your home tonight. Congrats! You're set for life!";
    }
  else if (x <= 2016 && units == "ounces"){
      // Based on a diet of 20 grams of fat per day - 27 grams of fat is one ounce
      numUnits = (((100 - age) * 365) * (20/27));
      document.getElementById('result').innerHTML = Math.round(numUnits) + " " + units + " of fat will be delivered to your home tonight. Congrats! You're set for life!";
    }
  else if (x <= 2016 && units == "pounds"){
      // Based on a diet of 20 grams of fat per day - 27 grams of fat is one ounce, 16 ounces per pound
      numUnits = (((100 - age) * 365) * (20 / 27 / 16));
      document.getElementById('result').innerHTML = Math.round(numUnits) + " " + units + " of fat will be delivered to your home tonight. Congrats! You're set for life!";
    }


  else {
    document.getElementById('result').innerHTML = "Please enter a year between 1915 and 2015!";
  }
}
