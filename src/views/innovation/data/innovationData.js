// ─── Value Proposition Generator Data ──────────────────────────────────

export const samplePapers = [
    {
        id: 1,
        title: 'Quantum-Enhanced Machine Learning for Drug Discovery',
        authors: 'Dr. Sarah Chen, Dr. Raj Patel, Dr. Maria Santos',
        abstract:
            'This paper presents a novel quantum computing approach to accelerate molecular simulation for pharmaceutical drug discovery. Our method achieves a 47x speedup compared to classical methods while maintaining chemical accuracy within 0.3 kcal/mol.',
        date: '2026-01-15',
        status: 'analyzed',
    },
    {
        id: 2,
        title: 'Biodegradable Polymer Coatings for Agricultural Sensors',
        authors: 'Dr. James Okafor, Dr. Lin Wei',
        abstract:
            'We introduce a biodegradable polymer coating that extends the operational life of soil-embedded IoT sensors from 6 months to 3 years while fully decomposing within 60 days after deactivation.',
        date: '2026-02-08',
        status: 'pending',
    },
    {
        id: 3,
        title: 'Neural Architecture Search for Edge Computing Devices',
        authors: 'Dr. Anika Gupta, Dr. Tom Brooks',
        abstract:
            'This research introduces an automated neural architecture search (NAS) framework optimized for resource-constrained edge devices, achieving 92% accuracy on standard benchmarks while reducing model size by 85%.',
        date: '2026-03-01',
        status: 'pending',
    },
]

export const sampleValueProposition = {
    paperId: 1,
    confidenceScore: 87,
    analysisDate: '2026-03-18',
    executiveSummary:
        'Our quantum-enhanced ML platform reduces drug discovery timelines from 5 years to approximately 18 months by leveraging quantum simulation to accurately predict molecular interactions at unprecedented speed. This directly addresses pharma\'s $2.6B average cost-per-drug-approval challenge.',
    keyMetrics: [
        { label: 'Time Reduction', value: '64%', detail: '5 years → 18 months' },
        { label: 'Cost Savings', value: '$1.8B', detail: 'Per drug approval' },
        { label: 'Speedup', value: '47x', detail: 'vs. classical simulation' },
        { label: 'Accuracy', value: '99.7%', detail: '0.3 kcal/mol fidelity' },
    ],
    marketOpportunity: {
        tam: '$68B',
        sam: '$12B',
        som: '$800M',
        growthRate: '23.4%',
        description: 'The global AI-driven drug discovery market is projected to reach $68B by 2030, with quantum-enhanced computational chemistry representing the fastest-growing segment.',
    },
    targetIndustries: [
        { name: 'Pharmaceuticals', relevance: 95, icon: 'pharma' },
        { name: 'Biotech Startups', relevance: 88, icon: 'biotech' },
        { name: 'Contract Research Orgs', relevance: 82, icon: 'cro' },
        { name: 'Academic Research', relevance: 70, icon: 'academic' },
    ],
    competitiveLandscape: [
        { name: 'Classical MD Simulation', speed: 15, accuracy: 95, cost: 90, weakness: 'Extremely slow computation' },
        { name: 'AI-Only Prediction', speed: 90, accuracy: 60, cost: 30, weakness: 'Low accuracy for novel molecules' },
        { name: 'Physical HTS', speed: 20, accuracy: 98, cost: 95, weakness: '$500K+ per campaign' },
        { name: 'Our Solution', speed: 88, accuracy: 94, cost: 40, weakness: 'Requires quantum access' },
    ],
    riskFactors: [
        { risk: 'Quantum hardware availability', severity: 'medium', mitigation: 'Hybrid classical-quantum fallback architecture' },
        { risk: 'FDA regulatory uncertainty', severity: 'high', mitigation: 'Engagement with FDA Innovation Pathway program' },
        { risk: 'Data scarcity for rare diseases', severity: 'low', mitigation: 'Transfer learning from related compounds' },
    ],
    ipPotential: {
        patentability: 'High',
        priorArt: 3,
        novelClaims: ['Quantum circuit design for molecular simulation', 'Hybrid quantum-ML pipeline architecture', 'Error-corrected quantum sampling method'],
    },
    jtbdAnalysis: {
        jobStatement:
            'When pharmaceutical researchers are screening molecular candidates, they want to accurately predict binding affinity and toxicity profiles so they can reduce costly late-stage clinical failures.',
        currentSolutions: [
            'Classical molecular dynamics (slow, expensive)',
            'AI-only predictions (fast but low accuracy)',
            'Physical high-throughput screening (gold standard but $500K+ per campaign)',
        ],
        ourAdvantage:
            'Combines quantum accuracy with ML speed — 47x faster than classical simulation while preserving chemical-grade fidelity. Eliminates 70% of false-positive drug candidates before wet-lab testing.',
    },
    businessModelCanvas: {
        valueProposition:
            'Dramatically faster, cheaper drug candidate screening with quantum-grade accuracy',
        customerSegments: [
            'Top 20 pharmaceutical companies',
            'Contract Research Organizations (CROs)',
            'Biotech startups (Series B+)',
        ],
        channels: [
            'Direct enterprise sales',
            'Strategic partnerships with CROs',
            'Academic licensing programs',
        ],
        revenueStreams: [
            'SaaS platform subscriptions ($50K–$500K/yr)',
            'Per-simulation usage fees',
            'IP licensing for specific therapeutic areas',
        ],
        keyResources: [
            'Quantum computing infrastructure',
            'Proprietary ML training datasets',
            'Domain expert team (chemistry + quantum physics)',
        ],
    },
    nextSteps: [
        { step: 'File provisional patent application', priority: 'high', timeline: '2 weeks' },
        { step: 'Schedule meeting with Technology Transfer Office', priority: 'high', timeline: '1 week' },
        { step: 'Prepare investor pitch deck using generated canvas', priority: 'medium', timeline: '3 weeks' },
        { step: 'Identify 3 pharma partners for pilot program', priority: 'medium', timeline: '4 weeks' },
    ],
}

// ─── Research Projects (shared across module) ────────────────────────

export const researchProjects = [
    {
        id: 1,
        title: 'Quantum-Enhanced ML for Drug Discovery',
        lab: 'Quantum Computing Lab',
        pi: 'Dr. Sarah Chen',
        status: 'active',
    },
    {
        id: 2,
        title: 'Biodegradable Polymer Coatings for Ag Sensors',
        lab: 'Materials Science Lab',
        pi: 'Dr. James Okafor',
        status: 'active',
    },
    {
        id: 3,
        title: 'Neural Architecture Search for Edge Devices',
        lab: 'AI Systems Lab',
        pi: 'Dr. Anika Gupta',
        status: 'active',
    },
]

// ─── Market Intelligence Data (per project) ───────────────────────────

export const marketIntelByProject = {
    1: {
        industryNews: [
            {
                id: 1,
                title: 'Pfizer Invests $1.2B in Quantum Computing Drug Discovery',
                source: 'Reuters',
                date: '2026-03-10',
                summary:
                    'Pfizer announced a major quantum computing initiative to accelerate small molecule drug discovery, signaling strong market validation for quantum-enhanced pharmaceutical research.',
                relevance: 'high',
                category: 'Investment',
            },
            {
                id: 2,
                title: 'Google DeepMind Releases Open-Source Molecular Simulation Toolkit',
                source: 'TechCrunch',
                date: '2026-03-12',
                summary:
                    'Google DeepMind open-sourced their molecular simulation toolkit, potentially increasing competition in AI-powered drug discovery space.',
                relevance: 'medium',
                category: 'Competitive',
            },
        ],
        patents: [
            {
                id: 'US2026/0145782',
                title: 'Hybrid Quantum-Classical Molecular Dynamics Simulation',
                assignee: 'IBM Research',
                filingDate: '2025-08-14',
                status: 'Published',
                overlap: 'partial',
            },
        ],
        productMarketFit: {
            overallScore: 78,
            dimensions: [
                { label: 'Market Demand', score: 85 },
                { label: 'Technical Feasibility', score: 72 },
                { label: 'Competitive Moat', score: 68 },
                { label: 'Scalability', score: 82 },
                { label: 'Revenue Potential', score: 88 },
            ],
        },
        potentialPartners: [
            {
                name: 'Novartis AG',
                industry: 'Pharmaceuticals',
                fit: 'Strategic Partner',
                interest: 'high',
                rationale:
                    'Active quantum computing research program; announced intent to license external drug discovery platforms.',
            },
            {
                name: 'Roche Diagnostics',
                industry: 'Pharmaceuticals',
                fit: 'Licensee',
                interest: 'medium',
                rationale:
                    'Expanding AI-driven diagnostics division with focus on molecular simulation capabilities.',
            },
        ],
    },
    2: {
        industryNews: [
            {
                id: 1,
                title: 'EU Green Deal Mandates Biodegradable Sensors by 2028',
                source: 'European Commission',
                date: '2026-02-28',
                summary:
                    'New EU regulations will require all agricultural IoT sensors to be fully biodegradable by 2028, creating a massive regulatory-driven market opportunity.',
                relevance: 'high',
                category: 'Regulation',
            },
            {
                id: 2,
                title: 'Precision Agriculture IoT Market Hits $8.5B',
                source: 'AgFunder',
                date: '2026-03-01',
                summary:
                    'The precision agriculture IoT market continues to expand rapidly, driven by sustainability mandates and need for real-time soil monitoring.',
                relevance: 'high',
                category: 'Market Analysis',
            },
        ],
        patents: [
            {
                id: 'US2026/0198341',
                title: 'Biodegradable Encapsulation for Electronic Sensors',
                assignee: 'BASF SE',
                filingDate: '2025-11-20',
                status: 'Published',
                overlap: 'low',
            },
        ],
        productMarketFit: {
            overallScore: 85,
            dimensions: [
                { label: 'Market Demand', score: 92 },
                { label: 'Technical Feasibility', score: 80 },
                { label: 'Competitive Moat', score: 78 },
                { label: 'Scalability', score: 88 },
                { label: 'Revenue Potential', score: 84 },
            ],
        },
        potentialPartners: [
            {
                name: 'Bayer CropScience',
                industry: 'Agriculture',
                fit: 'Licensee',
                interest: 'high',
                rationale:
                    'Major investor in precision agriculture IoT; looking for biodegradable sensor solutions.',
            },
            {
                name: 'John Deere',
                industry: 'Agriculture',
                fit: 'Strategic Partner',
                interest: 'medium',
                rationale:
                    'Expanding smart farming platform; needs sensor partners for next-gen precision agriculture suite.',
            },
        ],
    },
    3: {
        industryNews: [
            {
                id: 1,
                title: 'Edge AI Market Expected to Reach $38.9B by 2028',
                source: 'MarketsAndMarkets',
                date: '2026-03-05',
                summary:
                    'Growing demand for real-time processing in autonomous systems, healthcare devices, and smart manufacturing is driving rapid expansion of the edge AI market.',
                relevance: 'high',
                category: 'Market Analysis',
            },
            {
                id: 2,
                title: 'Qualcomm Announces Next-Gen AI Accelerator for IoT',
                source: 'The Verge',
                date: '2026-03-14',
                summary:
                    'Qualcomm\'s new chipset doubles edge AI inference speed while halving power consumption, raising the bar for neural architecture efficiency.',
                relevance: 'medium',
                category: 'Competitive',
            },
        ],
        patents: [
            {
                id: 'EP2026/0087654',
                title: 'Neural Architecture Optimization for Low-Power Devices',
                assignee: 'Qualcomm',
                filingDate: '2025-09-03',
                status: 'Granted',
                overlap: 'partial',
            },
        ],
        productMarketFit: {
            overallScore: 71,
            dimensions: [
                { label: 'Market Demand', score: 80 },
                { label: 'Technical Feasibility', score: 75 },
                { label: 'Competitive Moat', score: 55 },
                { label: 'Scalability', score: 78 },
                { label: 'Revenue Potential', score: 72 },
            ],
        },
        potentialPartners: [
            {
                name: 'NVIDIA',
                industry: 'Technology',
                fit: 'Technology Partner',
                interest: 'high',
                rationale:
                    'Edge AI hardware platform; actively seeking optimized neural architectures for their Jetson product line.',
            },
            {
                name: 'Siemens',
                industry: 'Industrial Tech',
                fit: 'Licensee',
                interest: 'medium',
                rationale:
                    'Expanding edge AI for industrial automation; needs lightweight models for factory-floor controllers.',
            },
        ],
    },
}

// ─── Sentiment Analysis Data ──────────────────────────────────────────

export const pitchAnalysisData = [
    {
        id: 1,
        studentName: 'Alex Rivera',
        pitchTitle: 'QuantumRx — AI-Powered Drug Discovery',
        date: '2026-03-05',
        duration: '2:34',
        overallScore: 82,
        scores: {
            tone: 78,
            clarity: 88,
            persuasion: 72,
            structure: 85,
            confidence: 80,
        },
        feedback: [
            {
                type: 'strength',
                text: 'Strong opening hook — immediately establishes the $2.6B cost problem.',
                timestamp: '0:05',
            },
            {
                type: 'strength',
                text: 'Clear articulation of the 47x speed improvement metric.',
                timestamp: '0:48',
            },
            {
                type: 'improvement',
                text: 'The competitive differentiation section is vague. Specify what makes your quantum approach superior to IBM\'s hybrid method.',
                timestamp: '1:22',
            },
            {
                type: 'improvement',
                text: 'Closing call-to-action lacks urgency. Consider adding a time-sensitive element like pilot program availability.',
                timestamp: '2:18',
            },
            {
                type: 'strength',
                text: 'Effective use of customer testimonial quote from Dr. Yamamoto at Novartis.',
                timestamp: '1:55',
            },
        ],
        transcript: `Good morning. Every year, pharmaceutical companies spend $2.6 billion per approved drug — and 90% of candidates fail in clinical trials. What if we could cut that failure rate in half?

I'm Alex Rivera, and QuantumRx uses quantum-enhanced machine learning to simulate molecular interactions 47 times faster than classical methods, with near-perfect chemical accuracy.

Our platform has already identified three promising candidates for Alzheimer's treatment that classical methods missed entirely. Dr. Yamamoto at Novartis called it "the most significant advancement in computational drug discovery this decade."

We're seeking $3 million in seed funding to scale our platform and launch pilot programs with two top-20 pharma companies. Let's talk about how quantum computing can transform your drug pipeline.`,
    },
    {
        id: 2,
        studentName: 'Priya Sharma',
        pitchTitle: 'GreenSense — Biodegradable Agricultural IoT',
        date: '2026-03-08',
        duration: '3:12',
        overallScore: 91,
        scores: {
            tone: 92,
            clarity: 94,
            persuasion: 88,
            structure: 90,
            confidence: 93,
        },
        feedback: [
            {
                type: 'strength',
                text: 'Exceptional storytelling — opens with a relatable farmer\'s perspective that humanizes the technology problem.',
                timestamp: '0:08',
            },
            {
                type: 'strength',
                text: 'Brilliant visual analogy comparing sensor lifecycle to seasonal crop cycles.',
                timestamp: '0:45',
            },
            {
                type: 'strength',
                text: 'Regulatory tailwind (EU Green Deal 2028) is well-positioned as an urgent market driver.',
                timestamp: '1:30',
            },
            {
                type: 'improvement',
                text: 'Revenue model explanation could be more concise — spent 40 seconds on pricing tiers when 15 would suffice.',
                timestamp: '2:10',
            },
            {
                type: 'strength',
                text: 'Confident, measured delivery throughout. Excellent pacing.',
                timestamp: '0:00',
            },
        ],
        transcript: `Meet Maria, a third-generation farmer in Spain. Every spring she buries dozens of soil sensors across her vineyard — and every fall she digs up dead plastic electronics that contaminate the very soil she's trying to protect.

GreenSense changes this story. Our biodegradable polymer coating extends sensor life from 6 months to 3 years, then completely decomposes within 60 days. Think of it like a leaf falling from a tree — our sensors serve their purpose, then return to the earth.

With the EU Green Deal mandating biodegradable sensors by 2028, the window to capture this €4.2 billion market is closing fast. We already have pilot agreements with two major European agricultural cooperatives.

We're raising $2 million to scale manufacturing and achieve EU certification. Join us in making precision agriculture truly sustainable.`,
    },
    {
        id: 3,
        studentName: 'Marcus Chen',
        pitchTitle: 'EdgeMind — Neural Architecture for Edge Devices',
        date: '2026-03-12',
        duration: '2:58',
        overallScore: 68,
        scores: {
            tone: 62,
            clarity: 65,
            persuasion: 60,
            structure: 75,
            confidence: 58,
        },
        feedback: [
            {
                type: 'improvement',
                text: 'Opening is too technical — "automated neural architecture search framework" means nothing to most investors. Lead with the problem.',
                timestamp: '0:03',
            },
            {
                type: 'strength',
                text: 'Good use of concrete metrics: 92% accuracy, 85% model size reduction.',
                timestamp: '1:05',
            },
            {
                type: 'improvement',
                text: 'Speaking pace is too fast in the middle section. Slow down when presenting key differentiators.',
                timestamp: '1:20',
            },
            {
                type: 'improvement',
                text: 'Eye contact appears to drop when discussing competition. Practice this section to build confidence.',
                timestamp: '1:50',
            },
            {
                type: 'improvement',
                text: 'The ask is buried at the end. State your funding needs earlier and reinforce at the close.',
                timestamp: '2:45',
            },
        ],
        transcript: `EdgeMind is an automated neural architecture search framework optimized for resource-constrained edge devices. We achieve 92% accuracy on standard benchmarks while reducing model size by 85%.

The edge AI market is projected to reach $38.9 billion by 2028. Current solutions force developers to choose between accuracy and efficiency — we eliminate that tradeoff.

Our NAS framework automatically discovers optimal architectures for specific hardware targets, including NVIDIA Jetson, Qualcomm Snapdragon, and custom ASICs. We've already partnered with one major chipmaker for integration testing.

EdgeMind is seeking $1.5 million to expand our hardware compatibility matrix and build our enterprise sales team.`,
    },
]

// ─── Dashboard Stats ──────────────────────────────────────────────────

export const dashboardStats = {
    valueProp: {
        papersAnalyzed: 12,
        propositionsGenerated: 8,
        avgConfidence: 84,
    },
    marketIntel: {
        newsTracked: 47,
        patentsMonitored: 23,
        partnersIdentified: 15,
    },
    sentiment: {
        pitchesAnalyzed: 34,
        avgScore: 76,
        improvementRate: 23,
    },
}
