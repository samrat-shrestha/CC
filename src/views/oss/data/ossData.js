// ─── Policy Advisor (RAG) Data ────────────────────────────────────────

export const policySources = [
    { id: 'uscis', name: 'USCIS Policy Manual', icon: '🏛️' },
    { id: 'isss', name: 'University ISSS Handbook', icon: '🎓' },
    { id: 'cfr', name: 'Federal Regulations (8 CFR)', icon: '📜' },
]

export const sampleConversation = [
    {
        role: 'user',
        text: 'Can I work off-campus on an F-1 visa during my first year?',
    },
    {
        role: 'assistant',
        text: 'No. F-1 students are generally not eligible for off-campus employment during the first academic year. During this period, you may only work on-campus for up to 20 hours per week while school is in session.\n\nAfter the first academic year, you may be eligible for:\n\n- Curricular Practical Training (CPT) — requires a job offer and must be integral to your curriculum\n- Optional Practical Training (OPT) — up to 12 months of employment authorization\n- Economic Hardship — in cases of severe, unforeseen financial difficulty\n\nImportant: Any unauthorized employment is a violation of your F-1 status and may result in termination of your SEVIS record.',
        sources: [
            {
                id: 'uscis',
                title: 'USCIS Policy Manual, Vol. 7, Part B, Ch. 5',
                section: 'Employment Authorization for F-1 Students',
                relevance: 0.96,
            },
            {
                id: 'cfr',
                title: '8 CFR § 214.2(f)(9)',
                section: 'On-campus employment eligibility',
                relevance: 0.91,
            },
        ],
    },
    {
        role: 'user',
        text: 'What about CPT? When can I apply and what do I need?',
    },
    {
        role: 'assistant',
        text: 'You can apply for Curricular Practical Training (CPT) after completing one full academic year of full-time study (two semesters or three quarters).\n\nRequirements:\n- Job offer — You must have a confirmed employer and position\n- Academic integration — The training must be an integral part of your degree program (internship for credit, co-op, practicum, etc.)\n- Department endorsement — Your academic advisor must confirm the training relates to your major\n- Active F-1 status — You must be in valid F-1 status with a current I-20\n\nProcess:\n1. Secure a job/internship offer with specific dates\n2. Get academic advisor approval\n3. Submit CPT application to ISSS with offer letter\n4. Receive updated I-20 with CPT authorization before starting work\n\nWarning: If you accumulate 12 or more months of full-time CPT, you become ineligible for OPT at the same education level.',
        sources: [
            {
                id: 'uscis',
                title: 'USCIS Policy Manual, Vol. 7, Part B, Ch. 5.3',
                section: 'Curricular Practical Training',
                relevance: 0.98,
            },
            {
                id: 'isss',
                title: 'University ISSS Handbook, Section 4.2',
                section: 'CPT Application Procedures',
                relevance: 0.94,
            },
            {
                id: 'cfr',
                title: '8 CFR § 214.2(f)(10)(i)',
                section: 'Curricular practical training',
                relevance: 0.89,
            },
        ],
    },
]

export const suggestedQuestions = [
    'What are the OPT application deadlines?',
    'Can I travel while my OPT is pending?',
    'How do I get a travel signature on my I-20?',
    'What happens if my I-20 expires?',
    'Am I eligible for STEM OPT extension?',
    'Can I change my visa status from F-1 to H-1B?',
]

// ─── Deadline Tracker Data ────────────────────────────────────────────

export const studentProfiles = [
    {
        id: 1,
        name: 'Ananya Sharma',
        sevisId: 'N0012345678',
        visaType: 'F-1',
        program: 'M.S. Computer Science',
        i20StartDate: '2024-08-15',
        i20EndDate: '2026-05-15',
        optEligible: true,
        stemEligible: true,
    },
    {
        id: 2,
        name: 'Carlos Mendoza',
        sevisId: 'N0023456789',
        visaType: 'J-1',
        program: 'Ph.D. Biomedical Engineering',
        ds2019StartDate: '2023-01-10',
        ds2019EndDate: '2027-12-15',
        optEligible: false,
        stemEligible: false,
    },
    {
        id: 3,
        name: 'Wei Zhang',
        sevisId: 'N0034567890',
        visaType: 'F-1',
        program: 'M.S. Data Science',
        i20StartDate: '2025-01-10',
        i20EndDate: '2026-12-20',
        optEligible: true,
        stemEligible: true,
    },
]

export const deadlineAlerts = {
    1: [
        {
            id: 1,
            type: 'critical',
            title: 'OPT Application Window Opens',
            description:
                'You are eligible to apply for post-completion OPT up to 90 days before your program end date of May 15, 2026. Apply by Feb 14, 2026.',
            dueDate: '2026-02-14',
            daysRemaining: -32,
            category: 'OPT',
            action: 'Apply now — window already open',
        },
        {
            id: 2,
            type: 'warning',
            title: 'OPT Application Deadline (USCIS Receipt)',
            description:
                'Your OPT application must be received by USCIS no later than 60 days after your program end date.',
            dueDate: '2026-07-14',
            daysRemaining: 118,
            category: 'OPT',
            action: 'Prepare I-765 filing package',
        },
        {
            id: 3,
            type: 'info',
            title: 'Travel Signature Renewal',
            description:
                'Your I-20 travel signature expires in 8 months. Renew before any international travel.',
            dueDate: '2026-11-15',
            daysRemaining: 242,
            category: 'Travel',
            action: 'Schedule ISSS appointment',
        },
        {
            id: 4,
            type: 'info',
            title: 'STEM OPT Extension Eligibility',
            description:
                'As a Computer Science major, you are STEM OPT eligible. Apply up to 90 days before your post-completion OPT expires.',
            dueDate: '2027-05-15',
            daysRemaining: 423,
            category: 'STEM OPT',
            action: 'No action needed yet',
        },
    ],
    2: [
        {
            id: 1,
            type: 'warning',
            title: 'DS-2019 Annual Review',
            description:
                'J-1 scholars must complete an annual program review. Your next review is due by January 2027.',
            dueDate: '2027-01-10',
            daysRemaining: 298,
            category: 'J-1 Compliance',
            action: 'Prepare progress report',
        },
        {
            id: 2,
            type: 'info',
            title: 'Travel Signature Renewal',
            description:
                'Your DS-2019 travel endorsement should be renewed annually before international travel.',
            dueDate: '2027-01-10',
            daysRemaining: 298,
            category: 'Travel',
            action: 'Schedule renewal before travel',
        },
    ],
    3: [
        {
            id: 1,
            type: 'info',
            title: 'CPT Eligibility Date',
            description:
                'You will be eligible for Curricular Practical Training (CPT) after completing one academic year in January 2026.',
            dueDate: '2026-01-10',
            daysRemaining: -67,
            category: 'CPT',
            action: 'You are now CPT eligible — apply when ready',
        },
        {
            id: 2,
            type: 'info',
            title: 'OPT Application Window',
            description:
                'You can apply for post-completion OPT up to 90 days before your program end date.',
            dueDate: '2026-09-21',
            daysRemaining: 187,
            category: 'OPT',
            action: 'No action needed yet',
        },
        {
            id: 3,
            type: 'warning',
            title: 'Travel Signature Renewal',
            description:
                'Ensure your I-20 has a valid travel signature (within 6 months) before any international travel.',
            dueDate: '2026-07-10',
            daysRemaining: 114,
            category: 'Travel',
            action: 'Visit ISSS if planning travel',
        },
    ],
}

// ─── Form Pre-filler Data ─────────────────────────────────────────────

export const sampleExtractedData = {
    passport: {
        surname: 'SHARMA',
        givenNames: 'ANANYA',
        nationality: 'INDIA',
        dateOfBirth: '1999-06-15',
        sex: 'F',
        passportNumber: 'M8234517',
        dateOfIssue: '2022-03-10',
        dateOfExpiry: '2032-03-09',
        placeOfBirth: 'NEW DELHI',
        placeOfIssue: 'NEW DELHI',
    },
    visa: {
        visaType: 'F-1',
        issueDate: '2024-06-20',
        expiryDate: '2029-06-19',
        entries: 'MULTIPLE',
        annotation: 'UNIVERSITY OF STATE - COMPUTER SCIENCE',
        controlNumber: '20241234567890',
    },
}

export const universityForms = [
    {
        id: 'address-update',
        name: 'Address Update Form',
        description: 'Report a change of U.S. address within 10 days',
        fields: ['Full Name', 'SEVIS ID', 'Date of Birth', 'New Address', 'Move-in Date'],
        autoFillable: 3,
    },
    {
        id: 'opt-request',
        name: 'OPT Recommendation Request',
        description: 'Request I-20 recommendation for OPT application',
        fields: [
            'Full Name',
            'SEVIS ID',
            'Date of Birth',
            'Passport Number',
            'Visa Type',
            'Program End Date',
            'Degree Level',
            'Major',
            'Employer (if known)',
        ],
        autoFillable: 6,
    },
    {
        id: 'travel-signature',
        name: 'Travel Signature Request',
        description: 'Request a new travel endorsement on your I-20/DS-2019',
        fields: [
            'Full Name',
            'SEVIS ID',
            'Date of Birth',
            'Passport Number',
            'Travel Dates',
            'Destination Country',
            'Purpose of Travel',
        ],
        autoFillable: 4,
    },
    {
        id: 'cpt-application',
        name: 'CPT Authorization Request',
        description: 'Apply for Curricular Practical Training authorization',
        fields: [
            'Full Name',
            'SEVIS ID',
            'Date of Birth',
            'Passport Number',
            'Employer Name',
            'Employer Address',
            'Start Date',
            'End Date',
            'Hours per Week',
            'Academic Advisor',
            'Course Number',
        ],
        autoFillable: 4,
    },
]

// ─── Dashboard Stats ──────────────────────────────────────────────────

export const ossDashboardStats = {
    policyAdvisor: {
        queriesAnswered: 156,
        sourcesIndexed: 3,
        avgConfidence: 94,
    },
    deadlineTracker: {
        studentsTracked: 48,
        upcomingDeadlines: 12,
        criticalAlerts: 3,
    },
    formPrefiller: {
        formsFilled: 89,
        timeSaved: 62,
        errorReduction: 85,
    },
}
