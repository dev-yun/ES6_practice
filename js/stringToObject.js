const movieData = `Title,Release,Ticketing Rate,Director
보헤미안 랩소디,2018.10.31,11.5%,브라이언 싱어
완벽한 타인,2018.10.31,4.6%,이재규
동네사람들,2018.11.07,0.5%,임진순`

class HeaderListData {
    constructor(source, separator = ','){
        const rawData = source.split('\n');

        this.keys = rawData[0].split(separator);
        this.rows = rawData
                    .filter((row, index) => index > 0)
                    .map(row => row.split(separator));
    }

    row = index => this.rows[index]
        .map((row, index) => [this.keys[index], row]);

    get length (){
        return this.rows.length
    }

    get columnLength(){
        return this.keys.length;
    }
}

// 부모 클래스의 생성자를 사용
class MakeObject extends HeaderListData{
    toObject = index => this
        .row(index)
        .reduce((a, [key,value]) => ({...a, [key]: value}),{});

    toAllObject = () =>
        Array(this.length)
            .fill(0)
            .map((item, index) => this.toObject(index))
}


const movieList = new MakeObject(movieData);

console.log(movieList.toAllObject());