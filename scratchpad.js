/*
 * 这是一张 JavaScript 代码草稿纸。
 *
 * 输入一些 JavaScript，然后可点击右键或从“执行”菜单中选择：
 * 1. 运行 对选中的文本求值(eval) (Cmd-R)；
 * 2. 查看 对返回值使用对象查看器 (Cmd-I)；
 * 3. 显示 在选中内容后面以注释的形式插入返回的结果。 (Cmd-L)
 */

/*
 * 在2017年3月10日，开始看MDN，在此记录遇到看不懂的问题
 */

//01
/* 当你对一个 null 变量求值时，空值 null 在数值类型环境中会被当作0来对待，而布尔类型环境中会被当作 false。例如：
 *
 *  var n = null;
    typeof(n);
    // "object"
    // The Null type has exactly one value, called null.
    console.log(n * 32); // 0
 */

//02
/*将字符串转换为数字的另一种方法是使用单目加法运算符。
 *"1.1" + "1.1" = "1.11.1"
 *(+"1.1") + (+"1.1") = 2.2
 *
 */

//03
/*
使用默认参数，在函数体的检查就不再需要了。现在，你可以在函数头简单地把1设定为b的默认值：
function multiply(a, b = 1) {
  return a*b;
}

multiply(5); // 5
*/

//04
/*JSClock()函数返回了用数字时钟格式的时间：
*
function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = "" + ((hour > 12) ? hour - 12 : hour);
  if (hour == 0)
    temp = "12";
  temp += ((minute < 10) ? ":0" : ":") + minute;
  temp += ((second < 10) ? ":0" : ":") + second;
  temp += (hour >= 12) ? " P.M." : " A.M.";
  return temp;
}
*
*/

//05
/*一个let 可以发挥优势的典型例子就是之前讨论的for循环
*
for(let i=0; i<10; i++){
  console.log( i )
}
console.log(i);//ReferenceError

*
*/

//06 这段代码在运行时会以每秒一次的频率输出五次6.
/*
   for(var i = 0; i <=5; i ++){
      setTimeout(function timer() {
        console.log(i)
      },i*1000)
    }
*
*
*/
//07 这段代码输出 0～5
/*
*
for(var i = 0; i <=5; i ++){
      (function(j){
        setTimeout(function timer() {
          console.log(j)
        },j*1000)
      })(i)
    }

* 使用let
for(let i = 0; i <=5; i ++){
      setTimeout(function timer() {
          console.log(i)
        },i*1000)
    }


*
*／

/*
*
//比较思维模型
//类风格
    function Foo(who) {
      this.me = who;
    }
    Foo.prototype.identify = function () {
      return "I am " + this.me;
    };

    function Bar(who){
      Foo.call(this, who);
    }
    Bar.prototype = Object.create(Foo.prototype);

    Bar.prototype.speak = function () {
      alert("Hello," + this.identify() + ".");
    };

    var b1 = new Bar("b1");
    var b2 = new Bar("b2");

    b1.speak();
    b2.speak();

    //对象关联风格
    Foo = {
      init: function(who) {
        this.me = who;
      },
      identify: function (){
        return "I am" + this.me;
      }
    };
    Bar = Object.create(Foo);
    Bar.speak = function () {
      alert("Hello, " + this.identify() + "." );
    };

    var b1 = Object.create(Bar);
    b1.init('b1');
    var b2 = Object.create(Bar);
    b2.init('b2');

    b1.speak();
    b2.speak();


*
*/
/* 对象关联例子1
*
var Widget = {
      init: function (width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
      },
      insert: function ($where) {
        if(this.$elem) {
          this.$elem.css( {
            width: this.width + "px",
            height: this.height + "px"
          } ).appendTo( $where );
        }
      }
    };

    var Button = Object.create( Widget);

    Button.setup = function (width, height, label) {
      //
      this.init(width, height);
      this.label = label || "Default";

      this.$elem = $("<button>").text( this.label );
    };

    Button.build = function ($where) {
      this.insert( $where );
      this.$elem.click( this.onClick.bind( this ) );
    };

    Button.onClick = function (evt) {
      console.log( "Button '" + this.label + "' clicked!");
    };

    $(document).ready( function () {
      var $body = $( document.body );
      var btn1 = Object.create( Button );
      btn1.setup (125, 30, "Hello" );

      var btn2 = Object.create( Button );
      btn2.setup( 150, 40, "world" );

      btn1.build( $body );
      btn2.build( $body );
    })
*
*/

/*
*
JavaScript引擎内部的抽象操作ToPrimitive()有着这样的签名:

    ToPrimitive(input, PreferredType?)
可选参数PreferredType可以是Number或者String,它只代表了一个转换的偏好,转换结果不一定必须是这个参数所指的类型,
但转换结果一定是一个原始值.如果PreferredType被标志为Number,则会进行下面的操作来转换输入的值 (§9.1):

如果输入的值已经是个原始值,则直接返回它.
否则,如果输入的值是一个对象.则调用该对象的valueOf()方法.如果valueOf()方法的返回值是一个原始值,则返回这个原始值.
否则,调用这个对象的toString()方法.如果toString()方法的返回值是一个原始值,则返回这个原始值.
否则,抛出TypeError异常.
如果PreferredType被标志为String,则转换操作的第二步和第三步的顺序会调换.如果没有PreferredType这个参数,
则PreferredType的值会按照这样的规则来自动设置:Date类型的对象会被设置为String,其它类型的值会被设置为Number.

*
*/




/*
undefined
*/