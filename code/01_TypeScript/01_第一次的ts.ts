(()=>{
    // str是string类型
    function sayHi(str:string){
        return '你好啊'+str
    }
    let text= '小甜甜'
    console.log(sayHi(text));
})()

//总结： html中直接引入ts 不被浏览器接受

//将ts转化成js 浏览器成功运行

//ts转js  去除了函数形参的类型， 将let转成var
