const MED = 'Medical';
const ENG = 'Engineering';
const COM = 'Computer Science';
const EDU = 'Education';
const NUS = 'Nursing';
const YDN = 'Yadanarbon University';

let sub1 = prompt('Enter your score in Myanmar ');
let sub2 = prompt('Enter your score in English ');
let sub3 = prompt('Enter your score in Math');
let sub4 = prompt('Enter your score in Chemistry');
let sub5 = prompt('Enter your score in Physics');
let sub6 = prompt('Enter your score in Biology');
let total_values = +sub1 + +sub2 + +sub3 + +sub4 + +sub5 + +sub6;

if (sub1 === '' && sub2 === '' && sub3 === '' && sub4 === '' && sub5 === '' && sub6 === '') {
    alert('Number can not be blank');
}
else if (sub1 === null || sub2 === null || sub3 === null || sub4 === null || sub5 === null || sub6 === null) {
    alert('Please enter a number');
} else {
    if (Number(sub1).toString() === 'NaN' || Number(sub2).toString() === 'NaN' || Number(sub3).toString() === 'NaN' || Number(sub4).toString() === 'NaN'
        || Number(sub5).toString() === 'NaN' || Number(sub6).toString() === 'NaN') {
        alert('Number can not be string')
    } else if (sub1 < 40 || sub2 < 40 || sub3 < 40 || sub4 < 40 || sub5 < 40 || sub6 < 40) {
        alert('You are fail');
    } else {
        alert(total_values);
        if (total_values >= 500) {
            alert('You can apply ' + MED + ' , ' + ENG + ' , ' + COM + ' , ' + EDU + ' , ' + NUS + ' and ' + YDN);
        } else if (total_values >= 450) {
            alert('You can apply ' + ENG + ' , ' + COM + ' , ' + EDU + ' , ' + NUS + ' and ' + YDN);
        } else if (total_values >= 400) {
            alert('You can apply ' + COM + ' , ' + EDU + ' , ' + NUS + ' and ' + YDN);
        } else if (total_values >= 350) {
            alert('You can apply ' + EDU + ' , ' + NUS + ' and ' + YDN);
        } else if (total_values >= 300) {
            alert('You can apply ' + NUS + ' and ' + YDN);
        } else {
            alert('You can apply ' + YDN);
        }
    }
}










