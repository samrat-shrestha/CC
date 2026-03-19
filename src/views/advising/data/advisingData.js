// ─── Degree Audit Data ────────────────────────────────────────────────

export const studentProfile = {
    name: 'Jordan Rivera',
    studentId: 'STU-2024-3847',
    currentMajor: 'Biology',
    classification: 'Junior',
    creditsCompleted: 72,
    gpa: 3.45,
    expectedGrad: 'Spring 2027',
}

export const whatIfScenarios = [
    {
        id: 1,
        targetMajor: 'Data Science',
        totalCreditsNeeded: 124,
        creditsTransferable: 58,
        remainingCredits: 66,
        additionalSemesters: 4,
        fastestGrad: 'Spring 2028',
        currentGrad: 'Spring 2027',
        delayedBy: '1 year',
        prerequisiteGaps: [
            { course: 'MATH 251 - Calculus III', credits: 4, semester: 'Fall 2026' },
            { course: 'CS 101 - Intro to Programming', credits: 3, semester: 'Fall 2026' },
            { course: 'STAT 301 - Statistical Methods', credits: 3, semester: 'Fall 2026' },
            { course: 'CS 201 - Data Structures', credits: 3, semester: 'Spring 2027' },
            { course: 'MATH 310 - Linear Algebra', credits: 3, semester: 'Spring 2027' },
        ],
        suggestedPath: [
            {
                semester: 'Fall 2026',
                courses: [
                    { name: 'MATH 251 - Calculus III', credits: 4 },
                    { name: 'CS 101 - Intro to Programming', credits: 3 },
                    { name: 'STAT 301 - Statistical Methods', credits: 3 },
                    { name: 'DS 200 - Foundations of Data Science', credits: 3 },
                ],
                totalCredits: 13,
            },
            {
                semester: 'Spring 2027',
                courses: [
                    { name: 'CS 201 - Data Structures', credits: 3 },
                    { name: 'MATH 310 - Linear Algebra', credits: 3 },
                    { name: 'DS 301 - Machine Learning I', credits: 3 },
                    { name: 'DS 310 - Data Visualization', credits: 3 },
                ],
                totalCredits: 12,
            },
            {
                semester: 'Fall 2027',
                courses: [
                    { name: 'DS 401 - Machine Learning II', credits: 3 },
                    { name: 'DS 420 - Big Data Systems', credits: 3 },
                    { name: 'DS 450 - Capstone Project I', credits: 3 },
                    { name: 'Elective', credits: 3 },
                ],
                totalCredits: 12,
            },
            {
                semester: 'Spring 2028',
                courses: [
                    { name: 'DS 451 - Capstone Project II', credits: 3 },
                    { name: 'DS Elective', credits: 3 },
                    { name: 'Gen Ed Elective', credits: 3 },
                ],
                totalCredits: 9,
            },
        ],
    },
    {
        id: 2,
        targetMajor: 'Biochemistry',
        totalCreditsNeeded: 120,
        creditsTransferable: 68,
        remainingCredits: 52,
        additionalSemesters: 3,
        fastestGrad: 'Fall 2027',
        currentGrad: 'Spring 2027',
        delayedBy: '1 semester',
        prerequisiteGaps: [
            { course: 'CHEM 301 - Physical Chemistry I', credits: 3, semester: 'Fall 2026' },
            { course: 'BCHM 401 - Biochemistry I', credits: 4, semester: 'Fall 2026' },
        ],
        suggestedPath: [
            {
                semester: 'Fall 2026',
                courses: [
                    { name: 'CHEM 301 - Physical Chemistry I', credits: 3 },
                    { name: 'BCHM 401 - Biochemistry I', credits: 4 },
                    { name: 'BIOL 340 - Cell Biology', credits: 3 },
                    { name: 'CHEM 310 - Analytical Chemistry', credits: 3 },
                ],
                totalCredits: 13,
            },
            {
                semester: 'Spring 2027',
                courses: [
                    { name: 'BCHM 402 - Biochemistry II', credits: 4 },
                    { name: 'CHEM 302 - Physical Chemistry II', credits: 3 },
                    { name: 'BCHM 410 - Lab Methods', credits: 3 },
                    { name: 'Gen Ed Elective', credits: 3 },
                ],
                totalCredits: 13,
            },
            {
                semester: 'Fall 2027',
                courses: [
                    { name: 'BCHM 450 - Senior Research', credits: 4 },
                    { name: 'BCHM Elective', credits: 3 },
                    { name: 'Gen Ed Elective', credits: 3 },
                ],
                totalCredits: 10,
            },
        ],
    },
]

export const availableMajors = [
    'Data Science',
    'Biochemistry',
    'Computer Science',
    'Chemistry',
    'Environmental Science',
    'Public Health',
]

// ─── Success Predictor Data (Student-Facing) ─────────────────────────

export const myGatekeeperCourses = [
    {
        id: 1,
        name: 'CHEM 201 - Organic Chemistry I',
        instructor: 'Dr. A. Patel',
        riskLevel: 'high',
        midtermDate: 'Mar 28, 2026',
        daysToMidterm: 10,
        currentGrade: 'C-',
        classAvg: 'B-',
        historicalPassRate: 78,
        historicalDropRate: 22,
        trajectory: [
            { week: 'Wk 1', you: 88, classAvg: 85 },
            { week: 'Wk 2', you: 82, classAvg: 84 },
            { week: 'Wk 3', you: 74, classAvg: 82 },
            { week: 'Wk 4', you: 68, classAvg: 81 },
            { week: 'Wk 5', you: 62, classAvg: 80 },
            { week: 'Wk 6', you: 58, classAvg: 79 },
        ],
        riskFactors: [
            { factor: 'Quiz average below class mean', severity: 'high', detail: 'Your avg: 58% vs. class avg: 79%' },
            { factor: 'Declining weekly trend', severity: 'high', detail: 'Down 30 pts over 6 weeks' },
            { factor: 'No office hours visits', severity: 'medium', detail: 'Students who attend avg 8% higher' },
            { factor: 'Missed 2 of 6 labs', severity: 'medium', detail: 'Lab attendance correlates with exam success' },
        ],
        recommendations: [
            {
                title: 'Enroll in Supplemental Instruction',
                description: 'SI sessions for Organic Chemistry meet Tue and Thu 5-6pm. Students who attended SI in Fall 2025 scored on average 1.2 grade points higher on the midterm.',
                impact: 'high',
                type: 'tutoring',
            },
            {
                title: 'Visit Office Hours This Week',
                description: 'Dr. Patel holds office hours Mon 2-4pm and Wed 10-11am. Historically, students who visited office hours at least 3 times before midterm had a 91% pass rate.',
                impact: 'high',
                type: 'office_hours',
            },
            {
                title: 'Join a Study Group',
                description: '3 active study groups are available for this section. Peer learning has been shown to improve retention of reaction mechanisms by 35%.',
                impact: 'medium',
                type: 'study_group',
            },
            {
                title: 'Review Reaction Mechanisms (Ch. 3-5)',
                description: 'Based on your quiz results, nucleophilic substitution and elimination reactions are areas for focused review. These topics make up approximately 40% of historical midterms.',
                impact: 'medium',
                type: 'self_study',
            },
        ],
        historicalInsight: 'Among students with a similar trajectory at this point in the semester, those who engaged with at least 2 support resources improved their final grade by an average of 1.4 letter grades.',
    },
    {
        id: 2,
        name: 'MATH 152 - Calculus II',
        instructor: 'Dr. L. Chen',
        riskLevel: 'medium',
        midtermDate: 'Apr 2, 2026',
        daysToMidterm: 15,
        currentGrade: 'C+',
        classAvg: 'B',
        historicalPassRate: 75,
        historicalDropRate: 25,
        trajectory: [
            { week: 'Wk 1', you: 90, classAvg: 86 },
            { week: 'Wk 2', you: 85, classAvg: 84 },
            { week: 'Wk 3', you: 80, classAvg: 83 },
            { week: 'Wk 4', you: 76, classAvg: 82 },
            { week: 'Wk 5', you: 74, classAvg: 81 },
            { week: 'Wk 6', you: 72, classAvg: 80 },
        ],
        riskFactors: [
            { factor: 'Homework completion below target', severity: 'medium', detail: 'Completed 5 of 6 assignments' },
            { factor: 'Slight downward trend', severity: 'medium', detail: 'Down 18 pts over 6 weeks' },
        ],
        recommendations: [
            {
                title: 'Math Tutoring Center Drop-In',
                description: 'Free drop-in tutoring is available Mon-Fri 9am-5pm in the Math Center. Focus on integration techniques — your weakest quiz topic.',
                impact: 'medium',
                type: 'tutoring',
            },
            {
                title: 'Complete All Remaining Homework',
                description: 'Homework completion strongly correlates with exam performance. Students with 100% homework completion in this course pass at a 92% rate.',
                impact: 'medium',
                type: 'self_study',
            },
        ],
        historicalInsight: 'Your current trajectory is slightly below the pass threshold. Students in a similar position who utilized tutoring services had an 85% chance of passing.',
    },
    {
        id: 3,
        name: 'BIOL 301 - Genetics',
        instructor: 'Dr. M. Washington',
        riskLevel: 'low',
        midtermDate: 'Apr 5, 2026',
        daysToMidterm: 18,
        currentGrade: 'B+',
        classAvg: 'B',
        historicalPassRate: 88,
        historicalDropRate: 12,
        trajectory: [
            { week: 'Wk 1', you: 92, classAvg: 84 },
            { week: 'Wk 2', you: 90, classAvg: 83 },
            { week: 'Wk 3', you: 88, classAvg: 82 },
            { week: 'Wk 4', you: 87, classAvg: 81 },
            { week: 'Wk 5', you: 86, classAvg: 80 },
            { week: 'Wk 6', you: 85, classAvg: 80 },
        ],
        riskFactors: [],
        recommendations: [
            {
                title: 'Keep Up the Great Work',
                description: 'You are performing above the class average. Continue your current study habits and consider helping peers through study groups.',
                impact: 'low',
                type: 'encouragement',
            },
        ],
        historicalInsight: 'Students with your current trajectory have a 96% pass rate. You are on track for an A or B grade.',
    },
]

// ─── Peer Matching Data ───────────────────────────────────────────────

export const currentStudent = {
    name: 'Jordan Rivera',
    courses: ['BIOL 301 - Genetics', 'CHEM 201 - Organic Chemistry I', 'MATH 152 - Calculus II'],
    learningStyle: 'Visual',
    performanceLevel: 'Above Average',
    availability: ['Mon 2-4pm', 'Wed 3-5pm', 'Fri 10am-12pm'],
}

export const peerMatches = [
    {
        id: 1,
        name: 'Mia Gonzalez',
        matchScore: 94,
        sharedCourses: ['BIOL 301 - Genetics', 'CHEM 201 - Organic Chemistry I'],
        learningStyle: 'Visual',
        performanceLevel: 'Above Average',
        availability: ['Mon 2-4pm', 'Wed 3-5pm'],
        commonSlots: 2,
        strengths: ['Strong in organic mechanisms', 'Detailed study notes'],
    },
    {
        id: 2,
        name: 'Ethan Park',
        matchScore: 87,
        sharedCourses: ['CHEM 201 - Organic Chemistry I', 'MATH 152 - Calculus II'],
        learningStyle: 'Read/Write',
        performanceLevel: 'Above Average',
        availability: ['Mon 3-5pm', 'Fri 10am-12pm'],
        commonSlots: 2,
        strengths: ['Strong in calculus proofs', 'Group teaching ability'],
    },
    {
        id: 3,
        name: 'Aisha Patel',
        matchScore: 81,
        sharedCourses: ['BIOL 301 - Genetics'],
        learningStyle: 'Visual',
        performanceLevel: 'Average',
        availability: ['Wed 3-5pm', 'Fri 11am-1pm'],
        commonSlots: 1,
        strengths: ['Lab report expertise', 'Consistent study habits'],
    },
    {
        id: 4,
        name: 'Ryan Mitchell',
        matchScore: 76,
        sharedCourses: ['MATH 152 - Calculus II'],
        learningStyle: 'Kinesthetic',
        performanceLevel: 'Above Average',
        availability: ['Mon 2-4pm'],
        commonSlots: 1,
        strengths: ['Problem-solving speed', 'Practice-oriented approach'],
    },
]

// ─── Dashboard Stats ──────────────────────────────────────────────────

export const advisingDashboardStats = {
    degreeAudit: {
        scenariosRun: 128,
        avgSavedSemesters: 1.2,
        studentsHelped: 86,
    },
    successPredictor: {
        studentsMonitored: 648,
        atRiskIdentified: 113,
        interventionRate: 78,
    },
    peerMatching: {
        groupsFormed: 94,
        avgMatchScore: 85,
        satisfactionRate: 92,
    },
}
