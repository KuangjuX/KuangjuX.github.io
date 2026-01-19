// 个人信息配置文件
// 只需修改这个文件中的内容，无需修改 HTML 和 CSS

const portfolioData = {
    // 基本信息
    profile: {
        name: "ChengXiang Qi (齐呈祥)",
        title: "Master Student, System Researcher",
        
        // 头像图片路径（可以是相对路径或 URL）
        avatar: "avatar.jpg",  // 请将您的头像放在项目根目录，命名为 avatar.jpg
        
        // 个人简介
        description: `Hi, my name is Chengxiang Qi. I am currently a final-year master student 
            in computer science at the University of Chinese Academy of Sciences. I completed my 
            undergraduate studies at Tianjin University. My current interests are in deep learning 
            compilers, machine learning systems, and deep learning. In the past, I have also been 
            interested in the Rust programming language and its applications at the system level 
            (OS, Hypervisor, etc.).`,
        
        // 联系方式和社交媒体
        email: "kuangjux@outlook.com",
        github: "https://github.com/kuangjux",
        linkedin: "https://www.linkedin.com/in/kuangjux/",
        zhihu: "https://www.zhihu.com/people/qi-cheng-xiang-59",  // 请替换为您的知乎主页
        scholar: "https://scholar.google.com/citations?user=LpNRr3gAAAAJ&hl=zh-CN",  // 如有，请替换
        orcid: "https://orcid.org/0009-0008-0881-9500",
        
        // CV 下载链接
        cv: "files/resume.pdf"  // 英文简历
    },

    // 教育经历
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

    // 工作经历
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

    // 项目
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
            stars: 295  // GitHub stars 数量（可选字段）
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

    // 出版物
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
            image: "fractaltensor-overview.png",  // 可选：论文的 overview 图片
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

    // 奖项
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

    // 演讲
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

// 文章页面配置（用于 writings.html）
const writingsData = {
    pageTitle: "Writings",
    pageSubtitle: `Technical insights, personal essays, stories, and philosophical reflections.`,
    
    // 文章列表（包括技术博客和个人文章，发表在外部平台）
    writings: [
        // 技术博客
        {
            category: "technical",
            categoryDisplay: "Technical",
            title: "MoE 笔记：从数学推导到 SonicMoE 的极致优化",
            date: "Dec 27, 2025",
            excerpt: `深入探讨 Mixture of Experts (MoE) 架构的数学原理和优化技术，从理论推导到 SonicMoE 的工程实现。`,
            link: "https://zhuanlan.zhihu.com/p/1987208541124202922",  // 请添加链接
            platform: "知乎",
            readingTime: "",
        },

        {
            category: "technical",
            categoryDisplay: "Technical",
            title: "Light-DuoAttention：用 CuTeDSL 实现高效长上下文推理",
            date: "Dec 23, 2025",
            excerpt: `想象一下，你正在使用一个大语言模型处理一份 100 页的技术文档，然后在文档的某个角落问它一个具体问题——这就是著名的"大海捞针"（Needle in a Haystack, NIAH）测试。对于现代 LLM 来说，处理这种长上下文场景既是机会也是挑战。标准的 Attention 机制有一个众所周知的问题：它的计算复杂度是 O(n²)。当序列长度从 2k tokens 增长到 128k tokens 时，计算量会呈平方级增长，这对推理性能造成了巨大压力......`,
            link: "https://zhuanlan.zhihu.com/p/1984978732436431358",
            platform: "知乎",
            readingTime: "",
        },
        
        // 个人文章
        {
            category: "essays",
            categoryDisplay: "Essay",
            title: "天真的与感伤的人",
            date: "Dec 17, 2025",
            excerpt: `关于人性的思考，探讨天真与感伤在人生不同阶段的意义。`,
            link: "https://zhuanlan.zhihu.com/p/1984626116670015446",
            platform: "知乎",
            readingTime: "",
        },

        {
            category: "fiction",
            categoryDisplay: "Fiction",
            title: "Q 丢了一把锤子",
            date: "Dec 17, 2025",
            excerpt: `Q 醒来的时候，听到了隔壁男人咳痰的声音...`,
            link: "https://mp.weixin.qq.com/s/EGIW-c2YGYgJlzpaf3zEiw",
            platform: "微信公众号",
            readingTime: "",
        },

        {
            category: "technical",
            categoryDisplay: "Technical",
            title: "NVSHMEM-Tutorial：Build a DeepEP-like GPU Buffer",
            date: "Aug 30, 2025",
            excerpt: `介绍 NVSHMEM-Tutorial 的实现，包括混合通信的实现，以及 DeepEP。`,
            link: "https://zhuanlan.zhihu.com/p/1943366512783098660",
            platform: "知乎",
            readingTime: "",
        },

        {
            category: "essays",
            categoryDisplay: "Essay",
            title: "2024，关于奔跑的一年",
            date: "Jan 27, 2025",
            excerpt: `写一个年终总结并不总是一个容易的事，前两年我都想尝试写一些东西，
            但总是千头万绪觉得事情太多写不下来，又觉得很多事情没有必要写，有时候一刹那的情绪过了之后就再也表达不出来了...
            `,
            link: "https://mp.weixin.qq.com/s/vlZh9_pdRwew6vehWE65Lg",
            platform: "微信公众号",
            readingTime: "",
        },

        {
            category: "technical",
            categoryDisplay: "Technical",
            title: "GEMM 内存拷贝全流程分析",
            date: "Dec 28, 2024",
            excerpt: `介绍现代 GEMM 内存拷贝全流程分析`,
            link: "https://zhuanlan.zhihu.com/p/11347002302",
            platform: "知乎",
            readingTime: "",
        },

        {
            category: "philosophy",
            categoryDisplay: "Philosophy",
            title: "谈「空心」现象",
            date: "Dec 27, 2024",
            excerpt: `在功绩社会中，现代人对于自我的追求甚至人与人之间的关系都逐渐体现出了工具化的特性，
            提升自我是为了用来获取正面的社会评价，劳动是为了获取相应的劳动报酬，
            人与人之间的具体人际关系失去了人情味的特征，呈现出一种操纵精神与工具性的特定。
            然而，这种工具性的特质最消极的体现仍然出现在人与自我的关系上...`,
            link: "https://www.zhihu.com/question/6641398742/answer/65253991362",
            platform: "知乎",
            readingTime: "",
        },
        
        {
            category: "philosophy",
            categoryDisplay: "Philosophy",
            title: "谈「自律」",
            date: "Dec 26, 2024",
            excerpt: `在当今一个看似空前自由的时代，实际上每个人的精神反而在很大程度上精神不自由。
            自律作为一个被赋予了空前积极意义的词语，在很多时候实际上并非出自于内心的真实感受，
            更多是出于对与社会评价的迎合以及为了缓解内心焦虑感的举措...`,
            link: "https://www.zhihu.com/question/304924099/answer/64671201217",
            platform: "知乎",
            readingTime: "",
        },

        {
            category: "technical",
            categoryDisplay: "Technical",
            title: "关于 Bank Conflict 与 Swizzle",
            date: "Dec 08, 2024",
            excerpt: `介绍现代 GPU 编程中关于 Bank Conflict 与 Swizzle 的优化技巧`,
            link: "https://zhuanlan.zhihu.com/p/11347002302",
            platform: "知乎",
            readingTime: "",
        },

        {
            category: "philosophy",
            categoryDisplay: "Philosophy",
            title: "人本主义与工具理性",
            date: "June 16, 2024",
            excerpt: `这两天参加了 ChinaSys，同时也和朋友聊了一些深刻的话题，从我个人角度来看，
                    这些话题都可以归类于人本主义与工具理性。从几百年前的马克斯韦伯，克尔凯郭尔，到近代以来的马尔库塞，弗洛姆，加缪，
                    萨特都对这些问题有过思考。对我来说，则关乎人的自我价值实现问题...`,
            link: "https://mp.weixin.qq.com/s/LKJIfmEiYPF2Q_WTkDuR1Q",
            platform: "微信公众号",
            readingTime: "",
        },

        {
            category: "technical",
            categoryDisplay: "Technical",
            title: "基于 RISC-V 的 Type-1 Hypervisor 的设计与实现",
            date: "Dec 08, 2024",
            excerpt: `介绍我的本科毕业设计，使用 Rust 构建了两个 Type-1 Hypervisor，并实现了对 Linux 的启动。`,
            link: "https://zhuanlan.zhihu.com/p/672508870",
            platform: "知乎",
            readingTime: "",
        },

        {
            category: "essays",
            categoryDisplay: "Essay",
            title: "道德的泡沫 —— 读《万历十五年》",
            date: "Dec 14, 2023",
            excerpt: `这本书虽然叫《万历十五年》，但基本上没怎么讲万历十五年的事情，正如书中所表达的，万历十五年海内升平，平安无事，
            但却预示了明朝命运的结束。书里着重写了万历朝的六位人物，他们是当时最有权力、最有能力和最有名气的人，
            但他们无论都没有办法改变时代...
            `,
            link: "https://zhuanlan.zhihu.com/p/672282898",
            platform: "知乎",
            readingTime: "",
        },

        {
            category: "essays",
            categoryDisplay: "Essay",
            title: "魏晋之际的政治格局简论",
            date: "July 31, 2020",
            excerpt: `关于东晋之际的门阀政治体系，被视为变态、畸形发展的政治体系，但其出现并非空穴来风...
            `,
            link: "https://zhuanlan.zhihu.com/p/165453361",
            platform: "知乎",
            readingTime: "",
        }
        
    ]
};
