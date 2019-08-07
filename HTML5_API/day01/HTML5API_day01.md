*2019/07/31 学习HTML5API的第一天*


##### 媒体元素标签 audio和video

* 基本属性：
1. width,height 设置宽高，单位为像素
2. src 媒体地址
3. controls 控制条
4. autoplay 自动播放
5. poster 当视频不可用时，向用户展示一副替代用的图片
6. loop 是否循环
7. volume 音量，取值为`0~1`
8. muted 是否处于静音状态
9. type 媒体类型 MIME mp4- video/mp4
10. defaultPlaybackRate 默认播放速率
11. playbackRate 当前播放速率 >1快放 <1慢放
12. currentTime/duration 当前播放位置、总的播放时间

* 只读属性：
13. currentSrc 读取播放中的媒体数据的URL地址
14. readyState 准备状态
0 没有获取到媒体的任何信息
1 获取媒体数据无效，无法播放
2 当前帧已获得，但还未获取到下一帧数据
3 当前帧已获得，也获取到下一帧数据
4 当前帧已获得，也获取到了让播放器前进的数据

* 方法：
15. played、paused、ended 已经播放的时间段、是否暂停、是否播放完毕
16. play() 播放媒体，自动将元素的paused属性的值变为false
17. pause() 暂停播放，自动将元素的paused属性变为true
18. load() 重新载入媒体进行播放，自动将元素的playbackRate属性的值变为defaultPlaybackRate属性的值，自动将元素的error值变为null
19. canPlayType() 用来测试浏览器是否支持指定的媒体类型

* 事件
1. loadstart 浏览器开始在网上寻找媒体数据
2. progress 浏览器正在获取媒体数据
3. suspend 浏览器暂停获取媒体数据
4. abort 浏览器在下载完全部媒体数据之前中止获取媒体数据，非错误引起
5. error 获取媒体数据过程中出错
6. emptied 所在网络变未初始化状态
7. stalled 浏览器舱室获取媒体数据失败
8. play 即将开始播放
9. paused 播放暂停
10. loadedmetadata 浏览器已经获取完毕媒体时间长和字节数
11. loadeddata 浏览器已加载完毕当前播放位置的媒体数据，准备播放
12. waiting 播放过程中由于得不到下一帧而停止播放
13. playing 正在播放
14. canplay 正在播放，并且以当前播放速率能够将媒体播放完毕，需缓存
15. canplaythrough 浏览器可以播放媒体，并且以当前播放速率能够将媒体播放
完毕，无需缓存
16. seeking 请求数据，seeking属性为true 
17. seeked 停止请求数据，seeking属性为false 
18. timeupdate 当前播放位置改变
19. ended 播放结束
20. ratechange 播放速率改变
21. durationchange 播放时长改变
22. volumechange 音量改变