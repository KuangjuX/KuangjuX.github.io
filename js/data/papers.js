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
            status: "toread",
            title: "The Curious Case of Neural Text Degeneration",
            venue: "系统比较 greedy、beam、top-k 与 nucleus sampling，理解生成质量、随机性和退化",
            paper: "https://arxiv.org/abs/1904.09751",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Fast Inference from Transformers via Speculative Decoding",
            venue: "draft–verify 与拒绝采样；在保持目标分布不变的前提下并行生成多个 token",
            paper: "https://proceedings.mlr.press/v202/leviathan23a.html",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Accelerating Large Language Model Decoding with Speculative Sampling",
            venue: "speculative sampling 的独立推导与工程验证，适合和上一论文对照阅读",
            paper: "https://arxiv.org/abs/2302.01318",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "SpecInfer: Accelerating Large Language Model Serving with Tree-based Speculative Inference and Verification",
            venue: "用候选树提高并行验证宽度，连接解码算法与 serving batch",
            paper: "https://arxiv.org/abs/2305.09781",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Medusa: Simple LLM Inference Acceleration Framework with Multiple Decoding Heads",
            venue: "不依赖独立 draft model 的多头预测与 tree attention",
            paper: "https://arxiv.org/abs/2401.10774",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Break the Sequential Dependency of LLM Inference Using Lookahead Decoding",
            venue: "从 Jacobi iteration 理解无额外模型的并行候选生成",
            paper: "https://arxiv.org/abs/2402.02057",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty",
            venue: "在 feature space 自回归预测，理解高接受率 drafter 的训练方法",
            paper: "https://arxiv.org/abs/2401.15077",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Better & Faster Large Language Models via Multi-token Prediction",
            venue: "训练时预测多个未来 token，将训练目标与推理解码并行性连接起来",
            paper: "https://arxiv.org/abs/2404.19737",
            note: "",
            takeaway: ""
        },
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
            title: "MiniMax Sparse Attention",
            venue: "arXiv'26",
            paper: "https://arxiv.org/abs/2606.13392",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/llm/minimax-msa/msa.md",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Orca: A Distributed Serving System for Transformer-Based Generative Models",
            venue: "OSDI'22",
            paper: "https://www.usenix.org/conference/osdi22/presentation/yu",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Efficient Memory Management for Large Language Model Serving with PagedAttention",
            venue: "SOSP'23",
            paper: "https://arxiv.org/abs/2309.06180",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "FlexGen: High-Throughput Generative Inference of Large Language Models with a Single GPU",
            venue: "ICML'23",
            paper: "https://proceedings.mlr.press/v202/sheng23a.html",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "AlpaServe: Statistical Multiplexing with Model Parallelism for Deep Learning Serving",
            venue: "OSDI'23",
            paper: "https://www.usenix.org/conference/osdi23/presentation/li-zhouhan",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "FastServe: Fast Distributed Inference Serving for Large Language Models",
            venue: "arXiv'23",
            paper: "https://arxiv.org/abs/2305.05920",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "InferCept: Efficient Interleaving of Inference and Decoding for LLM Serving",
            venue: "ICML'24",
            paper: "https://arxiv.org/abs/2307.07694",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Punica: Multi-Tenant LoRA Serving",
            venue: "MLSys'24",
            paper: "https://arxiv.org/abs/2310.18547",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "S-LoRA: Serving Thousands of Concurrent LoRA Adapters",
            venue: "MLSys'24",
            paper: "https://arxiv.org/abs/2311.03285",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Splitwise: Efficient Generative LLM Inference Using Phase Splitting",
            venue: "ISCA'24",
            paper: "https://arxiv.org/abs/2311.18677",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve",
            venue: "OSDI'24",
            paper: "https://arxiv.org/abs/2403.02310",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Llumnix: Dynamic Scheduling for Large Language Model Serving",
            venue: "OSDI'24",
            paper: "https://arxiv.org/abs/2406.03243",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Preble: Efficient Distributed Prompt Scheduling for LLM Serving",
            venue: "arXiv'24",
            paper: "https://arxiv.org/abs/2407.00023",
            note: "",
            takeaway: ""
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
            status: "toread",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            venue: "混合精度分解 activation outlier，是理解 LLM INT8 的起点",
            paper: "https://arxiv.org/abs/2208.07339",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            venue: "基于近似二阶信息的 one-shot weight-only PTQ",
            paper: "https://arxiv.org/abs/2210.17323",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "SmoothQuant: Accurate and Efficient Post-Training Quantization for Large Language Models",
            venue: "用等价缩放把 activation 量化难度迁移到 weight，形成 W8A8 路线",
            paper: "https://arxiv.org/abs/2211.10438",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration",
            venue: "用 activation 识别显著通道并保护关键权重，形成主流 W4A16 路线",
            paper: "https://arxiv.org/abs/2306.00978",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            venue: "将少量 outlier 与低比特权重分离，理解稀疏异常值处理",
            paper: "https://arxiv.org/abs/2306.03078",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "OmniQuant: Omnidirectionally Calibrated Quantization for Large Language Models",
            venue: "通过可学习的 clipping 与等价变换改善低比特 PTQ",
            paper: "https://arxiv.org/abs/2308.13137",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "AQLM: Extreme Compression of Large Language Models via Additive Quantization",
            venue: "additive codebook 与极低 bit/weight，连接压缩算法和解码 kernel",
            paper: "https://arxiv.org/abs/2401.06118",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "KIVI: A Tuning-Free Asymmetric 2bit Quantization for KV Cache",
            venue: "区分 K/V 的通道与 token 统计特性，理解 KV cache 低比特化",
            paper: "https://arxiv.org/abs/2402.02750",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "QuaRot: Outlier-Free 4-Bit Inference in Rotated LLMs",
            venue: "用 Hadamard rotation 消除 outlier，适合从算法追到融合 kernel",
            paper: "https://arxiv.org/abs/2404.00456",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "The Era of 1-bit LLMs: All Large Language Models are in 1.58 Bits",
            venue: "BitNet b1.58 与三值权重，理解量化感知训练的架构路线",
            paper: "https://arxiv.org/abs/2402.17764",
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
            title: "Event Tensor: A Unified Abstraction for Compiling Dynamic Megakernel",
            venue: "MLSys'26",
            paper: "https://arxiv.org/abs/2604.13327",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/llm/event-tensor/event-tensor.md",
            takeaway: ""
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
            title: "MegaMoE (fused MoE megakernel, DeepGEMM)",
            venue: "DeepGEMM PR",
            paper: "",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/llm/megamoe/megamoe.md",
            takeaway: ""
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
            title: "Accurate, Large Minibatch SGD: Training ImageNet in 1 Hour",
            venue: "global batch、线性学习率缩放与 warmup；理解数据并行扩展为何会改变优化行为",
            paper: "https://arxiv.org/abs/1706.02677",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Mixed Precision Training",
            venue: "FP16 master weights、loss scaling 与数值范围；连接 Tensor Core 吞吐和收敛",
            paper: "https://arxiv.org/abs/1710.03740",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Training Deep Nets with Sublinear Memory Cost",
            venue: "activation checkpointing/rematerialization 的经典计算–显存交换",
            paper: "https://arxiv.org/abs/1604.06174",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Reducing Activation Recomputation in Large Transformer Models",
            venue: "sequence parallelism 与 selective recomputation，解释 Megatron 的 activation 内存优化",
            paper: "https://arxiv.org/abs/2205.05198",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "GaLore: Memory-Efficient LLM Training by Gradient Low-Rank Projection",
            venue: "对梯度做低秩投影以降低 optimizer state 和训练显存",
            paper: "https://arxiv.org/abs/2403.03507",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "PyTorch Distributed: Experiences on Accelerating Data Parallel Training",
            venue: "VLDB'20",
            paper: "https://www.vldb.org/pvldb/vol13/p3005-li.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "GPipe: Efficient Training of Giant Neural Networks using Pipeline Parallelism",
            venue: "NeurIPS'19",
            paper: "https://arxiv.org/abs/1811.06965",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "PipeDream: Generalized Pipeline Parallelism for DNN Training",
            venue: "SOSP'19",
            paper: "https://dl.acm.org/doi/10.1145/3341301.3359646",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism",
            venue: "arXiv'19",
            paper: "https://arxiv.org/abs/1909.08053",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
            venue: "SC'20",
            paper: "https://arxiv.org/abs/1910.02054",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "ZeRO-Offload: Democratizing Billion-Scale Model Training",
            venue: "USENIX ATC'21",
            paper: "https://www.usenix.org/conference/atc21/presentation/ren-jie",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Memory-Efficient Pipeline-Parallel DNN Training",
            venue: "ICML'21",
            paper: "https://proceedings.mlr.press/v139/narayanan21a.html",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning",
            venue: "SC'21",
            paper: "https://arxiv.org/abs/2104.07857",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM",
            venue: "SC'21",
            paper: "https://arxiv.org/abs/2104.04473",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "GSPMD: General and Scalable Parallelization for ML Computation Graphs",
            venue: "arXiv'21",
            paper: "https://arxiv.org/abs/2105.04663",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Alpa: Automating Inter- and Intra-Operator Parallelism for Distributed Deep Learning",
            venue: "OSDI'22",
            paper: "https://www.usenix.org/conference/osdi22/presentation/zheng-lianmin",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "DeepSpeed Ulysses: System Optimizations for Enabling Training of Extreme Long Sequence Transformer Models",
            venue: "arXiv'23",
            paper: "https://arxiv.org/abs/2309.14509",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Ring Attention with Blockwise Transformers for Near-Infinite Context",
            venue: "ICLR'24",
            paper: "https://arxiv.org/abs/2310.01889",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Oobleck: Resilient Distributed Training of Large Models Using Pipeline Templates",
            venue: "SOSP'23",
            paper: "https://arxiv.org/abs/2309.08125",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "MegaScale: Scaling Large Language Model Training to More Than 10,000 GPUs",
            venue: "NSDI'24",
            paper: "https://www.usenix.org/conference/nsdi24/presentation/jiang-ziheng",
            note: "",
            takeaway: ""
        },
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
            title: "PithTrain: A Compact and Agent-Native MoE Training System",
            venue: "arXiv'26",
            paper: "https://arxiv.org/abs/2605.31463",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/llm/pithtrain/pithtrain.md",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer",
            venue: "现代稀疏 MoE 的起点：top-k gate、稀疏激活与负载均衡",
            paper: "https://arxiv.org/abs/1701.06538",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding",
            venue: "将 MoE、SPMD sharding 和大规模 Transformer 训练结合",
            paper: "https://arxiv.org/abs/2006.16668",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "BASE Layers: Simplifying Training of Large, Sparse Models",
            venue: "用 balanced assignment 避免额外负载均衡损失",
            paper: "https://arxiv.org/abs/2103.16716",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "GLaM: Efficient Scaling of Language Models with Mixture-of-Experts",
            venue: "大规模稀疏语言模型的质量、计算与能耗权衡",
            paper: "https://arxiv.org/abs/2112.06905",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "DeepSpeed-MoE: Advancing Mixture-of-Experts Inference and Training to Power Next-Generation AI Scale",
            venue: "expert parallel、通信与 MoE inference/training 系统化设计",
            paper: "https://arxiv.org/abs/2201.05596",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "FasterMoE: Modeling and Optimizing Training of Large-Scale Dynamic Pre-Trained Models",
            venue: "动态路由下的 shadowing 与拓扑感知通信优化",
            paper: "https://arxiv.org/abs/2202.11436",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Tutel: Adaptive Mixture-of-Experts at Scale",
            venue: "自适应并行、all-to-all 与 kernel 优化的完整 MoE 系统",
            paper: "https://arxiv.org/abs/2206.03382",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "MegaBlocks: Efficient Sparse Training with Mixture-of-Experts",
            venue: "将 token dropping 问题转成 block-sparse GEMM，最贴近算子视角",
            paper: "https://arxiv.org/abs/2211.15841",
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
            status: "toread",
            title: "Fine-Tuning Language Models from Human Preferences",
            venue: "将 reward model 与 PPO 用于语言模型偏好优化的早期完整方案",
            paper: "https://arxiv.org/abs/1909.08593",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Learning to Summarize from Human Feedback",
            venue: "展示偏好数据、reward model 和 RL 在真实生成任务中的规模化",
            paper: "https://arxiv.org/abs/2009.01325",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            venue: "冻结主模型，仅训练可学习 prefix 的参数高效微调",
            paper: "https://arxiv.org/abs/2101.00190",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "The Power of Scale for Parameter-Efficient Prompt Tuning",
            venue: "soft prompt 与模型规模关系，适合理解 PEFT 的表达能力",
            paper: "https://arxiv.org/abs/2104.08691",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            venue: "冻结权重并注入低秩更新，连接矩阵秩、训练显存和多租户推理",
            paper: "https://arxiv.org/abs/2106.09685",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Proximal Policy Optimization Algorithms",
            venue: "RLHF 所需的最低限度策略优化基础：ratio、advantage 与 clipping",
            paper: "https://arxiv.org/abs/1707.06347",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Finetuned Language Models Are Zero-Shot Learners",
            venue: "FLAN 与 instruction tuning，说明任务混合如何产生泛化能力",
            paper: "https://arxiv.org/abs/2109.01652",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Training Language Models to Follow Instructions with Human Feedback",
            venue: "InstructGPT 的 SFT → reward model → PPO 三阶段链路",
            paper: "https://arxiv.org/abs/2203.02155",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            venue: "self-critique、revision 与 RLAIF，把安全原则引入后训练",
            paper: "https://arxiv.org/abs/2212.08073",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Self-Instruct: Aligning Language Models with Self-Generated Instructions",
            venue: "自生成、过滤和扩增指令数据的经典流程",
            paper: "https://arxiv.org/abs/2212.10560",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "The Flan Collection: Designing Data and Methods for Effective Instruction Tuning",
            venue: "系统研究任务混合、模板、CoT 数据与 instruction tuning 配方",
            paper: "https://arxiv.org/abs/2301.13688",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            venue: "NF4、double quantization、paged optimizer 与 LoRA 的组合",
            paper: "https://arxiv.org/abs/2305.14314",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "LIMA: Less Is More for Alignment",
            venue: "少量高质量监督数据与大规模预训练知识之间的分工",
            paper: "https://arxiv.org/abs/2305.11206",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            venue: "将显式 reward model + PPO 化为稳定的 pairwise classification loss",
            paper: "https://arxiv.org/abs/2305.18290",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "RRHF: Rank Responses to Align Language Models with Human Feedback",
            venue: "用候选排序损失统一多种反馈来源",
            paper: "https://arxiv.org/abs/2304.05302",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "A General Theoretical Paradigm to Understand Learning from Human Preferences",
            venue: "IPO 与偏好优化的理论视角，理解 DPO 类方法的过拟合和正则化",
            paper: "https://arxiv.org/abs/2310.12036",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "KTO: Model Alignment as Prospect Theoretic Optimization",
            venue: "只需 desirable/undesirable 标签的非成对偏好学习",
            paper: "https://arxiv.org/abs/2402.01306",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "ORPO: Monolithic Preference Optimization without Reference Model",
            venue: "将 SFT 与偏好约束合并，移除独立 reference model",
            paper: "https://arxiv.org/abs/2403.07691",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "SimPO: Simple Preference Optimization with a Reference-Free Reward",
            venue: "reference-free、长度归一化 reward 与 margin objective",
            paper: "https://arxiv.org/abs/2405.14734",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models",
            venue: "GRPO、数学数据与可验证奖励，是 reasoning RL 的关键前置",
            paper: "https://arxiv.org/abs/2402.03300",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning",
            venue: "大规模 reasoning RL、冷启动数据与蒸馏路线",
            paper: "https://arxiv.org/abs/2501.12948",
            note: "",
            takeaway: ""
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
            status: "toread",
            title: "Learning Representations by Back-Propagating Errors",
            venue: "从局部算子 backward 上升到计算图链式法则、梯度流和 activation 保存",
            paper: "https://www.nature.com/articles/323533a0",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Understanding the Difficulty of Training Deep Feedforward Neural Networks",
            venue: "Xavier initialization 与方差传播，理解初始化为何影响深层网络稳定性",
            paper: "https://proceedings.mlr.press/v9/glorot10a.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Dropout: A Simple Way to Prevent Neural Networks from Overfitting",
            venue: "经典正则化、train/eval 行为差异与随机 mask",
            paper: "https://jmlr.org/papers/v15/srivastava14a.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift",
            venue: "对比 batch statistics 与 LayerNorm，理解同步 BN 和训练/推理差异",
            paper: "https://proceedings.mlr.press/v37/ioffe15.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Deep Residual Learning for Image Recognition",
            venue: "残差连接与深层梯度传播，是 Transformer residual stream 的结构前置",
            paper: "https://arxiv.org/abs/1512.03385",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Adam: A Method for Stochastic Optimization",
            venue: "一阶/二阶矩、bias correction 与 optimizer state 显存",
            paper: "https://arxiv.org/abs/1412.6980",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Decoupled Weight Decay Regularization",
            venue: "区分 L2 regularization 与 AdamW 的 decoupled weight decay",
            paper: "https://arxiv.org/abs/1711.05101",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Layer Normalization",
            venue: "单样本归一化、训练稳定性与 Transformer 中的 reduction/fusion",
            paper: "https://arxiv.org/abs/1607.06450",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Root Mean Square Layer Normalization",
            venue: "省去 re-centering 的 RMSNorm，连接现代 LLM 结构与高效 kernel",
            paper: "https://arxiv.org/abs/1910.07467",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Adafactor: Adaptive Learning Rates with Sublinear Memory Cost",
            venue: "对二阶矩做 factored approximation，理解 optimizer memory 优化",
            paper: "https://proceedings.mlr.press/v80/shazeer18a.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Large Batch Optimization for Deep Learning: Training BERT in 76 Minutes",
            venue: "LAMB 的 layer-wise scaling 与超大 batch 训练",
            paper: "https://arxiv.org/abs/1904.00962",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Tensor Programs V: Tuning Large Neural Networks via Zero-Shot Hyperparameter Transfer",
            venue: "μP 与跨模型规模超参数迁移，连接 scaling experiment 和训练配方",
            paper: "https://arxiv.org/abs/2203.03466",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Sophia: A Scalable Stochastic Second-order Optimizer for Language Model Pre-training",
            venue: "低成本二阶曲率估计与 per-coordinate clipping",
            paper: "https://arxiv.org/abs/2305.14342",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "A Neural Probabilistic Language Model",
            venue: "embedding、条件概率与 next-token language modeling 的早期完整形式",
            paper: "https://www.jmlr.org/papers/v3/bengio03a.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Sequence to Sequence Learning with Neural Networks",
            venue: "自回归分解、teacher forcing、EOS 与 beam search 的基础",
            paper: "https://proceedings.neurips.cc/paper_files/paper/2014/hash/5a18e133cbf9f257297f410bb7eca942-Abstract.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Neural Machine Translation by Jointly Learning to Align and Translate",
            venue: "additive attention 与 encoder–decoder alignment，理解 Transformer 之前的问题",
            paper: "https://arxiv.org/abs/1409.0473",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Neural Machine Translation of Rare Words with Subword Units",
            venue: "BPE、词表大小、序列长度和输出 softmax 成本之间的关系",
            paper: "https://aclanthology.org/P16-1162/",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "SentencePiece: A Simple and Language Independent Subword Tokenizer and Detokenizer for Neural Text Processing",
            venue: "从 raw text 训练 BPE/unigram tokenizer，理解现代 tokenizer pipeline",
            paper: "https://aclanthology.org/D18-2012/",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Improving Language Understanding by Generative Pre-Training",
            venue: "GPT-1 与 decoder-only 预训练–微调范式",
            paper: "https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
            venue: "encoder-only、masked LM 与 pretrain–finetune 范式",
            paper: "https://aclanthology.org/N19-1423/",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Language Models are Unsupervised Multitask Learners",
            venue: "GPT-2、zero-shot transfer 与 WebText 数据路线",
            paper: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Language Models are Few-Shot Learners",
            venue: "GPT-3、in-context learning 与 decoder-only scaling",
            paper: "https://proceedings.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer",
            venue: "T5、span corruption、C4 与统一 text-to-text interface",
            paper: "https://jmlr.org/papers/v21/20-074.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "GLU Variants Improve Transformer",
            venue: "SwiGLU/GEGLU 与 gated FFN，解释现代 LLM 中三路投影和逐元素乘",
            paper: "https://arxiv.org/abs/2002.05202",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "RoFormer: Enhanced Transformer with Rotary Position Embedding",
            venue: "RoPE 的旋转与相对位置语义，以及 Q/K 融合实现",
            paper: "https://arxiv.org/abs/2104.09864",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Train Short, Test Long: Attention with Linear Biases Enables Input Length Extrapolation",
            venue: "ALiBi 与无需显式位置 embedding 的长度外推",
            paper: "https://arxiv.org/abs/2108.12409",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "PaLM: Scaling Language Modeling with Pathways",
            venue: "大规模 dense LLM、Pathways 并行与训练行为分析",
            paper: "https://arxiv.org/abs/2204.02311",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            venue: "将 RMSNorm、SwiGLU、RoPE、tokenizer、数据与训练配方串成现代 LLM",
            paper: "https://arxiv.org/abs/2302.13971",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Llama 2: Open Foundation and Fine-Tuned Chat Models",
            venue: "预训练、SFT、RLHF、安全评测与 chat model 的完整技术报告",
            paper: "https://arxiv.org/abs/2307.09288",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Mistral 7B",
            venue: "sliding-window attention、GQA 与 rolling buffer KV cache",
            paper: "https://arxiv.org/abs/2310.06825",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models",
            venue: "shared expert、细粒度 expert segmentation 与稀疏计算配比",
            paper: "https://arxiv.org/abs/2401.06066",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Mixtral of Experts",
            venue: "实用 sparse MoE LLM 的结构、路由和质量–计算权衡",
            paper: "https://arxiv.org/abs/2401.04088",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "OLMo: Accelerating the Science of Language Models",
            venue: "开放数据、训练代码、checkpoint、日志和评测的端到端案例",
            paper: "https://aclanthology.org/2024.acl-long.841/",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Scaling Laws for Neural Language Models",
            venue: "建立 loss 与参数量、数据量、训练算力之间的幂律关系",
            paper: "https://arxiv.org/abs/2001.08361",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Training Compute-Optimal Large Language Models",
            venue: "Chinchilla scaling 与 compute-optimal 参数/token 配比",
            paper: "https://arxiv.org/abs/2203.15556",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Scaling Data-Constrained Language Models",
            venue: "数据受限和重复 epoch 下的 scaling behavior",
            paper: "https://arxiv.org/abs/2305.16264",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "The Pile: An 800GB Dataset of Diverse Text for Language Modeling",
            venue: "多域预训练语料组成、治理与 benchmark contamination",
            paper: "https://arxiv.org/abs/2101.00027",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Deduplicating Training Data Makes Language Models Better",
            venue: "去重对记忆、评测污染、训练效率和质量的影响",
            paper: "https://arxiv.org/abs/2107.06499",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Data Selection for Language Models via Importance Resampling",
            venue: "DSIR：用目标分布重要性重采样选择预训练数据",
            paper: "https://arxiv.org/abs/2302.03169",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "DoReMi: Optimizing Data Mixtures Speeds Up Language Model Pretraining",
            venue: "将多域数据配比转化为 group DRO 优化问题",
            paper: "https://arxiv.org/abs/2305.10429",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "The RefinedWeb Dataset for Falcon LLM: Outperforming Curated Corpora with Web Data, and Web Data Only",
            venue: "大规模网页过滤与去重的生产级案例",
            paper: "https://arxiv.org/abs/2306.01116",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Textbooks Are All You Need",
            venue: "合成高质量数据、数据质量与小模型能力的交换关系",
            paper: "https://arxiv.org/abs/2306.11644",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Dolma: An Open Corpus of Three Trillion Tokens for Language Model Pretraining Research",
            venue: "开放语料的来源、过滤、去重、PII 与治理流程",
            paper: "https://arxiv.org/abs/2402.00159",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "DataComp-LM: In Search of the Next Generation of Training Sets for Language Models",
            venue: "受控比较过滤、去重和数据混合策略",
            paper: "https://arxiv.org/abs/2406.11794",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "The FineWeb Datasets: Decanting the Web for the Finest Text Data at Scale",
            venue: "现代网页清洗、质量过滤与 FineWeb-Edu 配方",
            paper: "https://arxiv.org/abs/2406.17557",
            note: "",
            takeaway: ""
        },
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
            status: "toread",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            venue: "MQA 原始论文；理解所有 Query heads 共享 KV 与 decode 带宽瓶颈",
            paper: "https://arxiv.org/abs/1911.02150",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints",
            venue: "建立 MHA–GQA–MQA 的连续关系；理解 MSA 为什么按 GQA group 独立选择",
            paper: "https://arxiv.org/abs/2305.13245",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model",
            venue: "MLA、latent KV compression、decoupled RoPE，以及 `uk_proj` / `uo_proj` 的矩阵吸收",
            paper: "https://arxiv.org/abs/2405.04434",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "SeerAttention: Learning Intrinsic Sparse Attention in Your LLMs",
            venue: "可学习的 block gate、自蒸馏与 block-sparse kernel；最接近 MSA Indexer 的对照之一",
            paper: "https://arxiv.org/abs/2410.13276",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention",
            venue: "同时研究压缩、选择、局部窗口与硬件对齐；理解 DSA 的算法–kernel 协同背景",
            paper: "https://arxiv.org/abs/2502.11089",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "MoBA: Mixture of Block Attention for Long-Context LLMs",
            venue: "MoE 风格的 block routing；适合对比 MSA 的 block max-pooling 与 group-specific selection",
            paper: "https://arxiv.org/abs/2502.13189",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "MInference 1.0: Accelerating Pre-filling for Long-Context LLMs via Dynamic Sparse Attention",
            venue: "无需重新训练的动态稀疏 prefill；对比学习式 Indexer 与预设 attention pattern",
            paper: "https://arxiv.org/abs/2407.02490",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "SpargeAttn: Accurate Sparse Attention Accelerating Any Model Inference",
            venue: "两阶段在线过滤与 softmax-aware pruning；理解推理期稀疏化的另一条路线",
            paper: "https://arxiv.org/abs/2502.18137",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Generating Long Sequences with Sparse Transformers",
            venue: "固定 factorized sparse pattern 与早期 block-sparse kernel；理解“规则但不自适应”的稀疏性",
            paper: "https://arxiv.org/abs/1904.10509",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Longformer: The Long-Document Transformer",
            venue: "local window + global token；理解局部先验和全局信息通路",
            paper: "https://arxiv.org/abs/2004.05150",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Reformer: The Efficient Transformer",
            venue: "LSH attention、bucket、排序和 reversible layers；理解动态候选集带来的数据重排成本",
            paper: "https://arxiv.org/abs/2001.04451",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Efficient Content-Based Sparse Attention with Routing Transformers",
            venue: "online k-means 内容路由；连接固定 sparse pattern 与 learned Indexer",
            paper: "https://arxiv.org/abs/2003.05997",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Sparser is Faster and Less is More: Efficient Sparse Attention for Long-Range Transformers",
            venue: "SparseK scoring network + differentiable Top-k；直接对比 MSA/DSA 的 hard Top-k + KL 路线",
            paper: "https://arxiv.org/abs/2406.16747",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Differentiable Top-k Operator with Optimal Transport",
            venue: "用熵正则 Optimal Transport 平滑 Top-k，理解连续松弛及其梯度",
            paper: "https://arxiv.org/abs/2002.06504",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Fast, Differentiable and Sparse Top-k: A Convex Analysis Perspective",
            venue: "从凸优化构造可微且真正稀疏的 Top-k，并讨论 GPU/TPU-friendly 算法",
            paper: "https://arxiv.org/abs/2302.01425",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Categorical Reparameterization with Gumbel-Softmax",
            venue: "离散采样的经典连续松弛；理解 temperature、annealing 与 soft-train/hard-inference 差异",
            paper: "https://arxiv.org/abs/1611.01144",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "read",
            title: "Distilling the Knowledge in a Neural Network",
            venue: "soft target、temperature 与 KL；理解主 attention 如何作为 Indexer teacher",
            paper: "https://arxiv.org/abs/1503.02531",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/llm/knowledge-distillation/distilling-the-knowledge-in-a-neural-network.md",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity",
            venue: "hard Top-1 routing、capacity 与 load-balancing loss；将 Indexer 理解成 memory router",
            paper: "https://arxiv.org/abs/2101.03961",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "ST-MoE: Designing Stable and Transferable Sparse Expert Models",
            venue: "Router 稳定性、辅助损失与 router z-loss；理解小型路由器如何影响整个模型训练",
            paper: "https://arxiv.org/abs/2202.08906",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Mixture-of-Experts with Expert Choice Routing",
            venue: "expert 选择 token 而非 token 选择 expert；类比 q2k→k2q reverse index 与 KV-owner 调度",
            paper: "https://arxiv.org/abs/2202.09368",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "From Softmax to Sparsemax: A Sparse Model of Attention and Multi-Label Classification",
            venue: "在概率 simplex 上产生精确零值并保留可计算 Jacobian",
            paper: "https://arxiv.org/abs/1602.02068",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Adaptively Sparse Transformers",
            venue: "使用可学习的 $\alpha$-entmax 让不同 attention heads 自适应选择稠密或稀疏分布",
            paper: "https://arxiv.org/abs/1909.00015",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Hyena Hierarchy: Towards Larger Convolutional Language Models",
            venue: "ICML'23",
            paper: "https://arxiv.org/abs/2302.10866",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "RWKV: Reinventing RNNs for the Transformer Era",
            venue: "EMNLP'23",
            paper: "https://arxiv.org/abs/2305.13048",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Retentive Network: A Successor to Transformer for Large Language Models",
            venue: "arXiv'23",
            paper: "https://arxiv.org/abs/2307.08621",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces",
            venue: "arXiv'23",
            paper: "https://arxiv.org/abs/2312.00752",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality",
            venue: "ICML'24",
            paper: "https://arxiv.org/abs/2405.21060",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "xLSTM: Extended Long Short-Term Memory",
            venue: "NeurIPS'24",
            paper: "https://arxiv.org/abs/2405.04517",
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
            title: "DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence",
            venue: "Tech report'26",
            paper: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/blob/main/DeepSeek_V4.pdf",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/llm/deepseek-v4/deepseek-v4.md",
            takeaway: ""
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
            status: "toread",
            title: "Measuring Massive Multitask Language Understanding",
            venue: "MMLU：用多学科考试题衡量知识与问题求解能力",
            paper: "https://arxiv.org/abs/2009.03300",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models",
            venue: "BIG-bench：异构任务与能力随规模变化",
            paper: "https://arxiv.org/abs/2206.04615",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Holistic Evaluation of Language Models",
            venue: "HELM：统一准确率、校准、鲁棒性、公平性、毒性和效率",
            paper: "https://arxiv.org/abs/2211.09110",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "TruthfulQA: Measuring How Models Mimic Human Falsehoods",
            venue: "将事实真实性与普通知识准确率区分开",
            paper: "https://arxiv.org/abs/2109.07958",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Training Verifiers to Solve Math Word Problems",
            venue: "GSM8K 与 verifier 路线，连接推理生成和可验证结果",
            paper: "https://arxiv.org/abs/2110.14168",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Measuring Mathematical Problem Solving With the MATH Dataset",
            venue: "竞赛数学、分步推理与严格答案评测",
            paper: "https://arxiv.org/abs/2103.03874",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Evaluating Large Language Models Trained on Code",
            venue: "HumanEval 与 pass@k，理解代码生成评测",
            paper: "https://arxiv.org/abs/2107.03374",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "GPQA: A Graduate-Level Google-Proof Q&A Benchmark",
            venue: "高难度、抗搜索污染的专家级科学问答",
            paper: "https://arxiv.org/abs/2311.12022",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Instruction-Following Evaluation for Large Language Models",
            venue: "IFEval：用可验证约束衡量 instruction following",
            paper: "https://arxiv.org/abs/2311.07911",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena",
            venue: "LLM judge、位置偏差、冗长偏差和 pairwise evaluation",
            paper: "https://arxiv.org/abs/2306.05685",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference",
            venue: "真实用户盲测、成对偏好与 Elo/Bradley–Terry 排名",
            paper: "https://arxiv.org/abs/2403.04132",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "RewardBench: Evaluating Reward Models for Language Modeling",
            venue: "对话、推理、安全等场景的 reward model 基准",
            paper: "https://arxiv.org/abs/2403.13787",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?",
            venue: "真实仓库、issue、patch 与测试驱动的软件工程评测",
            paper: "https://arxiv.org/abs/2310.06770",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code",
            venue: "持续更新题目与时间切分，降低代码评测污染",
            paper: "https://arxiv.org/abs/2403.07974",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Lessons from the Trenches on Reproducible Evaluation of Language Models",
            venue: "prompt、tokenizer、版本和实现细节对评测复现的影响",
            paper: "https://arxiv.org/abs/2405.14782",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "RealToxicityPrompts: Evaluating Neural Toxic Degeneration in Language Models",
            venue: "开放式生成中的 toxicity 测量与 prompt 条件效应",
            paper: "https://arxiv.org/abs/2009.11462",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Red Teaming Language Models with Language Models",
            venue: "用模型自动生成和筛选攻击，建立可扩展 red teaming",
            paper: "https://arxiv.org/abs/2202.03286",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Universal and Transferable Adversarial Attacks on Aligned Language Models",
            venue: "GCG 对抗后缀与可迁移 jailbreak 的基础工作",
            paper: "https://arxiv.org/abs/2307.15043",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "XSTest: A Test Suite for Identifying Exaggerated Safety Behaviours in Large Language Models",
            venue: "同时衡量合理拒绝与过度拒绝",
            paper: "https://arxiv.org/abs/2308.01263",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "SafetyBench: Evaluating the Safety of Large Language Models",
            venue: "多类别、多语言的安全知识与行为评测",
            paper: "https://arxiv.org/abs/2309.07045",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Towards Understanding Sycophancy in Language Models",
            venue: "研究模型迎合用户观点的表现及训练信号来源",
            paper: "https://arxiv.org/abs/2310.13548",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training",
            venue: "研究条件触发的欺骗策略能否熬过安全训练",
            paper: "https://arxiv.org/abs/2401.05566",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "HarmBench: A Standardized Evaluation Framework for Automated Red Teaming and Robust Refusal",
            venue: "jailbreak、攻击方法与稳健拒绝的标准化评测",
            paper: "https://arxiv.org/abs/2402.04249",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "A StrongREJECT for Empty Jailbreaks",
            venue: "jailbreak 评测必须衡量实际危害、完成度和拒绝质量",
            paper: "https://arxiv.org/abs/2402.10260",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "The WMDP Benchmark: Measuring and Reducing Malicious Use With Unlearning",
            venue: "高风险双用途知识评测及其与 unlearning 的关系",
            paper: "https://arxiv.org/abs/2403.03218",
            note: "",
            takeaway: ""
        },
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
            status: "read",
            title: "CAKE: Compiler-Agent Co-Design for Frontier Kernel Evolution",
            venue: "arXiv'26",
            paper: "https://arxiv.org/abs/2608.16292",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/llm-for-kernel/CAKE.md",
            takeaway: ""
        },
        {
            category: "systems",
            status: "read",
            title: "SkVM: Revisiting Language VM for Skills across Heterogenous LLMs and Harnesses",
            venue: "arXiv'26",
            paper: "https://arxiv.org/abs/2604.03088",
            note: "https://github.com/KuangjuX/Paper-reading/blob/main/notes/agent/skvm/skvm.md",
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
