# Writing PDFs

- `msa-blog/` → `msa-blog.pdf`：《逐 Query Sparse Attention Kernel 的设计取舍》，作者齐呈祥。正文、公式、图注、表格及 14 条参考文献与 2026-10-07 已发布知乎文章对齐；保留原文图号 1、2、3、5、6、7、8。采用单栏技术文章排版，示意图为 TikZ 矢量图，实测图使用原始 PDF。原文：https://zhuanlan.zhihu.com/p/2090552659241591553 。
- `gemm-memory.tex`: 将《关于 Bank Conflict 与 Swizzle》和《GEMM 内存拷贝全流程分析（一）》整合为一篇文章，正文与校注保持完整，仅统一标题层级和前后文衔接。Bank Conflict 使用 TikZ 矢量图，Padding 与 Swizzle 使用新的高精度技术示意图，其余图片使用局部修复后的无水印版本。
- `fantasy-and-illness.tex`: 小说排版；正文独立保存在 `fantasy-and-illness.txt`，保持五节原文不变。
- `figures/sources.json`: 技术原文插图的来源地址。网站只发布重绘或局部修复后的 PNG，不发布带平台水印的原始 JPG。

小说原文：https://zhuanlan.zhihu.com/p/2065084103536407042 。2026-09-29 从公开正文提取，共 159 段、11,783 个字符（段间两个换行，忽略末尾换行），FNV-1a UTF-16 校验值 `b59e34d6`。

## Rebuild

使用 Tectonic 编译 LaTeX。中文技术稿采用论文式 A4 排版，小说采用书籍式 A5 页面。Bank Conflict 由 TikZ 绘制，Padding/Swizzle 使用新绘制的技术示意图；其他图片仅修复水印区域，不改变技术内容。

```sh
brew install tectonic
python3 scripts/build-writing-pdfs.py
node scripts/build-home.mjs
node scripts/build-home.mjs --check
python3 scripts/check-site.py
```

仅重建稀疏 Attention 文章：`python3 scripts/build-writing-pdfs.py --only msa-blog`。

生成结果同时写入 `output/pdf/`（本地产物）和本目录（网站公开文件）。PDF 更新后应重新生成双语首页以更新资源版本号，并使用 `pdftoppm` 检查所有页面。

技术整理版中的代码是讲解用片段，本次未运行 GPU 性能测试。正文参考文献列出技术核对来源及原文图源。
