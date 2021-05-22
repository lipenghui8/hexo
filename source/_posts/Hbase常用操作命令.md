---
abbrlink: 63687
---
# （1）进入hbase shell
在启动HDFS和Hbase之后，在Linux客户端输入“hbase shell”命令将进入Hbase Shell。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182209742.png)
打开Hbase Shell之后，首先输入“help”命令，Hbase Shell会显示Hbase所提供的所有Shell命令。
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021051918222171.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xwaDE5MTIwODAxMjI=,size_16,color_FFFFFF,t_70)
# （2）创建、查看、删除命名空间
建立一个test的命名空间
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182240467.png)
可以通过如下describe命令来查看所建立的命名空间的详细信息
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182251272.png)
我们也可以通过如下命令来查看当前Hbase中所有的命名空间
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182302738.png)
通过如下命令来删除一个命名空间
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182314105.png)
# （3）创建、查看、删除表以及使表有效和无效
建立一个usr_beha表，有两个列族，一个是beha，一个是attr，具体的命令如下，创建表时至少有一个列族![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182333400.png)
输入list命令就可以看到如下信息，显示usr_beha表已经创建。List命令显示当前Hbase中所有的表的信息
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182344919.png)
输入describe ‘usr_beha’命令，就可以看到如下信息
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182400469.png)
describe命令用于显示一个表的结构与设置信息
可以让我们看到关于一个表的一些默认的设置
关于列族的属性信息我们也可以在创建表时通过以下方式进行明确的设置
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021051918241074.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182420180.png)
删除一个表使用drop命令，比如删除我们创建的usr_beha表，具体的命令格式如下：（需首先使用disable命令使该表失效）![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182436696.png)
在创建表时指定表所属的命名空间，则可以使用如下命令
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182447196.png)
查看一个命名空间下的所有表格信息，可以使用如下命令
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182458493.png)
# （4）添加、获取、删除单元格添中的数据
向表usr_beha中写入ID为38932423的用户张三的姓名
格式：put 表名，行键，列族，数据
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182518197.png)
通过如下命令来查看刚刚写入的数据：
格式：get 表名，行键，列族
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182530664.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182537646.png)

通过scan命令来查看整个表的信息
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182547161.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182554130.png)
删除上述单元格的数据，则可以使用delete命令
格式：delete 表名，行键，列族
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182607249.png)
# （5）修改表的结构
在刚创建的表usr_beha中添加一个新的列族ecf1：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182629759.png)
删除一个表中的列族
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182638764.png)
# （6）退出Hbase shell
退出Hbase Shell使用exit命令
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182700977.png)
# （7）查看Hbase集群的状态
使用status命令，并可以根据summary、simple和detailed这几个关键词来获取不同详细程度的状态信息![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182717781.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210519182722905.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xwaDE5MTIwODAxMjI=,size_16,color_FFFFFF,t_70)





