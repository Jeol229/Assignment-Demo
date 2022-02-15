// a loop that create a table of 5

for(var i=5;i<=60;i+=5)
{
console.log(i);
    
}

// using while

// var i=5;
// while(i<=60)
// {
//     console.log(i);

//     i+=5
    
// }


//5 variable holding marks of 5 subject
//The marks of Highest Marks in each subject in a School

let mark_math=50;
let mark_english=70;
let mark_physices=60;
let mark_Chemistry=50;
let mark_biology=70;
let mark_economies=30;
let mark_bookkeeeping= 50;
let mark_Agriculture=90;
let mark_accounting=57;

// let variable ABCDE be number of student that take at least 5 subject

console.log('The marks for atleast Five Science Courses'+mark_math+':'+mark_physices+':'+mark_english+':'+mark_Chemistry+':'+mark_biology);

console.log('The marks for atleast Five commercial Courses' +mark_bookkeeeping+':'+mark_accounting+':'+mark_economies+':'+mark_math+':'+mark_english);

console.log('The marks for atleast Five commercial and Science Courses ' +mark_bookkeeeping+':'+mark_physices+':'+mark_Chemistry+':'+mark_math+':'+mark_english);

console.log('The marks for atleast at most three  commercial and two Science Courses ' +mark_bookkeeeping+':'+mark_physices+':'+mark_Chemistry+':'+mark_math+':'+mark_english);

console.log('The marks for atmost for commercial and 0ne Science Courses ' +mark_math+':'+mark_physices+':'+mark_accounting+':'+mark_Chemistry+':'+mark_biology);

let k=mark_math=mark_accounting=mark_Chemistry;
let m=mark_biology=mark_english=mark_biology;

var mark=k&&m&&mark_economies
//calculate the percentage and then give grade
console.log('The mark of Students with Grade. ')

if(k>=50 && k<60){
    console.log("Grade in Math, Accounting, Chemistry :C" );
}
if(m>=70)
{
    console.log('Grade in Biology,English,Biology:A')
}
if(mark_physices>=60 && mark_physices<=69)
{
    console.log('Physics grade:B')
}
if(mark<50){
    console.log('Grade in economics fail')
}



