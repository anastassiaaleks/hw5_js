//Задание 1
console.log('Задание 1')

function calc(a,b,c) {
    return (a-b)/c
}
console.log('Ответ: '+calc(12,3,3))

//Задание 2
console.log('')
console.log('Задание 2')

function calcSq(num) {
    let num2=num**2;
    let num3=num**3;
    return 'Квадрат числа '+num+' = '+num2+', '+'Куб = '+num3
}
console.log(calcSq(6))

//Задание 3
console.log('')
console.log('Задание 3')

function getMinMax(a,b) {
    if (a>b) {
        return console.log('max число: '+a+', min число: '+b)
    }else if (b>a) return console.log('min число: '+a+', max число: '+b)
    else return console.log('Невозможно вывести максималоьное или минимальное число')
}
getMinMax(
    a=prompt('Задание 3. Введите первое число', 123),
    b=prompt('Задание 3. Введите второе число', 11)
)

//Задание 4
console.log('')
console.log('Задание 4')

let array = []
function getArray(a,b) {
    a=prompt('Задание 4. Введите начало массива', 12)
    b=prompt('Задание 4. Введите конец массива', 34)
    for (let i=+a; i<=+b; i++) {
        array.push(i);
    }
    return array 
}
function showArray() {
    console.log(getArray())
}
showArray()

//Задание 5
console.log('')
console.log('Задание 5')

function isEven(num) {if (num%2==0) return true; else return false}
console.log(isEven(13))

//Задание 6
console.log('')
console.log('Задание 6')

function onlyEven(arrayEven) {
    newArr=[];
    for (let i=0; i<arrayEven.length; i++) {
        if (isEven(arrayEven[i])==true) newArr.push(arrayEven[i])
    }
    return newArr;
}
let arrayEven=[99, 1, 2, 5, 7, 9, 10, 12, 999];
console.log(arrayEven)
console.log(onlyEven(arrayEven))

//Задание 7
console.log('')
console.log('Задание 7')

function pypamid(n) {
    if (n>9) {n=9}
    for(let i=1; i<=n; i++) {
        let b='';
        for (let j=0; j<i; j++) {
            if (arguments.length>1 && arguments[arguments.length-1]!=' ') {
                b+=String(arguments[arguments.length-1])
            } else  b+=i
        }
        console.log(b)
    }
}
pypamid(prompt('Задание 7. Введите число', 11))
console.log('')
pypamid(prompt('Задание 7. Введите число', 6), prompt('Задание 7. Введите символ', '*'))

//Задание 8
console.log('')
console.log('Задание 8')

function pypamidStar (h) {
    let str='*'
    let strN=' '
    for (let j=1; j<=h; j++) {
        let b = j
        b=strN.repeat(h-j)+str.repeat(j)+str.repeat(j-1)+strN.repeat(h-j)
        console.log(b)      
    }
}
pypamidStar(prompt('Задание 8. Высота пирамиды', 6))
console.log('')

function pypamidStarConv (h) {
    let str='*'
    let strN=' '
    for (let j=h; j>=1; j--) {
        let b = 1
        b=strN.repeat(h-j)+str.repeat(j)+str.repeat(j-1)+strN.repeat(h-j)
        console.log(b)   
    } 
}
pypamidStarConv(prompt('Задание 8. Высота пирамиды', 6))

//Задание 9 
console.log('')
console.log('Задание 9')

function numsFib(n) {
    let array = [1,1];
    for (let i=0; i <= n; i++) {
        if (i === array[array.length-1] + array[array.length-2]) {
            array.push(i)
        }
    }
    return array;
}
console.log(numsFib(1000))

//Задание 10
console.log('')
console.log('Задание 10')

function calcSum(num) {
    num=String(num)
    let sum=0
    for(let i=0; i<num.length; i++) {
        sum+= Number(num[i])
    } 
    if (sum>9) {
        calcSum(sum)
    } else console.log(sum)
} 
calcSum(prompt('Задание 10. Введите число', 234557))

//Задание 11
console.log('')
console.log('Задание 11')

function arrRec(array) {
    if (array.length>0) {
        console.log(array[0])
        array=array.splice(1, array.length-1)
        arrRec(array)
    }
}
arrRec([12, 23, 34, 45, 56])

//Задание 12
console.log('')
console.log('Задание 12')

function get_border (){
    let last_name = prompt('Задание 12. Введите фамилию', 'Иванов'),
    name = prompt('Задание 12. Введите имя', 'Иван'),
    second_name = prompt('Задание 12. Введите отчество', 'Иванович'),
    number = prompt('Задание 12. Номер группы', 'FE108');

    let str_1 = 'Домашняя работа: Функции',
        str_2 = 'Выполнил: студент гр. ' + number,
        str_3 = last_name + ' ' + name + ' ' + second_name;

    let gh=' ';
    let max_lenght = str_1.length;
        if (max_lenght < str_2.length) {
            max_lenght = str_2.length;
        } 
        if (max_lenght < str_3.length) {
            max_lenght = str_3.length;
        } 
    let border = new Array(max_lenght + 5).join('*');
        console.log(border);
        console.log('* ' + str_1 + gh.repeat(Number(max_lenght)-str_1.length)+' *');
        console.log('* ' + str_2 + gh.repeat(Number(max_lenght)-str_2.length)+' *');
        console.log('* ' + str_3 + gh.repeat(Number(max_lenght)-str_3.length)+' *');
        console.log(border);
}
get_border();
