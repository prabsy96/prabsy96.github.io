export type PublicationCategory = 'peer-reviewed' | 'workshop' | 'preprint';

export interface PublicationEntry {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  category: PublicationCategory;
  summary: string;
  keywords: string[];
  externalUrl?: string;
  externalLabel?: string;
  badge?: string;
}

export const publications: PublicationEntry[] = [
  {
    slug: 'taxbreak-ispass-2026',
    title: 'TaxBreak: Unmasking the Hidden Costs of LLM Inference Through Overhead Decomposition',
    authors: 'P. Vellaisamy, S. Tripathi, V. Natarajan, S.S. Thenarasu, R.D.S. Blanton, J.P. Shen',
    venue: 'IEEE International Symposium on Performance Analysis of Systems and Software (ISPASS) 2026 · Accepted · Scheduled for presentation on April 27, 2026',
    year: 2026,
    category: 'peer-reviewed',
    summary:
      'TaxBreak decomposes host-visible orchestration overhead in LLM inference into framework translation, CUDA library translation, and kernel launch-path costs. The work introduces the Host-Device Balance Index to make host and device bottlenecks easier to compare and optimize.',
    keywords: ['LLM inference', 'performance analysis', 'overhead decomposition', 'ISPASS 2026'],
    externalUrl: 'https://arxiv.org/abs/2603.12465',
    externalLabel: 'arXiv:2603.12465',
    badge: 'Accepted paper',
  },
  {
    slug: 'mugi-asplos-2026',
    title: 'Mugi: Value Level Parallelism for Efficient LLMs',
    authors: 'D. Price, P. Vellaisamy, J.P. Shen, D. Wu',
    venue: 'ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS) 2026',
    year: 2026,
    category: 'peer-reviewed',
    summary:
      'Mugi uses value-level parallelism to restructure nonlinear LLM operations and small-batch GEMMs. The paper shows that the approach can raise throughput and efficiency by turning value computation into a more parallel execution pattern.',
    keywords: ['LLMs', 'computer architecture', 'ASPLOS 2026', 'value-level parallelism'],
  },
  {
    slug: 'catwalk-isvlsi-2025',
    title: 'Catwalk: Unary Top-K for Efficient Ramp-No-Leak Neuron Design for Temporal Neural Networks',
    authors: 'D. Lister, P. Vellaisamy, J.P. Shen, D. Wu',
    venue: 'IEEE Computer Society Annual Symposium on VLSI (ISVLSI) 2025',
    year: 2025,
    category: 'peer-reviewed',
    summary:
      'Catwalk introduces a unary top-K mechanism for temporal neural networks, targeting the ramp-no-leak neuron design. The result is a more efficient selection path that reduces overhead in the neuromorphic pipeline.',
    keywords: ['Temporal Neural Networks', 'neuromorphic computing', 'ISVLSI 2025'],
    badge: 'Amar Mukherjee Best Paper Award',
  },
  {
    slug: 'llm-inference-cpu-gpu-ispass-2025',
    title: 'Characterizing and Optimizing LLM Inference Workloads on CPU-GPU Coupled Architectures',
    authors: 'P. Vellaisamy, T. Labonte, S. Chakraborty, M. Turner, S. Sury, J.P. Shen',
    venue: 'IEEE International Symposium on Performance Analysis of Systems and Software (ISPASS) 2025',
    year: 2025,
    category: 'peer-reviewed',
    summary:
      'This paper characterizes prefill and decode bottlenecks across coupled CPU-GPU systems and compares NVIDIA H100 and GH200 behavior. The work isolates where orchestration, memory movement, and kernel execution dominate end-to-end latency.',
    keywords: ['LLM inference', 'GH200', 'H100', 'performance analysis'],
    badge: 'Invited talk at Jülich Supercomputing Center',
  },
  {
    slug: 'tempus-core-date-2025',
    title: 'Tempus Core: Area-Power Efficient Temporal-Unary Convolution Core for Low-Precision Edge DLAs',
    authors: 'P. Vellaisamy, H. Nair, T. Kang, Y. Ni, H. Fan, B. Qi, H.F. Hung, J. Chen, R.D.S. Blanton, J.P. Shen',
    venue: 'IEEE Design, Automation & Test in Europe (DATE) 2025',
    year: 2025,
    category: 'peer-reviewed',
    summary:
      'Tempus Core presents a temporal-unary convolution engine for low-precision edge DLA workloads. The paper focuses on reducing area and power while preserving useful throughput for compact accelerator designs.',
    keywords: ['accelerators', 'edge AI', 'DATE 2025', 'temporal-unary'],
  },
  {
    slug: 'ozmac-vlsi-soc-2024',
    title: 'OzMAC: An Energy-Efficient Sparsity-Exploiting Multiply-Accumulate-Unit Design for DL Inference',
    authors: 'H. Nair, P. Vellaisamy, T.H. Lin, P. Wang, R.D.S. Blanton, J.P. Shen',
    venue: 'IEEE VLSI-SoC 2024',
    year: 2024,
    category: 'peer-reviewed',
    summary:
      'OzMAC targets sparsity-aware inference by reducing unnecessary multiply-accumulate work. The design explores how bit sparsity can translate directly into lower energy cost in deep learning accelerators.',
    keywords: ['sparsity', 'DL inference', 'VLSI-SoC 2024'],
  },
  {
    slug: 'unary-matrix-multiply-isvlsi-2024',
    title: 'Exploration of Unary Arithmetic-Based Matrix Multiply Units for Low Precision DL Accelerators',
    authors: 'P. Vellaisamy, H. Nair, D. Wu, R.D.S. Blanton, J.P. Shen',
    venue: 'IEEE Computer Society Annual Symposium on VLSI (ISVLSI) 2024',
    year: 2024,
    category: 'peer-reviewed',
    summary:
      'This work explores unary arithmetic for matrix multiplication in low-precision AI hardware. It studies how temporal unary representations change the area-power tradeoffs relative to more conventional arithmetic units.',
    keywords: ['unary computing', 'matrix multiply', 'ISVLSI 2024'],
  },
  {
    slug: 'gait-analysis-icons-2024',
    title: 'Realtime Person Identification via Gait Analysis using IMU Sensors on Edge Devices',
    authors: 'S. Venkatachelam, H. Nair, P. Vellaisamy, Y. Zhou, Z. Youssfi, J.P. Shen',
    venue: 'International Conference on Neuromorphic Systems (ICONS) 2024',
    year: 2024,
    category: 'peer-reviewed',
    summary:
      'The paper demonstrates real-time person identification from gait signals measured with IMU sensors on edge devices. It highlights how lightweight sensing and edge inference can support privacy-preserving identification tasks.',
    keywords: ['edge devices', 'IMU sensors', 'neuromorphic systems', 'ICONS 2024'],
  },
  {
    slug: 'tnngen-iscas-2024',
    title: 'TNNGen: Automated Design of Neuromorphic Sensory Processing Units for Time-Series Clustering',
    authors: 'P. Vellaisamy, H. Nair, D. Gupta, V. Ratnakaram, J.P. Shen',
    venue: 'IEEE International Symposium on Circuits and Systems (ISCAS) 2024',
    year: 2024,
    category: 'peer-reviewed',
    summary:
      'TNNGen automates the design of neuromorphic sensory processing units for time-series clustering. The work links algorithmic TNN ideas to generated hardware and reports a design path that reduces synapse and implementation cost.',
    keywords: ['TNNGen', 'neuromorphic hardware', 'ISCAS 2024'],
    badge: 'Invited for TCAS-II',
  },
  {
    slug: 'tubgemm-isvlsi-2023',
    title: 'tubGEMM: Energy-Efficient and Sparsity-Effective Temporal-Unary-Binary Based Matrix Multiply Unit',
    authors: 'P. Vellaisamy, H. Nair, J. Finn, M. Trivedi, A. Chen, A. Li, T.H. Lin, P. Wang, R.D.S. Blanton, J.P. Shen',
    venue: 'IEEE Computer Society Annual Symposium on VLSI (ISVLSI) 2023',
    year: 2023,
    category: 'peer-reviewed',
    summary:
      'tubGEMM combines temporal, unary, and binary arithmetic to build a matrix-multiply unit that is more tolerant of sparsity and low precision. The design studies how hybrid arithmetic can improve energy efficiency without giving up too much flexibility.',
    keywords: ['tubGEMM', 'hybrid arithmetic', 'ISVLSI 2023'],
  },
  {
    slug: 'tugemm-iscas-2023',
    title: 'tuGEMM: Area-Power-Efficient Temporal Unary GEMM Architecture for Low Resolution Edge AI',
    authors: 'H. Nair, P. Vellaisamy, A. Chen, J. Finn, A. Li, M. Trivedi, J.P. Shen',
    venue: 'IEEE International Symposium on Circuits and Systems (ISCAS) 2023',
    year: 2023,
    category: 'peer-reviewed',
    summary:
      'tuGEMM explores temporal unary GEMM as an implementation strategy for low-resolution edge AI. The paper emphasizes area and power reductions while preserving enough arithmetic throughput for practical inference workloads.',
    keywords: ['GEMM', 'edge AI', 'ISCAS 2023'],
  },
  {
    slug: 'tnn7-isvlsi-2022',
    title: 'TNN7: A Custom Macro Suite for Implementing Highly Optimized Designs of Neuromorphic TNNs',
    authors: 'H. Nair, P. Vellaisamy, S. Bhasuthkar, J.P. Shen',
    venue: 'IEEE Computer Society Annual Symposium on VLSI (ISVLSI) 2022',
    year: 2022,
    category: 'peer-reviewed',
    summary:
      'TNN7 provides a macro suite for temporal neural network designs. The paper describes a more systematic neuromorphic design flow rather than one-off circuit implementations.',
    keywords: ['TNN7', 'neuromorphic design', 'ISVLSI 2022'],
  },
  {
    slug: 'neutnns-arxiv-2026',
    title: 'NeuroAI Temporal Neural Networks (NeuTNNs): Microarchitecture and Design Framework for Specialized Neuromorphic Processing Units',
    authors: 'S. Venkatachalam, P. Vellaisamy, H. Nair, W.C. Huang, Y. Na, Y. Kang, Q. Jacobson, J.P. Shen',
    venue: 'arXiv preprint, February 2026',
    year: 2026,
    category: 'preprint',
    summary:
      'NeuTNNs define a neuromorphic processing framework built around active dendrites and hierarchical proximal/distal segments. NeuTNNGen links the model to layout generation, while synaptic pruning reduces hardware cost without sacrificing accuracy across sensory tasks.',
    keywords: ['NeuTNNs', 'neuromorphic computing', 'arXiv'],
    externalUrl: 'https://arxiv.org/abs/2602.01546',
    externalLabel: 'arXiv:2602.01546',
    badge: 'Preprint',
  },
  {
    slug: 'agraph-arxiv-2026',
    title: 'A-Graph: A Unified Graph Representation for At-Will Simulation across System Stacks',
    authors: 'D. Price, P. Vellaisamy, P. Gonzalez, G. Michelogiannakis, J.P. Shen, D. Wu',
    venue: 'arXiv preprint, February 2026',
    year: 2026,
    category: 'preprint',
    summary:
      'A-Graph proposes a unified graph representation for applications, software stacks, and architectures so the same model can support simulation, analysis, and cross-stack optimization.',
    keywords: ['A-Graph', 'systems simulation', 'arXiv'],
    externalUrl: 'https://arxiv.org/abs/2602.04847',
    externalLabel: 'arXiv:2602.04847',
    badge: 'Preprint',
  },
  {
    slug: 'taxbreak-arxiv-2026',
    title: 'TaxBreak: Unmasking the Hidden Costs of LLM Inference Through Overhead Decomposition',
    authors: 'P. Vellaisamy, S. Tripathi, V. Natarajan, S.S. Thenarasu, R.D.S. Blanton, J.P. Shen',
    venue: 'arXiv preprint, March 2026',
    year: 2026,
    category: 'preprint',
    summary:
      'TaxBreak decomposes host-visible orchestration overhead in LLM inference into framework translation, CUDA library translation, and kernel launch-path costs. The work introduces the Host-Device Balance Index to make host and device bottlenecks easier to compare and optimize.',
    keywords: ['TaxBreak', 'LLM inference', 'arXiv'],
    externalUrl: 'https://arxiv.org/abs/2603.12465',
    externalLabel: 'arXiv:2603.12465',
    badge: 'Preprint',
  },
  {
    slug: 'mugi-wuc-2026',
    title: 'Mugi: Value Level Parallelism For Nonlinear Operations in LLMs',
    authors: 'D. Price, P. Vellaisamy, J.P. Shen, D. Wu',
    venue: 'Workshop on Unary Computing (WUC), ASPLOS 2026',
    year: 2026,
    category: 'workshop',
    summary:
      'This workshop version extends the Mugi idea to nonlinear LLM operations and frames value-level parallelism as a broader execution model.',
    keywords: ['Mugi', 'workshop paper', 'WUC 2026'],
  },
  {
    slug: 'agraph-wuc-2026',
    title: 'Agraph: A Unified Graph Representation for At-Will Simulation of Emerging Stacks',
    authors: 'D. Price, P. Vellaisamy, J.P. Shen, D. Wu',
    venue: 'Workshop on Unary Computing (WUC), ASPLOS 2026',
    year: 2026,
    category: 'workshop',
    summary:
      'The workshop paper presents the A-Graph representation as a practical simulation abstraction for emerging stacks. It emphasizes broad applicability and a cleaner route from system description to experimentation.',
    keywords: ['Agraph', 'workshop paper', 'WUC 2026'],
  },
  {
    slug: 'unary-gemm-wuc-2024',
    title: 'Exploration of Unary Based GEMM Designs for Conventional AI/DL Accelerators',
    authors: 'P. Vellaisamy, H. Nair, D. Wu, J.P. Shen',
    venue: '2nd Workshop on Unary Computing (WUC), ASPLOS 2024',
    year: 2024,
    category: 'workshop',
    summary:
      'This paper surveys unary-based GEMM design points for more conventional AI accelerators. It explores how unary arithmetic may fit into mainstream inference hardware without requiring a full architectural reset.',
    keywords: ['GEMM', 'unary computing', 'WUC 2024'],
  },
  {
    slug: 'xbrain-yarch-2024',
    title: 'xBrain: Brain-Like Computing for Explainable Brain-Computer Interfaces',
    authors: 'Q. Xi, P. Vellaisamy, D. Wu',
    venue: 'Young Architect Workshop (YArch), ASPLOS 2024',
    year: 2024,
    category: 'workshop',
    summary:
      'xBrain connects brain-like computing ideas with explainable brain-computer interfaces. The workshop paper frames the work as both a systems problem and an interpretability problem.',
    keywords: ['brain-computer interfaces', 'YArch 2024'],
  },
  {
    slug: 'tnn-framework-yarch-2022',
    title: 'Towards a Design Framework for TNN-Based Neuromorphic Sensory Processing Units',
    authors: 'P. Vellaisamy, J.P. Shen',
    venue: 'Young Architect Workshop (YArch), ASPLOS 2022',
    year: 2022,
    category: 'workshop',
    summary:
      'This workshop paper lays out a design framework for TNN-based neuromorphic sensory processing units. It is an early statement of the research direction that later papers expanded into complete hardware and tooling flows.',
    keywords: ['TNN framework', 'YArch 2022'],
  },
];

export const publicationCounts = {
  peerReviewed: publications.filter((entry) => entry.category === 'peer-reviewed').length,
  workshops: publications.filter((entry) => entry.category === 'workshop').length,
  preprints: publications.filter((entry) => entry.category === 'preprint').length,
};
