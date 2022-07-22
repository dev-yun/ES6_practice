// static : 정적인 상수를 설정, 인스턴스 객체를 만들때 인스턴스 객체에 포함되지 않는 속성
// readonly : 인스턴스 객체 외부에서 해당 값을 바꿀 수 없게 함
// private : 클래스 내부에서만 통용되고 외부에서 접근할 수는 없다.(getter, setter을 사용해서 값을 보거나 바꿀 수 있음(이때 방어코드가 필요함))
// abstract : 추상이라는 의미로 추상메서드를 사용하기 위해선 추상클래스로 정의해야한다. 
//            추상메서드는 이름과 타입만 지정하고 내용을 주지 않는다. 자식클래스는 이를 통해 실제 값을 형식에 맞게 넣어줘야한다.
// publice : 인스턴스 객체에 그대로 드러나서 인스턴스 객체를 이용해 접근 할 수 있다.
// protected : 외부에서 접근할 수 없지만 상속받은 자식 클래스에서는 접근할 수 있다.
// ! : 값을 세팅하지 않아도 된다.

abstract class Shape {
    public static MIN_BORDER_WIDTH = 0;
    public static MAX_BORDER_WIDTH = 30;

    public readonly name: string = 'Shape';
    protected _borderWidth: number;
    private action!: string;

    constructor(borderWidth: number =0){
        this._borderWidth = borderWidth;
    }

    abstract area: () => number;

    set borderWidth(width: number){
        if(width >= Shape.MIN_BORDER_WIDTH && width <= Shape.MAX_BORDER_WIDTH){
            this._borderWidth = width;
        } else {
            throw new Error('borderWidth 허용 범위를 벗어난 동작을 시도했습니다.');
        }
    }
    
    get borderWidth(): number{
        return this._borderWidth;
    }
}

// Circle은 Shape 클래스를 상속받는다.
// 기본적으로 자식 클래스와 부모 클래스에 속성이 겹치면 자식 클래스는 자신의 속성을 사용하고(오버라이드)
// 자식 클래스에 없고 부모 클래스에 있는 속성이 있다면 그 속성은 상속받아 사용한다. 
// area()는 부모클래스의 추상메서드를 실제 값을 넣어 구현한 것이다. (오버라이딩이 아님)
class Circle extends Shape{
    private _radius: number
    public name: string = 'Circle';


    constructor(radius: number){
        // 부모클래스가 있을 경우 생성자에서는 항상 super()을 호출해야한다.
        super();
        this._radius = radius;
    }

    get radius(){
        return this._radius;
    }
    
    area = () => this._radius * this._radius * Math.PI;
}

class Rect extends Shape {
    private _width: number;
    private _height: number;

    constructor(width: number, height:number){
        super();

        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    area = () => this._width * this._height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

console.log(rect.borderWidth);
console.log(rect.name);
console.log(circle.name);

try{
    rect.borderWidth = 10;
} catch(e){
    console.error(e);
}

// 클래스에 사용될 타입을 interface로 설정
interface Container {
    tagName: string;
    className: string;
    children?: string[];
    getTagName: () => string;
    getClassName: () => string;
}

// 클래스에서 type을 사용하기 위해선 :이 아닌 implements를 사용한다.
// 클래스는 interface에 명시된 타입에 맞춰 속성을 갖고 있어야 한다.
// private or protected로 정의된 속성은 타입에 기술하지 않는다.
class MyContainer implements Container{
    tagName: string;
    className: string;

    constructor(tagName:string, className:string){
        this.tagName = tagName;
        this.className = className;
    }

    getTagName = () => this.tagName;
    getClassName = () => this.className;
}

console.log('done');