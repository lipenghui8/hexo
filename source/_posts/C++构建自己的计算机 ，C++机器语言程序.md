---
abbrlink: 1290
---
## 写在前面

题目出自《c++大学教程第五版》
需要建立一个称为Simpletron的计算机，其中所有的信息都是由带符号的4位十进制数组成的“字”来助理，前两位是操作码，之后的两位是内存位置，需要将各操作码的功能实现，话不多说，直接上代码

## 源代码

```cpp
#include <iostream>
#include <iomanip>
#include <string>
#include <string.h>
using namespace std;
void pusherror();//抛出错误
void halt();//寄存器与内存信息
void start();//输出程序启动信息
void action(int,int,int);//执行各指令
void input();//输入指令字并提取信息
int memory[100];//内存
int acc=0;//累加寄存器，初始化为0
int counter;//下一个内存位置
int operand;//内存位置
int operationCode;//指令
string instructionRegister="+0000";//命令字

//主函数
int main()
{
    start();
    input();
    return 0;
}
void start() //输出开机内容
{
    cout << "*** Welcome to Simpletron! ***" << endl << "*** Please enter your program one instruction ***" << endl;
    cout << "*** (or data word) at a time.I will type the ***" << endl << "*** location number and a question mark(? ). ***<<endl";
    cout << "*** You then type the word for that location. ***" << endl << "*** Type the sentinel - 99999 to stop entering ***" << endl;
    cout << "*** your program. ***" << endl;
}
void pusherror()//打印错误信息
{
    cout << "*** Attempt to divide by zero ***" << endl;
    cout << "*** Simpletron execution abnormally terminated ***" << endl;
    halt();
    input();
}
void halt()//输出内存的全部内容
{
    string sp = "        ";
    cout << "REGISTERS" << endl;//输出各寄存器中的值
    cout << resetiosflags(ios::right);
    cout << setiosflags(ios::left) << setw(20) << "accumlator" << setiosflags(ios::right) << setw(6) << "+" << setw(4) << setfill('0') << acc << setfill(' ') << endl;
    cout << resetiosflags(ios::right) << setw(20) << "counter" << setiosflags(ios::right) << sp << setw(2) << setfill('0') << counter << setfill(' ') << endl;
    cout << resetiosflags(ios::right) << setw(20) << "instructionRegister" << setiosflags(ios::right) << setw(10) << instructionRegister << endl;
    cout << resetiosflags(ios::right) << setw(20) << "operationCode" << setiosflags(ios::right) << sp << setw(2) << setfill('0') << operationCode << setfill(' ') << endl;
    cout << resetiosflags(ios::right) << setw(20) << "operand" << setiosflags(ios::right) << sp << setw(2) << setfill('0') << operand << setfill(' ') << endl << endl;
    cout << "MEMORY:" << endl;
    cout << "  ";
    for (int i = 0; i < 10; i++) //输出内存中内容
    {
        cout << setiosflags(ios::right) << setw(6) << i;
    }
    cout << endl << " 0";
    int k = 0;
    for (int i = 0; i < 100; i++)
    {
        if (k > 0 && k % 10 == 0)
            cout << endl << setw(2) << setfill(' ') << k;
        cout << " +" << setw(4) << setfill('0') << memory[i];
        k++;
    }
    cout << endl;
    input();
}
void action(int op, int p, int n) //根据指令进行对应操作
{
    counter = p;
    operationCode = op;
    operand = p;
    if (n < -9999 || n>9999)
        pusherror();
    switch (op)
    {
    case 10: //从键盘中读入值到内存中指定位置
        memory[p] = n;
        input();
        break;
    case 11: //输出内存中指定位置的值
        cout << memory[p] << endl;
        input();
        break;
    case 20: //将内存中指定位置的值载入累加器
        acc = memory[p];
        input();
        break;
    case 21: //将累加器中的值存储在内存中指定位置
        memory[p] = acc;
        input();
        break;
    case 30: //累加器加值
        acc += memory[p];
        input();
        break;
    case 31: //累加器减值
        acc -= memory[p];
        input();
        break;
    case 32: //累加器除值
        if (memory[p] == 0)
            pusherror();
        acc /= memory[p];
        input();
        break;
    case 33: //累加器乘值
        acc *= memory[p];
        input();
        break;
    case 40: //转移到内存中特定位置
        memory[p] = acc;
        counter = operand;
        input();
        break;
    case 41: //累加器如为负，转移至内存
        if (acc < 0) {
            memory[p] = acc;
            acc = 0;
        }
        input();
        break;
    case 42: //累加器如为零，转移至内存
        if (acc == 0) {
            memory[p] = acc;
            acc = 0;
        }
        input();
        break;
    default://结束程序
        cout << "你的输入有误，请重新输入！" << endl;
        input();
    }
}
void input() //输入并提取有效信息
{
    cout << "? ";
    string in;
    getline(cin, in);
    if (in.compare("halt") != 0)
        instructionRegister.assign(in);
    string::size_type k = in.find('+');//查找输入项中的“+”号，判断输入是否符合语法
    string::size_type l = in.find("halt");
    if (l != string::npos)
        halt();
    else if (k == string::npos) {
        cout << "你的输入有误!请重新输入" << endl;
        input();
    }
    string order = in.substr(1, 2);//order是输入项中所含指令
    string x, n;
    x = in.substr(3, 2);//x为储存位置
    if (in.length() > 5)//获取操作数
        n = in.substr(5);
    else
        n = "0";
    int d = stoi(n);//将n,order转化为整数
    int c = stoi(x);//将内存位置转化为整数存储在count中
    int iorder = stoi(order);
    if (c < 0 || c>99)
        pusherror();
    if (iorder == 43) {
        cout << "*** Program end. ***" << endl;
        return;
    }
    action(iorder, c, d);
}
```
题目算法难度不大，需要多注意细节，不要掉坑哦
