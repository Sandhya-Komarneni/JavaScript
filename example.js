class Visitor
{
    constructor(name)
    {
        this.name=name;
    }
    introduce()
    {
        console.log(`My name is ${this.name} and I'm a visitor`);
    }
}
let visitor=new Visitor("Jeff");
visitor.introduce();