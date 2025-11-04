const color = "\x1b[1;35m";
const underline = "\x1b[94;4m";
const normal = "\x1b[0m";
export const introMessage = [
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"|                                                                             |",
	"| WebVM是一个通过WebAssembly在浏览器中运行的虚拟Linux环境                        |",
	"|                                                                             |",
	"| WebVM由CheerpX虚拟化引擎提供支持，可实现安全、沙箱化的客户端x86二进制执行        |",
	"| 完全在客户端运行                                                             |",
	"|                                                                             |",
	"| CheerpX包含x86到WebAssembly的JIT编译器、虚拟块级文件系统和Linux系统调用模拟器   |",
	"|                                                                             |",
	"| 尝试新的Alpine/Xorg/i3版本WebVM: " + underline + "https://webvm.io/alpine.html" + normal + "      |",
	"|                                                                             |",
	"|  Supermini233(huang233893) 汉化  加载需要2-5分钟，如加载不出来请刷新或者挂代理  |",
	"|                                                                             |",
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"",
	"   欢迎使用WebVM。如果不确定如何操作，可以尝试以下示例：",
	"",
	"     python3 examples/python3/fibonacci.py ",
	"     gcc -o helloworld examples/c/helloworld.c && ./helloworld",
	"     objdump -d ./helloworld | less -M",
	"     vim examples/c/helloworld.c",
	"     curl --max-time 15 parrot.live  # 需要网络支持",
	""
];
export const errorMessage = [
	color + "CheerpX无法启动" + normal,
	"",
	"查看开发者工具控制台获取更多信息",
	"",
	"CheerpX兼容最新版本的Chrome、Edge、Firefox和Safari桌面浏览器",
	"",
	"请尝试使用桌面版浏览器或其他浏览器！",
	"",
	"CheerpX内部错误信息：",
	""
];
export const unexpectedErrorMessage = [
	color + "WebVM遇到意外错误" + normal,
	"",
	"查看开发者工具控制台获取更多信息",
	"",
	"请考虑报告此问题！",
	"",
	"CheerpX内部错误信息：",
	""
];
