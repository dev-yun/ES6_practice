// 함수를 통해 instance 객체를 만드는 방법
// 생성자 함수는 항상 앞글자를 대문자로 해야한다.(문법적인 개념은 아님, 컨벤션일뿐)
// 일반함수와 구분이 가지 않을 경우 new를 사용하지 않고 호출될 경우가 발생하는데
// 이때 new를 통한 빈 객체가 생성되지 않으므로 this는 실행컨텍스트상 전역객체를 가리키게되고 전혀 엉뚱한 코드가 실행된다.
// 때문에 제일 앞글자를 대문자로 명시함으로써 이 함수는 생성자 함수야 new를 사용해서 호출해! 라는 의미를 갖는 것 이다.
function CartV1(){
    this.cart = [];
    this.currentId = 0;
}

// prototype에 getNewId 메서드를 추가한다.
// prototype에 넣으면 instance 객체에 직접 드러난다.
CartV1.prototype.getNewId = function(){
    this.currentId++;
    return this.currentId;
}

// CartV1 함수 자체에 createItem 함수를 추가한다. 
// 생성자 함수 자체에 넣음으로써 instance 객체에 드러나지 않는다.
CartV1.createItem = function(name, price){
    return {name,price}
}

CartV1.prototype.addItem = function(item){
    this.cart.push({
        ...item,
        id: this.getNewId(),
    });
};

CartV1.prototype.clearCart = function(item){
    this.cart = [];
    this.currentId = 0;
};

const shoppingCartV1 = new CartV1();

shoppingCartV1.addItem(CartV1.createItem('수박', 8000));
shoppingCartV1.addItem(CartV1.createItem('사과', 12000));
shoppingCartV1.addItem(CartV1.createItem('두부', 2000));

console.log(shoppingCartV1.cart);


// 클래스를 이용하여 instance 객체를 생성하는 방법
// prototype으로 저장하던 메서드들을 모두 클래스 내부로 옮김으로써 더 직관적인 코드를 작성
// static으로 createItem 함수를 지정함으로써 instance 객체에서 접근하지 않도록 함
class CartV2 {
    static createItem = (name, price) => ({
        name, price
    });

    cart;
    currentId;

    constructor(){
        this.currentId = 0;
        this.cart = [];
    }

    getNewId = () => {
        this.currentId++;
        return this.currentId;
    }

    addItem = item => {
        this.cart.push({
            ...item,
            id: this.getNewId(),
        });
    }

    clearCart = () =>{
        this.currentId = 0;
        this.cart = [];
    }
}

const shoppingCartV2 = new CartV2();

shoppingCartV2.addItem(CartV2.createItem('수박', 8000));
shoppingCartV2.addItem(CartV2.createItem('사과', 12000));
shoppingCartV2.addItem(CartV2.createItem('두부', 2000));

console.log(shoppingCartV2.cart);