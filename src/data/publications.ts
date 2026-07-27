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
    venue: 'IEEE International Symposium on Performance Analysis of Systems and Software (ISPASS) 2026',
    year: 2026,
    category: 'peer-reviewed',
    summary:
      'TaxBreak decomposes host-visible LLM inference overhead into framework translation, CUDA-library translation, and kernel launch-path time. Evaluated on H100 and H200 systems, it introduces the Host-Device Balance Index to distinguish host-side orchestration bottlenecks from device-side work.',
    keywords: ['LLM inference', 'performance analysis', 'overhead decomposition', 'ISPASS 2026'],
    externalUrl: 'https://arxiv.org/abs/2603.12465',
    externalLabel: 'arXiv:2603.12465',
  },
  {
    slug: 'mugi-asplos-2026',
    title: 'Mugi: Value Level Parallelism For Efficient LLMs',
    authors: 'D. Price, P. Vellaisamy, J.P. Shen, D. Wu',
    venue: 'ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS) 2026',
    year: 2026,
    category: 'peer-reviewed',
    summary:
      'Mugi extends value-level parallelism to nonlinear functions and asymmetric small-batch GEMMs used in quantized LLMs, reusing one architecture for both. The paper reports up to 2.07× higher end-to-end LLM throughput and 3.11× higher energy efficiency.',
    keywords: ['LLMs', 'computer architecture', 'ASPLOS 2026', 'value-level parallelism'],
    externalUrl: 'https://arxiv.org/abs/2601.10823',
    externalLabel: 'arXiv:2601.10823',
  },
  {
    slug: 'catwalk-isvlsi-2025',
    title: 'Catwalk: Unary Top-K for Efficient Ramp-No-Leak Neuron Design for Temporal Neural Networks',
    authors: 'D. Lister, P. Vellaisamy, J.P. Shen, D. Wu',
    venue: 'IEEE Computer Society Annual Symposium on VLSI (ISVLSI) 2025',
    year: 2025,
    category: 'peer-reviewed',
    summary:
      'Catwalk uses unary top-K to cluster active spikes before parallel-counter accumulation in ramp-no-leak Temporal Neural Network neurons. Place-and-route results report 1.39× better area and 1.86× better power than the evaluated SRM0-RNL baseline.',
    keywords: ['Temporal Neural Networks', 'neuromorphic computing', 'ISVLSI 2025'],
    badge: 'Amar Mukherjee Best Paper Award',
    externalUrl: 'https://arxiv.org/abs/2508.21267',
    externalLabel: 'arXiv:2508.21267',
  },
  {
    slug: 'llm-inference-cpu-gpu-ispass-2025',
    title: 'Characterizing and Optimizing LLM Inference Workloads on CPU-GPU Coupled Architectures',
    authors: 'P. Vellaisamy, T. Labonte, S. Chakraborty, M. Turner, S. Sury, J.P. Shen',
    venue: 'IEEE International Symposium on Performance Analysis of Systems and Software (ISPASS) 2025',
    year: 2025,
    category: 'peer-reviewed',
    summary:
      'This paper uses SKIP operator-to-kernel traces and Total Kernel Launch and Queuing Time to compare LLM inference on PCIe A100/H100 and GH200 systems. GH200 improves large-batch prefill latency but remains CPU-bound through batch sizes up to four times larger than the loosely coupled systems.',
    keywords: ['LLM inference', 'GH200', 'H100', 'performance analysis'],
    badge: 'Invited talk at Jülich Supercomputing Center',
    externalUrl: 'https://arxiv.org/abs/2504.11750',
    externalLabel: 'arXiv:2504.11750',
  },
  {
    slug: 'tempus-core-date-2025',
    title: 'Tempus Core: Area-Power Efficient Temporal-Unary Convolution Core for Low-Precision Edge DLAs',
    authors: 'P. Vellaisamy, H. Nair, T. Kang, Y. Ni, H. Fan, B. Qi, J. Chen, R.D.S. Blanton, J.P. Shen',
    venue: 'IEEE Design, Automation & Test in Europe (DATE) 2025',
    year: 2025,
    category: 'peer-reviewed',
    summary:
      'Tempus Core integrates temporal-unary-binary processing elements into an NVDLA-compatible convolution core. In 45 nm CMOS, the paper reports post-synthesis gains across precisions and array sizes and post-place-and-route area and power for an INT4 16×4 array.',
    keywords: ['accelerators', 'edge AI', 'DATE 2025', 'temporal-unary'],
    externalUrl: 'https://arxiv.org/abs/2412.19002',
    externalLabel: 'arXiv:2412.19002',
  },
  {
    slug: 'ozmac-vlsi-soc-2024',
    title: 'Commercial Evaluation of Zero-Skipping MAC Design for Bit Sparsity Exploitation in DL Inference',
    authors: 'H. Nair, P. Vellaisamy, T.H. Lin, P. Wang, R.D.S. Blanton, J.P. Shen',
    venue: 'IEEE VLSI-SoC 2024',
    year: 2024,
    category: 'peer-reviewed',
    summary:
      'OzMAC dynamically skips zero bits using a modified Bit-Pragmatic design. Post-synthesis evaluation in TSMC N5 reports lower area, power, and energy than a binary MAC across multiple precisions and clock frequencies.',
    keywords: ['sparsity', 'DL inference', 'VLSI-SoC 2024'],
    externalUrl: 'https://arxiv.org/abs/2402.19376',
    externalLabel: 'arXiv:2402.19376',
  },
  {
    slug: 'unary-matrix-multiply-isvlsi-2024',
    title: 'Exploration of Unary Arithmetic-Based Matrix Multiply Units for Low Precision DL Accelerators',
    authors: 'P. Vellaisamy, H. Nair, D. Wu, R.D.S. Blanton, J.P. Shen',
    venue: 'IEEE Computer Society Annual Symposium on VLSI (ISVLSI) 2024',
    year: 2024,
    category: 'peer-reviewed',
    summary:
      'This study compares uGEMM, tuGEMM, and tubGEMM with conventional binary GEMM for integer inference. It evaluates post-synthesis tradeoffs across bit widths and matrix sizes and analyzes weight sparsity in eight CNNs and LLaMA 2.',
    keywords: ['unary computing', 'matrix multiply', 'ISVLSI 2024'],
    externalUrl: 'https://arxiv.org/abs/2602.00838',
    externalLabel: 'arXiv:2602.00838',
  },
  {
    slug: 'gait-analysis-icons-2024',
    title: 'Realtime Person Identification via Gait Analysis using IMU Sensors on Edge Devices',
    authors: 'S. Venkatachalam, H. Nair, P. Vellaisamy, Y. Zhou, Z. Youssfi, J.P. Shen',
    venue: 'International Conference on Neuromorphic Systems (ICONS) 2024',
    year: 2024,
    category: 'peer-reviewed',
    summary:
      'This paper presents a four-layer CNN for gait-based identification from IMU data. The 236 KB model reaches 96.7% accuracy across 24 classes and runs in real time on an Arduino Nano 33 BLE Sense; a converted spiking model is also evaluated on BrainChip Akida.',
    keywords: ['edge devices', 'IMU sensors', 'neuromorphic systems', 'ICONS 2024'],
    externalUrl: 'https://doi.org/10.1109/ICONS62911.2024.00063',
    externalLabel: 'DOI',
  },
  {
    slug: 'tnngen-iscas-2024',
    title: 'TNNGen: Automated Design of Neuromorphic Sensory Processing Units for Time-Series Clustering',
    authors: 'P. Vellaisamy, H. Nair, V. Ratnakaram, D. Gupta, J.P. Shen',
    venue: 'IEEE Transactions on Circuits and Systems II: Express Briefs 71(5), 2024 · Presented at ISCAS 2024',
    year: 2024,
    category: 'peer-reviewed',
    summary:
      'TNNGen combines a PyTorch functional simulator with a Python hardware generator for PyTorch-to-RTL and RTL-to-layout conversion. Seven time-series clustering designs demonstrate post-layout hardware evaluation and silicon-metric forecasting.',
    keywords: ['TNNGen', 'neuromorphic hardware', 'ISCAS 2024'],
    externalUrl: 'https://arxiv.org/abs/2412.17977',
    externalLabel: 'arXiv:2412.17977',
  },
  {
    slug: 'tubgemm-isvlsi-2023',
    title: 'tubGEMM: Energy-Efficient and Sparsity-Effective Temporal-Unary-Binary Based Matrix Multiply Unit',
    authors: 'P. Vellaisamy, H. Nair, J. Finn, M. Trivedi, A. Chen, A. Li, T.H. Lin, P. Wang, R.D.S. Blanton, J.P. Shen',
    venue: 'IEEE Computer Society Annual Symposium on VLSI (ISVLSI) 2023',
    year: 2023,
    category: 'peer-reviewed',
    summary:
      'tubGEMM combines temporal-unary and binary encoding for exact matrix multiplication while exploiting value sparsity. A 128×128 INT8 implementation in TSMC N5 is evaluated for area, power, and energy, with workload sparsity reducing energy by more than 3×.',
    keywords: ['tubGEMM', 'hybrid arithmetic', 'ISVLSI 2023'],
    externalUrl: 'https://arxiv.org/abs/2412.17955',
    externalLabel: 'arXiv:2412.17955',
  },
  {
    slug: 'tugemm-iscas-2023',
    title: 'tuGEMM: Area-Power-Efficient Temporal Unary GEMM Architecture for Low-Precision Edge AI',
    authors: 'H. Nair, P. Vellaisamy, A. Chen, J. Finn, A. Li, M. Trivedi, J.P. Shen',
    venue: 'IEEE International Symposium on Circuits and Systems (ISCAS) 2023',
    year: 2023,
    category: 'peer-reviewed',
    summary:
      'tuGEMM performs exact temporal-coded matrix multiplication using serial and parallel variants with different area/power-latency tradeoffs. The paper reports post-synthesis results in 45 nm CMOS for 2-, 4-, and 8-bit configurations.',
    keywords: ['GEMM', 'edge AI', 'ISCAS 2023'],
    externalUrl: 'https://arxiv.org/abs/2412.17966',
    externalLabel: 'arXiv:2412.17966',
  },
  {
    slug: 'tnn7-isvlsi-2022',
    title: 'TNN7: A Custom Macro Suite for Implementing Highly Optimized Designs of Neuromorphic TNNs',
    authors: 'H. Nair, P. Vellaisamy, S. Bhasuthkar, J.P. Shen',
    venue: 'IEEE Computer Society Annual Symposium on VLSI (ISVLSI) 2022',
    year: 2022,
    category: 'peer-reviewed',
    summary:
      'TNN7 adds nine custom Temporal Neural Network macros to a predictive 7 nm process design kit. Across two application prototypes, the macros reduce average power, delay, area, and energy-delay product while cutting synthesis runtime by more than 3×.',
    keywords: ['TNN7', 'neuromorphic design', 'ISVLSI 2022'],
    externalUrl: 'https://arxiv.org/abs/2205.07410',
    externalLabel: 'arXiv:2205.07410',
  },
  {
    slug: 'neutnns-arxiv-2026',
    title: 'NeuroAI Temporal Neural Networks (NeuTNNs): Microarchitecture and Design Framework for Specialized Neuromorphic Processing Units',
    authors: 'S. Venkatachalam, P. Vellaisamy, H. Nair, W.C. Huang, Y. Na, Y. Kang, Q. Jacobson, J.P. Shen',
    venue: 'arXiv preprint, February 2026',
    year: 2026,
    category: 'preprint',
    summary:
      'NeuTNNs extend Temporal Neural Networks with active dendrites and distal/proximal segment hierarchies. NeuTNNGen maps application-specific models from PyTorch to layout, with UCR, MNIST, and place-cell studies showing 30–50% synapse reduction from pruning while preserving model precision.',
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
      'Agraph unifies application, software, architecture, and circuit information for cross-stack design-space exploration. Its Archx framework generates constrained design points and retrieves metrics at user-selected scopes, with case studies spanning multiple technologies, architectures, and applications.',
    keywords: ['A-Graph', 'systems simulation', 'arXiv'],
    externalUrl: 'https://arxiv.org/abs/2602.04847',
    externalLabel: 'arXiv:2602.04847',
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
      'This workshop paper extends value-level parallelism beyond GEMM to value-centric approximations of nonlinear LLM operations.',
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
      'This workshop paper introduces Agraph as a unified representation for flexible simulation across emerging system stacks.',
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
      'This workshop paper compares uGEMM, tuGEMM, and tubGEMM with binary GEMM using post-synthesis 45 nm evaluations across 2- to 8-bit configurations and workload-sparsity analysis.',
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
      'xBrain proposes an explainable neuromorphic brain-computer-interface pipeline spanning signal preprocessing, spike sorting, and template matching. The paper outlines preliminary rate-coded and temporal-coded tools and a planned end-to-end implementation flow.',
    keywords: ['brain-computer interfaces', 'YArch 2024'],
    externalUrl: 'https://www.cs.cmu.edu/~yarch2024/',
    externalLabel: 'YArch 2024',
  },
  {
    slug: 'tnn-framework-yarch-2022',
    title: 'Towards a Design Framework for TNN-Based Neuromorphic Sensory Processing Units',
    authors: 'P. Vellaisamy, J.P. Shen',
    venue: 'Young Architect Workshop (YArch), ASPLOS 2022',
    year: 2022,
    category: 'workshop',
    summary:
      'This workshop paper outlines a software-to-hardware framework for application-specific Temporal Neural Network sensory-processing units. It reviews prior designs and proposes PyTorch-based exploration plus automated implementation for post-layout hardware evaluation.',
    keywords: ['TNN framework', 'YArch 2022'],
    externalUrl: 'https://arxiv.org/abs/2205.14248',
    externalLabel: 'arXiv:2205.14248',
  },
];

export const publicationCounts = {
  peerReviewed: publications.filter((entry) => entry.category === 'peer-reviewed').length,
  workshops: publications.filter((entry) => entry.category === 'workshop').length,
  preprints: publications.filter((entry) => entry.category === 'preprint').length,
};
