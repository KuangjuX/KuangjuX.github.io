const writingsData = {
    pageTitle: "Writings",
    pageSubtitle: `Technical insights, personal essays, stories, and philosophical reflections.`,

    writings: [
        {
            category: "technical",
            categoryDisplay: "Technical",
            title: "MoE 笔记：从数学推导到 SonicMoE 的极致优化",
            date: "Dec 27, 2025",
            excerpt: `深入探讨 Mixture of Experts (MoE) 架构的数学原理和优化技术，从理论推导到 SonicMoE 的工程实现。`,
            link: "https://zhuanlan.zhihu.com/p/1987208541124202922",
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
