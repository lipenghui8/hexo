---
abbrlink: 25818
---
# Spark概述
Spark由AMP实验室与2009年开发，有以下四个特点：
- 运行速度快
使用有向无环图（DAG）执行引擎，基于内存速度比Hadoop 快百倍，基于磁盘速度快10倍
- 容易使用
支持Scala、Java、Python、R
- 通用性
提供强大完整的技术栈：SQL查询、流式计算、机器学习、图算法等
- 运行模式多样
# Scala简介
一门现代的多范式编程语言，运行于JVM，兼容Java
具有以下优点：
-	强大的并发性，支持函数式编程，更好支持分布式系统
-	语法简洁，API易用
-	兼容Java，速度快，融入到Hadoop生态圈
# Spark与Hadoop的对比
Hadoop的缺点：表达能力有限、磁盘IO开销大、延迟高

Spark的优点：编程模型更灵活、更高的迭代运算效率、基于DAG的任务调度执行机制、更有的迭代执行机制

Spark生态系统：Spark Core、Spark SQL、MLlib、GraphX
# Spark运行架构
## 基本概念
-	RDD：弹性分布式数据集，提供一种高度受限的共享内存模型
-	DAG：有向无环图，反映RDD之间的依赖关系
-	Executor:运行在工作节点（Worker Node）的一个进程，运行任务并存储数据
## 架构设计
Spark包括集群资源管理器、工作节点、任务控制节点、执行进程，关系如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210512132621907.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xwaDE5MTIwODAxMjI=,size_16,color_FFFFFF,t_70)
Executor的优点：利用多线程执行任务，减少启动开销；包含BlockManager存储模块，将内存和磁盘共同作为存储设备，减少IO开销
## Spark运行基本流程
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021051213265155.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xwaDE5MTIwODAxMjI=,size_16,color_FFFFFF,t_70)
## RDD的设计与运行原理
### RDD概念
弹性分布式数据集，Spark所定义的一种抽象数据类型，是对Spark中的一个只读数据集合的逻辑描述

分装了Spark数据集合的分区列表、分区在集群中的位置、与其他RDD的衍生关系及对数据集合的相关操作，但不包含数据集合的具体数据。

只能通过来自HDFS、Hbase等数据源的数据进行创建或通过对其他RDD计算得到
### RDD主要属性
#### 1.数据的分区列表
每个分区对应集群中的一个物理数据块，可以由一个单独的节点进行处理，分区是Spark计算的基本单元，分区的大小决定了Spark的计算粒度。

用户可在创建RDD时指定RDD的分区个数，默认为程序所分配到的CPU Core的数目。
####  2.计算每个分区的函数
RDD只能通过数据源创建或通过其他RDD转换的到
计算函数记录了RDD在转换过程中对父RDD所做的操作

如果RDD是通过已有的文件系统构建，则计算函数读取指定文件系统中的数据
#### 3.与其他RDD之间的依赖
RDD每次转换会生成一个新的RDD，RDD之间的关系类似于流水线的前后衍生血缘关系

RDD通过记录自己与其他RDD之间的血缘依赖关系，在部分数据丢失时，可以通过重新计算来回复丢失的分区

#### 4.优先列表位置
记录了每个分区的优先位置
通过HDFS的数据来建立RDD时，这个列表保存的就是每个分区对应的数据块的位置
移动数据不如移动计算，Spark进行任务调度时，会尽可能将计算任务分配到所要处理的数据块的存储位置
#### 5.分区策略
RDD的分区函数
分区函数决定RDD分区的个数
#### 6.RDD的两类操作
-	转换操作
由一个RDD经过操作得到一个新的RDD
转换操作在Spark中都是惰性的，Spark遇到这类操作时不会立即执行
新生成的RDD会记录转换的相关信息。
-	动作操作
动作操作一般用于向Driver进程返回结果或者写入结果到文件中。这些操作都封装在RDD抽象数据类型中，可以通过RDD对象的方法调用来使用这些方法。
会触发一次Spark中一次Job作业的提交。
Spark会根据前面记住的RDD转换过程及RDD之间的衍生关系，建立RDD有向无环图DAG，然后将DAG划分为不同的阶段，产生具体的任务集合，建立RDD有向无环图DAG，然后将DAG划分为不同的阶段，产生具体的任务集合，并将具体的任务分发给不同的Executor去执行。
#### 6.RDD的常见转换操作
Map操作：将输入的RDD中的每个元素，根据map函数中传递进来的func函数进行处理，输入的RDD有多少个分区，输出RDD也有多少个分区。

flatMap操作：根据传递的func函数对输入RDD的每个元素进行处理。需要将各个元素的处理结果进行扁平化处理，即将各个元素的处理结果合并成一个集合。

Union操作：将两个RDD中的元素进行合并，形成一个新的RDD，要求进行合并操作的两个RDD中元素的数据类型相同。

fliter操作：根据传递进来的func函数对输入RDD中的数据进行过滤。传递进来的func函数的输出值为true或者false的布尔值。应用输入函数对输入RDD中的每个元素进行处理，结果为true的元素将被保留

distinct操作：将输入RDD中的元素进行去重处理，也就是将输入RDD中重复的元素去除。

groupByKey操作：groupByKey操作要求输入的RDD中的元素是<key, value>形式的数据，该操作将输入RDD中key相同的元素合并成一个<key, Iterable<value1, value2,value3>>形式的元素。

reduceByKey(func)操作： 要求输RDD中的元素具有<key, value>的形式。将输入RDD中具有相同key的元素的value值根据传递进来的func函数进行聚合处理。

Join操作：要求当前RDD和通过参数输入的RDD都是<key, value>形式的数据集合，将两个RDD下相同key值对应的value值聚合为一个集合。

持久化操作：通过持久化操作来保存中间操作的结果，持久化操作的具体操作函数有两个：persist和cache。

Reduce操作：当前RDD的元素从左至右根据传递进来的func函数进行两两运算，并将计算结果与RDD中的下一个元素进行相同的计算，直到遍历完RDD的所有元素。

Spark的map操作与MapReduce的map操作相同，但是Spark的reduce操作与MapReduce的reduce操作不同。
 
#### 7.RDD的依赖关系
RDD操作中原RDD与目标RDD之间的父子血缘关系关系称为RDD之间的依赖关系。
RDD操作中原RDD与目标RDD之间的父子血缘关系关系称为RDD之间的依赖关系。
-	窄依赖
父RDD的每一个分区最多被一个子RDD的分区所用。
一个父RDD的一个分区不可能对应一个子RDD的多个分区
 - 宽依赖
子RDD的分区依赖于父RDD的多个分区或所有分区。
存在一个父RDD的一个分区对应一个子RDD的多个分区
#### 8.RDD的容错机制：
-	对于窄依赖来讲，在恢复子RDD中某个丢失的分区时，只需要找到其父RDD的对应分区，然后根据子RDD中记录的操作重新进行计算即可。
-	而对于宽依赖来说，恢复子RDD分区的容错处理机制则将重新计算父RDD的所有分区数据，相对于窄依赖中的容错处理过程来说将会产生冗余计算。



