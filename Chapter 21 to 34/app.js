//chapter 21  to 25
//Question No 1

// var firstName = prompt(" Enter your first name");
// var LastName = prompt("Enter your last name ");
// var fullName = firstName + " " + LastName;
// alert("Hi! " + fullName);

//Question No 2
// var favoriteMobile = prompt("Enter you favorite mobile model");
// var mobileLength = favoriteMobile.length
// document.write(mobileLength);

//Question No 3 
// var a = "pakistani";
// var idx = a.indexOf("n");
// document.write(idx)
 
//Question No 4 
// var b = "hello world";
// var ltindx = b.lastIndexOf("l");
// document.write(ltindx)

//Question No 5  
// var c = "pakistani";
// var chr = c.charAt(3);
// document.write(chr);

//Question No 6
// var fullName = firstName.concat(LastName);
// document.write("Hi1 " + fullName);

//Question No 7
// var d = "hyderabad";
// var rpl = d.replace("hyder", "Islam");
// document.write(rpl)

//question No 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rpl = message.replace(/and/g, '&');
// document.write(rpl);

//question No 9
// var value = "472";
// document.write(value + "<br>");
// document.write(typeof(value) + "<br>");
// var value = Number(value);
// document.write(value + "<br>");
// document.write(typeof(value) + "<br>");

//question No 10
// var inp = prompt("Enter a value");
// document.write("User input : " + inp + "<br>");
// inp = inp.toUpperCase();
// document.write("UppperCase : " + inp);

//question No 11
// var inp2 = prompt("Enter a value");
// document.write("User input : " + inp2 + "<br>");
// document.write( "Title Case " + inp2[0].toUpperCase() + inp2.slice(1).toLowerCase());

//question No 12 *******************
// var num = 35.36
// var num2 = parseInt(num)
// var num2 = num2.toString();
// var num3 = parseFloat(num)
// var num3 = num3.toString();
// document.write(num2 + num3);

//question No 13 
// var user_name = prompt("Enter a name");
// for (var i =0;i<user_name.length;i++){
//     if (user_name[i].charCodeAt() == 33 || user_name[i].charCodeAt()==44 || user_name[i].charCodeAt()==46 || user_name[i].charCodeAt()==64){
//         alert("invalid")
//         break
//     }
// }
// document.write(user_name);

//Question No 14
// var A = ["cake","apple", "pie", "cookie", "chips", "patties"]
// var inp = prompt("Enter a  item");
// var isMatch = true
// for (var i =0; i<A.length;i++ ){
//     if (A[i]==inp){
//         alert(inp + " availbale at " + i + " index");
//         isMatch = false
//         break
//     }
// }
// if (isMatch==true){
//     alert( inp + "is not available in our bakery ");
// } 

//Question No 15  
// var paswrd = prompt("Enter a password");
// if (paswrd.length>=6  ){
//     if(paswrd[0].charCodeAt() >= 65 ){
//         var flag = true
//         for (var i =0; i<paswrd.length;i++){
//             if (paswrd[i].charCodeAt()>=33 && paswrd[i].charCodeAt()<= 46){
//                 alert("not valid")
//                 flag = false
//                 break
//             }
//         }
//         if (flag==true){
//             alert("valid")
//         }
//     }else{
//         alert("password must start with aplhapbet")
//     }
// }else{
//     alert("Password must contain at least 6 characters")
// } 

//Question No 16
// var university = "University of Karachi";
// var uni_splt = university.split("");
// for (var i = 0;i<uni_splt.length;i++){
//     document.write(uni_splt[i] + "<br>")
// }

//Question No 17
// var user_inp = prompt("Enter ");
// var last = user_inp.charAt(user_inp.length - 1);
// document.write("Last charactef of input : " + last)

//Question No 18
// var str = "the quick brown fox jumps over the lazy dog"
// var count = (str.match(/the/g)).length;
// console.log(count) 

//Chapter 26 to 30
//Quesstion No 1
// var num = +prompt("ENTER A POSITIVE INTEGER");
// document.write("number : "+ num + "<br>");
// var roun_num = Math.round(num);
// document.write("Round Off : "+ roun_num + "<br>");
// var flo_num = Math.floor(num);
// document.write("Floor : "+ flo_num + "<br>");
// var cei_num = Math.ceil(num);
// document.write("Ceil : "+ cei_num + "<br>");

//Question No 2
// var num = +prompt("ENTER A Negative INTEGER");
// document.write("number : "+ num + "<br>");
// var roun_num = Math.round(num);
// document.write("Round Off : "+ roun_num + "<br>");
// var flo_num = Math.floor(num);
// document.write("Floor : "+ flo_num + "<br>");
// var cei_num = Math.ceil(num);
// document.write("Ceil : "+ cei_num + "<br>")

//Question No 3
// var num2 = +prompt("Enter a absolute value");
// var abs_num = Math.abs(num2);
// document.write("The absolute value of number is : " + abs_num );

//Question No 4
// var rnd_num = Math.floor(Math.random() * 6) + 1;
// document.write("random dice value " + rnd_num);

//Question No 5
// var rnd_num = Math.floor(Math.random() * 2) + 1;
// if (rnd_num==2){
//     document.write(rnd_num + "<br>")
//     document.write("random coin value : Heads");
// }else{
//     document.write(rnd_num + "<br>")
//     document.write("random dice value : Tails" );
// }

//Question No 6
// var rnd_num = Math.floor(Math.random() * 100) + 1;
// document.write("random number between 1 to 100 : " + rnd_num);

//Question No 7
// var weight = +prompt("Enter a weight");
// weight = Number(weight);
// document.write("The weight of user is " + weight + "in Kilograms");

//Question No 8
// var user_num = +prompt("Enter a number between 1 to 10");
// var sec_num = Math.floor(Math.random() * 10) + 1;
// if (user_num == sec_num){
//     document.write("Congratulation")
// }else{
//     alert("Try Again!");
// }

//Chapter 31 to 34
//Question No 1
// var now = new Date();
// document.write(now);

//Question No 2
// var mnth = new Date().getMonth()
// var months = ["jan","feb","march","april","may","jun","jul","Aug","sept","Oct","Nov","Dec"]
// document.write(months[mnth]);

//Question No 3
// var wek = new Date().getDay()
// var weeks = ["sun","mon","tues","wed","thur","fri","sat"]
// document.write("Today is : " + weeks[wek]);

//Question No 4
// var day = new Date().getDay();
// if (day == 0 || day == 6){
//     document.write("It's Fun Day")
// }

//Question No 5
// var dat = new Date().getDate();
// if (dat<=15){
//     document.write("first fifteen days of months");
// }else{
//     document.write("Last days of the months");
// }

//Question No 6   **********
// var now = new Date();
// document.write("Current Date : " + now + "<br>");
// var ellipseMinute = new Date().getMilliseconds();
// document.write("Current Date : " + ellipseMinute + "<br>");

//Question No 7
// var now = new Date().getHours()
// if (now >= 0 && now <= 11 ){
//     document.write(now + " It's PM")
// }else{
//     document.write(now + " It's AM")
// }

//Question No 8
// var laterDate = new Date("dec 31 2020");
// document.write(laterDate)
