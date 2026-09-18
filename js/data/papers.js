const paperReadingData = {
    pageTitle: "Reading Papers",
    pageSubtitle: "A curated collection of research papers on ML systems, compilers, architecture, and systems software — with brief takeaways.",
    repoLink: "https://github.com/KuangjuX/Papers-and-Learning-Notes",

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
            venue: "TPDS'21",
            paper: "https://arxiv.org/pdf/2002.03794.pdf",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/compiler/papers/The-Deep-Learning-Compiler-A-Comprehensive-Survey.md",
            takeaway: ""
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "MLIR: Scaling Compiler Infrastructure for Domain Specific Computation",
            venue: "CGO'21",
            paper: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9370308",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/compiler/papers/MLIR-Scaling-Compiler-Infrastructure-for-Domain-Specific-Computation.md",
            takeaway: "Multi-level IR design that enables progressive lowering — the foundation of modern DL compilers."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "TIRAMISU: A Polyhedral Compiler for Expressing Fast and Portable Code",
            venue: "CGO'19",
            paper: "https://arxiv.org/abs/1804.10694",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/compiler/tiramisu-cgo/tiramisu.md",
            takeaway: ""
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Rammer: Enabling Holistic Deep Learning Compiler Optimizations with rTasks",
            venue: "OSDI'20",
            paper: "https://www.usenix.org/system/files/osdi20-ma.pdf",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/22",
            takeaway: "rTask abstraction enables inter-operator and intra-operator parallelism co-optimization."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "ROLLER: Fast and Efficient Tensor Compilation for Deep Learning",
            venue: "OSDI'22",
            paper: "https://www.usenix.org/system/files/osdi22-zhu.pdf",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/24",
            takeaway: "Constructs near-optimal tile shapes via rTile abstraction — eliminates most autotuning overhead."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "BOLT: Bridging The Gap Between Auto-Tuners and Hardware-Native Performance",
            venue: "MLSys'22",
            paper: "http://yibozhu.com/doc/bolt-mlsys22.pdf",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/28",
            takeaway: "Bridges autotuner-generated code and vendor library performance by leveraging hardware-native primitives."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "AStitch: Enabling a New Multi-dimensional Optimization Space for Memory-Intensive ML Training and Inference on Modern SIMT Architectures",
            venue: "ASPLOS'22",
            paper: "https://dl.acm.org/doi/10.1145/3503222.3507723",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/26",
            takeaway: "Opens a multi-dimensional fusion space for memory-intensive ops via stitching on SIMT architectures."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "AMOS: Enabling Automatic Mapping for Tensor Computations On Spatial Accelerators with Hardware Abstraction",
            venue: "ISCA'22",
            paper: "https://cs.stanford.edu/~anjiang/papers/ZhengETAL22AMOS.pdf",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/31",
            takeaway: "Hardware abstraction layer enables one mapping algorithm to target diverse spatial accelerators."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Welder: Scheduling Deep Learning Memory Access via Tile-graph",
            venue: "OSDI'23",
            paper: "https://www.usenix.org/system/files/osdi23-shi.pdf",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/25",
            takeaway: "Tile-graph abstraction enables cross-operator memory access scheduling, reducing redundant data movement."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Effectively Scheduling Computational Graphs of Deep Neural Networks toward Their Domain-Specific Accelerators",
            venue: "OSDI'23",
            paper: "https://www.usenix.org/conference/osdi23/presentation/zhao",
            note: "",
            takeaway: ""
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Cocktailer: Analyzing and Optimizing Dynamic Control Flow in Deep Learning",
            venue: "OSDI'23",
            paper: "https://www.usenix.org/system/files/osdi23-zhang-chen.pdf",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/21",
            takeaway: "First compiler to systematically handle dynamic control flow (if/while) in DL graphs."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Chimera: An Analytical Optimizing Framework for Effective Compute-intensive Operators Fusion",
            venue: "HPCA'23",
            paper: "https://light-of-hers.github.io/assets/Chimera.pdf",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/30",
            takeaway: "Analytical cost model for fusing compute-intensive operators — avoids expensive autotuning."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Graphene: An IR for Optimized Tensor Computations on GPUs",
            venue: "ASPLOS'23",
            paper: "https://dl.acm.org/doi/pdf/10.1145/3582016.3582018",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/27",
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
            venue: "ICLR'25",
            paper: "https://proceedings.iclr.cc/paper_files/paper/2025/hash/05dc08730e32441edff52b0fa6caab5f-Abstract-Conference.html",
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
            venue: "arXiv'25",
            paper: "https://arxiv.org/pdf/2504.17577",
            note: "",
            takeaway: "Composable tile-level DSL that unifies scheduling and code generation for diverse AI hardware."
        },
        {
            category: "dl-compiler",
            status: "read",
            title: "Tawa: Automatic Warp Specialization for Modern GPUs with Asynchronous References",
            venue: "CGO'26",
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
        {
            category: "dl-compiler",
            status: "toread",
            title: "Optimal Software Pipelining and Warp Specialization for Tensor Core GPUs",
            venue: "OSDI'26",
            paper: "https://www.usenix.org/conference/osdi26/presentation/soi",
            note: "",
            takeaway: ""
        },
        {
            category: "dl-compiler",
            status: "toread",
            title: "GraCE: Unlocking CUDA Graphs with Compiler Support for ML Workloads",
            venue: "OSDI'26",
            paper: "https://www.usenix.org/conference/osdi26/presentation/ghosh",
            note: "",
            takeaway: ""
        },
        // ── LLM Inference ──
        {
            category: "llm-inference",
            status: "toread",
            title: "The Curious Case of Neural Text Degeneration",
            venue: "ICLR'20",
            paper: "https://arxiv.org/abs/1904.09751",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Fast Inference from Transformers via Speculative Decoding",
            venue: "ICML'23",
            paper: "https://proceedings.mlr.press/v202/leviathan23a.html",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Accelerating Large Language Model Decoding with Speculative Sampling",
            venue: "arXiv'23",
            paper: "https://arxiv.org/abs/2302.01318",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "SpecInfer: Accelerating Large Language Model Serving with Tree-based Speculative Inference and Verification",
            venue: "ASPLOS'24",
            paper: "https://arxiv.org/abs/2305.09781",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Medusa: Simple LLM Inference Acceleration Framework with Multiple Decoding Heads",
            venue: "ICML'24",
            paper: "https://arxiv.org/abs/2401.10774",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Break the Sequential Dependency of LLM Inference Using Lookahead Decoding",
            venue: "ICML'24",
            paper: "https://arxiv.org/abs/2402.02057",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty",
            venue: "ICML'24",
            paper: "https://arxiv.org/abs/2401.15077",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Better & Faster Large Language Models via Multi-token Prediction",
            venue: "ICML'24",
            paper: "https://arxiv.org/abs/2404.19737",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "read",
            title: "A Survey of LLM Inference Systems",
            venue: "arXiv'25",
            paper: "https://arxiv.org/pdf/2506.21901",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/surveys/Inference/llm_inference_survey.pdf",
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
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/foundations/DCA.md",
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
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/minimax-msa/msa.md",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "read",
            title: "HiSparse: Scaling Sparse-Attention Decoding with Hierarchical KV Cache Management",
            venue: "arXiv'26",
            paper: "https://arxiv.org/abs/2608.07009v1",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/hisparse/hisparse.md",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "read",
            title: "IndexCache: Accelerating Sparse Attention via Cross-Layer Index Reuse",
            venue: "arXiv'26",
            paper: "https://arxiv.org/abs/2603.12201v1",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/indexcache/indexcache.md",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Unifying Sparse Attention with Hierarchical Memory for Scalable Long-Context LLM Serving (SPIN)",
            venue: "arXiv'26",
            paper: "https://arxiv.org/abs/2604.26837",
            note: "",
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
            title: "InferCept: Efficient Intercept Support for Augmented Large Language Model Inference",
            venue: "ICML'24",
            paper: "https://proceedings.mlr.press/v235/abhyankar24a.html",
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
            venue: "ICLR'25",
            paper: "https://arxiv.org/abs/2407.00023",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "read",
            title: "SGLang: Efficient Execution of Structured Language Model Programs",
            venue: "NeurIPS'24",
            paper: "https://proceedings.neurips.cc/paper_files/paper/2024/hash/724be4472168f31ba1c9ac630f15dec8-Abstract-Conference.html",
            note: "",
            takeaway: "RadixAttention and structured generation primitives for efficient multi-call LLM programs."
        },
        {
            category: "llm-inference",
            status: "read",
            title: "FlashInfer: Efficient and Customizable Attention Engine for LLM Inference Serving",
            venue: "MLSys'25",
            paper: "https://proceedings.mlsys.org/paper_files/paper/2025/hash/dbf02b21d77409a2db30e56866a8ab3a-Abstract-Conference.html",
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
            title: "From Tokens to Layers: Redefining Stall-Free Scheduling for MoE Serving with Layered Prefill",
            venue: "MLSys'26",
            paper: "https://proceedings.mlsys.org/paper_files/paper/2026/hash/c0f460c6d63599ea870ba9db63dc96a9-Abstract-Conference.html",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "CRAFT: Fine-Grained Cost-Aware Expert Replication for Efficient Mixture-of-Experts Serving",
            venue: "MLSys'26",
            paper: "https://proceedings.mlsys.org/paper_files/paper/2026/hash/3a7f9e485845dac27423375c934cb4db-Abstract-Conference.html",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "Strata: Hierarchical Context Caching for Long Context Language Model Serving",
            venue: "OSDI'26",
            paper: "https://www.usenix.org/conference/osdi26/presentation/xie-zhiqiang",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "No Buffer, No Bottleneck: Efficient Zero-Copy KV Cache Offloading for Long-Context LLMs (DirectKV)",
            venue: "OSDI'26",
            paper: "https://www.usenix.org/conference/osdi26/presentation/luo",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale",
            venue: "NeurIPS'22",
            paper: "https://arxiv.org/abs/2208.07339",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
            venue: "ICLR'23",
            paper: "https://arxiv.org/abs/2210.17323",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "SmoothQuant: Accurate and Efficient Post-Training Quantization for Large Language Models",
            venue: "ICML'23",
            paper: "https://arxiv.org/abs/2211.10438",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration",
            venue: "MLSys'24",
            paper: "https://arxiv.org/abs/2306.00978",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression",
            venue: "ICLR'24",
            paper: "https://arxiv.org/abs/2306.03078",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "OmniQuant: Omnidirectionally Calibrated Quantization for Large Language Models",
            venue: "ICLR'24",
            paper: "https://arxiv.org/abs/2308.13137",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "AQLM: Extreme Compression of Large Language Models via Additive Quantization",
            venue: "ICML'24",
            paper: "https://arxiv.org/abs/2401.06118",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "KIVI: A Tuning-Free Asymmetric 2bit Quantization for KV Cache",
            venue: "ICML'24",
            paper: "https://arxiv.org/abs/2402.02750",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "QuaRot: Outlier-Free 4-Bit Inference in Rotated LLMs",
            venue: "NeurIPS'24",
            paper: "https://arxiv.org/abs/2404.00456",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "toread",
            title: "The Era of 1-bit LLMs: All Large Language Models are in 1.58 Bits",
            venue: "arXiv'24",
            paper: "https://arxiv.org/abs/2402.17764",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "read",
            title: "Look Ma, No Bubbles! Designing a Low-Latency Megakernel for Llama-1B",
            venue: "Blog'25",
            paper: "https://hazyresearch.stanford.edu/blog/2025-05-27-no-bubbles",
            note: "",
            takeaway: "Fusing an entire Llama-1B forward pass into one persistent megakernel eliminates launch overhead."
        },
        {
            category: "llm-inference",
            status: "read",
            title: "MPK: A Compiler and Runtime for Mega-Kernelizing Tensor Programs",
            venue: "OSDI'26",
            paper: "https://www.usenix.org/conference/osdi26/presentation/cheng",
            note: "",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "read",
            title: "Event Tensor: A Unified Abstraction for Compiling Dynamic Megakernel",
            venue: "MLSys'26",
            paper: "https://arxiv.org/abs/2604.13327",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/event-tensor/event-tensor.md",
            takeaway: ""
        },
        {
            category: "llm-inference",
            status: "read",
            title: "TileRT: Tile-Based Runtime for Ultra-Low-Latency LLM Inference",
            venue: "GitHub project'25",
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
            venue: "DeepGEMM PR'26",
            paper: "",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/megamoe/megamoe.md",
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
        {
            category: "llm-inference",
            status: "toread",
            title: "Ada-MK: Adaptive MegaKernel Optimization via Automated DAG-based Search for LLM Inference",
            venue: "arXiv'26",
            paper: "https://arxiv.org/abs/2605.11581",
            note: "",
            takeaway: ""
        },
        // ── OS / Hypervisor ──
        {
            category: "systems",
            status: "toread",
            title: "Accurate, Large Minibatch SGD: Training ImageNet in 1 Hour",
            venue: "arXiv'17",
            paper: "https://arxiv.org/abs/1706.02677",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Mixed Precision Training",
            venue: "ICLR'18",
            paper: "https://arxiv.org/abs/1710.03740",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Training Deep Nets with Sublinear Memory Cost",
            venue: "arXiv'16",
            paper: "https://arxiv.org/abs/1604.06174",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Reducing Activation Recomputation in Large Transformer Models",
            venue: "MLSys'23",
            paper: "https://arxiv.org/abs/2205.05198",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "GaLore: Memory-Efficient LLM Training by Gradient Low-Rank Projection",
            venue: "ICML'24",
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
            venue: "arXiv'24",
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
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/pithtrain/pithtrain.md",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer",
            venue: "ICLR'17",
            paper: "https://arxiv.org/abs/1701.06538",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding",
            venue: "ICLR'21",
            paper: "https://arxiv.org/abs/2006.16668",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "BASE Layers: Simplifying Training of Large, Sparse Models",
            venue: "ICML'21",
            paper: "https://arxiv.org/abs/2103.16716",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "GLaM: Efficient Scaling of Language Models with Mixture-of-Experts",
            venue: "ICML'22",
            paper: "https://arxiv.org/abs/2112.06905",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "DeepSpeed-MoE: Advancing Mixture-of-Experts Inference and Training to Power Next-Generation AI Scale",
            venue: "ICML'22",
            paper: "https://arxiv.org/abs/2201.05596",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "FasterMoE: Modeling and Optimizing Training of Large-Scale Dynamic Pre-Trained Models",
            venue: "PPoPP'22",
            paper: "https://doi.org/10.1145/3503221.3508418",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Tutel: Adaptive Mixture-of-Experts at Scale",
            venue: "MLSys'23",
            paper: "https://arxiv.org/abs/2206.03382",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "MegaBlocks: Efficient Sparse Training with Mixture-of-Experts",
            venue: "MLSys'23",
            paper: "https://arxiv.org/abs/2211.15841",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "read",
            title: "Seer: Online Context Learning for Fast Synchronous LLM Reinforcement Learning",
            venue: "OSDI'26",
            paper: "https://arxiv.org/pdf/2511.14617",
            note: "",
            takeaway: "Online context learning reduces synchronization bubbles in RLHF training pipelines."
        },
        {
            category: "systems",
            status: "toread",
            title: "Fine-Tuning Language Models from Human Preferences",
            venue: "arXiv'19",
            paper: "https://arxiv.org/abs/1909.08593",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Learning to Summarize from Human Feedback",
            venue: "NeurIPS'20",
            paper: "https://arxiv.org/abs/2009.01325",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Prefix-Tuning: Optimizing Continuous Prompts for Generation",
            venue: "ACL'21",
            paper: "https://arxiv.org/abs/2101.00190",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "The Power of Scale for Parameter-Efficient Prompt Tuning",
            venue: "EMNLP'21",
            paper: "https://arxiv.org/abs/2104.08691",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "LoRA: Low-Rank Adaptation of Large Language Models",
            venue: "ICLR'22",
            paper: "https://arxiv.org/abs/2106.09685",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Proximal Policy Optimization Algorithms",
            venue: "arXiv'17",
            paper: "https://arxiv.org/abs/1707.06347",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Finetuned Language Models Are Zero-Shot Learners",
            venue: "ICLR'22",
            paper: "https://arxiv.org/abs/2109.01652",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Training Language Models to Follow Instructions with Human Feedback",
            venue: "NeurIPS'22",
            paper: "https://arxiv.org/abs/2203.02155",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Constitutional AI: Harmlessness from AI Feedback",
            venue: "arXiv'22",
            paper: "https://arxiv.org/abs/2212.08073",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Self-Instruct: Aligning Language Models with Self-Generated Instructions",
            venue: "ACL'23",
            paper: "https://arxiv.org/abs/2212.10560",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "The Flan Collection: Designing Data and Methods for Effective Instruction Tuning",
            venue: "ICML'23",
            paper: "https://arxiv.org/abs/2301.13688",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "QLoRA: Efficient Finetuning of Quantized LLMs",
            venue: "NeurIPS'23",
            paper: "https://arxiv.org/abs/2305.14314",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "LIMA: Less Is More for Alignment",
            venue: "NeurIPS'23",
            paper: "https://arxiv.org/abs/2305.11206",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
            venue: "NeurIPS'23",
            paper: "https://arxiv.org/abs/2305.18290",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "RRHF: Rank Responses to Align Language Models with Human Feedback",
            venue: "NeurIPS'23",
            paper: "https://arxiv.org/abs/2304.05302",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "A General Theoretical Paradigm to Understand Learning from Human Preferences",
            venue: "AISTATS'24",
            paper: "https://arxiv.org/abs/2310.12036",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "KTO: Model Alignment as Prospect Theoretic Optimization",
            venue: "ICML'24",
            paper: "https://arxiv.org/abs/2402.01306",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "ORPO: Monolithic Preference Optimization without Reference Model",
            venue: "EMNLP'24",
            paper: "https://arxiv.org/abs/2403.07691",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "SimPO: Simple Preference Optimization with a Reference-Free Reward",
            venue: "NeurIPS'24",
            paper: "https://arxiv.org/abs/2405.14734",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models",
            venue: "arXiv'24",
            paper: "https://arxiv.org/abs/2402.03300",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning",
            venue: "Nature'25",
            paper: "https://arxiv.org/abs/2501.12948",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "read",
            title: "Flux: Fast Software-based Communication Overlap on GPUs through Kernel Fusion",
            venue: "arXiv'24",
            paper: "https://arxiv.org/pdf/2406.06858v1",
            note: "",
            takeaway: "Fuses communication into compute kernels for near-perfect overlap — no extra GPU streams needed."
        },
        {
            category: "systems",
            status: "read",
            title: "DeepEP: An Efficient Expert-Parallel Communication Library",
            venue: "GitHub'25（开源库）",
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
            venue: "MLSys'25",
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
            venue: "arXiv'25",
            paper: "https://arxiv.org/pdf/2504.19442",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Efficient and Adaptable Overlapping for Computation and Communication via Signaling and Reordering (FlashOverlap)",
            venue: "EuroSys'26",
            paper: "https://arxiv.org/pdf/2504.19519",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "TokenWeave: Efficient Compute-Communication Overlap for Distributed LLM Inference",
            venue: "MLSys'26",
            paper: "https://proceedings.mlsys.org/paper_files/paper/2026/hash/73ba81c7b25134a559c8a9c39ec1a4c3-Abstract-Conference.html",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "UEP: Portable Expert-Parallel Communication",
            venue: "OSDI'26",
            paper: "https://www.usenix.org/conference/osdi26/presentation/mao-ziming-uep",
            note: "",
            takeaway: ""
        },
        // ── Deep Learning ──
        {
            category: "deep-learning",
            status: "toread",
            title: "Learning Representations by Back-Propagating Errors",
            venue: "Nature'86",
            paper: "https://www.nature.com/articles/323533a0",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Understanding the Difficulty of Training Deep Feedforward Neural Networks",
            venue: "AISTATS'10",
            paper: "https://proceedings.mlr.press/v9/glorot10a.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Dropout: A Simple Way to Prevent Neural Networks from Overfitting",
            venue: "JMLR'14",
            paper: "https://jmlr.org/papers/v15/srivastava14a.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift",
            venue: "ICML'15",
            paper: "https://proceedings.mlr.press/v37/ioffe15.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Deep Residual Learning for Image Recognition",
            venue: "CVPR'16",
            paper: "https://arxiv.org/abs/1512.03385",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Adam: A Method for Stochastic Optimization",
            venue: "ICLR'15",
            paper: "https://arxiv.org/abs/1412.6980",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Decoupled Weight Decay Regularization",
            venue: "ICLR'19",
            paper: "https://arxiv.org/abs/1711.05101",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Layer Normalization",
            venue: "arXiv'16",
            paper: "https://arxiv.org/abs/1607.06450",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Root Mean Square Layer Normalization",
            venue: "NeurIPS'19",
            paper: "https://arxiv.org/abs/1910.07467",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Adafactor: Adaptive Learning Rates with Sublinear Memory Cost",
            venue: "ICML'18",
            paper: "https://proceedings.mlr.press/v80/shazeer18a.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Large Batch Optimization for Deep Learning: Training BERT in 76 Minutes",
            venue: "ICLR'20",
            paper: "https://arxiv.org/abs/1904.00962",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Tensor Programs V: Tuning Large Neural Networks via Zero-Shot Hyperparameter Transfer",
            venue: "NeurIPS'21",
            paper: "https://arxiv.org/abs/2203.03466",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Sophia: A Scalable Stochastic Second-order Optimizer for Language Model Pre-training",
            venue: "ICLR'24",
            paper: "https://arxiv.org/abs/2305.14342",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "A Neural Probabilistic Language Model",
            venue: "JMLR'03",
            paper: "https://www.jmlr.org/papers/v3/bengio03a.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Sequence to Sequence Learning with Neural Networks",
            venue: "NeurIPS'14",
            paper: "https://proceedings.neurips.cc/paper_files/paper/2014/hash/5a18e133cbf9f257297f410bb7eca942-Abstract.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Neural Machine Translation by Jointly Learning to Align and Translate",
            venue: "ICLR'15",
            paper: "https://arxiv.org/abs/1409.0473",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Neural Machine Translation of Rare Words with Subword Units",
            venue: "ACL'16",
            paper: "https://aclanthology.org/P16-1162/",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "SentencePiece: A Simple and Language Independent Subword Tokenizer and Detokenizer for Neural Text Processing",
            venue: "EMNLP'18（System Demonstrations）",
            paper: "https://aclanthology.org/D18-2012/",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Improving Language Understanding by Generative Pre-Training",
            venue: "OpenAI Technical Report'18",
            paper: "https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
            venue: "NAACL'19",
            paper: "https://aclanthology.org/N19-1423/",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Language Models are Unsupervised Multitask Learners",
            venue: "OpenAI Technical Report'19",
            paper: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Language Models are Few-Shot Learners",
            venue: "NeurIPS'20",
            paper: "https://proceedings.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer",
            venue: "JMLR'20",
            paper: "https://jmlr.org/papers/v21/20-074.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "GLU Variants Improve Transformer",
            venue: "arXiv'20",
            paper: "https://arxiv.org/abs/2002.05202",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "RoFormer: Enhanced Transformer with Rotary Position Embedding",
            venue: "Neurocomputing'24",
            paper: "https://arxiv.org/abs/2104.09864",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Train Short, Test Long: Attention with Linear Biases Enables Input Length Extrapolation",
            venue: "ICLR'22",
            paper: "https://arxiv.org/abs/2108.12409",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "PaLM: Scaling Language Modeling with Pathways",
            venue: "JMLR'23",
            paper: "https://arxiv.org/abs/2204.02311",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "LLaMA: Open and Efficient Foundation Language Models",
            venue: "arXiv'23",
            paper: "https://arxiv.org/abs/2302.13971",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Llama 2: Open Foundation and Fine-Tuned Chat Models",
            venue: "arXiv'23",
            paper: "https://arxiv.org/abs/2307.09288",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Mistral 7B",
            venue: "arXiv'23",
            paper: "https://arxiv.org/abs/2310.06825",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models",
            venue: "ACL'24",
            paper: "https://arxiv.org/abs/2401.06066",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Mixtral of Experts",
            venue: "arXiv'24",
            paper: "https://arxiv.org/abs/2401.04088",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "OLMo: Accelerating the Science of Language Models",
            venue: "ACL'24",
            paper: "https://aclanthology.org/2024.acl-long.841/",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Scaling Laws for Neural Language Models",
            venue: "arXiv'20",
            paper: "https://arxiv.org/abs/2001.08361",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Training Compute-Optimal Large Language Models",
            venue: "NeurIPS'22",
            paper: "https://arxiv.org/abs/2203.15556",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Scaling Data-Constrained Language Models",
            venue: "NeurIPS'23",
            paper: "https://arxiv.org/abs/2305.16264",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "The Pile: An 800GB Dataset of Diverse Text for Language Modeling",
            venue: "arXiv'21",
            paper: "https://arxiv.org/abs/2101.00027",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Deduplicating Training Data Makes Language Models Better",
            venue: "ACL'22",
            paper: "https://arxiv.org/abs/2107.06499",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Data Selection for Language Models via Importance Resampling",
            venue: "NeurIPS'23",
            paper: "https://arxiv.org/abs/2302.03169",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "DoReMi: Optimizing Data Mixtures Speeds Up Language Model Pretraining",
            venue: "NeurIPS'23",
            paper: "https://arxiv.org/abs/2305.10429",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "The RefinedWeb Dataset for Falcon LLM: Outperforming Curated Corpora with Web Data, and Web Data Only",
            venue: "NeurIPS'23 (D&B)",
            paper: "https://arxiv.org/abs/2306.01116",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Textbooks Are All You Need",
            venue: "arXiv'23",
            paper: "https://arxiv.org/abs/2306.11644",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Dolma: An Open Corpus of Three Trillion Tokens for Language Model Pretraining Research",
            venue: "ACL'24",
            paper: "https://arxiv.org/abs/2402.00159",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "DataComp-LM: In Search of the Next Generation of Training Sets for Language Models",
            venue: "NeurIPS'24 (D&B)",
            paper: "https://arxiv.org/abs/2406.11794",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "The FineWeb Datasets: Decanting the Web for the Finest Text Data at Scale",
            venue: "NeurIPS'24 (D&B)",
            paper: "https://arxiv.org/abs/2406.17557",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "read",
            title: "Attention Is All You Need",
            venue: "NeurIPS'17",
            paper: "https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/32",
            takeaway: "The paper that started it all — self-attention replaces recurrence for sequence modeling."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "Big Bird: Transformers for Longer Sequences",
            venue: "NeurIPS'20",
            paper: "https://proceedings.neurips.cc/paper/2020/hash/c8512d142a2d849725f31a9a7a361ab9-Abstract.html",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/foundations/SparseAttention.md",
            takeaway: "Sparse attention via random + window + global tokens — linear complexity with theoretical guarantees."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
            venue: "NeurIPS'22",
            paper: "https://proceedings.neurips.cc/paper_files/paper/2022/file/67d57c32e20fd0a7a302cb81d36e40d5-Paper-Conference.pdf",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/foundations/FlashAttention.md",
            takeaway: "IO-aware tiling of attention — exact computation with O(N) memory instead of O(N²)."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning",
            venue: "ICLR'24",
            paper: "https://arxiv.org/pdf/2307.08691.pdf",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/foundations/FlashAttention.md",
            takeaway: "Better work partitioning across warps and thread blocks — 2x faster than FlashAttention-1."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "Flash-Decoding for Long-Context Inference",
            venue: "Blog'23",
            paper: "https://crfm.stanford.edu/2023/10/12/flashdecoding.html",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/foundations/FlashDecoding.md",
            takeaway: "Parallelizes across KV-cache length during decoding — critical for long-context single-query inference."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "A Survey of Efficient Attention Methods: Hardware-efficient, Sparse, Compact, and Linear Attention",
            venue: "Tech report'25",
            paper: "https://attention-survey.github.io/files/Attention_Survey.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "read",
            title: "Fast Transformer Decoding: One Write-Head is All You Need",
            venue: "arXiv'19",
            paper: "https://arxiv.org/abs/1911.02150",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/mqa/fast-transformer-decoding-mqa.md",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints",
            venue: "EMNLP'23",
            paper: "https://arxiv.org/abs/2305.13245",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model",
            venue: "arXiv'24",
            paper: "https://arxiv.org/abs/2405.04434",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "SeerAttention: Learning Intrinsic Sparse Attention in Your LLMs",
            venue: "NeurIPS'25",
            paper: "https://arxiv.org/abs/2410.13276",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention",
            venue: "ACL'25",
            paper: "https://arxiv.org/abs/2502.11089",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "MoBA: Mixture of Block Attention for Long-Context LLMs",
            venue: "NeurIPS'25",
            paper: "https://arxiv.org/abs/2502.13189",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "MInference 1.0: Accelerating Pre-filling for Long-Context LLMs via Dynamic Sparse Attention",
            venue: "NeurIPS'24",
            paper: "https://arxiv.org/abs/2407.02490",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "SpargeAttn: Accurate Sparse Attention Accelerating Any Model Inference",
            venue: "ICML'25",
            paper: "https://arxiv.org/abs/2502.18137",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "BLASST: Dynamic BLocked Attention Sparsity via Softmax Thresholding",
            venue: "MLSys'26",
            paper: "https://proceedings.mlsys.org/paper_files/paper/2026/hash/c6ee784cbe46d854843e4c883a3321ef-Abstract-Conference.html",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Generating Long Sequences with Sparse Transformers",
            venue: "arXiv'19",
            paper: "https://arxiv.org/abs/1904.10509",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Longformer: The Long-Document Transformer",
            venue: "arXiv'20",
            paper: "https://arxiv.org/abs/2004.05150",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Reformer: The Efficient Transformer",
            venue: "ICLR'20",
            paper: "https://arxiv.org/abs/2001.04451",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Efficient Content-Based Sparse Attention with Routing Transformers",
            venue: "TACL'21",
            paper: "https://arxiv.org/abs/2003.05997",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Sparser is Faster and Less is More: Efficient Sparse Attention for Long-Range Transformers",
            venue: "arXiv'24",
            paper: "https://arxiv.org/abs/2406.16747",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Differentiable Top-k Operator with Optimal Transport",
            venue: "NeurIPS'20",
            paper: "https://arxiv.org/abs/2002.06504",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Fast, Differentiable and Sparse Top-k: A Convex Analysis Perspective",
            venue: "ICML'23",
            paper: "https://arxiv.org/abs/2302.01425",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Categorical Reparameterization with Gumbel-Softmax",
            venue: "ICLR'17",
            paper: "https://arxiv.org/abs/1611.01144",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "read",
            title: "Distilling the Knowledge in a Neural Network",
            venue: "NeurIPS DL Workshop'15",
            paper: "https://arxiv.org/abs/1503.02531",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/knowledge-distillation/distilling-the-knowledge-in-a-neural-network.md",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity",
            venue: "JMLR'22",
            paper: "https://arxiv.org/abs/2101.03961",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "ST-MoE: Designing Stable and Transferable Sparse Expert Models",
            venue: "arXiv'22",
            paper: "https://arxiv.org/abs/2202.08906",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Mixture-of-Experts with Expert Choice Routing",
            venue: "NeurIPS'22",
            paper: "https://arxiv.org/abs/2202.09368",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "From Softmax to Sparsemax: A Sparse Model of Attention and Multi-Label Classification",
            venue: "ICML'16",
            paper: "https://arxiv.org/abs/1602.02068",
            note: "",
            takeaway: ""
        },
        {
            category: "deep-learning",
            status: "toread",
            title: "Adaptively Sparse Transformers",
            venue: "EMNLP-IJCNLP'19",
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
            venue: "EMNLP Findings'23",
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
            venue: "COLM'24",
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
            venue: "ICML'24",
            paper: "https://proceedings.mlr.press/v235/yang24ab.html",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/foundations/LinearAttention.md",
            takeaway: "Gated linear attention achieves sub-quadratic complexity while maintaining expressiveness via gating."
        },
        {
            category: "deep-learning",
            status: "read",
            title: "Kimi Linear: An Expressive, Efficient Attention Architecture",
            venue: "arXiv'25",
            paper: "https://arxiv.org/pdf/2510.26692",
            note: "",
            takeaway: ""
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
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/llm/deepseek-v4/deepseek-v4.md",
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
            paper: "https://hanlab.mit.edu/projects/pockengine ; https://hanlab.mit.edu/projects/tinyml",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/29",
            takeaway: "Compilation-based approach to efficient on-device fine-tuning with structured sparsity."
        },
        // ── OS / Hypervisor ──
        {
            category: "systems",
            status: "toread",
            title: "Measuring Massive Multitask Language Understanding",
            venue: "ICLR'21",
            paper: "https://arxiv.org/abs/2009.03300",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models",
            venue: "TMLR'23",
            paper: "https://arxiv.org/abs/2206.04615",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Holistic Evaluation of Language Models",
            venue: "TMLR'23",
            paper: "https://arxiv.org/abs/2211.09110",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "TruthfulQA: Measuring How Models Mimic Human Falsehoods",
            venue: "ACL'22",
            paper: "https://arxiv.org/abs/2109.07958",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Training Verifiers to Solve Math Word Problems",
            venue: "arXiv'21",
            paper: "https://arxiv.org/abs/2110.14168",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Measuring Mathematical Problem Solving With the MATH Dataset",
            venue: "NeurIPS'21 (D&B)",
            paper: "https://arxiv.org/abs/2103.03874",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Evaluating Large Language Models Trained on Code",
            venue: "arXiv'21",
            paper: "https://arxiv.org/abs/2107.03374",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "GPQA: A Graduate-Level Google-Proof Q&A Benchmark",
            venue: "COLM'24",
            paper: "https://arxiv.org/abs/2311.12022",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Instruction-Following Evaluation for Large Language Models",
            venue: "arXiv'23",
            paper: "https://arxiv.org/abs/2311.07911",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena",
            venue: "NeurIPS'23 (D&B)",
            paper: "https://arxiv.org/abs/2306.05685",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference",
            venue: "ICML'24",
            paper: "https://arxiv.org/abs/2403.04132",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "RewardBench: Evaluating Reward Models for Language Modeling",
            venue: "NAACL Findings'25",
            paper: "https://arxiv.org/abs/2403.13787",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?",
            venue: "ICLR'24",
            paper: "https://arxiv.org/abs/2310.06770",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code",
            venue: "ICLR'25",
            paper: "https://arxiv.org/abs/2403.07974",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Lessons from the Trenches on Reproducible Evaluation of Language Models",
            venue: "arXiv'24",
            paper: "https://arxiv.org/abs/2405.14782",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "RealToxicityPrompts: Evaluating Neural Toxic Degeneration in Language Models",
            venue: "EMNLP Findings'20",
            paper: "https://arxiv.org/abs/2009.11462",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Red Teaming Language Models with Language Models",
            venue: "EMNLP'22",
            paper: "https://arxiv.org/abs/2202.03286",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Universal and Transferable Adversarial Attacks on Aligned Language Models",
            venue: "arXiv'23",
            paper: "https://arxiv.org/abs/2307.15043",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "XSTest: A Test Suite for Identifying Exaggerated Safety Behaviours in Large Language Models",
            venue: "NAACL'24",
            paper: "https://arxiv.org/abs/2308.01263",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "SafetyBench: Evaluating the Safety of Large Language Models",
            venue: "ACL'24",
            paper: "https://arxiv.org/abs/2309.07045",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Towards Understanding Sycophancy in Language Models",
            venue: "ICLR'24",
            paper: "https://arxiv.org/abs/2310.13548",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training",
            venue: "arXiv'24",
            paper: "https://arxiv.org/abs/2401.05566",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "HarmBench: A Standardized Evaluation Framework for Automated Red Teaming and Robust Refusal",
            venue: "ICML'24",
            paper: "https://arxiv.org/abs/2402.04249",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "A StrongREJECT for Empty Jailbreaks",
            venue: "NeurIPS'24 (D&B)",
            paper: "https://arxiv.org/abs/2402.10260",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "The WMDP Benchmark: Measuring and Reducing Malicious Use With Unlearning",
            venue: "ICML'24",
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
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/gpu/llm-for-kernel/avo.md",
            takeaway: ""
        },
        {
            category: "systems",
            status: "read",
            title: "CAKE: Compiler-Agent Co-Design for Frontier Kernel Evolution",
            venue: "arXiv'26",
            paper: "https://arxiv.org/abs/2608.12629",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/gpu/llm-for-kernel/CAKE.md",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "FlashInfer-Bench: Building the Virtuous Cycle for AI-driven LLM Systems",
            venue: "MLSys'26",
            paper: "https://proceedings.mlsys.org/paper_files/paper/2026/hash/37e44c4b5321605735be9761f9b758fc-Abstract-Conference.html",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Harness Engineering for LLM-Driven GPU Kernel Generation",
            venue: "arXiv'26",
            paper: "https://arxiv.org/abs/2607.17979",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Agentic Kernel Optimization: Generating State-of-the-Art GPU Kernels Without Hand-Written CUDA",
            venue: "Tech report'26",
            paper: "https://arxiv.org/abs/2608.14560",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "read",
            title: "SkVM: Revisiting Language VM for Skills across Heterogenous LLMs and Harnesses",
            venue: "arXiv'26",
            paper: "https://arxiv.org/abs/2604.03088",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/agents/skvm/skvm.md",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Understanding Latency Hiding on GPUs",
            venue: "PhD thesis'16",
            paper: "https://www2.eecs.berkeley.edu/Pubs/TechRpts/2016/EECS-2016-143.pdf",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "toread",
            title: "Categorical Foundations for CuTe Layouts",
            venue: "arXiv'26",
            paper: "https://research.colfax-intl.com/categorical-foundations-for-cute-layouts/",
            note: "",
            takeaway: ""
        },
        {
            category: "systems",
            status: "read",
            title: "Honeycomb: Secure and Efficient GPU Executions via Static Validation",
            venue: "OSDI'23",
            paper: "https://www.usenix.org/conference/osdi23/presentation/mai",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/systems/virtualization/honeycomb/honeycomb.md",
            takeaway: "Static validation of GPU commands enables secure GPU sharing without runtime overhead."
        },
        {
            category: "systems",
            status: "read",
            title: "HIDA: A Hierarchical Dataflow Compiler for High-Level Synthesis",
            venue: "ASPLOS'24",
            paper: "https://arxiv.org/abs/2311.03379",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/compiler/hida/hida.md",
            takeaway: ""
        },
        {
            category: "systems",
            status: "read",
            title: "RedLeaf: Isolation and Communication in a Safe Operating System",
            venue: "OSDI'20",
            paper: "https://www.usenix.org/system/files/osdi20-narayanan_vikram.pdf",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/systems/os/papers/RedLeaf.md",
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
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/issues/9",
            takeaway: "Modular unikernel build system — pick only the OS components you need for minimal overhead."
        },
        {
            category: "systems",
            status: "read",
            title: "The Demikernel Datapath OS Architecture for Microsecond-scale Datacenter Systems",
            venue: "SOSP'21",
            paper: "https://irenezhang.net/papers/demikernel-sosp21.pdf",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/systems/os/papers/Demikernel.md",
            takeaway: "Datapath OS that bypasses the kernel for microsecond-scale I/O — portable across DPDK/RDMA backends."
        },
        {
            category: "systems",
            status: "read",
            title: "HyperBench: A Benchmark Suite for Virtualization Capabilities",
            venue: "SIGMETRICS / POMACS'19",
            paper: "https://dl.acm.org/doi/pdf/10.1145/3341617.3326138",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/systems/virtualization/papers/Hyperbench-A-Benchmark-Suite-for-Virtualization-Capabilities.md",
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
            venue: "ASPLOS'20",
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
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/systems/virtualization/duvisor/duvisor.md",
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
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/systems/virtualization/nephele/nephele.md",
            takeaway: "Fast VM cloning for unikernels — enables FaaS-style rapid instantiation."
        },
        {
            category: "systems",
            status: "read",
            title: "Honeycomb: Secure and Efficient GPU Executions via Static Validation",
            venue: "OSDI'23",
            paper: "https://www.usenix.org/conference/osdi23/presentation/mai",
            note: "https://github.com/KuangjuX/Papers-and-Learning-Notes/blob/main/notes/systems/virtualization/honeycomb/honeycomb.md",
            takeaway: "Static validation of GPU commands enables secure GPU sharing without runtime overhead."
        },
        {
            category: "systems",
            status: "read",
            title: "A First Look at RISC-V Virtualization from an Embedded Systems Perspective",
            venue: "IEEE TC'22 (online'21)",
            paper: "https://arxiv.org/pdf/2103.14951.pdf",
            note: "",
            takeaway: "First systematic evaluation of RISC-V H-extension for embedded hypervisors."
        },
        {
            category: "systems",
            status: "read",
            title: "CVA6 RISC-V Virtualization: Architecture, Microarchitecture, and Design Space Exploration",
            venue: "IEEE TVLSI'23",
            paper: "https://arxiv.org/pdf/2302.02969.pdf",
            note: "",
            takeaway: "Hardware implementation of RISC-V H-extension in CVA6 — design trade-offs for two-stage page tables."
        },
    ]
};
