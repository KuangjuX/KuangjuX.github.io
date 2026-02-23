const portfolioData = {
    profile: {
        name: "ChengXiang Qi (齐呈祥)",
        title: "Master Student, System Researcher",
        avatar: "professional-photo.png",
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
        cv: "files/resume.pdf"
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
            stars: 295
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
            stars: 31
        },
        {
            name: "rCore-OS/arceos",
            tags: ["Rust", "OS", "Hypervisor"],
            description: `An experimental modular OS written in Rust. I integrated hypercraft 
                into arceos, enabling it to be launched as a type-2 hypervisor. Added interrupt 
                support and implemented IO interrupts based on virtio-net and virtio-blk. 
                Implemented ixgbe NIC driver and performed network optimizations.`,
            github: "https://github.com/rCore-OS/arceos",
            demo: "#",
            stars: 720
        },
        {
            name: "hypercraft",
            tags: ["Rust", "VMM", "Virtualization"],
            description: `A VMM (Virtual Machine Monitor) crate written in Rust. Currently 
                integrated into rcore-os/arceos and can be launched as a type-2 hypervisor 
                capable of booting Linux. Developed from the hypocaust-2 project.`,
            github: "https://github.com/kuangjux/hypercraft",
            demo: "#",
            stars: 53
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
            stars: 58
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
            image: "fractaltensor-overview.png",
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
            image: "hypocaust-overview.png",
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
                slides: "https://kuangjux.top/files/talks/hypocaust.pdf"
            }
        }
    ],
};
