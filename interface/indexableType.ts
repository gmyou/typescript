class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}
// Error: "문자열"로 색인을 생성하면 가끔 "Dog"가 생깁니다.
interface NotOkay {
    [x: string]: Animal;
    [x: number]: Dog;
}