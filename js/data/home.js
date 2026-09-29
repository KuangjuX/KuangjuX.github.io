// Editorial content for the static homepages. Shared records live in profile.js.
const homeData = {
    updated: '2026-09-29',
    en: {
        name: 'Chengxiang Qi', otherName: '齐呈祥',
        description: 'Chengxiang Qi is a machine learning systems engineer at WeLM, working on efficient LLM training, sparse attention, and GPU kernels.',
        selected: 'Selected work', experience: 'Experience', publications: 'Publications',
        writing: 'Selected writing', tools: 'Open-source tools', education: 'Education',
        more: 'Earlier projects & side projects', background: 'Awards & talks', personal: 'Beyond work',
        allWriting: 'All writings', articleLanguage: 'In Chinese',
        notesTitle: 'Notes', notesText: 'My reading notes and ongoing learning in machine learning systems, GPU programming, and compilers.',
        writingsText: 'Technical articles and personal essays live here. Reading notes and ongoing study live on Notes.',
        details: 'More about this role', earlierResearch: 'Earlier research · undergraduate thesis',
        code: 'Code', paper: 'Paper', article: 'Article', slides: 'Slides',
        resume: 'CV', resumeDate: 'Updated September 2026',
        runningText: 'Away from the keyboard, I run and write. Here are my running log and personal essays.',
        runningLink: 'Running log', essaysLink: 'Personal essays',
        fiction: { match: '幻想与疾病', title: '幻想与疾病 · Fantasy and Illness', text: 'A short story about intimacy, imagination, and the distance between expectations and reality. In Chinese.' },
        highlights: [
            { project: 'microsoft/TileFusion', name: 'TileFusion', role: 'Core designer & developer',
              text: 'A C++ template library for GPU tile computation. I helped design the abstractions and implement memory and compute primitives, enabling hardware-aware algorithms such as FlashAttention and FlashDecoding.',
              links: [{ label: 'Code', url: 'https://github.com/microsoft/TileFusion' }] },
            { project: 'microsoft/FractalTensor', name: 'FractalTensor', role: 'SOSP 2024 · Co-first author',
              text: 'Exploring nested data parallelism and data reuse in deep learning. I implemented and optimized GPU computation with CUTLASS, with a reported average 2.14× speedup over the evaluated baselines on A100.',
              links: [{ label: 'Paper', url: 'https://dl.acm.org/doi/10.1145/3694715.3695961' }, { label: 'Code', url: 'https://github.com/microsoft/FractalTensor' }] },
            { name: 'Light-DuoAttention', role: 'Long-context inference · CuTeDSL / SGLang',
              text: 'I implemented DuoAttention with CuTeDSL and integrated it into SGLang, connecting attention kernel development with a serving system.',
              links: [{ label: 'Code', url: 'https://github.com/KuangjuX/light-duoattention' }, { label: 'Article', url: 'https://zhuanlan.zhihu.com/p/1984978732436431358' }] }
        ],
        experienceSummaries: [null,
            'Built long-context inference kernels and integrated them into SGLang; explored GPU communication and distributed attention.',
            'Developed GPU implementations for FractalTensor and co-designed TileFusion, connecting programming abstractions with hardware-aware optimization.',
            'Developed Rust network drivers and virtualization support for Arceos, and worked on network performance.'
        ],
        articles: [
            { match: 'Light-DuoAttention', title: 'Light-DuoAttention: long-context inference with CuTeDSL', text: 'From attention computation to an implementation integrated with SGLang.' },
            { match: 'NVSHMEM-Tutorial', title: 'NVSHMEM-Tutorial: building a DeepEP-like GPU buffer', text: 'An implementation-focused introduction to GPU communication with CUDA IPC and RDMA.' },
            { match: '从 Bank Conflict 到 GEMM', title: 'From Bank Conflicts to GEMM Data Movement', text: 'A consolidated PDF essay on shared-memory banks, swizzling, and the path from global memory to registers, with diagrams and CuTe examples.' }
        ]
    },
    zh: {
        name: '齐呈祥', otherName: 'Chengxiang Qi',
        description: '齐呈祥，微信事业群 WeLM 团队机器学习系统工程师，关注大语言模型训练效率、稀疏 Attention 与 GPU Kernel 优化。',
        selected: '精选工作', experience: '工作经历', publications: '发表论文',
        writing: '精选文章', tools: '开源工具', education: '教育经历',
        more: '早期项目与其他作品', background: '获奖与演讲', personal: '工作之外',
        allWriting: '全部文章', articleLanguage: '中文',
        notesTitle: '学习笔记', notesText: '关于机器学习系统、GPU 编程和编译器的阅读笔记与持续学习记录。',
        writingsText: '技术文章与个人随笔收录在 Writings；阅读笔记与持续整理的知识收录在 Notes。',
        details: '展开这段经历', earlierResearch: '早期研究 · 本科毕业论文',
        code: '代码', paper: '论文', article: '文章', slides: '幻灯片',
        resume: '简历', resumeDate: '更新于 2026 年 9 月',
        runningText: '工作之外，我喜欢跑步和写作。这里也记录着我的跑步经历与个人随笔。',
        runningLink: '跑步记录', essaysLink: '个人随笔',
        fiction: { match: '幻想与疾病', title: '幻想与疾病', text: '一篇关于亲密关系、幻想与现实的短篇小说。保留五节原文，另提供适合连续阅读的 PDF 版本。' },
        highlights: [
            { project: 'microsoft/TileFusion', name: 'TileFusion', role: '核心设计者与开发者',
              text: '面向 GPU Tile 计算的 C++ 模板库。我参与抽象设计、底层访存与计算原语实现，支持构建 FlashAttention、FlashDecoding 等硬件感知算法。',
              links: [{ label: '代码', url: 'https://github.com/microsoft/TileFusion' }] },
            { project: 'microsoft/FractalTensor', name: 'FractalTensor', role: 'SOSP 2024 · 共同第一作者',
              text: '探索深度学习中的嵌套数据并行与数据复用。我使用 CUTLASS 实现并优化 GPU 计算，在 A100 上的已报告评测中，相比所评估基线平均取得 2.14 倍加速。',
              links: [{ label: '论文', url: 'https://dl.acm.org/doi/10.1145/3694715.3695961' }, { label: '代码', url: 'https://github.com/microsoft/FractalTensor' }] },
            { name: 'Light-DuoAttention', role: '长上下文推理 · CuTeDSL / SGLang',
              text: '使用 CuTeDSL 实现 DuoAttention，并集成至 SGLang，将 Attention Kernel 开发与推理服务系统连接起来。',
              links: [{ label: '代码', url: 'https://github.com/KuangjuX/light-duoattention' }, { label: '文章', url: 'https://zhuanlan.zhihu.com/p/1984978732436431358' }] }
        ],
        experienceSummaries: [null,
            '开发长上下文推理 Kernel 并集成至 SGLang，探索 GPU 通信与分布式 Attention。',
            '实现 FractalTensor 的 GPU 计算，并参与设计 TileFusion，将编程抽象与硬件感知优化结合。',
            '为 Arceos 开发 Rust 网卡驱动和虚拟化支持，并开展网络性能优化。'
        ],
        articles: [
            { match: 'Light-DuoAttention', title: 'Light-DuoAttention：用 CuTeDSL 实现高效长上下文推理', text: '从 Attention 计算出发，介绍 Kernel 实现及其与 SGLang 的集成。' },
            { match: 'NVSHMEM-Tutorial', title: 'NVSHMEM-Tutorial：Build a DeepEP-like GPU Buffer', text: '结合具体实现，介绍基于 CUDA IPC 与 RDMA 的 GPU 通信。' },
            { match: '从 Bank Conflict 到 GEMM', title: '从 Bank Conflict 到 GEMM 数据搬运', text: '将两篇技术文章合并整理，串联 Bank Conflict、Swizzle 与全局内存到寄存器的数据路径，附图示和 CuTe 代码。' }
        ]
    }
};
