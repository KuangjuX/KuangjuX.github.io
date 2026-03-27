const portfolioData = {
    en: {
        profile: {
            name: "ChengXiang Qi (齐呈祥)",
            title: "Master Student, System Researcher",
            avatar: "assets/images/avatar-nvidia.jpg",
            description: `Hi, my name is Chengxiang Qi. I am currently a final-year master student 
                in computer science at the University of Chinese Academy of Sciences. I completed my 
                undergraduate studies at Tianjin University. My current interests are in deep learning 
                compilers, machine learning systems, and deep learning. In the past, I have also been 
                interested in the Rust programming language and its applications at the system level 
                (OS, Hypervisor, etc.).`,
            email: "kuangjux@outlook.com",
            github: "https://github.com/kuangjux",
            linkedin: "https://www.linkedin.com/in/kuangjux/",
            zhihu: "https://www.zhihu.com/people/qi-cheng-xiang-59",
            scholar: "https://scholar.google.com/citations?user=LpNRr3gAAAAJ&hl=zh-CN",
            orcid: "https://orcid.org/0009-0008-0881-9500",
            xiaohongshu: "https://www.xiaohongshu.com/user/profile/64343bb1000000000e01c5ad",
            cv: "assets/docs/resume.pdf"
        },

        education: [
            {
                degree: "Master of Engineering in Computer Technology",
                institution: "University of Chinese Academy of Sciences",
                date: "Sep. 2023 - Present",
                description: `Focus on <strong>deep learning compilers</strong> and <strong>machine learning systems</strong>.`
            },
            {
                degree: "Bachelor of Engineering in Computer Science and Technology",
                institution: "Tianjin University",
                date: "Sep. 2019 - June 2023",
                description: `Graduated with <strong>Outstanding Thesis Award</strong>. 
                    <br>Thesis: <em>基于 RISC-V 的 Type-1 Hypervisor 的设计与实现</em>`
            }
        ],

        experiences: [
            {
                title: "Machine Learning System Intern",
                company: "Wechat",
                date: "June. 2025 - Present",
                description: `
                <ul>
                    <li>
                        <strong>Light-DuoAttention:</strong> Implemented <a href="https://github.com/KuangjuX/light-duoattention" target="_blank">Light-DuoAttention</a> using CuTeDSL, achieving efficient long context inference 
                        and runs within SGLang.
                    </li>
                    <li>
                        <strong>NVSHMEM:</strong> Explored NVSHMEM and DeepEP and implemented the 
                        <a href="https://github.com/KuangjuX/NVSHMEM-Tutorial" target="_blank">NVSHMEM-Tutorial</a>, including hybrid communication based on CUDA IPC/RDMA, for technical sharing within the group.
                    </li>
                    <li>
                        <strong>Distributed Attention:</strong> Implemented Ring Attention Forward based on 
                        ThunderKittens using the LCF template, outperforming ring-flash-attention on short sequences. 
                        Implemented <a href="https://github.com/HazyResearch/ThunderKittens/pull/135" target="_blank">Flash Attention Backward</a> based on LCF. 
                        Performed performance analysis on MagiAttention, ZigZag Ring Attention, and ZigZag Flex Attention.
                    </li>
                    <li>
                        <strong>Other:</strong> Investigated DSL on NVIDIA Hopper architecture.
                    </li>
                </ul>
                `
            },
            {
                title: "Research Intern in System and Network Group",
                company: "Microsoft Research Asia",
                date: "Feb. 2024 - May 2025",
                description: `<strong>Mentor: Dr. Ying Cao</strong>
                    <ul>
                        <li>
                            Based on the <a href="https://github.com/microsoft/FractalTensor" target="_blank">FractalTensor</a> programming model, used CUTLASS to optimize the implementation of algorithms such as <strong>GEMM, Back-to-Back GEMMs, Stacked/Dilated LSTM, and FlashAttention-2</strong>. Performance evaluation was performed on NVIDIA A100, achieving up to <strong>5.45x speedup</strong> compared with SOTA, with average performance acceleration of <strong>2.14x</strong>.
                        </li>
                        <li>
                            As a <strong>core designer and developer</strong>, designed and implemented <a href="https://github.com/microsoft/TileFusion" target="_blank">TileFusion</a>, an efficient C++ macro kernel template library to improve the abstraction level of tile processing in CUDA C.
                        </li>
                    </ul>`
            },
            {
                title: "Research Intern in Operating System Lab",
                company: "Tsinghua University",
                date: "May 2023 - July 2023",
                description: `<strong>Mentors: Prof. Yu Chen, Dr. Yuekai Jia</strong>
                    <ul>
                        <li>
                            Performed network performance benchmarking and optimization.
                        </li>
                        <li>
                            Wrote a driver for the <strong>Intel 82599 network interface card</strong> with <strong>Rust</strong>, referred to DPDK for performance optimization, and integrated it into <strong>Arceos</strong>.
                        </li>
                        <li>
                            Developed a <strong>type-2 hypervisor</strong> based on Arceos capable of booting Linux.
                        </li>
                    </ul>`
            },
        ],

        projects: [
            {
                name: "microsoft/TileFusion",
                tags: ["C++", "CUDA", "TensorCore"],
                description: `An efficient C++ macro kernel template library that elevates the 
                    abstraction level in CUDA C for tile processing. Supports tiles across the 
                    three-level GPU memory hierarchy, provides modularity for processing larger 
                    tiles, and ensures optimal utilization of TensorCore capabilities.`,
                github: "https://github.com/microsoft/TileFusion",
                demo: "#",
                stars: 106
            },
            {
                name: "microsoft/FractalTensor",
                tags: ["DNN", "Compiler", "Data Parallelism"],
                description: `A programming framework that introduces a novel approach to organizing 
                    data in deep neural networks (DNNs) as a list of lists of statically-shaped 
                    tensors. Supports advanced functional list operations and explicitly reveals 
                    opportunities for exploiting nested data parallelism and access locality through 
                    automatic compiler analysis.`,
                github: "https://github.com/microsoft/FractalTensor",
                demo: "#",
                stars: 30
            },
            {
                name: "arceos-org/arceos",
                tags: ["Rust", "OS", "Hypervisor"],
                description: `An experimental modular OS written in Rust. I integrated hypercraft 
                    into arceos, enabling it to be launched as a type-2 hypervisor. Added interrupt 
                    support and implemented IO interrupts based on virtio-net and virtio-blk. 
                    Implemented ixgbe NIC driver and performed network optimizations.`,
                github: "https://github.com/arceos-org/arceos",
                demo: "#",
                stars: 743
            },
            {
                name: "hypercraft",
                tags: ["Rust", "VMM", "Virtualization"],
                description: `A VMM (Virtual Machine Monitor) crate written in Rust. Currently 
                    integrated into rcore-os/arceos and can be launched as a type-2 hypervisor 
                    capable of booting Linux. Developed from the hypocaust-2 project.`,
                github: "https://github.com/kuangjux/hypercraft",
                demo: "#",
                stars: 54
            },
            {
                name: "xv6-rust",
                tags: ["Rust", "Unix", "OS"],
                description: `Reimplementation of xv6-riscv in Rust language. A Unix-like operating 
                    system with optimizations to memory allocation and file system. Serves as the 
                    reference implementation for OSCOMP Project.`,
                github: "https://github.com/kuangjux/xv6-rust",
                demo: "#",
                stars: 347
            },
            {
                name: "hypocaust-2",
                tags: ["RISC-V", "Hypervisor", "H Extension"],
                description: `A hardware-assisted virtualization RISC-V hypervisor using H extensions. 
                    Implements SBI call processing, two-stage page table translation, interrupt 
                    emulation and forwarding. Can boot & run rCore-Tutorial-v3, rt-thread and 
                    mainline Linux.`,
                github: "https://github.com/KuangjuX/hypocaust-2",
                demo: "https://asciinema.org/a/564050",
                stars: 59
            }
        ],

        funProjects: [
            {
                name: "ncu-cli",
                tags: ["Rust", "CLI", "CUDA", "Performance"],
                description: `A Rust CLI tool for automated CUDA kernel performance diagnostics from NVIDIA Nsight Compute (NCU) CSV exports. It performs roofline analysis, architecture-aware heuristics, and profile diffing to generate actionable optimization suggestions in terminal, JSON, CSV, or Markdown.`,
                github: "https://github.com/KuangjuX/ncu-cli",
                stars: 27
            },
            {
                name: "curgit",
                tags: ["Rust", "CLI", "Git", "LLM"],
                description: `A high-performance CLI tool written in Rust that acts as a standalone Git Agent. It analyzes staged changes in a git repository and generates professional, context-aware commit messages following the Conventional Commits standard using LLM.`,
                github: "https://github.com/KuangjuX/curgit",
                stars: 11
            },
            {
                name: "Where2Live",
                tags: ["Rust", "CLI", "Amap API"],
                description: `A Rust CLI tool to discover commutable residential communities near your workplace. Uses the Amap (Gaode) API to search for communities and rank them by transit commute time, rating, and popularity.`,
                github: "https://github.com/KuangjuX/Where2Live",
                stars: 1
            }
        ],

        publications: [
            {
                title: `Uncovering Nested Data Parallelism and Data Reuse in DNN Computation 
                    with FractalTensor`,
                authors: [
                    "Siran Liu*", 
                    "Chengxiang Qi*", 
                    "Ying Cao", 
                    "Chao Yang", 
                    "Weifang Hu", 
                    "Xuanhua Shi", 
                    "Fan Yang", 
                    "Mao Yang"
                ],
                authorBold: "Chengxiang Qi*",
                venue: "SOSP 2024 (*equal contribution)",
                image: "assets/images/fractaltensor-overview.png",
                links: {
                    pdf: "https://dl.acm.org/doi/pdf/10.1145/3694715.3695961",
                    code: "https://github.com/microsoft/FractalTensor"
                }
            },
            {
                title: "基于 RISC-V 的 Type-1 Hypervisor 的设计与实现",
                authors: ["Chengxiang Qi"],
                authorBold: "Chengxiang Qi",
                venue: "Bachelor Thesis, Tianjin University (Outstanding Thesis Award)",
                image: "assets/images/hypocaust-overview.png",
                links: {
                    pdf: "https://github.com/KuangjuX/Bachelor-Thesis/blob/main/thesis/thesis.pdf",
                    code: "https://github.com/KuangjuX/hypocaust"
                }
            }
        ],

        awards: [
            {
                name: "Outstanding Bachelor Thesis",
                venue: "Tianjin University",
                date: "2023"
            },
            {
                name: "Third Prize in Team Competition",
                venue: "NSCSCC (National Student Computer System Capability Challenge)",
                date: "2022"
            },
            {
                name: "The Best Quality Prize of OSPP",
                venue: "Open Source Promotion Plan (only 5 in China a year)",
                date: "2021"
            },
            {
                name: "Third Prize in Team Competition",
                venue: "OSCOMP (Operating System Competition)",
                date: "2021"
            }
        ],

        techStack: {
            title: "Tech Stack",
            subtitle: "From low-level systems to ML infrastructure — a vertical view of my technical journey.",
            layers: [
                {
                    name: "ML System & Inference",
                    color: "#5b4a3a",
                    items: [
                        { name: "FlashAttention", note: "Forward & Backward" },
                        { name: "Ring Attention", note: "Distributed" },
                        { name: "DuoAttention", note: "Long Context" },
                        { name: "MoE / DeepEP", note: "Expert Parallel" },
                        { name: "SGLang", note: "Serving" },
                    ]
                },
                {
                    name: "DL Compiler & Programming Model",
                    color: "#6b5d4f",
                    items: [
                        { name: "FractalTensor", note: "Nested Parallelism" },
                        { name: "TileFusion", note: "Macro Kernel" },
                        { name: "CuTe DSL", note: "Tile Abstraction" },
                        { name: "ThunderKittens", note: "LCF Template" },
                        { name: "CUTLASS", note: "GEMM Opt" },
                    ]
                },
                {
                    name: "GPU Architecture & Communication",
                    color: "#7a6e62",
                    items: [
                        { name: "CUDA C/C++", note: "Core" },
                        { name: "TensorCore", note: "MMA" },
                        { name: "NVSHMEM", note: "GPU-side Comm" },
                        { name: "CUDA IPC / RDMA", note: "Hybrid" },
                        { name: "Hopper Arch", note: "TMA, Cluster" },
                    ]
                },
                {
                    name: "Virtualization & Hypervisor",
                    color: "#8b7f75",
                    items: [
                        { name: "Type-1 Hypervisor", note: "Bare-metal" },
                        { name: "Type-2 Hypervisor", note: "Hosted" },
                        { name: "RISC-V H Extension", note: "HW-assisted" },
                        { name: "Two-stage Page Table", note: "Memory Virt" },
                        { name: "VirtIO", note: "Device Emulation" },
                    ]
                },
                {
                    name: "Operating System & Hardware",
                    color: "#9a908a",
                    items: [
                        { name: "Rust", note: "Systems Lang" },
                        { name: "RISC-V / x86", note: "ISA" },
                        { name: "NIC Driver", note: "ixgbe / DPDK" },
                        { name: "ArceOS", note: "Modular OS" },
                        { name: "xv6", note: "Unix Reimpl" },
                    ]
                }
            ]
        },

        talks: [
            {
                title: "Hypocaust: a RISC-V type-1 hypervisor written in Rust",
                venue: "OS2ATC 2022, Beijing",
                date: "March 2023",
                description: `Presentation on the design and implementation of Hypocaust, 
                    a RISC-V type-1 hypervisor written in Rust, showcasing virtualization 
                    techniques and system-level Rust programming.`,
                links: {
                    slides: "https://kuangjux.top/assets/docs/talks/hypocaust.pdf"
                }
            }
        ],

        ui: {
            nav: { home: "Home", writings: "Writings", papers: "Papers" },
            sections: {
                education: "Education",
                experiences: "Experiences",
                projects: "Projects",
                funProjects: "Fun Projects",
                funProjectsSubtitle: "Interesting side projects that I built for fun — not my core research, but things I enjoyed making.",
                publications: "Publications",
                awards: "Selected Awards",
                talks: "Selected Talks",
            },
            cvButton: "Download My CV",
            footer: {
                rights: "&copy; 2025 ChengXiang Qi. All rights reserved.",
                updated: "Last updated: February 2026"
            }
        }
    },

    zh: {
        profile: {
            name: "齐呈祥 (ChengXiang Qi)",
            title: "硕士研究生，系统方向研究者",
            avatar: "assets/images/avatar-nvidia.jpg",
            description: `你好，我是齐呈祥。目前是中国科学院大学计算机科学与技术专业的硕士研究生（即将毕业）。本科毕业于天津大学。我目前的研究兴趣包括深度学习编译器、机器学习系统和深度学习。此前，我也对 Rust 编程语言及其在系统层面的应用（操作系统、Hypervisor 等）有浓厚的兴趣。`,
            email: "kuangjux@outlook.com",
            github: "https://github.com/kuangjux",
            linkedin: "https://www.linkedin.com/in/kuangjux/",
            zhihu: "https://www.zhihu.com/people/qi-cheng-xiang-59",
            scholar: "https://scholar.google.com/citations?user=LpNRr3gAAAAJ&hl=zh-CN",
            orcid: "https://orcid.org/0009-0008-0881-9500",
            xiaohongshu: "https://www.xiaohongshu.com/user/profile/64343bb1000000000e01c5ad",
            cv: "assets/docs/resume.pdf"
        },

        education: [
            {
                degree: "工学硕士 · 计算机技术",
                institution: "中国科学院大学",
                date: "2023年9月 - 至今",
                description: `研究方向为<strong>深度学习编译器</strong>和<strong>机器学习系统</strong>。`
            },
            {
                degree: "工学学士 · 计算机科学与技术",
                institution: "天津大学",
                date: "2019年9月 - 2023年6月",
                description: `获得<strong>优秀毕业论文</strong>。
                    <br>论文题目：<em>基于 RISC-V 的 Type-1 Hypervisor 的设计与实现</em>`
            }
        ],

        experiences: [
            {
                title: "机器学习系统实习生",
                company: "微信",
                date: "2025年6月 - 至今",
                description: `
                <ul>
                    <li>
                        <strong>Light-DuoAttention：</strong>使用 CuTeDSL 实现了 <a href="https://github.com/KuangjuX/light-duoattention" target="_blank">Light-DuoAttention</a>，实现高效长上下文推理，并在 SGLang 中运行。
                    </li>
                    <li>
                        <strong>NVSHMEM：</strong>探索了 NVSHMEM 和 DeepEP，并实现了 <a href="https://github.com/KuangjuX/NVSHMEM-Tutorial" target="_blank">NVSHMEM-Tutorial</a>，包括基于 CUDA IPC/RDMA 的混合通信，用于组内技术分享。
                    </li>
                    <li>
                        <strong>分布式 Attention：</strong>基于 ThunderKittens 使用 LCF 模板实现了 Ring Attention Forward，在短序列上性能优于 ring-flash-attention。基于 LCF 实现了 <a href="https://github.com/HazyResearch/ThunderKittens/pull/135" target="_blank">Flash Attention Backward</a>。对 MagiAttention、ZigZag Ring Attention 和 ZigZag Flex Attention 进行了性能分析。
                    </li>
                    <li>
                        <strong>其他：</strong>调研了 NVIDIA Hopper 架构上的 DSL。
                    </li>
                </ul>
                `
            },
            {
                title: "系统与网络组研究实习生",
                company: "微软亚洲研究院",
                date: "2024年2月 - 2025年5月",
                description: `<strong>导师：曹莹 博士</strong>
                    <ul>
                        <li>
                            基于 <a href="https://github.com/microsoft/FractalTensor" target="_blank">FractalTensor</a> 编程模型，使用 CUTLASS 优化了 <strong>GEMM、Back-to-Back GEMMs、Stacked/Dilated LSTM 和 FlashAttention-2</strong> 等算法的实现。在 NVIDIA A100 上进行性能评估，相比 SOTA 最高实现 <strong>5.45 倍加速</strong>，平均性能加速 <strong>2.14 倍</strong>。
                        </li>
                        <li>
                            作为<strong>核心设计者和开发者</strong>，设计并实现了 <a href="https://github.com/microsoft/TileFusion" target="_blank">TileFusion</a>，一个高效的 C++ 宏内核模板库，用于提升 CUDA C 中 Tile 处理的抽象层次。
                        </li>
                    </ul>`
            },
            {
                title: "操作系统实验室研究实习生",
                company: "清华大学",
                date: "2023年5月 - 2023年7月",
                description: `<strong>导师：陈渝 教授、贾越凯 博士</strong>
                    <ul>
                        <li>
                            进行网络性能基准测试与优化。
                        </li>
                        <li>
                            使用 <strong>Rust</strong> 编写了 <strong>Intel 82599 网卡</strong>驱动程序，参考 DPDK 进行性能优化，并集成到 <strong>Arceos</strong> 中。
                        </li>
                        <li>
                            基于 Arceos 开发了能够启动 Linux 的 <strong>Type-2 Hypervisor</strong>。
                        </li>
                    </ul>`
            },
        ],

        projects: [
            {
                name: "microsoft/TileFusion",
                tags: ["C++", "CUDA", "TensorCore"],
                description: `一个高效的 C++ 宏内核模板库，提升了 CUDA C 中 Tile 处理的抽象层次。支持跨 GPU 三级存储层次的 Tile，提供处理更大 Tile 的模块化能力，并确保 TensorCore 能力的最优利用。`,
                github: "https://github.com/microsoft/TileFusion",
                demo: "#",
                stars: 106
            },
            {
                name: "microsoft/FractalTensor",
                tags: ["DNN", "Compiler", "Data Parallelism"],
                description: `一个编程框架，引入了一种将深度神经网络（DNN）中的数据组织为静态形状张量的列表的列表的新方法。支持高级函数式列表操作，并通过自动编译器分析显式揭示利用嵌套数据并行性和访问局部性的机会。`,
                github: "https://github.com/microsoft/FractalTensor",
                demo: "#",
                stars: 30
            },
            {
                name: "arceos-org/arceos",
                tags: ["Rust", "OS", "Hypervisor"],
                description: `一个用 Rust 编写的实验性模块化操作系统。我将 hypercraft 集成到 arceos 中，使其能够作为 Type-2 Hypervisor 启动。添加了中断支持，并实现了基于 virtio-net 和 virtio-blk 的 IO 中断。实现了 ixgbe 网卡驱动并进行了网络优化。`,
                github: "https://github.com/arceos-org/arceos",
                demo: "#",
                stars: 743
            },
            {
                name: "hypercraft",
                tags: ["Rust", "VMM", "Virtualization"],
                description: `一个用 Rust 编写的 VMM（虚拟机监控器）库。目前集成在 rcore-os/arceos 中，可作为能够启动 Linux 的 Type-2 Hypervisor 运行。从 hypocaust-2 项目发展而来。`,
                github: "https://github.com/kuangjux/hypercraft",
                demo: "#",
                stars: 54
            },
            {
                name: "xv6-rust",
                tags: ["Rust", "Unix", "OS"],
                description: `用 Rust 语言重新实现的 xv6-riscv。一个类 Unix 操作系统，对内存分配和文件系统进行了优化。作为 OSCOMP 项目的参考实现。`,
                github: "https://github.com/kuangjux/xv6-rust",
                demo: "#",
                stars: 347
            },
            {
                name: "hypocaust-2",
                tags: ["RISC-V", "Hypervisor", "H Extension"],
                description: `一个使用 H 扩展的硬件辅助虚拟化 RISC-V Hypervisor。实现了 SBI 调用处理、两阶段页表转换、中断模拟与转发。可以启动并运行 rCore-Tutorial-v3、rt-thread 和主线 Linux。`,
                github: "https://github.com/KuangjuX/hypocaust-2",
                demo: "https://asciinema.org/a/564050",
                stars: 59
            }
        ],

        funProjects: [
            {
                name: "ncu-cli",
                tags: ["Rust", "CLI", "CUDA", "性能分析"],
                description: `一个 Rust CLI 工具，用于从 NVIDIA Nsight Compute（NCU）的 CSV 导出结果中自动诊断 CUDA Kernel 性能问题。它结合 roofline analysis、架构感知启发式规则和 profile diff，输出可执行的优化建议，并支持 terminal、JSON、CSV 和 Markdown 多种格式。`,
                github: "https://github.com/KuangjuX/ncu-cli",
                stars: 27
            },
            {
                name: "curgit",
                tags: ["Rust", "CLI", "Git", "LLM"],
                description: `一个用 Rust 编写的高性能 CLI 工具，作为独立的 Git Agent 运行。它分析 git 仓库中的暂存更改，并使用 LLM 生成遵循 Conventional Commits 标准的专业、上下文感知的提交信息。`,
                github: "https://github.com/KuangjuX/curgit",
                stars: 11
            },
            {
                name: "Where2Live",
                tags: ["Rust", "CLI", "Amap API"],
                description: `一个 Rust CLI 工具，用于发现工作地点附近可通勤的住宅小区。使用高德地图 API 搜索小区，并按公交通勤时间、评分和热度进行排名。`,
                github: "https://github.com/KuangjuX/Where2Live",
                stars: 1
            }
        ],

        publications: [
            {
                title: `Uncovering Nested Data Parallelism and Data Reuse in DNN Computation 
                    with FractalTensor`,
                authors: [
                    "Siran Liu*", 
                    "Chengxiang Qi*", 
                    "Ying Cao", 
                    "Chao Yang", 
                    "Weifang Hu", 
                    "Xuanhua Shi", 
                    "Fan Yang", 
                    "Mao Yang"
                ],
                authorBold: "Chengxiang Qi*",
                venue: "SOSP 2024（*共同第一作者）",
                image: "assets/images/fractaltensor-overview.png",
                links: {
                    pdf: "https://dl.acm.org/doi/pdf/10.1145/3694715.3695961",
                    code: "https://github.com/microsoft/FractalTensor"
                }
            },
            {
                title: "基于 RISC-V 的 Type-1 Hypervisor 的设计与实现",
                authors: ["齐呈祥"],
                authorBold: "齐呈祥",
                venue: "学士学位论文，天津大学（优秀毕业论文）",
                image: "assets/images/hypocaust-overview.png",
                links: {
                    pdf: "https://github.com/KuangjuX/Bachelor-Thesis/blob/main/thesis/thesis.pdf",
                    code: "https://github.com/KuangjuX/hypocaust"
                }
            }
        ],

        awards: [
            {
                name: "优秀毕业论文",
                venue: "天津大学",
                date: "2023"
            },
            {
                name: "团队赛三等奖",
                venue: "全国大学生计算机系统能力大赛 (NSCSCC)",
                date: "2022"
            },
            {
                name: "开源之夏最佳质量奖",
                venue: "开源软件供应链点亮计划（全国仅 5 名）",
                date: "2021"
            },
            {
                name: "团队赛三等奖",
                venue: "操作系统大赛 (OSCOMP)",
                date: "2021"
            }
        ],

        techStack: {
            title: "技术栈",
            subtitle: "从底层系统到机器学习基础设施——我的技术历程纵览。",
            layers: [
                {
                    name: "机器学习系统与推理",
                    color: "#5b4a3a",
                    items: [
                        { name: "FlashAttention", note: "前向 & 反向" },
                        { name: "Ring Attention", note: "分布式" },
                        { name: "DuoAttention", note: "长上下文" },
                        { name: "MoE / DeepEP", note: "专家并行" },
                        { name: "SGLang", note: "推理服务" },
                    ]
                },
                {
                    name: "深度学习编译器与编程模型",
                    color: "#6b5d4f",
                    items: [
                        { name: "FractalTensor", note: "嵌套并行" },
                        { name: "TileFusion", note: "宏内核" },
                        { name: "CuTe DSL", note: "Tile 抽象" },
                        { name: "ThunderKittens", note: "LCF 模板" },
                        { name: "CUTLASS", note: "GEMM 优化" },
                    ]
                },
                {
                    name: "GPU 架构与通信",
                    color: "#7a6e62",
                    items: [
                        { name: "CUDA C/C++", note: "核心" },
                        { name: "TensorCore", note: "MMA" },
                        { name: "NVSHMEM", note: "GPU 端通信" },
                        { name: "CUDA IPC / RDMA", note: "混合通信" },
                        { name: "Hopper 架构", note: "TMA, Cluster" },
                    ]
                },
                {
                    name: "虚拟化与 Hypervisor",
                    color: "#8b7f75",
                    items: [
                        { name: "Type-1 Hypervisor", note: "裸机" },
                        { name: "Type-2 Hypervisor", note: "宿主机" },
                        { name: "RISC-V H 扩展", note: "硬件辅助" },
                        { name: "两阶段页表", note: "内存虚拟化" },
                        { name: "VirtIO", note: "设备模拟" },
                    ]
                },
                {
                    name: "操作系统与硬件",
                    color: "#9a908a",
                    items: [
                        { name: "Rust", note: "系统语言" },
                        { name: "RISC-V / x86", note: "指令集" },
                        { name: "网卡驱动", note: "ixgbe / DPDK" },
                        { name: "ArceOS", note: "模块化 OS" },
                        { name: "xv6", note: "Unix 重实现" },
                    ]
                }
            ]
        },

        talks: [
            {
                title: "Hypocaust：一个用 Rust 编写的 RISC-V Type-1 Hypervisor",
                venue: "OS2ATC 2022，北京",
                date: "2023年3月",
                description: `关于 Hypocaust 的设计与实现的演讲，这是一个用 Rust 编写的 RISC-V Type-1 Hypervisor，展示了虚拟化技术和系统级 Rust 编程。`,
                links: {
                    slides: "https://kuangjux.top/assets/docs/talks/hypocaust.pdf"
                }
            }
        ],

        ui: {
            nav: { home: "首页", writings: "文章", papers: "论文" },
            sections: {
                education: "教育经历",
                experiences: "工作经历",
                projects: "项目",
                funProjects: "有趣的项目",
                funProjectsSubtitle: "一些我出于兴趣构建的有趣副项目——不是我的核心研究，但是我享受制作的过程。",
                publications: "发表论文",
                awards: "获奖情况",
                talks: "受邀演讲",
            },
            cvButton: "下载简历",
            footer: {
                rights: "&copy; 2025 齐呈祥. 保留所有权利。",
                updated: "最后更新：2026年2月"
            }
        }
    }
};

function getCurrentLang() {
    return localStorage.getItem('lang') || 'en';
}

function setCurrentLang(lang) {
    localStorage.setItem('lang', lang);
}

function getData() {
    return portfolioData[getCurrentLang()];
}
