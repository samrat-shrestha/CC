import { useState } from 'react'
import { Card, Tag, Button } from '@/components/ui'
import {
    PiNewspaperDuotone,
    PiCertificateDuotone,
    PiHandshakeDuotone,
    PiTargetDuotone,
    PiFlaskDuotone,
    PiCaretDownBold,
} from 'react-icons/pi'
import {
    researchProjects,
    marketIntelByProject,
} from '@/views/innovation/data/innovationData'

const relevanceColors = {
    high: { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-700 dark:text-emerald-400' },
    medium: { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-400' },
    low: { bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-600 dark:text-gray-400' },
}

const categoryColors = {
    Investment: 'bg-blue-500',
    Regulation: 'bg-purple-500',
    'Market Analysis': 'bg-cyan-500',
    Competitive: 'bg-orange-500',
}

const ScoreBar = ({ label, score, max = 100 }) => (
    <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600 dark:text-gray-400 w-36 shrink-0">
            {label}
        </span>
        <div className="flex-1 h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                    width: `${(score / max) * 100}%`,
                    background:
                        score >= 80
                            ? '#10b981'
                            : score >= 60
                              ? '#f59e0b'
                              : '#ef4444',
                }}
            />
        </div>
        <span className="text-sm font-semibold text-gray-900 dark:text-white w-10 text-right">
            {score}
        </span>
    </div>
)

const MarketIntelligence = () => {
    const [selectedProjectId, setSelectedProjectId] = useState(
        researchProjects[0]?.id,
    )
    const [activeSection, setActiveSection] = useState('news')
    const [projectDropdownOpen, setProjectDropdownOpen] = useState(false)

    const selectedProject = researchProjects.find(
        (p) => p.id === selectedProjectId,
    )
    const data = marketIntelByProject[selectedProjectId]

    const sections = [
        { key: 'news', label: 'Industry News', icon: PiNewspaperDuotone, count: data?.industryNews?.length },
        { key: 'patents', label: 'Patents', icon: PiCertificateDuotone, count: data?.patents?.length },
        { key: 'pmf', label: 'Product-Market Fit', icon: PiTargetDuotone },
        { key: 'partners', label: 'Partners', icon: PiHandshakeDuotone, count: data?.potentialPartners?.length },
    ]

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Market Intelligence
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    AI-powered monitoring of industry news, patents, and
                    competitive landscape.
                </p>
            </div>

            {/* Project Selector */}
            <div className="mb-6 relative">
                <button
                    className="w-full flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors text-left"
                    onClick={() => setProjectDropdownOpen(!projectDropdownOpen)}
                >
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                        <PiFlaskDuotone className="text-xl text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Analyzing Research Project
                        </p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                            {selectedProject?.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            {selectedProject?.lab} · PI: {selectedProject?.pi}
                        </p>
                    </div>
                    <PiCaretDownBold
                        className={`text-gray-400 transition-transform ${projectDropdownOpen ? 'rotate-180' : ''}`}
                    />
                </button>

                {projectDropdownOpen && (
                    <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
                        {researchProjects.map((project) => (
                            <button
                                key={project.id}
                                className={`w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                                    project.id === selectedProjectId
                                        ? 'bg-indigo-50 dark:bg-indigo-900/20'
                                        : ''
                                }`}
                                onClick={() => {
                                    setSelectedProjectId(project.id)
                                    setProjectDropdownOpen(false)
                                }}
                            >
                                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center shrink-0">
                                    <PiFlaskDuotone className="text-gray-500 dark:text-gray-400" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                        {project.title}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {project.lab} · {project.pi}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Section Tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
                {sections.map((s) => (
                    <Button
                        key={s.key}
                        size="sm"
                        variant={activeSection === s.key ? 'solid' : 'default'}
                        onClick={() => setActiveSection(s.key)}
                        icon={<s.icon />}
                    >
                        {s.label}
                        {s.count != null && (
                            <span className="ml-1.5 text-xs opacity-70">
                                ({s.count})
                            </span>
                        )}
                    </Button>
                ))}
            </div>

            {/* News */}
            {activeSection === 'news' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {data.industryNews.map((item) => (
                        <Card key={item.id}>
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`w-2 h-2 rounded-full ${categoryColors[item.category] || 'bg-gray-400'}`}
                                    />
                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                </div>
                                <Tag
                                    className={`text-xs ${relevanceColors[item.relevance].bg} ${relevanceColors[item.relevance].text}`}
                                >
                                    {item.relevance} relevance
                                </Tag>
                            </div>
                            <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                                {item.title}
                            </h6>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                {item.summary}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-400">
                                <span>{item.source}</span>
                                <span>{item.date}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            )}

            {/* Patents */}
            {activeSection === 'patents' && (
                <Card>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-100 dark:border-gray-700 text-left">
                                    <th className="pb-3 font-semibold text-gray-500 dark:text-gray-400">
                                        Patent ID
                                    </th>
                                    <th className="pb-3 font-semibold text-gray-500 dark:text-gray-400">
                                        Title
                                    </th>
                                    <th className="pb-3 font-semibold text-gray-500 dark:text-gray-400">
                                        Assignee
                                    </th>
                                    <th className="pb-3 font-semibold text-gray-500 dark:text-gray-400">
                                        Status
                                    </th>
                                    <th className="pb-3 font-semibold text-gray-500 dark:text-gray-400">
                                        Overlap
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.patents.map((patent) => (
                                    <tr
                                        key={patent.id}
                                        className="border-b border-gray-50 dark:border-gray-800 last:border-0"
                                    >
                                        <td className="py-3 font-mono text-xs text-gray-500">
                                            {patent.id}
                                        </td>
                                        <td className="py-3 text-gray-900 dark:text-white font-medium">
                                            {patent.title}
                                        </td>
                                        <td className="py-3 text-gray-600 dark:text-gray-400">
                                            {patent.assignee}
                                        </td>
                                        <td className="py-3">
                                            <Tag className="text-xs">
                                                {patent.status}
                                            </Tag>
                                        </td>
                                        <td className="py-3">
                                            <Tag
                                                className={`text-xs ${relevanceColors[patent.overlap]?.bg} ${relevanceColors[patent.overlap]?.text}`}
                                            >
                                                {patent.overlap}
                                            </Tag>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            )}

            {/* Product-Market Fit */}
            {activeSection === 'pmf' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="lg:col-span-1 flex flex-col items-center justify-center text-center">
                        <div className="relative w-32 h-32 mb-4">
                            <svg
                                viewBox="0 0 120 120"
                                className="w-full h-full -rotate-90"
                            >
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="52"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    className="text-gray-100 dark:text-gray-700"
                                />
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="52"
                                    fill="none"
                                    stroke="#6366f1"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    strokeDasharray={`${(data.productMarketFit.overallScore / 100) * 327} 327`}
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {data.productMarketFit.overallScore}
                                </span>
                                <span className="text-xs text-gray-500">
                                    / 100
                                </span>
                            </div>
                        </div>
                        <h6 className="font-semibold text-gray-900 dark:text-white">
                            PMF Score
                        </h6>
                        <p className="text-sm text-gray-500 mt-1">
                            Overall Product-Market Fit
                        </p>
                    </Card>

                    <Card className="lg:col-span-2">
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-4">
                            Dimension Breakdown
                        </h6>
                        <div className="space-y-4">
                            {data.productMarketFit.dimensions.map((dim) => (
                                <ScoreBar
                                    key={dim.label}
                                    label={dim.label}
                                    score={dim.score}
                                />
                            ))}
                        </div>
                    </Card>
                </div>
            )}

            {/* Partners */}
            {activeSection === 'partners' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {data.potentialPartners.map((partner) => (
                        <Card key={partner.name}>
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h6 className="font-semibold text-gray-900 dark:text-white">
                                        {partner.name}
                                    </h6>
                                    <span className="text-sm text-gray-500">
                                        {partner.industry}
                                    </span>
                                </div>
                                <Tag
                                    className={`text-xs ${relevanceColors[partner.interest]?.bg} ${relevanceColors[partner.interest]?.text}`}
                                >
                                    {partner.interest} interest
                                </Tag>
                            </div>
                            <div className="mb-3">
                                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                                    {partner.fit}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {partner.rationale}
                            </p>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MarketIntelligence
