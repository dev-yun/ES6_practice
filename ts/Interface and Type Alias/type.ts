// type alias와 interface를 통해 type을 표현

// type alias와 interface의 차이
// 1. Type alias는 만약 같은 이름이 두개 선언되어 있다면 에러가 발생하지만
//   interface는 같은 이름이 두개 선언되면 합쳐진 하나의 타입으로 인식한다.(권장하진 않음)
// 2. Type alias는 &을 통해 상속을 받을 수 있고 interface는 extends를 통해 상속을 받을 수 있다.
// 3. Type alias는 유니온 타입을 사용할 수 있고 interface는 사용할 수 없다.

// type alias와 interface 중 어떤 것을 사용할지에 대한 기준(정해진 것은 아님)
// 데이터를 표현할때에는 type alias
// 데이터를 포괄하는 객체(메소드와 같은 구체적 행위를 포함)를 표현할 때는 인터페이스를 사용(클래스)

export type YesOrNo = 'Y' | 'N';
export type DayOfWeek = '월' | '화' | '수' | '목' | '금' | '토' | '일';
// enum은 실제 데이터를 만들어 사용
export enum DayOfTheWeek {'월', '화', '수', '목', '금', '토','일'};

export type Name = string;
export type Email = string;
export type FooFunction = () => string;

export interface IUser {
    readonly id : number;
    readonly name : Name;
    email: string;
    receiveInfo: boolean;
    active : YesOrNo; 
}

// ? 을 사용하여 속성을 정의하면 사용할 수도 있고 사용안할 수도 있다는 의미이다.
export interface IUser{
    address?: string;
}

export type TUser = {
    readonly id : number;
    readonly name : string;
    email: Email;
    receiveInfo : boolean;
    active : YesOrNo;
}

// type alias는 나눠쓰면 에러가 발생한다. interface만 가능
// export type TUser = {
//     address?: string;
// }

// extends를 통해 상속받는 방법
export interface IUserProfile extends IUser{
    profileImage: string;
    github?: string;
    twitter?: string;
}

// &를 통해 상속받는 방법
export type TUserProfile = IUser & {
    profileImage: string;
    github?: string;
    twitter?: string;
}

export interface Color {
    fontColor: string;
    strokeColor: string;
    borderColor: string;
    backgroundColor : string;
}

export type Display = {
    display: 'none' | 'block';
    visibility: boolean;
    opacity : number;
}

export type Geometry = {
    width:number;
    height:number;
    padding:number;
    margin:number;
}

export interface IStyle extends Color, Display, Geometry{
    tagName : string;
}

export type TStyle = Color & Display & Geometry & {
    tagName : string;
}

// 객체를 표현할때 key와 value를 string과 number로 타입을 지정하는 방식
export interface IOnlyNumberValueObject  {
    [key:string]:number;
}

export type TOnlyBooleanValueObject = {
    [prop:string]: boolean;
}

// 함수에 타입을 지정하는 방식으로 ()에는 매개변수와 타입이, <>에는 return값의 타입이 지정된다.
export interface IGetApi {
    (url:string, search?: string): Promise<string>
}

export type TGetApi = {
    (url:string, search?: string): Promise<string>
}

// 클래스의 타입을 지정하는 방법, 
// (타입은 기본적으로 public형식이기 때문에 클래스에서 private로 지정된 속성에는 타입을 지정할 수 없다,)
// 때문에 타입에 해당 속성을 지우거나 클래스의 해당 속성을 public으로 바꿔야한다.
export interface IRect {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
}

// 생성자를 호출할때 형식을 지정하는 방법
export interface IRectConstruct {
    new (x: number, y: number, width:number, height:number): IRect;
}


