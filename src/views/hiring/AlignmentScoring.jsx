import { useState } from 'react'
import { Card, Tag } from '@/components/ui'
import {
    PiTargetDuotone,
    PiCaretDownBold,
    PiBuildingsDuotone,
    PiCheckCircleDuotone,
    PiWarningDuotone,
} from 'react-icons/pi'
import {
    organizations,
    alignmentScores,
    jobDescriptions,
} from '@/views/hiring/data/hiringData'

const scoreColor = (score) => {
    if (score >= 90) return 'text-emerald-600 dark:text-emerald-400'
    if (score >= 80) return 'text-blue-600 dark:text-blue-400'
    if (score >= 70) return 'text-amber-600 dark:text-amber-400'
    return 'text-red-600 dark:text-red-400'
}

const scoreBg = (score) => {
    if (score >= 90) return 'bg-emerald-500'
    if (score >= 80) return 'bg-blue-500'
    if (score >= 70) return 'bg-amber-500'
    return 'bg-red-500'
}

const AlignmentScoring = () => {
    const [selectedOrg, setSelectedOrg] = useState(null)
    const [selectedPosition, setSelectedPosition] = useState(null)
    const [orgDropdownOpen, setOrgDropdownOpen] = useState(false)

    const positionScores = selectedPosition
        ? alignmentScores[selectedPosition.id] || []
        : []
    const jobDesc = selectedPosition
        ? jobDescriptions[selectedPosition.id]
        : null

    const handleSelectOrg = (org) => {
        setSelectedOrg(org)
        setSelectedPosition(null)
        setOrgDropdownOpen(false)
    }

    return (
        <div>
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Alignment Scoring
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Compare each candidate's research profile against the
                    departmental strategic plan and job description.
                </p>
            </div>

            {/* Position Selector */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
                <div className="relative">
                    <button
                        className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 transition-colors text-left"
                        onClick={() => setOrgDropdownOpen(!orgDropdownOpen)}
                    >
                        <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                            <PiBuildingsDuotone className="text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Organization / Lab</p>
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                {selectedOrg?.name || 'Select organization...'}
                            </p>
                        </div>
                        <PiCaretDownBold className={`text-gray-400 transition-transform ${orgDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {orgDropdownOpen && (
                        <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
                            {organizations.map((org) => (
                                <button
                                    key={org.id}
                                    className={`w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${selectedOrg?.id === org.id ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''}`}
                                    onClick={() => handleSelectOrg(org)}
                                >
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">{org.name}</p>
                                        <p className="text-xs text-gray-500">{org.type} · {org.positions.length} open position{org.positions.length !== 1 && 's'}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {selectedOrg && (
                    <div className="flex flex-col gap-2">
                        {selectedOrg.positions.map((pos) => (
                            <button
                                key={pos.id}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-colors ${selectedPosition?.id === pos.id ? 'border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 dark:border-indigo-600' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300'}`}
                                onClick={() => setSelectedPosition(pos)}
                            >
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{pos.title}</p>
                                    <p className="text-xs text-gray-500">{pos.applicants} applicant{pos.applicants !== 1 && 's'} · Closes {pos.closes}</p>
                                </div>
                                <Tag className="text-[10px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 shrink-0">{pos.status}</Tag>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {!selectedPosition ? (
                <Card className="flex items-center justify-center py-16">
                    <div className="text-center">
                        <PiTargetDuotone className="text-5xl text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                        <p className="text-gray-500 dark:text-gray-400">
                            Select an organization and position to view alignment scores.
                        </p>
                    </div>
                </Card>
            ) : (
                <div className="space-y-4">
                    {/* Strategic Priorities */}
                    {jobDesc && (
                        <Card className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800">
                            <h6 className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                                Strategic Priorities
                            </h6>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                {jobDesc.strategicPriorities}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {jobDesc.keywords.map((kw, i) => (
                                    <Tag key={i} className="text-[10px] bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-700">
                                        {kw}
                                    </Tag>
                                ))}
                            </div>
                        </Card>
                    )}

                    {/* Candidate Scores */}
                    {positionScores
                        .sort((a, b) => b.overallScore - a.overallScore)
                        .map((candidate, rank) => (
                            <Card key={candidate.applicantId}>
                                <div className="flex items-start gap-4">
                                    {/* Overall Score */}
                                    <div className="w-20 h-20 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center shrink-0">
                                        <span className={`text-2xl font-bold ${scoreColor(candidate.overallScore)}`}>
                                            {candidate.overallScore}
                                        </span>
                                        <span className="text-[10px] text-gray-400">
                                            compatibility
                                        </span>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-xs font-bold text-gray-400">#{rank + 1}</span>
                                            <h6 className="font-semibold text-gray-900 dark:text-white">
                                                {candidate.name}
                                            </h6>
                                        </div>

                                        {/* Breakdown Bars */}
                                        <div className="space-y-2 mb-3">
                                            {candidate.breakdown.map((item, i) => (
                                                <div key={i}>
                                                    <div className="flex items-center justify-between mb-0.5">
                                                        <span className="text-xs text-gray-600 dark:text-gray-400">{item.category}</span>
                                                        <span className={`text-xs font-semibold ${scoreColor(item.score)}`}>{item.score}</span>
                                                    </div>
                                                    <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full ${scoreBg(item.score)}`}
                                                            style={{ width: `${item.score}%` }}
                                                        />
                                                    </div>
                                                    <p className="text-[10px] text-gray-400 mt-0.5">{item.detail}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Keywords & Gaps */}
                                        <div className="flex flex-wrap gap-3">
                                            <div className="flex items-center gap-1.5 flex-wrap">
                                                <PiCheckCircleDuotone className="text-emerald-500 text-sm shrink-0" />
                                                {candidate.topKeywords.map((kw, i) => (
                                                    <Tag key={i} className="text-[10px] bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">{kw}</Tag>
                                                ))}
                                            </div>
                                            {candidate.gaps.length > 0 && (
                                                <div className="flex items-center gap-1.5 flex-wrap">
                                                    <PiWarningDuotone className="text-amber-500 text-sm shrink-0" />
                                                    {candidate.gaps.map((gap, i) => (
                                                        <span key={i} className="text-[10px] text-amber-600 dark:text-amber-400">{gap}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                </div>
            )}
        </div>
    )
}

export default AlignmentScoring
