box.onclick = ()=>{
  console.log('BMW');
};
console.log('b.js文件执行');
class Cat{
  constructor(n){
    this.name = n;
  }
  skill(){
    console.log('抓老鼠');
  }
}
let cat1 = new Cat('小白');
cat1.skill();