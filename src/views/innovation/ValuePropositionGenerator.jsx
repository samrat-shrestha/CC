import { useState } from 'react'
import { Card, Button, Tag } from '@/components/ui'
import {
    PiUploadSimpleDuotone,
    PiFilePdfDuotone,
    PiLightbulbDuotone,
    PiBriefcaseDuotone,
    PiTargetDuotone,
    PiCheckCircleDuotone,
    PiChartLineUpDuotone,
    PiShieldWarningDuotone,
} from 'react-icons/pi'
import {
    samplePapers,
    sampleValueProposition,
} from '@/views/innovation/data/innovationData'

const ValuePropositionGenerator = () => {
    const [selectedPaper, setSelectedPaper] = useState(null)
    const [showResults, setShowResults] = useState(false)
    const [activeTab, setActiveTab] = useState('summary')

    const handleAnalyze = (paper) => {
        setSelectedPaper(paper)
        setShowResults(true)
    }

    const vp = sampleValueProposition

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Value Proposition Generator
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Transform technical research into business-ready language
                    using JTBD and Business Model Canvas frameworks.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                {/* Left – Paper List & Upload */}
                <div className="xl:col-span-4 space-y-4">
                    {/* Upload Area */}
                    <Card>
                        <div className="border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-xl p-6 text-center">
                            <PiUploadSimpleDuotone className="text-4xl text-gray-400 mx-auto mb-3" />
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                                Upload Research Paper
                            </p>
                            <p className="text-xs text-gray-400">
                                PDF, DOCX up to 10MB
                            </p>
                            <Button
                                size="sm"
                                variant="solid"
                                className="mt-3"
                            >
                                Choose File
                            </Button>
                        </div>
                    </Card>

                    {/* Paper List */}
                    <Card>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Research Papers
                        </h6>
                        <div className="space-y-3">
                            {samplePapers.map((paper) => (
                                <div
                                    key={paper.id}
                                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-150 ${selectedPaper?.id === paper.id
                                            ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                                            : 'border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
                                        }`}
                                    onClick={() => setSelectedPaper(paper)}
                                >
                                    <div className="flex items-start gap-3">
                                        <PiFilePdfDuotone className="text-xl text-red-500 mt-0.5 shrink-0" />
                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                {paper.title}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-0.5">
                                                {paper.authors}
                                            </p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <Tag
                                                    className="text-xs"
                                                    prefix={
                                                        paper.status === 'analyzed' && (
                                                            <PiCheckCircleDuotone className="text-emerald-500" />
                                                        )
                                                    }
                                                    prefixClass="mr-1"
                                                >
                                                    {paper.status === 'analyzed'
                                                        ? 'Analyzed'
                                                        : 'Pending'}
                                                </Tag>
                                                <span className="text-xs text-gray-400">
                                                    {paper.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {selectedPaper && !showResults && (
                            <div className="mt-4 flex justify-center">
                                <Button
                                    variant="solid"
                                    className="px-6"
                                    onClick={() => handleAnalyze(selectedPaper)}
                                >
                                    {/* <PiLightbulbDuotone className="mr-2" /> */}
                                    Generate Value Proposition
                                </Button>
                            </div>
                        )}
                    </Card>
                </div>

                {/* Right – Results */}
                <div className="xl:col-span-8">
                    {!showResults ? (
                        <Card className="flex items-center justify-center min-h-[400px]">
                            <div className="text-center text-gray-400">
                                <PiLightbulbDuotone className="text-5xl mx-auto mb-3 opacity-40" />
                                <p className="font-medium">
                                    Select a paper and generate its value proposition
                                </p>
                                <p className="text-sm mt-1">
                                    The AI will translate technical research into business language
                                </p>
                            </div>
                        </Card>
                    ) : (
                        <div className="space-y-4">
                            {/* Tab bar */}
                            <Card bodyClass="p-0">
                                <div className="flex border-b border-gray-100 dark:border-gray-700 overflow-x-auto">
                                    {[
                                        { key: 'summary', label: 'Summary', icon: PiBriefcaseDuotone },
                                        { key: 'jtbd', label: 'JTBD', icon: PiTargetDuotone },
                                        { key: 'canvas', label: 'Canvas', icon: PiLightbulbDuotone },
                                        { key: 'competitive', label: 'Competitive', icon: PiChartLineUpDuotone },
                                        { key: 'risks', label: 'Risks & IP', icon: PiShieldWarningDuotone },
                                    ].map((tab) => (
                                        <button
                                            key={tab.key}
                                            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.key
                                                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                                }`}
                                            onClick={() => setActiveTab(tab.key)}
                                        >
                                            <tab.icon />
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>

                                <div className="p-5">
                                    {/* ── Summary Tab ── */}
                                    {activeTab === 'summary' && (
                                        <div className="space-y-5">
                                            {/* Confidence Header */}
                                            <div className="flex items-center justify-between">
                                                <h6 className="font-semibold text-gray-900 dark:text-white">
                                                    Executive Summary
                                                </h6>
                                                <Tag className={`text-xs font-bold ${vp.confidenceScore >= 80 ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700'}`}>
                                                    {vp.confidenceScore}% Confidence
                                                </Tag>
                                            </div>

                                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {vp.executiveSummary}
                                            </p>

                                            {/* Key Metrics */}
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                {vp.keyMetrics.map((metric, i) => (
                                                    <div key={i} className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-center">
                                                        <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                                                            {metric.value}
                                                        </div>
                                                        <div className="text-xs font-medium text-gray-900 dark:text-white mt-0.5">
                                                            {metric.label}
                                                        </div>
                                                        <div className="text-[10px] text-gray-400 mt-0.5">
                                                            {metric.detail}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Market Opportunity */}
                                            <div>
                                                <h6 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                                                    Market Opportunity
                                                </h6>
                                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/15 dark:to-purple-900/15 rounded-xl p-4">
                                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                                        {vp.marketOpportunity.description}
                                                    </p>
                                                    <div className="flex items-center gap-6">
                                                        {[
                                                            { label: 'TAM', value: vp.marketOpportunity.tam },
                                                            { label: 'SAM', value: vp.marketOpportunity.sam },
                                                            { label: 'SOM', value: vp.marketOpportunity.som },
                                                        ].map((m, i) => (
                                                            <div key={i} className="text-center">
                                                                <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{m.value}</div>
                                                                <div className="text-[10px] text-gray-500">{m.label}</div>
                                                            </div>
                                                        ))}
                                                        <div className="ml-auto text-center">
                                                            <div className="text-lg font-bold text-emerald-600">{vp.marketOpportunity.growthRate}%</div>
                                                            <div className="text-[10px] text-gray-500">CAGR</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Target Industries */}
                                            <div>
                                                <h6 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                                                    Target Industries
                                                </h6>
                                                <div className="space-y-2">
                                                    {vp.targetIndustries.map((ind, i) => (
                                                        <div key={i} className="flex items-center gap-3">
                                                            <span className="text-sm text-gray-700 dark:text-gray-300 w-40 shrink-0">{ind.name}</span>
                                                            <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                                                <div
                                                                    className="h-full rounded-full bg-indigo-500"
                                                                    style={{ width: `${ind.relevance}%` }}
                                                                />
                                                            </div>
                                                            <span className="text-xs font-semibold text-gray-500 w-8 text-right">{ind.relevance}%</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* ── JTBD Tab ── */}
                                    {activeTab === 'jtbd' && (
                                        <div className="space-y-4">
                                            <div>
                                                <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                    Job Statement
                                                </h6>
                                                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 text-sm text-indigo-800 dark:text-indigo-300 italic">
                                                    &quot;{vp.jtbdAnalysis.jobStatement}&quot;
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                    Current Solutions
                                                </h6>
                                                <ul className="space-y-2">
                                                    {vp.jtbdAnalysis.currentSolutions.map((sol, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                                                            {sol}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                    Our Advantage
                                                </h6>
                                                <p className="text-sm text-gray-700 dark:text-gray-300 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                                                    {vp.jtbdAnalysis.ourAdvantage}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* ── Canvas Tab ── */}
                                    {activeTab === 'canvas' && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="md:col-span-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                                                <h6 className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                                                    Value Proposition
                                                </h6>
                                                <p className="text-sm text-gray-800 dark:text-gray-200">
                                                    {vp.businessModelCanvas.valueProposition}
                                                </p>
                                            </div>
                                            {[
                                                { title: 'Customer Segments', items: vp.businessModelCanvas.customerSegments },
                                                { title: 'Channels', items: vp.businessModelCanvas.channels },
                                                { title: 'Revenue Streams', items: vp.businessModelCanvas.revenueStreams },
                                                { title: 'Key Resources', items: vp.businessModelCanvas.keyResources },
                                            ].map((section) => (
                                                <div key={section.title} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                                    <h6 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                                                        {section.title}
                                                    </h6>
                                                    <ul className="space-y-1">
                                                        {section.items.map((item, i) => (
                                                            <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* ── Competitive Tab ── */}
                                    {activeTab === 'competitive' && (
                                        <div className="space-y-4">
                                            <h6 className="font-semibold text-gray-900 dark:text-white">
                                                Competitive Landscape
                                            </h6>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead>
                                                        <tr className="text-left text-xs text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">
                                                            <th className="pb-2 font-medium pr-4">Solution</th>
                                                            <th className="pb-2 font-medium text-center">Speed</th>
                                                            <th className="pb-2 font-medium text-center">Accuracy</th>
                                                            <th className="pb-2 font-medium text-center">Cost</th>
                                                            <th className="pb-2 font-medium">Weakness</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {vp.competitiveLandscape.map((comp, i) => {
                                                            const isOurs = comp.name === 'Our Solution'
                                                            return (
                                                                <tr key={i} className={`border-b border-gray-50 dark:border-gray-800 ${isOurs ? 'bg-indigo-50 dark:bg-indigo-900/10' : ''}`}>
                                                                    <td className={`py-2.5 pr-4 font-medium ${isOurs ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-900 dark:text-white'}`}>
                                                                        {comp.name}
                                                                    </td>
                                                                    {['speed', 'accuracy', 'cost'].map((key) => (
                                                                        <td key={key} className="py-2.5 text-center">
                                                                            <div className="inline-flex items-center gap-1.5">
                                                                                <div className="w-16 h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                                                                    <div
                                                                                        className={`h-full rounded-full ${key === 'cost' ? (comp[key] < 50 ? 'bg-emerald-500' : 'bg-red-400') : (comp[key] > 70 ? 'bg-emerald-500' : comp[key] > 40 ? 'bg-amber-400' : 'bg-red-400')}`}
                                                                                        style={{ width: `${comp[key]}%` }}
                                                                                    />
                                                                                </div>
                                                                                <span className="text-xs text-gray-500 w-6">{comp[key]}</span>
                                                                            </div>
                                                                        </td>
                                                                    ))}
                                                                    <td className="py-2.5 text-xs text-gray-500 dark:text-gray-400">{comp.weakness}</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}

                                    {/* ── Risks & IP Tab ── */}
                                    {activeTab === 'risks' && (
                                        <div className="space-y-5">
                                            {/* Risk Factors */}
                                            <div>
                                                <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                                                    Risk Factors
                                                </h6>
                                                <div className="space-y-2">
                                                    {vp.riskFactors.map((rf, i) => (
                                                        <div key={i} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                                            <div className="flex items-center justify-between mb-1">
                                                                <span className="text-sm font-medium text-gray-900 dark:text-white">{rf.risk}</span>
                                                                <Tag className={`text-[10px] ${rf.severity === 'high' ? 'bg-red-100 dark:bg-red-900/30 text-red-600' : rf.severity === 'medium' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600' : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600'}`}>
                                                                    {rf.severity}
                                                                </Tag>
                                                            </div>
                                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                                Mitigation: {rf.mitigation}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* IP Potential */}
                                            <div>
                                                <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                                                    IP & Patent Potential
                                                </h6>
                                                <div className="bg-indigo-50 dark:bg-indigo-900/15 rounded-xl p-4">
                                                    <div className="flex items-center gap-6 mb-3">
                                                        <div>
                                                            <span className="text-xs text-gray-500">Patentability</span>
                                                            <p className="text-sm font-bold text-emerald-600">{vp.ipPotential.patentability}</p>
                                                        </div>
                                                        <div>
                                                            <span className="text-xs text-gray-500">Known Prior Art</span>
                                                            <p className="text-sm font-bold text-gray-900 dark:text-white">{vp.ipPotential.priorArt} results</p>
                                                        </div>
                                                    </div>
                                                    <h6 className="text-xs font-semibold text-gray-500 mb-2">Novel Claims</h6>
                                                    <ul className="space-y-1">
                                                        {vp.ipPotential.novelClaims.map((claim, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm text-indigo-700 dark:text-indigo-300">
                                                                <PiCheckCircleDuotone className="text-emerald-500 mt-0.5 shrink-0" />
                                                                {claim}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Recommended Next Steps */}
                                            <div>
                                                <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                                                    Recommended Next Steps
                                                </h6>
                                                <div className="space-y-2">
                                                    {vp.nextSteps.map((ns, i) => (
                                                        <div key={i} className="flex items-center gap-3 p-2.5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                                            <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center justify-center shrink-0">
                                                                {i + 1}
                                                            </span>
                                                            <span className="text-sm text-gray-900 dark:text-white flex-1">{ns.step}</span>
                                                            <Tag className={`text-[10px] shrink-0 ${ns.priority === 'high' ? 'bg-red-100 dark:bg-red-900/30 text-red-600' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-600'}`}>
                                                                {ns.priority}
                                                            </Tag>
                                                            <span className="text-xs text-gray-400 shrink-0">{ns.timeline}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ValuePropositionGenerator
