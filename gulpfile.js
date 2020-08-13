// 怎么知道用户输入了什么命令？gulp dev 还是  gulp build
// console.log( process );// {...}
// console.log( process.argv[2] );// dev / build
const mode = process.argv[2];

// 根据输入的命令加载执行不同的配置文件
switch(mode){
  case 'dev':
    require('./gulpfile-dev');
    break;
  case 'build':
    require('./gulpfile-build');
    break;
}
