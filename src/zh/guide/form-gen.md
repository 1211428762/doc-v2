# 痛点

一般的 toB 系统，存在一定量的重复表单表格页面，当系统由多个人维护时可能会出现以下痛点：（仅针对重复性工作）

- 成员开发步调不一，同类型页代码风格不统一；
- 成员对表单的理解和使用方式不一致，且可能各自存在自用模板，内容不一，版本滞后，当互相维护彼此模块或代码审查时，存在一定理解和沟通成本。
- 重复性工作量大，耗时长，效率低
- 当想对系统进行改造，但由于缺乏统一的设计，无法实现改一处，改全套的效果。
- 重复页面，难以接入低代码工具

## 示例

以下提供思路，时代变迁，技术飞速发展，肯定存在更好的方案。
<br/>
工欲善其事必先利其器，简化重复性工作，保证质量和效率，同时挖掘拓展自我，是大多数行业的成长思路。
<br/>
当然市面上已经存在低代码工具，但由于有一点使用门槛，这个示例可以是低代码工具的入门工具，也可以方便后续升级拖拽式，作为过渡。
<br/>
在文本框内，输入表单表格配置项，点击生成，即可看到预览页和源代码。
受限于 vuepress，完整效果如图
<ClientOnly>
<codemaker/></ClientOnly>