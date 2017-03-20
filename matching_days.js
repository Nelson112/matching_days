var Days = document.querySelectorAll(".weekDays");

var myButton = document.querySelector('#Buttin');
var dateOne = document.querySelector('#date1');
var dateTwo = document.querySelector('#date2');


myButton.addEventListener("click", function myfunction() {

  var DateI = new Date(dateOne.value);
  var DateII = new Date(dateTwo.value);

  var Date1Val = DateI.getDay();
  var Date2Val = DateII.getDay();

  //loop through all the day elements and remove the highlighting
for (var i = 0; i < Days.length; i++) {
  Days[i]
Days[i].classList.remove('style1')
Days[i].classList.remove('style2')
Days[i].classList.remove('style3')

}


  //add the correct highlighting


  if (Date1Val === Date2Val) {
    Days[Date1Val].classList.add('style3')

  } else {


    //Days[Date1Val].classList.remove('style1')
    //Days[Date2Val].classList.remove('style2')

    Days[Date1Val].classList.add('style1');
    Days[Date2Val].classList.add('style2');

  }

  return;
});
