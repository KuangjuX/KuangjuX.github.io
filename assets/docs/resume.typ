#set page(paper: "a4", margin: (x: 1.0cm, y: 0.95cm))
#set text(font: "Noto Serif CJK SC", size: 10pt, lang: "en")
#set par(justify: true, leading: 0.48em, spacing: 0.48em)
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

#align(center, text(size: 20pt, weight: "bold")[CHENGXIANG QI])

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
#text(size: 14pt, weight: "bold")[Keywords: AI Infra, LLM Infra, GPU Kernel, DL Compiler, CUDA, Rust.]

#section[Education]

#dated-line([University of Chinese Academy of Sciences, Hangzhou Institute for Advanced Study], [Sep 2023 -- Jun 2026], weight: "bold")
#dated-line([Master of Computer Technology], [Hangzhou | Beijing])

#v(0.22em)
#dated-line([College of Intelligence and Computing, Tianjin University], [Sep 2019 -- Jun 2023], weight: "bold")
#dated-line([Bachelor of Computer Science and Technology], [Tianjin])

#section[Professional Experience]

#dated-line([Weixin Group (WXG), Tencent.], [Jul 2026 -- Present], weight: "bold")
#dated-line([WeLM Team], [Beijing])
- Working on *training*, *inference*, and *GPU kernel infrastructure* for large language models, including kernel optimization, serving systems, and the distributed training / inference stack.

#v(0.16em)
#dated-line([Weixin Group (WXG), Tencent.], [Jun 2025 -- Jun 2026], weight: "bold")
#dated-line([WeLM Team], [Beijing])
- *Long-context inference acceleration:* Implemented DuoAttention with CuteDSL and integrated it into SGLang, achieving a 1.43x performance improvement for sequence length of 16K.
- *NVSHMEM:* Conducted research on NVSHMEM combined with DeepEP, and implemented #link("https://github.com/KuangjuX/NVSHMEM-Tutorial")[NVSHMEM-Tutorial]#githublink("https://github.com/KuangjuX/NVSHMEM-Tutorial"), including hybrid communication based on CUDA IPC/RDMA for internal team technical sharing.
- *Distributed Attention:* Implemented Ring Attention Forward with LCF template based on ThunderKittens, outperforming ring-flash-attention on short sequences; Implemented Flash Attention Backward with LCF and submitted PRs (\#134, \#135) to the open-source community; Conducted comprehensive performance analysis for MagiAttention, ZigZag Ring Attention and ZigZag Flex Attention.
- *Other:* Investigated the performance and compatibility of mainstream DSLs on NVIDIA Hopper architecture.

#v(0.16em)
#dated-line([Microsoft Research Asia (MSRA)], [Feb 2024 -- May 2025], weight: "bold")
#dated-line([System Research Group, Mentor: Ying Cao], [Beijing])
- Based on the FractalTensor programming model, implemented and optimized algorithms including *GEMM, Back-to-Back GEMMs, Stacked/Dilated LSTM, FlashAttention-2* with CUTLASS. Conducted performance evaluation on NVIDIA A100, achieving up to 5.45x speedup and an average 2.14x speedup compared with SOTA implementations.
- As the core designer and developer, designed and implemented TileFusion, an efficient *C++ macro kernel* template library to elevate the abstraction level of tile processing in CUDA C. Implemented various hardware-aware algorithms with NVIDIA hardware optimization techniques, and TileFusion currently achieves comparable performance with CUTLASS.

#v(0.16em)
#dated-line([Tsinghua University], [May 2023 -- Aug 2023], weight: "bold")
#dated-line([Operating System Laboratory, Mentor: Yuekai Jia], [Beijing])
- Conducted network performance benchmarking with Apache Http Server, iperf and other tools, and developed a benchmark tool to evaluate the raw socket transmission and reception capabilities of network interface cards (NICs). Modified the network protocol stack and its interface with Arceos to enhance network bandwidth. Achieved lower latency than Linux for short messages (higher for long messages), and outperformed Unikraft in overall performance metrics.
- Implemented the Intel 82599 NIC driver in Rust, optimized performance with DPDK reference, and integrated it into Arceos as a crate. Successfully deployed real-world applications (httpserver, iperf, Redis) on AMD platforms.
- Developed a Type-2 Hypervisor based on Arceos that is capable of booting mainline Linux.

#section[Publications]

- Siran Liu\*, *Chengxiang Qi*\*, Ying Cao, Chao Yang, Weifang Hu, Xuanhua Shi, Fan Yang, Mao Yang. Uncovering Nested Data Parallelism and Data Reuse in DNN Computation with FractalTensor. In Proceedings of the 32nd ACM Symposium on Operating Systems Principles (SOSP 2024) (\* Equal Contribution)

#pagebreak()

#section[Projects]

#dated-line([TileFusion: An Experimental C++ Macro Kernel Template Library for Elevating Tile Processing Abstraction in CUDA C (275 Stars)], [May 2024 -- Present], weight: "bold")
- Core designer and developer, built the library from scratch with BaseTile as the fundamental building block (bottom-up design). Implemented optimizations including *global memory coalescing* and *Swizzle*, encapsulated PTX instructions without external library dependencies; Enabled easy implementation of various hardware-aware algorithms (e.g., *FlashAttention/FlashDecoding*) with TileFusion, achieving performance comparable to CUTLASS. #githublink("https://github.com/microsoft/TileFusion")

#v(0.18em)
#dated-line([FractalTensor: An Optimization Framework for Novel Data Organization in Deep Neural Networks], [Jan 2024 -- Jul 2024], weight: "bold")
- Based on the FractalTensor upper-layer architecture and programming model, implemented and optimized multiple models and algorithms (GEMM, Back-to-Back GEMMs, RNN, FlashAttention-2) with *CUTLASS 3.0 (CuTe)*, achieving an average 2.14x speedup over SOTA. The project's paper was accepted by SOSP 2024 (CCF-A). #githublink("https://github.com/microsoft/FractalTensor")

#v(0.18em)
#dated-line([Unikernel Virtualization Support, Network Driver Development & Network Performance Optimization (653 Stars)], [May 2023 -- Aug 2023], weight: "bold")
- Integrated *hypercraft* into Arceos to enable booting as a *Type-2 VMM*; Added interrupt support to Arceos and implemented IO interrupts based on *virtio-net* and *virtio-blk*; Developed ixgbe NIC driver for Arceos with performance optimizations at both driver and network stack layers. #githublink("https://github.com/arceos-org/arceos")

#v(0.18em)
#dated-line([Type-1 & Type-2 Hypervisor Implementation Based on RISC-V (155 Stars)], [Jan 2023 -- May 2023], weight: "bold")
- Implemented three RISC-V based hypervisors (hypocaust, hypocaust-2, hypercraft) in Rust: hypocaust adopted *S-mode trap emulation* with shadow page table and PLIC emulation, supporting rCore-Tutorial-v3 boot; hypocaust-2 leveraged *H-extension* with two-stage page table mapping and interrupt injection, compatible with rCore-Tutorial-v3, RT-Thread and mainline Linux; hypercraft was extended as a reusable OS component (Type-2 hypervisor) referring to KVM and Zicron designs, supporting mainline Linux boot. #githublink("https://github.com/KuangjuX/hypercraft")

#v(0.18em)
#dated-line([Unix-like Operating System Implemented in Rust (341 Stars)], [Mar 2021 -- Jan 2022], weight: "bold")
- Reimplemented MIT xv6-riscv in Rust; Replaced the original memory allocator with a buddy memory allocator and redesigned/optimized the file system for superior performance over the official xv6-riscv; Redesigned SpinLock/SleepLock as smart pointers with RAII features. #githublink("https://github.com/KuangjuX/xv6-rust")
