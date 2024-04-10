console.log("안녕하세요22")

// 변수 선언 : let 
let value = 1;
console.log(value)
value = 2;
console.log(value)
//let value = 3

const a = 1; 

let heeju = 1; 
console.log("++ 위치에 따른 결과값")
// heeju++;
// console.log(heeju);
console.log(heeju++);    // 1, 1을 더하기 직전의 값, 현재의 값?! 
//console.log(++heeju);  // 2, 1을 더한 다음의 값을 보여줌 

let ab = 1;
ab += 3;
ab -= 3;
ab *= 3;
ab /= 3;
console.log(ab);

// || or, && and, ! NOT
// not and or 순서대로 계산이 됨 

// 0과 false를 0 == false : true로 출력 (0과 false는 같은 값)
// 타입까지 완전 같음을 비교하려면 === 을 사용해야함 
// undefined와 null도 같은 값으로 간주 
// 일치하지 않을때는 !==을 사용하면 됨 

const check = 'a'!=='b';
console.log("결과값 체크")
console.log(check);

console.log("!=, !==의 결과 비교")
console.log(1 != '1')  // 타입검사 안하니까, 1로 일치하니까 false
console.log(1 !== '1') // 타입검사를 하니까 타입이 다르니까 true 

// 비교 연산자 
// <, >, <=, >= 가 있음 

//문자열 붙이기 => +로 함 
const str1 = '안녕';
const str2 = '하세요';
console.log(str1+str2);

const a1 = 1; 
if (a+1===2){
    console.log("a+1은 2이다.");
}
// { }은 코드블록이라고 부름 

const a2 = 10;
if (a>15){
    console.log('a가 15보다 큼')
} else {
    console.log('a가 15보다 크지 않다');
}

const a3 = 5;
if (a3===5){
    console.log('5입니다');
} else if(a3===10){
    console.log('10입니다');
} else {
    console.log("PASS");
}

//switch case 

const device = 'kang';
switch(device){
    case 'iphone':
        console.log('아이폰');
        break;
    case 'ipad':
        console.log('아이패드')
        break;
    case 'heeju' :
        console.log('암것도 아님')
        break;
    default :
        console.log("모르겠네여")
}

// 함수 

const a4 = 1;
const b4 = 2;
const sum = a4+b4;

function add(a,b){
    return a+b;
    //console.log('호출이 되지 않는 코드!');
}

const sum2 = add(a4, b4);
console.log(sum2)

function say(name){
    return "hello "+ name;
}

let hi = say("heeju")
console.log(hi)

// 템플릿 리터럴 : 백탭을 써야함 
function hello(name) {
    console.log(`Hello, ${name}!`);
  }
hello('velopert');

function hello2(name){
    console.log(`"hello ${name}"`)
}
hello2("hh");

// 화살표 함수 : function 키워드 대신에 사용하는것 
// 함수의 파라미터 => 코드블록 형태 


const add2 = (a,b) => {
    return a+b;
}

console.log(add2(10,12))

const getScore = score => {
    if (score===100){
        return 'A+';
    }
    else if (score>=90){
        return 'B+';
    }
}

const score2 = getScore(97);
console.log(score2);

// 객체 

const dog = {
    name : '머엉',
    age : 2
    // 키(공백이 있으면 안됨, 있으면 " "로 감싸기) : 원하는 값 
}

console.log(dog.name)
console.log(dog.age)

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
  };
  
const captainAmerica = {
name: '스티븐 로저스',
actor: '크리스 에반스',
alias: '캡틴 아메리카'
};

function print(hero){
const text = `${hero.alias}(${hero.name}) 배우는 ${hero.actor}`;
console.log(text)
}
print(ironMan);
print(captainAmerica);

// 객체 비구조화 할당 == 객체 구조 분해 
function print2(hero) {
// 객체에서 값들을 추출해서 새로운 상수로 선언해주는 것 
const { alias, name, actor } = hero;
const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
console.log(text);
}
console.log("객체 비구조화 테스트")

print2(ironMan);
print2(captainAmerica);

function print3({ alias, name, actor }) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

console.log("파라미터 객체 비구조화")
print3(ironMan);
print3(captainAmerica);



// 객체 안에 함수 넣기 
const dog2 = {
    name : '머엉멍2',
    sound : '멍멍!',
    
    // 이 경우엔 화살표 함수로 선언하면 안됨 
    say2 : function say2() {
        console.log(this.sound);
    }
};

dog2.say2();

// 함수에서 getter setter 설정하기 
const numbers = {
    a:1,
    b:2,
    get sum() {  // getter는 get을 붙임!!, setter는 set을 붙임 

        console.log('sum 햠수가 실행됨');
        return this.a + this.b;  // getter임?? - 저절로 출력
    }
};

console.log(numbers);
console.log(numbers.sum)
numbers.a=5;
console.log("sum값 출력")
console.log(numbers.sum)

/* getter setter 함수 활용 */ 
const numbers2 = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
      console.log('calculate');
      this.sum = this._a + this._b;
    },
    get a() {
      return this._a;
    },
    get b() {
      return this._b;
    },
    set a(value) {
      console.log('a가 바뀝니다.');
      this._a = value;
      this.calculate();
    },
    set b(value) {
      console.log('b가 바뀝니다.');
      this._b = value;
      this.calculate();
    }
};
  
console.log(numbers2.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers2.sum);
console.log(numbers2.sum);
console.log(numbers2.sum);


// 배열 
const objects = [{ name: '멍멍이' }, { name: '야옹이' }];
console.log(objects[1]);

// 1. 배열에 항목을 추가하면 내장함수 push 사용함 
objects.push({
name: '멍뭉이'
});

console.log(objects);

// 2. 배열의 크기를 알아낼때에는 length 로 확인 
console.log(objects.length)

/* 반복문 */ 
console.log("반복문 출력");
for (let i=0; i<10; i+=2){
console.log(i)
}

for (let i=0; i<objects.length; i++){
    console.log(objects[i]);
}

// while은 조건문이 언젠가 false가 되도록 신경써야함 
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// for .. of : 배열에 관한 반복문을 돌리기 위해 만들어짐 
// 이거보다 오히려 배열의 내장함수를 많이 사용함 
// 파이썬의 for k in range 느낌 
console.log("\nfor of 확인 ")
let num = [10,20,30,40];
for (let number of num){
    console.log(number)
}

// 객체를 위한 반복문 

/* Object 클래스의 내장 함수 
Object.entries: [[키, 값], [키, 값]] 형태의 배열로 변환
Object.keys: [키, 키, 키] 형태의 배열로 변환
Object.values: [값, 값, 값] 형태의 배열로 변환
*/

const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
  };
  
  console.log(Object.entries(doggy));
  console.log(Object.keys(doggy));
  console.log(Object.values(doggy));
  
  // for in 반복문으로 써도 괜춘 


  for (let i = 0; i < 10; i++) {
    if (i === 2) continue; // 다음 루프를 실행
    console.log(i);
    if (i === 5) break; // 반복문을 끝내기
}

function biggerThanThree(numbers3) {
    /* 구현해보세요 */
    const result = [];
    for (let i = 0; i < numbers3.length; i++) {
      if (numbers3[i] > 3) {
        result.push(numbers3[i]);
      }
    }
    return result;
  }
  
  const numbers3 = [1, 2, 3, 4, 5, 6, 7];
  console.log(biggerThanThree(numbers3)); // [4, 5, 6, 7]
  
// 배열 내장 함수 

// 1) forEach : for문 대체 가능 
// 파라미터로 각 원소에 대해 처리하고 싶은 코드를 함수로 넣어줌, 함수의 파라미터 hero는 각 원소를 가리킴 
console.log("\nFor Each 확인")
const aaa = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

aaa.forEach(hero => {
    console.log(hero)
});

// 배열안의 각 원소를 변환할때 사용, 새로운 배열 생성 
// map 함수의 파라미터로는 변화를 주는 함수를 전달, 변화함수

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n;  // 바로 리턴하는 함수 
const squared = array.map(square);
console.log("\n제곱 함수 map 확인")
console.log(squared);


// indexOf 함수 
console.log(aaa.indexOf('아이언맨'));

// findIndex : 
/* 
const index = todos.findIndex(todo => todo.id === 3);
console.log(index); 
*/

// find 함수 : 찾아낸 값 자체를 리턴함 

// filter 함수 : 배열에서 특정 조건을 만족하는 값만 추출해 새로운 배열 만듦 

/*
const tasksNotDone = todos.filter(todo => todo.done === false);
같은 코드 : const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);
넣어준 함수에서 true를 반환함녀 새로운 배열에 따로 추출
*/

// splice : 배열에서 특정 항목을 제거할 때 사용 
//splice(delete_FromIndex, delete_howMany) // 출력 안됨 

// slice : 기존의 배열을 건드리지 않으면서 배열을 잘라냄 
// slice(0,2) : 0부터 시작해 2전까지 

// shift, pop 
// shift() : 첫번째 원소를 배열에서 추출해줌 (이때 원소는 사라짐) , pop() : 마지막 원소를 추출하면서 제거 

// unshift(n) : 배열의 맨 앞에 새 원소 n을 추가함 

// concat : 여러개의 배열을 하나의 배열로 합쳐줌 
// 연결할 배열에 영향 안줌, arr1.concat(arr2)로 arr1에 arr2를 연결함 

// join : 배열안의 값들을 문자열 형태로 합쳐줌 
console.log("\nJoin 함수 확인하기")
const array2 = [1, 2, 3, 4, 5];
console.log(array2.join()); // 1,2,3,4,5
console.log(array2.join(' ')); // 1 2 3 4 5
console.log(array2.join(', ')); // 1, 2, 3, 4, 5

// reduce : reduce(콜백함수, 초깃값) : accumulator, current라는 파라미터가 지정되어있나?? 
console.log('\n reduce : reduce(콜백함수, 초깃값)');
const numbers5 = [1, 2, 3, 4, 5];
let sum3 = numbers5.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum3);

// 10. 프로토타입과 클래스 
// 객체 생성자 : 함수를 통해 새로운 객체를 만들고 그 안에 넣고 싶은 값 또는 함수들을 구현할 수 있게 해줌 

/*
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    // say는 Animal의 함수이다. 
    this.say = function() {
      console.log(this.sound);
    };
}
  
const dog4 = new Animal('개', '멍멍이', '멍멍');
const cat4 = new Animal('고양이', '야옹이', '야옹');

dog4.say();
cat4.say();
*/

function Animal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function() {
    console.log(this.sound);
};

Animal.prototype.sharedValue=1;

const dog5 = new Animal('개', '멍멍이', '멍멍');
const cat5 = new Animal('고양이', '야옹이', '야옹');

console.log("프로토타입 출력")
dog5.say();
cat5.say();

console.log(dog5.sharedValue);
console.log(cat5.sharedValue);



class AnimalTest {
    constructor(type, name, sound) {
      this.type = type;
      this.name = name;
      this.sound = sound;
    }
  }