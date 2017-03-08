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