---
abbrlink: 23767
---
1.将安装包拖入到Linux虚拟机的桌面，然后进入桌面所在的文件路径，使用如下命令对Spark进行解压和重命名等操作
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210512131642384.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/2021051213165020.png)

2. 通过如下Linux命令进入Spark解压文件中的conf文件夹，并根据Spark自带的模板创建spark-env.sh配置文件

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210512131701736.png)
 3. 通过在Linux终端使用命令“vim spark-env.sh”修改配置文件spark-env.sh。在配置文件的空白处，添加如下内容,换成自己的路径
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210512131853188.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/20210512131857693.png)
4. 在spark-env.sh修改完成之后，我们进一步配置Spark的环境变量。使用如下命令打开当前用户根目录下的配置文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210512132029867.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/20210512132033891.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210512132037749.png)
5.在Linux终端通过如下命令来启动Spark，并查看Master和Worker进程是否启动
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210512132046748.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/20210512132053512.png)
