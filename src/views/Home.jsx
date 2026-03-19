import { useNavigate } from 'react-router'
import { motion } from 'framer-motion'
import {
    PiLightbulbDuotone,
    PiChartLineUpDuotone,
    PiMicrophoneStageDuotone,
    PiChatCircleTextDuotone,
    PiCalendarCheckDuotone,
    PiScanDuotone,
    PiMagnifyingGlassDuotone,
    PiTableDuotone,
    PiBookOpenDuotone,
    PiPathDuotone,
    PiChartBarDuotone,
    PiUsersDuotone,
    PiArticleDuotone,
    PiTargetDuotone,
    PiEyeSlashDuotone,
    PiArrowRightBold,
    PiFlaskDuotone,
    PiShieldCheckDuotone,
    PiBooksDuotone,
    PiGraduationCapDuotone,
    PiUserFocusDuotone,
    PiSparkle,
} from 'react-icons/pi'

// ─── Animations ───────────────────────────────────────────────────────

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

const sectionVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// ─── Feature Card ─────────────────────────────────────────────────────

const FeatureCard = ({ icon: Icon, iconColor, title, description, capabilities, path }) => {
    const navigate = useNavigate()

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-5 cursor-pointer overflow-hidden"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
            onClick={() => navigate(path)}
        >
            {/* Hover glow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 30% 20%, ${iconColor}08 0%, transparent 70%)`,
                }}
            />

            <div className="relative z-10">
                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-3">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${iconColor}12`, color: iconColor }}
                    >
                        <Icon className="text-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h6 className="font-semibold text-sm text-gray-900 dark:text-white">
                            {title}
                        </h6>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Capability Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {capabilities.map((cap, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center px-2 py-1 rounded-md text-[11px] font-medium bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700"
                        >
                            {cap}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-1 text-xs font-medium text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Explore
                    </span>
                    <PiArrowRightBold className="text-[10px] transform group-hover:translate-x-1 transition-transform duration-200" />
                </div>
            </div>
        </motion.div>
    )
}

// ─── Module Section ───────────────────────────────────────────────────

const ModuleSection = ({
    icon: Icon,
    title,
    subtitle,
    gradientFrom,
    gradientTo,
    features,
    delay = 0,
}) => {
    return (
        <motion.section
            initial="hidden"
            animate="show"
            variants={sectionVariants}
            transition={{ delay }}
            className="mb-10"
        >
            {/* Module Header */}
            <div
                className="relative rounded-2xl px-5 py-4 mb-4 overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                }}
            >
                <div
                    className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-20"
                    style={{ backgroundColor: 'white' }}
                />
                <div
                    className="absolute -right-2 -bottom-4 w-16 h-16 rounded-full opacity-10"
                    style={{ backgroundColor: 'white' }}
                />

                <div className="relative flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="text-lg text-white" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-white tracking-wide">
                            {title}
                        </h4>
                        <p className="text-[11px] text-white/70">
                            {subtitle}
                        </p>
                    </div>
                    <div className="ml-auto flex items-center gap-1 text-white/40 text-[10px]">
                        <span>{features.length} tools</span>
                    </div>
                </div>
            </div>

            {/* Feature Cards Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
            >
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </motion.div>
        </motion.section>
    )
}

// ─── Main Dashboard ───────────────────────────────────────────────────

const Home = () => {
    const modules = [
        {
            icon: PiFlaskDuotone,
            title: 'Innovation Institute',
            subtitle: 'Research commercialization & market intelligence',
            gradientFrom: '#6366f1',
            gradientTo: '#8b5cf6',
            features: [
                {
                    icon: PiLightbulbDuotone,
                    iconColor: '#6366f1',
                    title: 'Value Proposition Generator',
                    description: 'Transform technical research papers into compelling business narratives using JTBD and Business Model Canvas frameworks.',
                    path: '/value-proposition',
                    capabilities: ['JTBD Analysis', 'Business Canvas', 'Market Sizing', 'IP Assessment'],
                },
                {
                    icon: PiChartLineUpDuotone,
                    iconColor: '#0ea5e9',
                    title: 'Market Intelligence',
                    description: 'AI-driven insights on industry trends, patent landscapes, and potential commercialization partners.',
                    path: '/market-intelligence',
                    capabilities: ['Trend Analysis', 'Patent Monitoring', 'Partner Discovery', 'Competitor Mapping'],
                },
                {
                    icon: PiMicrophoneStageDuotone,
                    iconColor: '#f59e0b',
                    title: 'Sentiment Analysis',
                    description: 'Analyze investor pitches for tone, clarity, confidence, and persuasive impact with actionable feedback.',
                    path: '/sentiment-analysis',
                    capabilities: ['Tone Detection', 'Clarity Score', 'Impact Metrics', 'Improvement Tips'],
                },
            ],
        },
        {
            icon: PiShieldCheckDuotone,
            title: 'OSS Reviewer',
            subtitle: 'Immigration & ISSS support tools',
            gradientFrom: '#8b5cf6',
            gradientTo: '#a78bfa',
            features: [
                {
                    icon: PiChatCircleTextDuotone,
                    iconColor: '#8b5cf6',
                    title: 'Policy Advisor',
                    description: 'RAG-powered chatbot grounded in USCIS Policy Manual, university handbooks, and federal regulations.',
                    path: '/policy-advisor',
                    capabilities: ['Policy RAG', 'Source Citations', 'Multi-Visa Support', 'Regulation Lookup'],
                },
                {
                    icon: PiCalendarCheckDuotone,
                    iconColor: '#ef4444',
                    title: 'Deadline Tracker',
                    description: 'Predictive alerts that analyze I-20/DS-2019 dates to proactively notify about OPT, CPT, and travel renewals.',
                    path: '/deadline-tracker',
                    capabilities: ['OPT/CPT Alerts', 'Travel Signatures', 'Predictive Nudges', 'Timeline View'],
                },
                {
                    icon: PiScanDuotone,
                    iconColor: '#10b981',
                    title: 'Form Pre-filler',
                    description: 'Scan passports and visas with OCR to automatically populate university immigration forms.',
                    path: '/form-prefiller',
                    capabilities: ['Passport OCR', 'Visa Scanning', 'Auto-Fill Forms', 'Error Detection'],
                },
            ],
        },
        {
            icon: PiBooksDuotone,
            title: 'Library',
            subtitle: 'Research & resource discovery',
            gradientFrom: '#06b6d4',
            gradientTo: '#0ea5e9',
            features: [
                {
                    icon: PiMagnifyingGlassDuotone,
                    iconColor: '#06b6d4',
                    title: 'Semantic Search',
                    description: 'Concept-based discovery that understands meaning — find relevant resources even without exact keyword matches.',
                    path: '/semantic-search',
                    capabilities: ['Concept Matching', 'Cross-Domain', 'Relevance Ranking', 'Natural Language'],
                },
                {
                    icon: PiTableDuotone,
                    iconColor: '#d946ef',
                    title: 'Citation & Synthesis',
                    description: 'Generate synthesis matrices from multiple papers, highlighting common themes and conflicting findings.',
                    path: '/citation-synthesis',
                    capabilities: ['Synthesis Matrix', 'Theme Extraction', 'Conflict Detection', 'Citation Map'],
                },
                {
                    icon: PiBookOpenDuotone,
                    iconColor: '#f97316',
                    title: 'Reading Assistant',
                    description: 'Chat with any book — get chapter summaries, concept explanations, and diagram breakdowns on demand.',
                    path: '/reading-assistant',
                    capabilities: ['Chat with Books', 'Chapter Summary', 'Concept Explainer', 'Diagram Analysis'],
                },
            ],
        },
        {
            icon: PiGraduationCapDuotone,
            title: 'UG Advising',
            subtitle: 'Academic success & early warning',
            gradientFrom: '#14b8a6',
            gradientTo: '#10b981',
            features: [
                {
                    icon: PiPathDuotone,
                    iconColor: '#14b8a6',
                    title: 'Degree Audit',
                    description: 'Simulate what-if scenarios for major switches and calculate the shortest path to graduation.',
                    path: '/degree-audit',
                    capabilities: ['What-If Scenarios', 'Prerequisite Chains', 'Optimal Course Load', 'Grad Timeline'],
                },
                {
                    icon: PiChartBarDuotone,
                    iconColor: '#ef4444',
                    title: 'Success Predictor',
                    description: 'Personal early warning system that identifies risk in gatekeeper courses and recommends support.',
                    path: '/success-predictor',
                    capabilities: ['Risk Detection', 'Performance Trends', 'Tutoring Referrals', 'Midterm Alerts'],
                },
                {
                    icon: PiUsersDuotone,
                    iconColor: '#8b5cf6',
                    title: 'Peer Matching',
                    description: 'Recommendation engine for study groups based on shared courses, learning styles, and performance.',
                    path: '/peer-matching',
                    capabilities: ['Schedule Matching', 'Learning Styles', 'Performance Pairing', 'Group Formation'],
                },
            ],
        },
        {
            icon: PiUserFocusDuotone,
            title: 'Applicant Review',
            subtitle: 'Intelligent hiring support',
            gradientFrom: '#f59e0b',
            gradientTo: '#f97316',
            features: [
                {
                    icon: PiArticleDuotone,
                    iconColor: '#0ea5e9',
                    title: 'Bibliometric Analysis',
                    description: 'Pull impact factors, H-index, and citation counts for every journal article on a candidate\'s CV.',
                    path: '/bibliometric-analysis',
                    capabilities: ['H-Index', 'Impact Factor', 'Citation Counts', 'Journal Quartile'],
                },
                {
                    icon: PiTargetDuotone,
                    iconColor: '#8b5cf6',
                    title: 'Alignment Scoring',
                    description: 'NLP-powered comparison of research statements against departmental strategic plans and job descriptions.',
                    path: '/alignment-scoring',
                    capabilities: ['CV vs. JD Match', 'Skill Gap Analysis', 'Strategic Fit', 'Keyword Matching'],
                },
                {
                    icon: PiEyeSlashDuotone,
                    iconColor: '#10b981',
                    title: 'Bias Mitigation',
                    description: 'Blind demographic data during initial screening to ensure merit and publication quality drive decisions.',
                    path: '/bias-mitigation',
                    capabilities: ['Blinded Review', 'Merit-Based', 'Configurable Filters', 'Compliance Tracking'],
                },
            ],
        },
    ]

    return (
        <div>
            {/* Hero Header */}
            <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                        <PiSparkle className="text-white text-lg" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            CampusConnect
                        </h3>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                            AI-powered campus intelligence platform
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Module Sections */}
            {modules.map((module, i) => (
                <ModuleSection
                    key={module.title}
                    {...module}
                    delay={0.1 + i * 0.12}
                />
            ))}
        </div>
    )
}

export default Home
