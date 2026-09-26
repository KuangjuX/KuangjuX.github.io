#set page(paper: "a4", margin: (x: 1.2cm, y: 1.1cm))
#set text(font: "Noto Serif CJK SC", size: 10.5pt, lang: "zh")
#set par(justify: true, leading: 0.52em, spacing: 0.52em)
#show link: it => underline(offset: 1.6pt, stroke: 0.35pt, it)

#let github-mark = box(height: 0.82em, baseline: 0.12em, image(bytes("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='#000' d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z'/></svg>")))

#let icon-globe = box(height: 0.82em, baseline: 0.12em, image(bytes("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#000' stroke-width='1.2' d='M8 1.4a6.6 6.6 0 1 0 0 13.2A6.6 6.6 0 1 0 8 1.4z'/><path fill='none' stroke='#000' stroke-width='1.1' d='M1.5 8h13M8 1.4c-2.2 1.8-3.5 4.1-3.5 6.6S5.8 12.8 8 14.6c2.2-1.8 3.5-4.1 3.5-6.6S10.2 3.2 8 1.4z'/></svg>")))

#let icon-mail = box(height: 0.78em, baseline: 0.1em, image(bytes("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><rect x='1.4' y='3.2' width='13.2' height='9.6' rx='0.6' fill='none' stroke='#000' stroke-width='1.2'/><path d='M1.8 4.1 8 8.6l6.2-4.5' fill='none' stroke='#000' stroke-width='1.2'/></svg>")))

#let icon-linkedin = box(height: 0.82em, baseline: 0.12em, image(bytes("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><rect x='1.2' y='1.2' width='13.6' height='13.6' rx='1.2' fill='none' stroke='#000' stroke-width='1.2'/><path fill='#000' d='M4.7 6.4h1.7v5.5H4.7zm.85-2.7c.55 0 .99.4.99.95s-.44.96-.99.96-.98-.41-.98-.96.43-.95.98-.95zM7.6 6.4h1.62v.75h.02c.23-.43.78-.88 1.61-.88 1.72 0 2.04 1.13 2.04 2.6v3.03h-1.7V9.17c0-.78-.02-1.78-1.09-1.78-1.09 0-1.25.85-1.25 1.72v2.79H7.6z'/></svg>")))

#let githublink(url) = {
  h(0.15em)
  link(url, github-mark)
}

#let chiline() = {
  v(-0.12em)
  line(length: 100%, stroke: 0.65pt)
  v(0.22em)
}

#let section(title) = {
  v(0.42em)
  text(size: 12pt, weight: "bold")[#title]
  chiline()
}

#let dated-line(left-content, right-content, weight: "regular") = {
  grid(
    columns: (1fr, auto),
    column-gutter: 0.7em,
    align(top, text(weight: weight)[#left-content]),
    align(bottom + right, right-content),
  )
}

#align(center, text(size: 20pt, weight: "bold")[齐呈祥])

#v(0.38em)
#align(center)[
  #link("https://kuangjux.top/")[#icon-globe #h(0.12em)https://kuangjux.top/]
  #h(0.2em) · #h(0.2em)
  #link("mailto:kuangjux@outlook.com")[#icon-mail #h(0.12em)kuangjux\@outlook.com]
  #h(0.2em) · #h(0.2em)
  #link("https://github.com/KuangjuX")[#github-mark #h(0.12em)KuangjuX]
  #h(0.2em) · #h(0.2em)
  #link("https://www.linkedin.com/in/kuangjux/")[#icon-linkedin #h(0.12em)KuangjuX]
]

#v(0.42em)
#text(size: 12pt, weight: "bold")[技术方向：AI / 大模型基础设施、GPU Kernel、深度学习编译器、CUDA、Rust]

#section[教育经历]

#dated-line([中国科学院大学 · 杭州高等研究院], [2023年9月 - 2026年6月], weight: "bold")
#dated-line([工学硕士 · 计算机技术], [杭州 / 北京])

#v(0.22em)
#dated-line([天津大学 · 智能与计算学部], [2019年9月 - 2023年6月], weight: "bold")
#dated-line([工学学士 · 计算机科学与技术], [天津])

#section[工作与实习经历]

#dated-line([腾讯 · 微信事业群（WXG）], [2026年7月 - 至今], weight: "bold")
#dated-line([WeLM 团队 · 机器学习系统工程师], [北京])
- *稀疏 Attention 训练优化：*面向下一代大语言模型的长上下文训练，参与稀疏 Attention 计算模块的研发与性能优化，推进算子库建设、数值验证与性能评测，为后续训练系统集成提供支持。

#v(0.16em)
#dated-line([腾讯 · 微信事业群（WXG）], [2025年6月 - 2026年6月], weight: "bold")
#dated-line([WeLM 团队 · 机器学习系统实习生], [北京])
- *长上下文推理加速：*使用 CuTeDSL 实现 DuoAttention 并集成至 SGLang，在 16K 序列长度下取得 1.43 倍加速。
- *NVSHMEM：*结合 DeepEP 调研 NVSHMEM，实现 #link("https://github.com/KuangjuX/NVSHMEM-Tutorial")[NVSHMEM-Tutorial]#githublink("https://github.com/KuangjuX/NVSHMEM-Tutorial")，涵盖基于 CUDA IPC/RDMA 的混合通信，并进行组内技术分享。
- *分布式 Attention：*基于 ThunderKittens 的 LCF 模板实现 Ring Attention 前向计算，在短序列场景下性能优于 ring-flash-attention；实现 Flash Attention 反向计算并向开源社区提交 PR（\#134、\#135）；对 MagiAttention、ZigZag Ring Attention 和 ZigZag Flex Attention 开展系统的性能分析。
- *GPU 编程工具调研：*研究主流 DSL 在 NVIDIA Hopper 架构上的性能与兼容性。

#v(0.16em)
#dated-line([微软亚洲研究院（MSRA）], [2024年2月 - 2025年5月], weight: "bold")
#dated-line([系统与网络组 · 研究实习生；导师：曹莹 博士], [北京])
- 基于 FractalTensor 编程模型，使用 CUTLASS 实现并优化 *GEMM、Back-to-Back GEMMs、Stacked/Dilated LSTM、FlashAttention-2* 等算法。在 NVIDIA A100 上评测，相比 SOTA 实现最高取得 *5.45 倍加速*，平均加速 *2.14 倍*。
- 作为核心设计者与开发者，设计并实现高效的 *C++ 宏内核模板库 TileFusion*，提升 CUDA C 中 Tile 处理的抽象层次；结合 NVIDIA 硬件优化技术实现多种硬件感知算法，性能与 CUTLASS 相当。

#v(0.16em)
#dated-line([清华大学], [2023年5月 - 2023年8月], weight: "bold")
#dated-line([操作系统实验室 · 研究实习生；导师：贾越凯 博士], [北京])
- 使用 Apache HTTP Server、iperf 等工具开展网络性能基准测试，并开发专用工具评估网卡的 raw socket 发送与接收能力。修改网络协议栈及其与 Arceos 的接口以提升网络带宽；短消息延迟低于 Linux，长消息延迟较高，整体性能优于 Unikraft。
- 使用 *Rust* 实现 *Intel 82599 网卡驱动*，参考 DPDK 优化性能并以 crate 形式集成至 Arceos，在 AMD 平台上运行 httpserver、iperf、Redis 等应用。
- 基于 Arceos 开发可启动主线 Linux 的 *Type-2 Hypervisor*。

#section[论文发表]

- Siran Liu\*, *Chengxiang Qi*\*, Ying Cao, Chao Yang, Weifang Hu, Xuanhua Shi, Fan Yang, Mao Yang. Uncovering Nested Data Parallelism and Data Reuse in DNN Computation with FractalTensor. ACM Symposium on Operating Systems Principles（SOSP 2024，\*共同第一作者）


#pagebreak()

#section[项目经历]

#dated-line([TileFusion：C++ 宏内核模板库（275 Stars）], [2024年5月 - 至今], weight: "bold")
面向 CUDA C 中 Tile 处理抽象的实验性模板库。#githublink("https://github.com/microsoft/TileFusion")
- *架构设计：*作为核心设计者与开发者，从零构建模板库，采用自底向上的设计，以 BaseTile 为基础构建单元，提升 Tile 计算的抽象层次。
- *底层优化：*实现全局内存合并访问、Swizzle 等优化，封装 PTX 指令，无需依赖外部库。
- *算法实现：*支持便捷实现 FlashAttention、FlashDecoding 等硬件感知算法，取得与 CUTLASS 相当的性能。

#v(0.35em)
#dated-line([FractalTensor：深度神经网络数据组织与优化框架], [2024年1月 - 2024年7月], weight: "bold")
面向深度神经网络新型数据组织方式的优化框架。#githublink("https://github.com/microsoft/FractalTensor")
- *计算实现：*基于 FractalTensor 的上层架构与编程模型，使用 CUTLASS 3.0（CuTe）实现并优化 GEMM、Back-to-Back GEMMs、RNN、FlashAttention-2 等模型与算法。
- *性能与论文：*相比 SOTA 实现平均取得 2.14 倍加速，项目论文发表于 SOSP 2024（CCF-A）。

#v(0.35em)
#dated-line([Unikernel 虚拟化支持与网络优化（653 Stars）], [2023年5月 - 2023年8月], weight: "bold")
围绕 Arceos 开展虚拟化支持、网卡驱动开发与网络性能优化。#githublink("https://github.com/arceos-org/arceos")
- *虚拟化与中断：*将 hypercraft 集成至 Arceos，使其能够作为 Type-2 VMM 启动；为 Arceos 添加中断支持，实现基于 virtio-net、virtio-blk 的 I/O 中断。
- *驱动与网络：*开发 ixgbe 网卡驱动，同时在驱动层与网络协议栈层面开展性能优化。

#v(0.35em)
#dated-line([基于 RISC-V 的 Type-1 / Type-2 Hypervisor（155 Stars）], [2023年1月 - 2023年5月], weight: "bold")
使用 Rust 实现 hypocaust、hypocaust-2、hypercraft 三个 RISC-V Hypervisor。#githublink("https://github.com/KuangjuX/hypercraft")
- *hypocaust：*采用 S-mode 陷入模拟，实现影子页表与 PLIC 模拟，支持启动 rCore-Tutorial-v3。
- *hypocaust-2：*利用 RISC-V H 扩展实现硬件辅助虚拟化，支持两阶段页表映射与中断注入，可运行 rCore-Tutorial-v3、RT-Thread 和主线 Linux。
- *hypercraft：*参考 KVM 与 Zircon 的设计，将其扩展为可复用的操作系统组件（Type-2 Hypervisor），支持启动主线 Linux。

#v(0.35em)
#dated-line([使用 Rust 实现类 Unix 操作系统（341 Stars）], [2021年3月 - 2022年1月], weight: "bold")
使用 Rust 重新实现 MIT xv6-riscv。#githublink("https://github.com/KuangjuX/xv6-rust")
- *内存与文件系统：*将原有内存分配器替换为伙伴分配器，重新设计并优化文件系统，性能优于官方 xv6-riscv。
- *同步机制：*将 SpinLock/SleepLock 重构为具有 RAII 特性的智能指针。
