// const nums =[13, 25, 75, 87];
// nums.map (num => num*2);
// nums.filter(num => num > 20);
// nums.find (num => num >23);
// const total = nums. reduce ((sum, num,) =>sum+num,10)
// console.log(total);
 const friends =[
     {name:'farhad',money: 10},
     {name:'rarhad',money: 20},
     {name:'darhad',money: 30},
     {name:'jarhad',money: 40}
    ];
     const total = friends.reduce ((sum,name)=>sum+name.money,0);
     console.log(total);
     