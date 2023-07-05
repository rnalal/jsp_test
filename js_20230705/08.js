/*
    상속 : inheritance  <-- extends(extension) -- 확장

    parent class - child class
    super  class - sub   class
    base   class - derived class
*/
class Animal{
    constructor(name){
        this.name = name;
    }
    sound(){
        console.log(`${this.name} 동물이 소리를 냅니다`)
    }
}

class Dog extends Animal{
    run(){
        console.log(`${this.name} 이(가) 뛰어갑니다`);
    }
}

class Cat extends Animal{
    jump(){
        console.log(`${this.name} 이(가) 점프합니다`);
    }
}

class Dog2 extends Animal{
    // 부모로 부터 상속받은 바디부분을 자신에 맞게 바꾸는 것(중괄호 속의 내용을 바꾸는 것) - 오버라이딩
    // overriding
    sound(){
        console.log(`${this.name} 이(가) 소리를 냅니다 - 멍멍`)
    }
    run(){
        console.log(`${this.name} 이(가) 뛰어갑니다`);
    }
}

class Cat2 extends Animal{
    sound(){
        console.log(`${this.name} 이(가) 소리를 냅니다 - 야옹`)
    }
    jump(){
        console.log(`${this.name} 이(가) 점프합니다`);
    }
}

const a1 = new Animal('귀여운');
a1.sound();

const d1 = new Dog('강아지');
d1.run();
d1.sound();

const c1 = new Cat('고양이');
c1.jump();
c1.sound();

console.log('-----------------------------------------------')

const d2 = new Dog('강아지2');
d2.run();
d2.sound();

const c2 = new Cat('고양이2');
c2.jump();
c2.sound();