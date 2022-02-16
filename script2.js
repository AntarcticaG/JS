// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
//     2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.


let basket = {
    tovars : [],
    countBasketPrice : function (tovars) {
        let sum_price = 0;
        for(let i in tovars)
        {
            sum_price+=(tovars[i].price * tovars[i].Count);
        }
        return sum_price;
    }
};
let name;
let i = 0;
name = prompt('введите название товара, для выхода написать нет');
while(name!='нет')
{
    let tovar = {
        id : 0,
        name : '',
        Count : 0,
        price : 0
    };
    tovar.id = i;
    tovar.name = name;
    tovar.Count = prompt('введите количество товара');
    tovar.price = prompt('введите цену товара');
    basket.tovars[i] = tovar;
    i++;
    name = prompt('введите название товара, для выхода написать нет');
}

console.log(basket);
alert('Общая стоимость' + basket.countBasketPrice(basket.tovars));