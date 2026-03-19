// ─── Semantic Search Data ──────────────────────────────────────────────

export const searchResults = [
    {
        id: 1,
        title: 'Soil Nutrient Dynamics and Agricultural Productivity',
        authors: 'J. Williams, R. Patel, M. Okonkwo',
        year: 2024,
        type: 'Book',
        conceptMatch: 95,
        concepts: ['nitrogen cycling', 'crop yield optimization', 'soil health'],
        abstract:
            'A comprehensive analysis of how macro and micro nutrients in soil ecosystems directly influence crop productivity, with focus on nitrogen fixation pathways and their impact on grain yield across temperate climates.',
        available: true,
    },
    {
        id: 2,
        title: 'Precision Agriculture: Data-Driven Crop Management',
        authors: 'S. Kumar, L. Zhang',
        year: 2023,
        type: 'Book',
        conceptMatch: 87,
        concepts: ['soil sensing', 'yield prediction', 'variable rate fertilization'],
        abstract:
            'Explores modern approaches to precision agriculture including IoT soil sensors, machine learning for yield prediction, and variable-rate nitrogen application strategies.',
        available: true,
    },
    {
        id: 3,
        title: 'Nitrogen Metabolism in Plants: From Molecular Biology to Crop Improvement',
        authors: 'A. Fernandez, K. Nakamura',
        year: 2022,
        type: 'Journal',
        conceptMatch: 82,
        concepts: ['nitrogen assimilation', 'plant metabolism', 'genetic improvement'],
        abstract:
            'Reviews the molecular mechanisms of nitrogen uptake and assimilation in plants, and discusses genetic engineering approaches to improve nitrogen use efficiency.',
        available: false,
    },
    {
        id: 4,
        title: 'Sustainable Soil Management for Food Security',
        authors: 'M. Dubois, T. Agarwal, P. Nkosi',
        year: 2025,
        type: 'Book',
        conceptMatch: 78,
        concepts: ['sustainable agriculture', 'soil conservation', 'food production'],
        abstract:
            'Examines sustainable soil management practices and their role in maintaining long-term food security, with case studies from sub-Saharan Africa and Southeast Asia.',
        available: true,
    },
    {
        id: 5,
        title: 'Climate Change Effects on Soil-Plant Nitrogen Interactions',
        authors: 'R. Jensen, B. Liu',
        year: 2024,
        type: 'Journal',
        conceptMatch: 74,
        concepts: ['climate impact', 'nitrogen leaching', 'soil temperature'],
        abstract:
            'Investigates how rising temperatures and changing precipitation patterns affect nitrogen dynamics in agricultural soils and subsequent crop performance.',
        available: true,
    },
]

export const recentSearches = [
    'how soil nitrogen affects crop yield',
    'machine learning protein folding prediction',
    'CRISPR ethics in human germline editing',
    'renewable energy storage solutions',
]

// ─── Citation & Synthesis Data ────────────────────────────────────────

export const paperLibrary = [
    { id: 1, title: 'Deep Learning for Medical Image Analysis', authors: 'Chen et al.', year: 2024, selected: false },
    { id: 2, title: 'Transformer Architectures in Clinical NLP', authors: 'Patel & Kumar', year: 2023, selected: false },
    { id: 3, title: 'Federated Learning for Hospital Networks', authors: 'Zhang et al.', year: 2024, selected: false },
    { id: 4, title: 'Explainable AI in Radiology Diagnostics', authors: 'Williams & Lee', year: 2023, selected: false },
    { id: 5, title: 'Privacy-Preserving ML in Healthcare', authors: 'Okonkwo et al.', year: 2025, selected: false },
    { id: 6, title: 'GANs for Synthetic Medical Data', authors: 'Fernandez & Nakamura', year: 2024, selected: false },
    { id: 7, title: 'Reinforcement Learning for Treatment Planning', authors: 'Jensen et al.', year: 2023, selected: false },
    { id: 8, title: 'Multi-Modal Fusion in Clinical Decision Support', authors: 'Agarwal & Dubois', year: 2025, selected: false },
]

export const synthesisMatrix = {
    themes: [
        {
            name: 'Data Privacy',
            description: 'Approaches to handling sensitive patient data in ML pipelines',
            papers: [
                { id: 3, stance: 'supporting', note: 'Proposes federated learning as primary privacy mechanism' },
                { id: 5, stance: 'supporting', note: 'Extends with differential privacy and secure aggregation' },
                { id: 6, stance: 'conflicting', note: 'Argues synthetic data eliminates need for real patient data' },
            ],
        },
        {
            name: 'Model Interpretability',
            description: 'Making AI decisions transparent and understandable to clinicians',
            papers: [
                { id: 4, stance: 'supporting', note: 'Comprehensive framework for explainable radiology AI' },
                { id: 1, stance: 'supporting', note: 'Uses attention maps and saliency for image explanations' },
                { id: 2, stance: 'neutral', note: 'Acknowledges interpretability challenge in transformer models' },
                { id: 8, stance: 'supporting', note: 'Multi-modal explanations improve clinician trust' },
            ],
        },
        {
            name: 'Clinical Validation',
            description: 'Standards for validating AI models in real clinical settings',
            papers: [
                { id: 1, stance: 'supporting', note: 'Multi-center validation across 12 hospitals' },
                { id: 7, stance: 'conflicting', note: 'Questions feasibility of randomized trials for RL systems' },
                { id: 4, stance: 'supporting', note: 'Prospective validation methodology for diagnostic AI' },
            ],
        },
        {
            name: 'Scalability',
            description: 'Deploying AI solutions across diverse healthcare institutions',
            papers: [
                { id: 3, stance: 'supporting', note: 'Federated approach enables cross-institution scaling' },
                { id: 8, stance: 'neutral', note: 'Notes infrastructure requirements for multi-modal systems' },
                { id: 2, stance: 'supporting', note: 'Lightweight transformer variants for resource-constrained settings' },
            ],
        },
    ],
}

// ─── Reading Assistant Data ───────────────────────────────────────────

export const libraryBooks = [
    {
        id: 1,
        title: 'Soil Nutrient Dynamics and Agricultural Productivity',
        authors: 'J. Williams, R. Patel, M. Okonkwo',
        year: 2024,
        chapters: [
            'Introduction to Soil Science',
            'Nitrogen Cycling in Agricultural Systems',
            'Phosphorus and Potassium Dynamics',
            'Soil Microbiome and Nutrient Availability',
            'Crop Yield Modeling',
            'Sustainable Fertilization Strategies',
        ],
    },
    {
        id: 2,
        title: 'Deep Learning for Medical Image Analysis',
        authors: 'Chen et al.',
        year: 2024,
        chapters: [
            'Foundations of Deep Learning',
            'Convolutional Neural Networks for Imaging',
            'Object Detection in Medical Scans',
            'Segmentation Architectures',
            'Transfer Learning in Clinical Settings',
            'Deployment and Regulatory Considerations',
        ],
    },
]

export const readingConversation = [
    {
        role: 'user',
        text: 'Summarize chapter 2: Nitrogen Cycling in Agricultural Systems',
    },
    {
        role: 'assistant',
        text: 'Chapter 2 covers the complete nitrogen cycle in agricultural soils. It explains how atmospheric nitrogen is fixed by soil bacteria (particularly Rhizobium in legume root nodules) and converted into plant-usable forms like ammonium and nitrate.\n\nKey topics covered:\n\n- Biological nitrogen fixation by symbiotic and free-living bacteria\n- Nitrification and denitrification processes and their environmental conditions\n- Nitrogen mineralization from organic matter\n- Plant nitrogen uptake mechanisms and root architecture\n- Nitrogen loss pathways including leaching, volatilization, and runoff\n\nThe chapter concludes that optimizing nitrogen availability requires balancing input timing with crop demand, and that excessive application leads to environmental degradation without proportional yield gains.',
        chapter: 2,
    },
    {
        role: 'user',
        text: 'What does the author say about nitrogen loss through leaching?',
    },
    {
        role: 'assistant',
        text: 'The authors identify nitrogen leaching as one of the most significant pathways for nitrogen loss in agricultural systems. Key points from the chapter:\n\nNitrate (NO3-) is particularly susceptible to leaching because it carries a negative charge and is not retained by negatively-charged soil particles. The rate of leaching depends on:\n\n- Soil texture (sandy soils lose more than clay soils)\n- Rainfall intensity and irrigation practices\n- Timing of fertilizer application relative to crop uptake\n- Soil organic matter content\n\nThe authors recommend split application of nitrogen fertilizers aligned with crop growth stages as the most practical strategy to minimize leaching losses while maintaining yield. They cite field studies showing 25-40% reduction in nitrate leaching with optimized timing compared to single pre-plant applications.',
        chapter: 2,
    },
]

// ─── Dashboard Stats ──────────────────────────────────────────────────

export const libraryDashboardStats = {
    semanticSearch: {
        searchesPerformed: 234,
        resourcesIndexed: 12500,
        avgRelevance: 89,
    },
    citationSynthesis: {
        matricesGenerated: 45,
        papersProcessed: 380,
        themesIdentified: 156,
    },
    readingAssistant: {
        booksAvailable: 8400,
        questionsAnswered: 512,
        chaptersAnalyzed: 1240,
    },
}
