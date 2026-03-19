// ─── Open Positions & Organizations ───────────────────────────────────

export const organizations = [
    {
        id: 1,
        name: 'Dept. of Computer Science',
        type: 'Department',
        positions: [
            {
                id: 'cs-ap-ai',
                title: 'Assistant Professor — Artificial Intelligence',
                status: 'Active',
                applicants: 3,
                posted: '2026-01-15',
                closes: '2026-04-30',
            },
        ],
    },
    {
        id: 2,
        name: 'Biomedical Engineering Lab',
        type: 'Lab',
        positions: [
            {
                id: 'bme-postdoc',
                title: 'Postdoctoral Researcher — Tissue Engineering',
                status: 'Active',
                applicants: 2,
                posted: '2026-02-01',
                closes: '2026-05-15',
            },
        ],
    },
    {
        id: 3,
        name: 'Dept. of Chemistry',
        type: 'Department',
        positions: [
            {
                id: 'chem-ap-org',
                title: 'Associate Professor — Organic Chemistry',
                status: 'Active',
                applicants: 2,
                posted: '2026-01-20',
                closes: '2026-04-15',
            },
        ],
    },
]

// ─── Bibliometric Data ────────────────────────────────────────────────

export const applicantPublications = {
    'cs-ap-ai': [
        {
            applicantId: 1,
            name: 'Dr. Sarah Chen',
            hIndex: 18,
            totalCitations: 1240,
            publications: [
                { title: 'Deep Reinforcement Learning for Autonomous Systems', journal: 'Nature Machine Intelligence', year: 2025, impactFactor: 25.9, citations: 342, quartile: 'Q1' },
                { title: 'Scalable Multi-Agent Communication', journal: 'JMLR', year: 2024, impactFactor: 6.0, citations: 187, quartile: 'Q1' },
                { title: 'Attention Mechanisms for Robotics Control', journal: 'IEEE Trans. Robotics', year: 2024, impactFactor: 7.8, citations: 156, quartile: 'Q1' },
                { title: 'Sim-to-Real Transfer in Manipulation Tasks', journal: 'ICRA Proceedings', year: 2023, impactFactor: null, citations: 98, quartile: null },
                { title: 'Graph Neural Networks for Planning', journal: 'NeurIPS Proceedings', year: 2023, impactFactor: null, citations: 134, quartile: null },
                { title: 'Federated Learning in Edge Computing', journal: 'ACM Computing Surveys', year: 2022, impactFactor: 16.6, citations: 323, quartile: 'Q1' },
            ],
        },
        {
            applicantId: 2,
            name: 'Dr. Marcus Webb',
            hIndex: 12,
            totalCitations: 680,
            publications: [
                { title: 'Transformer Models for Computer Vision', journal: 'CVPR Proceedings', year: 2025, impactFactor: null, citations: 89, quartile: null },
                { title: 'Few-Shot Learning in Medical Imaging', journal: 'Medical Image Analysis', year: 2024, impactFactor: 10.9, citations: 145, quartile: 'Q1' },
                { title: 'Explainable AI for Clinical Decision Support', journal: 'Artificial Intelligence in Medicine', year: 2024, impactFactor: 7.5, citations: 112, quartile: 'Q1' },
                { title: 'Self-Supervised Pre-Training for Pathology', journal: 'MICCAI Proceedings', year: 2023, impactFactor: null, citations: 76, quartile: null },
                { title: 'Adversarial Robustness in Classification', journal: 'Pattern Recognition', year: 2022, impactFactor: 8.0, citations: 258, quartile: 'Q1' },
            ],
        },
        {
            applicantId: 3,
            name: 'Dr. Aisha Okonkwo',
            hIndex: 15,
            totalCitations: 920,
            publications: [
                { title: 'Large Language Models for Code Generation', journal: 'ACM TOSEM', year: 2025, impactFactor: 6.1, citations: 201, quartile: 'Q1' },
                { title: 'Prompt Engineering for Scientific Discovery', journal: 'Nature Computational Science', year: 2024, impactFactor: 12.0, citations: 178, quartile: 'Q1' },
                { title: 'Efficient Fine-Tuning of Foundation Models', journal: 'ICLR Proceedings', year: 2024, impactFactor: null, citations: 245, quartile: null },
                { title: 'Ethical AI Frameworks for Education', journal: 'AI \u0026 Society', year: 2023, impactFactor: 3.2, citations: 89, quartile: 'Q2' },
                { title: 'Retrieval-Augmented Generation for QA', journal: 'EMNLP Proceedings', year: 2023, impactFactor: null, citations: 167, quartile: null },
                { title: 'Bias Detection in Language Models', journal: 'FAccT Proceedings', year: 2022, impactFactor: null, citations: 40, quartile: null },
            ],
        },
    ],
    'bme-postdoc': [
        {
            applicantId: 4,
            name: 'Dr. Emily Larsson',
            hIndex: 8,
            totalCitations: 310,
            publications: [
                { title: '3D Bioprinting of Vascular Tissue', journal: 'Biomaterials', year: 2025, impactFactor: 14.0, citations: 78, quartile: 'Q1' },
                { title: 'Hydrogel Scaffolds for Cartilage Repair', journal: 'Acta Biomaterialia', year: 2024, impactFactor: 10.6, citations: 95, quartile: 'Q1' },
                { title: 'Stem Cell Differentiation in Microfluidics', journal: 'Lab on a Chip', year: 2023, impactFactor: 6.1, citations: 67, quartile: 'Q1' },
                { title: 'Decellularized Matrices for Organ Engineering', journal: 'Tissue Engineering Part A', year: 2023, impactFactor: 4.5, citations: 70, quartile: 'Q2' },
            ],
        },
        {
            applicantId: 5,
            name: 'Dr. Raj Kapoor',
            hIndex: 6,
            totalCitations: 215,
            publications: [
                { title: 'Piezoelectric Scaffolds for Bone Regeneration', journal: 'Advanced Healthcare Materials', year: 2025, impactFactor: 10.0, citations: 45, quartile: 'Q1' },
                { title: 'Electrospun Nanofibers for Drug Delivery', journal: 'Journal of Controlled Release', year: 2024, impactFactor: 10.8, citations: 88, quartile: 'Q1' },
                { title: 'Bio-Ink Formulation for Soft Tissue Printing', journal: 'Biofabrication', year: 2023, impactFactor: 8.2, citations: 82, quartile: 'Q1' },
            ],
        },
    ],
    'chem-ap-org': [
        {
            applicantId: 6,
            name: 'Dr. Li Wei',
            hIndex: 22,
            totalCitations: 2100,
            publications: [
                { title: 'Total Synthesis of Taxol via New C-H Activation', journal: 'Journal of the ACS', year: 2025, impactFactor: 16.4, citations: 412, quartile: 'Q1' },
                { title: 'Asymmetric Catalysis Using Earth-Abundant Metals', journal: 'Angewandte Chemie', year: 2024, impactFactor: 16.6, citations: 380, quartile: 'Q1' },
                { title: 'Green Chemistry Approaches to Pharmaceutical Synthesis', journal: 'Chemical Reviews', year: 2024, impactFactor: 62.1, citations: 520, quartile: 'Q1' },
                { title: 'Photocatalytic Radical Cascades', journal: 'Nature Chemistry', year: 2023, impactFactor: 24.4, citations: 435, quartile: 'Q1' },
                { title: 'Metal-Free Organocatalysis in Aqueous Media', journal: 'Chemical Science', year: 2022, impactFactor: 9.8, citations: 353, quartile: 'Q1' },
            ],
        },
        {
            applicantId: 7,
            name: 'Dr. Maria Santos',
            hIndex: 16,
            totalCitations: 1350,
            publications: [
                { title: 'Enzymatic C-H Functionalization', journal: 'Science', year: 2025, impactFactor: 63.7, citations: 289, quartile: 'Q1' },
                { title: 'Biocatalysis for API Manufacturing', journal: 'Nature Catalysis', year: 2024, impactFactor: 42.8, citations: 312, quartile: 'Q1' },
                { title: 'Machine Learning for Retrosynthesis', journal: 'JACS', year: 2023, impactFactor: 16.4, citations: 398, quartile: 'Q1' },
                { title: 'Flow Chemistry for Scale-Up', journal: 'Organic Process Research', year: 2023, impactFactor: 3.9, citations: 351, quartile: 'Q2' },
            ],
        },
    ],
}

// ─── Alignment Scoring Data ───────────────────────────────────────────

export const jobDescriptions = {
    'cs-ap-ai': {
        keywords: ['artificial intelligence', 'machine learning', 'deep learning', 'robotics', 'autonomous systems', 'NLP', 'computer vision', 'scalable systems', 'teaching', 'grant funding'],
        strategicPriorities: 'The department seeks candidates with a strong publication record in AI/ML, demonstrated ability to secure external funding, and a commitment to interdisciplinary collaboration with engineering and health sciences.',
    },
    'bme-postdoc': {
        keywords: ['tissue engineering', 'bioprinting', 'biomaterials', 'scaffolds', 'regenerative medicine', 'stem cells', 'microfluidics', 'drug delivery'],
        strategicPriorities: 'The lab focuses on translational tissue engineering with an emphasis on vascularized tissue constructs and clinical applications of 3D bioprinting.',
    },
    'chem-ap-org': {
        keywords: ['organic synthesis', 'catalysis', 'total synthesis', 'green chemistry', 'pharmaceutical', 'organocatalysis', 'C-H activation', 'biocatalysis'],
        strategicPriorities: 'The department prioritizes sustainable chemistry practices, novel synthetic methodologies, and computational integration in synthetic planning.',
    },
}

export const alignmentScores = {
    'cs-ap-ai': [
        {
            applicantId: 1,
            name: 'Dr. Sarah Chen',
            overallScore: 92,
            breakdown: [
                { category: 'Research Area Match', score: 95, detail: 'Strong overlap in AI, deep learning, autonomous systems' },
                { category: 'Publication Quality', score: 94, detail: 'High-impact journals, Q1 dominant' },
                { category: 'Strategic Fit', score: 88, detail: 'Aligns well with interdisciplinary AI goals' },
                { category: 'Teaching Potential', score: 90, detail: 'Covers core AI curriculum areas' },
            ],
            topKeywords: ['deep learning', 'autonomous systems', 'robotics', 'scalable systems'],
            gaps: ['No NLP-specific publications'],
        },
        {
            applicantId: 2,
            name: 'Dr. Marcus Webb',
            overallScore: 78,
            breakdown: [
                { category: 'Research Area Match', score: 75, detail: 'Computer vision focus, less autonomous systems' },
                { category: 'Publication Quality', score: 82, detail: 'Good publication venues, solid citations' },
                { category: 'Strategic Fit', score: 80, detail: 'Medical AI aligns with health sciences collaboration' },
                { category: 'Teaching Potential', score: 74, detail: 'Narrow focus may limit course offerings' },
            ],
            topKeywords: ['computer vision', 'machine learning', 'deep learning'],
            gaps: ['Limited breadth outside medical imaging', 'No robotics/NLP work'],
        },
        {
            applicantId: 3,
            name: 'Dr. Aisha Okonkwo',
            overallScore: 85,
            breakdown: [
                { category: 'Research Area Match', score: 88, detail: 'Strong NLP and LLM expertise' },
                { category: 'Publication Quality', score: 86, detail: 'Top-tier venues, rising citation trajectory' },
                { category: 'Strategic Fit', score: 82, detail: 'AI ethics adds unique interdisciplinary angle' },
                { category: 'Teaching Potential', score: 84, detail: 'Can teach NLP, AI ethics, foundations' },
            ],
            topKeywords: ['NLP', 'machine learning', 'artificial intelligence'],
            gaps: ['No computer vision or robotics publications'],
        },
    ],
    'bme-postdoc': [
        {
            applicantId: 4,
            name: 'Dr. Emily Larsson',
            overallScore: 94,
            breakdown: [
                { category: 'Research Area Match', score: 96, detail: 'Direct expertise in bioprinting and tissue engineering' },
                { category: 'Publication Quality', score: 92, detail: 'Strong Q1 publication record in biomaterials' },
                { category: 'Strategic Fit', score: 95, detail: 'Vascularized tissue work directly aligns' },
                { category: 'Lab Technique Match', score: 93, detail: 'Experience with bioprinting, microfluidics, scaffolds' },
            ],
            topKeywords: ['bioprinting', 'tissue engineering', 'scaffolds', 'microfluidics'],
            gaps: [],
        },
        {
            applicantId: 5,
            name: 'Dr. Raj Kapoor',
            overallScore: 79,
            breakdown: [
                { category: 'Research Area Match', score: 80, detail: 'Biomaterials focus with some tissue engineering' },
                { category: 'Publication Quality', score: 84, detail: 'Good journal quality, growing citations' },
                { category: 'Strategic Fit', score: 72, detail: 'Drug delivery focus diverges from lab priorities' },
                { category: 'Lab Technique Match', score: 78, detail: 'Electrospinning skill, less bioprinting experience' },
            ],
            topKeywords: ['biomaterials', 'scaffolds', 'drug delivery'],
            gaps: ['Limited vascularization experience', 'No microfluidics publications'],
        },
    ],
    'chem-ap-org': [
        {
            applicantId: 6,
            name: 'Dr. Li Wei',
            overallScore: 91,
            breakdown: [
                { category: 'Research Area Match', score: 95, detail: 'Excellent overlap in organic synthesis and catalysis' },
                { category: 'Publication Quality', score: 96, detail: 'Nature Chemistry, JACS, Chemical Reviews' },
                { category: 'Strategic Fit', score: 88, detail: 'Green chemistry and novel methodology align well' },
                { category: 'Teaching Potential', score: 85, detail: 'Broad organic chemistry teaching capability' },
            ],
            topKeywords: ['organic synthesis', 'catalysis', 'C-H activation', 'green chemistry'],
            gaps: ['Limited computational chemistry integration'],
        },
        {
            applicantId: 7,
            name: 'Dr. Maria Santos',
            overallScore: 88,
            breakdown: [
                { category: 'Research Area Match', score: 90, detail: 'Strong biocatalysis and synthesis expertise' },
                { category: 'Publication Quality', score: 94, detail: 'Science, Nature Catalysis — exceptional venues' },
                { category: 'Strategic Fit', score: 86, detail: 'ML for retrosynthesis adds computational angle' },
                { category: 'Teaching Potential', score: 82, detail: 'Biocatalysis may be niche for undergrad courses' },
            ],
            topKeywords: ['biocatalysis', 'organic synthesis', 'pharmaceutical'],
            gaps: ['Less traditional organic synthesis'],
        },
    ],
}

// ─── Bias Mitigation Data ─────────────────────────────────────────────

export const blindedApplicants = {
    'cs-ap-ai': [
        {
            blindId: 'CANDIDATE-A',
            hIndex: 18,
            totalCitations: 1240,
            publicationCount: 6,
            avgImpactFactor: 14.1,
            q1Percentage: 67,
            alignmentScore: 92,
            yearsPostPhd: 5,
            grantFunded: true,
            topVenues: ['Nature Machine Intelligence', 'ACM Computing Surveys', 'IEEE Trans. Robotics'],
        },
        {
            blindId: 'CANDIDATE-B',
            hIndex: 12,
            totalCitations: 680,
            publicationCount: 5,
            avgImpactFactor: 8.8,
            q1Percentage: 60,
            alignmentScore: 78,
            yearsPostPhd: 4,
            grantFunded: false,
            topVenues: ['Medical Image Analysis', 'Pattern Recognition', 'CVPR'],
        },
        {
            blindId: 'CANDIDATE-C',
            hIndex: 15,
            totalCitations: 920,
            publicationCount: 6,
            avgImpactFactor: 7.1,
            q1Percentage: 50,
            alignmentScore: 85,
            yearsPostPhd: 4,
            grantFunded: true,
            topVenues: ['Nature Computational Science', 'ACM TOSEM', 'ICLR'],
        },
    ],
    'bme-postdoc': [
        {
            blindId: 'CANDIDATE-A',
            hIndex: 8,
            totalCitations: 310,
            publicationCount: 4,
            avgImpactFactor: 8.8,
            q1Percentage: 75,
            alignmentScore: 94,
            yearsPostPhd: 2,
            grantFunded: false,
            topVenues: ['Biomaterials', 'Acta Biomaterialia', 'Lab on a Chip'],
        },
        {
            blindId: 'CANDIDATE-B',
            hIndex: 6,
            totalCitations: 215,
            publicationCount: 3,
            avgImpactFactor: 9.7,
            q1Percentage: 100,
            alignmentScore: 79,
            yearsPostPhd: 2,
            grantFunded: false,
            topVenues: ['Adv Healthcare Materials', 'J Controlled Release', 'Biofabrication'],
        },
    ],
    'chem-ap-org': [
        {
            blindId: 'CANDIDATE-A',
            hIndex: 22,
            totalCitations: 2100,
            publicationCount: 5,
            avgImpactFactor: 25.9,
            q1Percentage: 100,
            alignmentScore: 91,
            yearsPostPhd: 7,
            grantFunded: true,
            topVenues: ['Nature Chemistry', 'Chemical Reviews', 'JACS'],
        },
        {
            blindId: 'CANDIDATE-B',
            hIndex: 16,
            totalCitations: 1350,
            publicationCount: 4,
            avgImpactFactor: 31.7,
            q1Percentage: 75,
            alignmentScore: 88,
            yearsPostPhd: 5,
            grantFunded: true,
            topVenues: ['Science', 'Nature Catalysis', 'JACS'],
        },
    ],
}

export const blindingOptions = [
    { id: 'name', label: 'Applicant Name', enabled: true },
    { id: 'gender', label: 'Gender', enabled: true },
    { id: 'institution', label: 'Institution Name', enabled: true },
    { id: 'photo', label: 'Photo', enabled: true },
    { id: 'age', label: 'Graduation Year (Age Proxy)', enabled: false },
    { id: 'nationality', label: 'Nationality', enabled: false },
]

// ─── Dashboard Stats ──────────────────────────────────────────────────

export const hiringDashboardStats = {
    bibliometric: {
        applicantsAnalyzed: 42,
        publicationsScanned: 318,
        avgHIndex: 14,
    },
    alignment: {
        positionsScored: 8,
        avgAlignmentScore: 83,
        candidatesRanked: 42,
    },
    biasMitigation: {
        reviewsBlinded: 36,
        fieldsBlinded: 4,
        complianceRate: 100,
    },
}
