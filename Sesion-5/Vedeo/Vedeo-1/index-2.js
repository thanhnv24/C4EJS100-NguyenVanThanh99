// let n = Math.random();

// n = Math.round(n * 10);

// let arr = [2, 5, 6, 9, 10];

// while (n >= arr.length) {
//     n = Math.round(Math.random() * 10);
// };

// console.log(arr[n]);


// let show = Array[Math.floor(Math.random()*Array.length)];
// alert(show);



let quizs = [{
        question: 'Nơi nào con trai có thể sinh con?',
        choice: ['1.Trong Nhà', '2.Dưới Nước', '3.Rừng Rậm', '4.Đáp Án Khác'],
        rightchoice: '2',
    },
    {
        question: 'Trên nhấp dưới giật là đang làm gì?',
        choice: ['1.Chơi Bóng Bàn', '2.Trộm Cắp', '3.Đang Học', '4.Câu Cá'],
        rightchoice: '4',
    },
    {
        question: 'Con trai và đàn ong có điểm gì khác nhau?',
        choice: ['1.Số Tuổi', '2.Chiều Cao', '3.Nơi ở', '4.Địa Vị'],
        rightchoice: '3',
    },
    {
        question: 'Con gì đầu dê mình ốc?',
        choice: ['1.Con Dốc', '2.Con Mương', '3.Con Đường', '4.Con Ốc'],
        rightchoice: '1',
    },
];
let n = Math.random();
n = Math.round(n * 10);

let sizeQuiz = quizs.length;
let point = 0;
let check;

for (let i = 0; i < sizeQuiz; i++) {
    while (n >= quizs.length) {
        n = Math.round(Math.random() * 10);
    };

    let answer = prompt(`${quizs[n].question}\n${quizs[n].choice[0]}\n${quizs[n].choice[1]}\n${quizs[n].choice[2]}\n${quizs[n].choice[3]}`);
    if (answer == null || answer == undefined) {
        check = false;
        break;
    }
    if (answer == quizs[n].rightchoice) {

        alert('correct');
        quizs.splice(n, 1);
        point = point + 1;
    } else {

        alert('wrong');
        quizs.splice(n, 1);
    };
};
if (check == false) {
    alert('GoodBye!');
} else {
    alert('we are out of question');
    alert(`${point} out of ${sizeQuiz} quesions`);
}