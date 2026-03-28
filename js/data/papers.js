const paperReadingData = {
    pageTitle: "Reading Papers",
    pageSubtitle: "A curated collection of research papers on ML systems, compilers, architecture, and systems software — with brief takeaways.",
    repoLink: "https://github.com/KuangjuX/Paper-reading",

    categories: [
            {
                    "id": "all",
                    "label": "All"
            },
            {
                    "id": "dl-compiler",
                    "label": "DL Compiler"
            },
            {
                    "id": "llm-inference",
                    "label": "LLM Inference"
            },
            {
                    "id": "llm-training",
                    "label": "LLM Training"
            },
            {
                    "id": "deep-learning",
                    "label": "Deep Learning"
            },
            {
                    "id": "systems",
                    "label": "OS / Hypervisor"
            }
    ],

    papers: [
        // ── DL Compiler ──
        {
            category: "dl-compiler",
            status: "read",
            title: "The Deep Learning Compiler: A Comprehensive Survey",
            venue: "—",
            paper: "https://arxiv.org/pdf/2002.03794.pdf",
            note: "https://github.com/KuangjuX/system-notes/blob/main/paper-notes/ai-compiler/The-Deep-Learning-Compiler-A-Comprehensive-Survey.md",
            takeaway: ""
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "MLIR: Scaling Compiler Infrastructure for Domain Specific Computation",
            venue: "CGO'21",
            paper: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9370308",
            note: "https://github.com/KuangjuX/system-notes/blob/main/paper-notes/ai-compiler/MLIR-Scaling-Compiler-Infrastructure-for-Domain-Specific-Computation.md",
            takeaway: "Multi-level IR design that enables progressive lowering — the foundation of modern DL compilers."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "TIRAMISU: A Polyhedral Compiler for Expressing Fast and Portable Code",
            venue: "CGO'19",
            paper: "https://github.com/KuangjuX/Paper-reading/blob/main/papers/mlsys/polyhedral/Tiramisu-CGO.pdf",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/compiler/tiramisu-cgo/tiramisu.md",
            takeaway: ""
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Rammer: Enabling Holistic Deep Learning Compiler Optimizations with rTasks",
            venue: "OSDI'20",
            paper: "https://www.usenix.org/system/files/osdi20-ma.pdf",
            note: "https://github.com/KuangjuX/paper-reading/issues/22",
            takeaway: "rTask abstraction enables inter-operator and intra-operator parallelism co-optimization."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "ROLLER: Fast and Efficient Tensor Compilation for Deep Learning",
            venue: "OSDI'22",
            paper: "https://www.usenix.org/system/files/osdi22-zhu.pdf",
            note: "https://github.com/KuangjuX/Paper-reading/issues/24",
            takeaway: "Constructs near-optimal tile shapes via rTile abstraction — eliminates most autotuning overhead."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "BOLT: Bridging The Gap Between Auto-Tuners and Hardware-Native Performance",
            venue: "MLSys'22",
            paper: "http://yibozhu.com/doc/bolt-mlsys22.pdf",
            note: "https://github.com/KuangjuX/Paper-reading/issues/28",
            takeaway: "Bridges autotuner-generated code and vendor library performance by leveraging hardware-native primitives."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "AStitch: Enabling a New Multi-dimensional Optimization Space for Memory-Intensive ML Training and Inference on Modern SIMT Architectures",
            venue: "ASPLOS'22",
            paper: "https://dl.acm.org/doi/10.1145/3503222.3507723",
            note: "https://github.com/KuangjuX/Paper-reading/issues/26",
            takeaway: "Opens a multi-dimensional fusion space for memory-intensive ops via stitching on SIMT architectures."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "AMOS: Enabling Automatic Mapping for Tensor Computations On Spatial Accelerators with Hardware Abstraction",
            venue: "ISCA'22",
            paper: "https://github.com/KuangjuX/Paper-reading/blob/main/papers/mlsys/IR/AMOS-ISCA.pdf",
            note: "https://github.com/KuangjuX/Paper-reading/issues/31",
            takeaway: "Hardware abstraction layer enables one mapping algorithm to target diverse spatial accelerators."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Welder: Scheduling Deep Learning Memory Access via Tile-graph",
            venue: "OSDI'23",
            paper: "https://www.usenix.org/system/files/osdi23-shi.pdf",
            note: "https://github.com/KuangjuX/Paper-reading/issues/25",
            takeaway: "Tile-graph abstraction enables cross-operator memory access scheduling, reducing redundant data movement."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Effectively Scheduling Computational Graphs of Deep Neural Networks toward Their Domain-Specific Accelerators",
            venue: "OSDI'23",
            paper: "https://github.com/KuangjuX/Paper-reading/blob/main/papers/mlsys/soft-hard-co-design/osdi23-zhao.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Cocktailer: Analyzing and Optimizing Dynamic Control Flow in Deep Learning",
            venue: "OSDI'23",
            paper: "https://www.usenix.org/system/files/osdi23-zhang-chen.pdf",
            note: "https://github.com/KuangjuX/paper-reading/issues/21",
            takeaway: "First compiler to systematically handle dynamic control flow (if/while) in DL graphs."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Chimera: An Analytical Optimizing Framework for Effective Compute-intensive Operators Fusion",
            venue: "HPCA'23",
            paper: "https://github.com/KuangjuX/Paper-reading/blob/main/papers/mlsys/fusion/Chimera_An_Analytical_Optimizing_Framework_for_Effective_Compute-intensive_Operators_Fusion.pdf",
            note: "https://github.com/KuangjuX/Paper-reading/issues/30",
            takeaway: "Analytical cost model for fusing compute-intensive operators — avoids expensive autotuning."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Graphene: An IR for Optimized Tensor Computations on GPUs",
            venue: "ASPLOS'23",
            paper: "https://dl.acm.org/doi/pdf/10.1145/3582016.3582018",
            note: "https://github.com/KuangjuX/Paper-reading/issues/27",
            takeaway: "A GPU-centric IR that bridges high-level tensor ops and low-level GPU code with first-class tile semantics."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Uncovering Nested Data Parallelism and Data Reuse in DNN Computation with FractalTensor",
            venue: "SOSP'24",
            paper: "https://dl.acm.org/doi/10.1145/3694715.3695961",
            note: "",
            takeaway: "FractalTensor reveals nested parallelism in DNNs via recursive tensor decomposition — up to 5.45x speedup."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "ThunderKittens: Simple, Fast, and Adorable AI Kernels",
            venue: "—",
            paper: "https://github.com/KuangjuX/Paper-reading/blob/main/papers/mlsys/ThunderKittens.pdf",
            note: "",
            takeaway: "Tile-level C++ embedded DSL (LCF template) that makes writing high-performance GPU kernels approachable."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Mirage: A Multi-Level Superoptimizer for Tensor Programs",
            venue: "OSDI'25",
            paper: "https://www.usenix.org/system/files/osdi25-wu-mengdi.pdf",
            note: "",
            takeaway: "Superoptimization at multiple IR levels discovers kernel implementations that beat hand-tuned baselines."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "PipeThreader: Software-Defined Pipelining for Efficient DNN Execution",
            venue: "OSDI'25",
            paper: "https://www.usenix.org/system/files/osdi25-cheng.pdf",
            note: "",
            takeaway: "Software-defined pipelining abstracts away hardware-specific async primitives for DNN kernels."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "TileLang: A Composable Tiled Programming Model for AI Systems",
            venue: "—",
            paper: "https://arxiv.org/pdf/2504.17577",
            note: "",
            takeaway: "Composable tile-level DSL that unifies scheduling and code generation for diverse AI hardware."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Tawa: Automatic Warp Specialization for Modern GPUs with Asynchronous References",
            venue: "arXiv'25",
            paper: "https://arxiv.org/pdf/2510.14719",
            note: "",
            takeaway: "Compiler-driven warp specialization via async references — hides memory latency without manual pipelining."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "KPerfIR: Towards an Open and Compiler-centric Ecosystem for GPU Kernel Performance Tooling on Modern AI Workloads",
            venue: "OSDI'25",
            paper: "https://www.usenix.org/system/files/osdi25-guan.pdf",
            note: "",
            takeaway: ""
        },
        // ── LLM Inference ──
        {
            category: "llm-inference",
            status: "read",
            title: "A Survey of LLM Inference Systems",
            venue: "—",
            paper: "https://arxiv.org/pdf/2506.21901",
            note: "https://github.com/KuangjuX/Notes/blob/main/PaperNotes/LLM/Inference/llm_inference_survey.pdf",
            takeaway: "Comprehensive taxonomy of LLM inference optimizations: batching, KV-cache, quantization, speculative decoding."
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "WaferLLM: Large Language Model Inference at Wafer Scale",
            venue: "OSDI'25",
            paper: "https://www.usenix.org/system/files/osdi25-he.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "read",
            title: "Training-Free Long-Context Scaling of Large Language Models",
            venue: "ICML'24",
            paper: "https://arxiv.org/pdf/2402.17463",
            note: "https://github.com/KuangjuX/Notes/blob/main/DeepLearning/DCA.md",
            takeaway: "Dual Chunk Attention extends context window at inference time without any fine-tuning."
        },
        {
            category: "llm-inference",
            status: "read",
            title: "Efficient Streaming Language Models with Attention Sinks",
            venue: "ICLR'24",
            paper: "https://arxiv.org/pdf/2309.17453",
            note: "",
            takeaway: "Keeping a few initial 'sink' tokens in KV-cache enables stable infinite-length streaming inference."
        },
        {
            category: "llm-inference",
            status: "read",
            title: "Quest: Query-Aware Sparsity for Efficient Long-Context LLM Inference",
            venue: "ICML'24",
            paper: "https://arxiv.org/pdf/2406.10774",
            note: "",
            takeaway: "Query-aware KV-cache sparsity — only attend to tokens that matter for the current query."
        },
        {
            category: "llm-inference",
            status: "read",
            title: "DuoAttention: Efficient Long-Context LLM Inference with Retrieval and Streaming Heads",
            venue: "ICLR'25",
            paper: "https://arxiv.org/pdf/2410.10819v1",
            note: "",
            takeaway: "Splits attention heads into retrieval (full KV) and streaming (sink-only) — 2.5x memory reduction."
        },
        {
            category: "llm-inference",
            status: "read",
            title: "SGLang: Efficient Execution of Structured Language Model Programs",
            venue: "—",
            paper: "https://github.com/KuangjuX/Paper-reading/blob/main/papers/mlsys/sglang.pdf",
            note: "",
            takeaway: "RadixAttention and structured generation primitives for efficient multi-call LLM programs."
        },
        {
            category: "llm-inference",
            status: "read",
            title: "FlashInfer: Efficient and Customizable Attention Engine for LLM Inference Serving",
            venue: "—",
            paper: "https://github.com/KuangjuX/Paper-reading/blob/main/papers/mlsys/2501.01005v1.pdf",
            note: "",
            takeaway: "Composable attention engine with JIT-compiled kernels — flexible enough for diverse serving scenarios."
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving",
            venue: "OSDI'24",
            paper: "https://www.usenix.org/system/files/osdi24-zhong-yinmin.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "LoongServe: Efficiently Serving Long-Context Large Language Models with Elastic Sequence Parallelism",
            venue: "SOSP'24",
            paper: "https://dl.acm.org/doi/pdf/10.1145/3694715.3695948",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Mooncake: Trading More Storage for Less Computation — A KVCache-centric Architecture for Serving LLM Chatbot",
            venue: "FAST'25",
            paper: "https://www.usenix.org/system/files/fast25-qin.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "NanoFlow: Towards Optimal Large Language Model Serving Throughput",
            venue: "OSDI'25",
            paper: "https://www.usenix.org/system/files/osdi25-zhu-kan.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "read",
            title: "Look Ma, No Bubbles! Designing a Low-Latency Megakernel for Llama-1B",
            venue: "Blog",
            paper: "https://hazyresearch.stanford.edu/blog/2025-05-27-no-bubbles",
            note: "",
            takeaway: "Fusing an entire Llama-1B forward pass into one persistent megakernel eliminates launch overhead."
        },
        {
            category: "llm-inference",
            status: "read",
            title: "Mirage Persistent Kernel: A Compiler and Runtime for Mega-Kernelizing Tensor Programs",
            venue: "arXiv'25",
            paper: "https://arxiv.org/pdf/2512.22219",
            note: "",
            takeaway: "Compiler-automated megakernel generation via persistent kernel abstraction and inter-SM scheduling."
        },
        {
            category: "llm-inference",
            status: "read",
            title: "TileRT: Tile-Based Runtime for Ultra-Low-Latency LLM Inference",
            venue: "—",
            paper: "https://github.com/tile-ai/TileRT",
            note: "",
            takeaway: "Tile-based runtime that chains operators without returning to host — ultra-low latency for small batches."
        },
        {
            category: "llm-inference",
            status: "read",
            title: "SonicMoE: Accelerating MoE with IO and Tile-aware Optimizations",
            venue: "arXiv'25",
            paper: "https://arxiv.org/pdf/2512.14080",
            note: "",
            takeaway: "IO-aware tiling strategy for MoE dispatch/combine — reduces memory traffic and improves GPU utilization."
        },
        {
            category: "llm-inference",
            status: "read",
            title: "Compiling LLMs into a MegaKernel: A Path to Low-Latency Inference",
            venue: "Blog",
            paper: "https://zhihaojia.medium.com/compiling-llms-into-a-megakernel-a-path-to-low-latency-inference-cf7840913c17",
            note: "",
            takeaway: ""
        },
        // ── OS / Hypervisor ──
        {
            category: "systems",
            status: "toread",
            title: "LoongTrain: Efficient Training of Long-Sequence LLMs with Head-Context Parallelism",
            venue: "—",
            paper: "https://arxiv.org/pdf/2406.18485",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "read",
            title: "Seer: Online Context Learning for Fast Synchronous LLM Reinforcement Learning",
            venue: "arXiv'25",
            paper: "https://arxiv.org/pdf/2511.14617",
            note: "",
            takeaway: "Online context learning reduces synchronization bubbles in RLHF training pipelines."
        },
        {
            category: "systems",
            status: "read",
            title: "Flux: Fast Software-based Communication Overlap on GPUs through Kernel Fusion",
            venue: "—",
            paper: "https://arxiv.org/pdf/2406.06858v1",
            note: "",
            takeaway: "Fuses communication into compute kernels for near-perfect overlap — no extra GPU streams needed."
        },
        {
            category: "systems",
            status: "read",
            title: "DeepEP: An Efficient Expert-Parallel Communication Library",
            venue: "—",
            paper: "https://github.com/deepseek-ai/DeepEP",
            note: "",
            takeaway: "NVSHMEM-based expert-parallel comm library — hybrid CUDA IPC/RDMA for intra/inter-node MoE dispatch."
        },
        {
            category: "systems",
            status: "toread",
            title: "Centauri: Enabling Efficient Scheduling for Communication-Computation Overlap in Large Model Training via Communication Partitioning",
            venue: "ASPLOS'24",
            paper: "https://dl.acm.org/doi/pdf/10.1145/3620666.3651379",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Comet: Fine-grained Computation-communication Overlapping for Mixture-of-Experts",
            venue: "—",
            paper: "https://arxiv.org/pdf/2502.19811",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "TileLink: Generating Efficient Compute-Communication Overlapping Kernels using Tile-Centric Primitives",
            venue: "MLSys'25",
            paper: "https://arxiv.org/pdf/2503.20313",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Triton-distributed: Programming Overlapping Kernels on Distributed AI Systems with the Triton Compiler",
            venue: "—",
            paper: "https://arxiv.org/pdf/2504.19442",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "FlashOverlap: A Lightweight Design for Efficiently Overlapping Communication and Computation",
            venue: "EuroSys'25",
            paper: "https://arxiv.org/pdf/2504.19519",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "TokenWeave: Efficient Compute-Communication Overlap for Distributed LLM Inference",
            venue: "—",
            paper: "https://arxiv.org/pdf/2505.11329",
            note: "",
            takeaway: ""
        },
        // ── Deep Learning ──
        {
            category: "deep-learning",
            status: "read",
            title: "Attention Is All You Need",
            venue: "NeurIPS'17",
            paper: "https://github.com/KuangjuX/Paper-reading/blob/main/papers/DL/Attention-NIPS.pdf",
            note: "https://github.com/KuangjuX/Paper-reading/issues/32",
            takeaway: "The paper that started it all — self-attention replaces recurrence for sequence modeling."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "Big Bird: Transformers for Longer Sequences",
            venue: "NeurIPS'20",
            paper: "https://github.com/KuangjuX/Paper-reading/blob/main/papers/DL/bigbird.pdf",
            note: "https://github.com/KuangjuX/Notes/blob/main/DeepLearning/SparseAttention.md",
            takeaway: "Sparse attention via random + window + global tokens — linear complexity with theoretical guarantees."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            venue: "NeurIPS'22",
            paper: "https://proceedings.neurips.cc/paper_files/paper/2022/file/67d57c32e20fd0a7a302cb81d36e40d5-Paper-Conference.pdf",
            note: "https://github.com/KuangjuX/Notes/blob/main/DeepLearning/FlashAttention.md",
            takeaway: "IO-aware tiling of attention — exact computation with O(N) memory instead of O(N²)."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning",
            venue: "arXiv",
            paper: "https://arxiv.org/pdf/2307.08691.pdf",
            note: "https://github.com/KuangjuX/Notes/blob/main/DeepLearning/FlashAttention.md",
            takeaway: "Better work partitioning across warps and thread blocks — 2x faster than FlashAttention-1."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "Flash-Decoding for Long-Context Inference",
            venue: "Blog",
            paper: "https://crfm.stanford.edu/2023/10/12/flashdecoding.html",
            note: "https://github.com/KuangjuX/Notes/blob/main/DeepLearning/FlashDecoding.md",
            takeaway: "Parallelizes across KV-cache length during decoding — critical for long-context single-query inference."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "A Survey of Efficient Attention Methods: Hardware-efficient, Sparse, Compact, and Linear Attention",
            venue: "—",
            paper: "https://attention-survey.github.io/files/Attention_Survey.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "read",
            title: "Gated Linear Attention Transformers with Hardware-Efficient Training",
            venue: "arXiv",
            paper: "https://github.com/KuangjuX/Paper-reading/blob/main/papers/DL/GLA.pdf",
            note: "https://github.com/KuangjuX/Notes/blob/main/DeepLearning/LinearAttention.md",
            takeaway: "Gated linear attention achieves sub-quadratic complexity while maintaining expressiveness via gating."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "Kimi Linear Attention: An Expressive, Efficient Attention Architecture",
            venue: "arXiv'25",
            paper: "https://arxiv.org/pdf/2510.26692",
            note: "",
            takeaway: "Production-grade linear attention that matches Transformer quality at Kimi's scale."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models",
            venue: "arXiv'25",
            paper: "https://arxiv.org/pdf/2512.02556",
            note: "",
            takeaway: "MoE architecture with multi-head latent attention and auxiliary-loss-free load balancing."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "On-Device Training Under 256KB Memory",
            venue: "NeurIPS'22",
            paper: "https://arxiv.org/pdf/2206.15472.pdf",
            note: "",
            takeaway: "Quantization-aware scaling and sparse updates enable DNN training on microcontrollers."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "PockEngine: Sparse and Efficient Fine-tuning in a Pocket",
            venue: "MICRO'23",
            paper: "https://github.com/KuangjuX/Paper-reading/blob/main/papers/mlsys/on-device/pockengine.pdf",
            note: "https://github.com/KuangjuX/Paper-reading/issues/29",
            takeaway: "Compilation-based approach to efficient on-device fine-tuning with structured sparsity."
        },
        // ── OS / Hypervisor ──
        {
            category: "systems",
            status: "read",
            title: "AVO: Agentic Variation Operators for Autonomous Evolutionary Search",
            venue: "arXiv'26",
            paper: "https://arxiv.org/abs/2603.24517",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/llm-for-kernel/avo.md",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Understanding Latency Hiding on GPUs",
            venue: "—",
            paper: "https://www2.eecs.berkeley.edu/Pubs/TechRpts/2016/EECS-2016-143.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Categorical Foundations for CuTe Layouts",
            venue: "—",
            paper: "https://research.colfax-intl.com/categorical-foundations-for-cute-layouts/",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "read",
            title: "Honeycomb: Secure and Efficient GPU Executions via Static Validation",
            venue: "OSDI'23",
            paper: "https://github.com/KuangjuX/Paper-reading/blob/main/papers/hypervisor/osdi23-mai.pdf",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/hypervisor/honeycomb/honeycomb.md",
            takeaway: "Static validation of GPU commands enables secure GPU sharing without runtime overhead."
        },
        {
            category: "systems",
            status: "read",
            title: "HIDA: A Hierarchical Dataflow Compiler for High-Level Synthesis",
            venue: "ASPLOS'24",
            paper: "https://github.com/KuangjuX/Paper-reading/blob/main/papers/compiler/asplos24-hida.pdf",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/compiler/hida/hida.md",
            takeaway: ""
        },
        {
            category: "systems",
            status: "read",
            title: "RedLeaf: Isolation and Communication in a Safe Operating System",
            venue: "OSDI'20",
            paper: "https://www.usenix.org/system/files/osdi20-narayanan_vikram.pdf",
            note: "https://github.com/KuangjuX/system-notes/blob/main/paper-notes/os/RedLeaf.md",
            takeaway: "Language-based isolation (Rust) as an alternative to hardware protection for OS subsystem isolation."
        },
        {
            category: "systems",
            status: "read",
            title: "Theseus: an Experiment in Operating System Structure and State Management",
            venue: "OSDI'20",
            paper: "https://www.usenix.org/system/files/osdi20-boos.pdf",
            note: "",
            takeaway: "Intralingual OS design in Rust — every component is a swappable crate with explicit state management."
        },
        {
            category: "systems",
            status: "read",
            title: "Unikraft: Fast, Specialized Unikernels the Easy Way",
            venue: "EuroSys'21",
            paper: "https://dl.acm.org/doi/pdf/10.1145/3447786.3456248",
            note: "https://github.com/KuangjuX/paper-reading/issues/9",
            takeaway: "Modular unikernel build system — pick only the OS components you need for minimal overhead."
        },
        {
            category: "systems",
            status: "read",
            title: "The Demikernel Datapath OS Architecture for Microsecond-scale Datacenter Systems",
            venue: "SOSP'21",
            paper: "https://irenezhang.net/papers/demikernel-sosp21.pdf",
            note: "https://github.com/KuangjuX/system-notes/blob/main/paper-notes/os/Demikernel.md",
            takeaway: "Datapath OS that bypasses the kernel for microsecond-scale I/O — portable across DPDK/RDMA backends."
        },
        {
            category: "systems",
            status: "read",
            title: "HyperBench: A Benchmark Suite for Virtualization Capabilities",
            venue: "—",
            paper: "https://dl.acm.org/doi/pdf/10.1145/3341617.3326138",
            note: "https://github.com/KuangjuX/system-notes/blob/main/paper-notes/hypervisor/Hyperbench-A-Benchmark-Suite-for-Virtualization-Capabilities.md",
            takeaway: ""
        },
        {
            category: "systems",
            status: "read",
            title: "DuVisor: a User-level Hypervisor Through Delegated Virtualization",
            venue: "arXiv'22",
            paper: "https://arxiv.org/pdf/2201.09652.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "read",
            title: "AvA: Accelerated Virtualization of Accelerators",
            venue: "ASPLOS'22",
            paper: "https://dl.acm.org/doi/pdf/10.1145/3373376.3378466",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "read",
            title: "Security and Performance in the Delegated User-level Virtualization",
            venue: "OSDI'23",
            paper: "https://www.usenix.org/system/files/osdi23-chen.pdf",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/hypervisor/duvisor/duvisor.md",
            takeaway: ""
        },
        {
            category: "systems",
            status: "read",
            title: "System Virtualization for Neural Processing Units",
            venue: "HotOS'23",
            paper: "https://sigops.org/s/conferences/hotos/2023/papers/xue.pdf",
            note: "",
            takeaway: "Early exploration of NPU virtualization challenges — scheduling, memory isolation, and multiplexing."
        },
        {
            category: "systems",
            status: "read",
            title: "Nephele: Extending Virtualization Environments for Cloning Unikernel-based VMs",
            venue: "EuroSys'23",
            paper: "http://nets.cs.pub.ro/~costin/files/nephele.pdf",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/hypervisor/nephele/nephele.md",
            takeaway: "Fast VM cloning for unikernels — enables FaaS-style rapid instantiation."
        },
        {
            category: "systems",
            status: "read",
            title: "Honeycomb: Secure and Efficient GPU Executions via Static Validation",
            venue: "OSDI'23",
            paper: "https://github.com/KuangjuX/Paper-reading/blob/main/papers/hypervisor/osdi23-mai.pdf",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/hypervisor/honeycomb/honeycomb.md",
            takeaway: "Static validation of GPU commands enables secure GPU sharing without runtime overhead."
        },
        {
            category: "systems",
            status: "read",
            title: "A First Look at RISC-V Virtualization from an Embedded Systems Perspective",
            venue: "TC'21",
            paper: "https://arxiv.org/pdf/2103.14951.pdf",
            note: "",
            takeaway: "First systematic evaluation of RISC-V H-extension for embedded hypervisors."
        },
        {
            category: "systems",
            status: "read",
            title: "CVA6 RISC-V Virtualization: Architecture, Microarchitecture, and Design Space Exploration",
            venue: "arXiv'23",
            paper: "https://arxiv.org/pdf/2302.02969.pdf",
            note: "",
            takeaway: "Hardware implementation of RISC-V H-extension in CVA6 — design trade-offs for two-stage page tables."
        },
    ]
};
