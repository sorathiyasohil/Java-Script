/*var name ='jhon';
console.log(name);

var lastname ='mark';
console.log(lastname);

var age ='26';
console.log(age);

var birth=true
console.log(birth);*/

/*-----------------------------*/

/*var name ='mark';
var age = 26;
console.log(name + age);

console.log(age + age);

var job , isMarid;

job='techer';
isMarid=false;

console.log(name + ' is a ' + age + ' Year old ' + job + ' Is her Marid ? ' + isMarid + '.');

job='driver';
age='therty six'

console.log(name + ' is a ' + age + ' Year old ' + job + ' Is her Marid ? ' + isMarid + '.');
*/



//Operator//////

/* var birth = 2019-23;
console.log(birth); */

//If-Else Statement/////////

/* var name= 'jhon';
var age=26;
var isMarid='yes';

if(isMarid ==='yes'){
    console.log(name  + ' is Marid')
}else{
    console.log(name+'Marid very Soon...')
}

isMarid=true

if(isMarid){
    console.log('YES!')
}

if(23==23){
    console.log('Somthings Prints...');
}
 */


//boolen logic and switch//////

/* var age=35;

if(age===20){
    console.log('jhon is young')
}else if (age > 20 && age < 30) {
    console.log('jhon is middle')
} else {
    console.log('jhon is man');
}


var job ='teacher';

job=prompt('enter somthing to chhose')

switch (job)
{
   case 'teacher' :
       console.log('jhon techaing');
   break;
   case 'dance' :
       console.log('jhon teching Dance');
       break;
   case 'driver':
       console.log('jhon driving')
       break;
   default:
   console.log('somthing else..');
   
} */


//CODECHALLANGE///////////////////

/* var heightjhon=170;
var heightMike=180;

var agejhon=25;
var ageMike=20;

var scorejhon = heightjhon + 5 *agejhon;
var scoreMike = heightMike + 5 *ageMike;

// if(scorejhon > scoreMike){
//     console.log('jhonwin the game');
// }else if(scoreMike > scorejhon){
//     console.log('mike won the game');
// }else if(scorejhon === scoreMike){
//     console.log('match is draw');
// }


var heightMarry=195;
var ageMarry=23;

var scoreMarry = heightMarry + 5 * ageMarry;

if(scorejhon > scoreMike && scorejhon > scoreMarry){
    console.log('jhon win game');
}else if(scoreMike > scorejhon && scoreMike >scoreMarry){
    console.log('mike win game');
}else if(scoreMarry > scorejhon && scoreMarry >scoreMike){
    console.log('marry win game');
} */


//FUNCTION////////////////

/* function Calculateage (BirthDayYear){
    var age = 2019-BirthDayYear;
    return age;
}

var agejhon = Calculateage(1996);
console.log(agejhon);

function  ageofretairment (name , Year){
    var age = Calculateage(Year);
    var ageretaire = 65 - age;
    console.log(name+ageretaire)
}

ageofretairment('jhon', '1995') */


//STATEMENT AND EXPRESSION/////////////

/* function sumfun(par){
    //code
}

var sumfun = function(par){
    //code
}

//Expression

 3+4;
var x=3;

//statement

if(x===5){
    //do somthing
} */


//ARRAY////////////


/* var names = ['jhon','Mark','Marray'];    
 

console.log(names[5]);
names[1] = 'Ben';
console.log(names);

var jhon = ['jhones','dancer',1996,true]

jhon.push('blue');
jhon.unshift('Mr.');
jhon.pop();
jhon.shift();
console.log(jhon);

if(jhon.indexOf ('teacher') === -1){
    console.log('jhon is not a techaer');
} */

//OBJECT AND PROPERTYS/////////////

/* var jhon={
    name:'jhon',
    lastname:'smith',
    BirthDayYear:26,
    job:'teacher',
    isMarid:false,
};

console.log(jhon.lastname);
console.log(jhon['lastname']);

var xyz ='job';
console.log(jhon[xyz]);

jhon.lastname='bill';
jhon['job']='programer';

console.log(jhon);

var jhone= new Object();
jhone.nam='jhonee';
jhone.lastname='smith';
jhone['BirthDayYear']=1960;
jhone['job']='programer';
jhone['isMarid']= true;

console.log(jhone); */

//OBJEC AND METHOD////////////

/* var jhon ={
    name:'jhone',
    lastname:'mark',
    BirthDayYear:1996,
    job:'teacher',
    family:['mark','bob','jems'],
    isMarid:true,
    Calculateage :function(){
    this.age = 2019-this.BirthDayYear;
}
};

jhon.Calculateage();
console.log(jhon);

var mark={
    BirthDayYear:1998,
    Calculateage :function(){
        this.age=2016-this.BirthDayYear;
    }
};

mark.Calculateage();
console.log(mark);
 */

//LOOPS AND ITREATION/////
/* var number = 1;
for (var i = 0; i < 15; i++) {
    if (i === 5) {
        number = 1;
    }
    console.log(number);
    number++;
}




var add = ['jhon', 'rock', 'mark', 'marray']

i = 0;
while (i < add.length) {
    console.log(add[i]);
    i++;
} */

//CODE CHALLANGE//////////////

function printFullAge(years) {
    // 2
    ages = [];
    fullages = [];

    // 3.
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];
        console.log(ages[i]);
    }
    // 4.
    for (var i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('person is ' + ages[i] + 'is olders');
            fullages.push(true);
        } else {
            console.log('person is' + ages[i] + 'is not full ages');
            fullages.push(false);
        }
    }
    return fullages;
}

// 1.
var years1 = [1965, 2008, 1992];
var years2 = [1990, 1978, 1999, 1948];

var full_1 = printFullAge(years1);
console.log(full_1)
var full_2 = printFullAge(years2);
console.log(full_1)