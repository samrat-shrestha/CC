import { useState } from 'react'
import { Card, Tag } from '@/components/ui'
import {
    PiEyeSlashDuotone,
    PiCaretDownBold,
    PiBuildingsDuotone,
    PiToggleLeftDuotone,
    PiToggleRightFill,
    PiShieldCheckDuotone,
    PiTrophyDuotone,
    PiQuotesDuotone,
    PiArticleDuotone,
    PiTargetDuotone,
} from 'react-icons/pi'
import {
    organizations,
    blindedApplicants,
    blindingOptions as defaultBlindingOptions,
} from '@/views/hiring/data/hiringData'

const BiasMitigation = () => {
    const [selectedOrg, setSelectedOrg] = useState(null)
    const [selectedPosition, setSelectedPosition] = useState(null)
    const [orgDropdownOpen, setOrgDropdownOpen] = useState(false)
    const [blindingOptions, setBlindingOptions] = useState(defaultBlindingOptions)

    const candidates = selectedPosition
        ? blindedApplicants[selectedPosition.id] || []
        : []

    const enabledFilters = blindingOptions.filter((o) => o.enabled).length

    const handleSelectOrg = (org) => {
        setSelectedOrg(org)
        setSelectedPosition(null)
        setOrgDropdownOpen(false)
    }

    const toggleBlinding = (id) => {
        setBlindingOptions((prev) =>
            prev.map((opt) =>
                opt.id === id ? { ...opt, enabled: !opt.enabled } : opt,
            ),
        )
    }

    return (
        <div>
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Bias Mitigation Filters
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Blind demographic data during initial screening to ensure
                    the search committee focuses on merit and publication quality.
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
                        <PiEyeSlashDuotone className="text-5xl text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                        <p className="text-gray-500 dark:text-gray-400">
                            Select an organization and position to configure bias mitigation filters.
                        </p>
                    </div>
                </Card>
            ) : (
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                    {/* Left — Blinding Controls */}
                    <div className="xl:col-span-4 space-y-4">
                        <Card>
                            <div className="flex items-center gap-2 mb-4">
                                <PiShieldCheckDuotone className="text-emerald-500" />
                                <h6 className="font-semibold text-gray-900 dark:text-white">
                                    Blinding Filters
                                </h6>
                                <Tag className="text-[10px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 ml-auto">
                                    {enabledFilters} active
                                </Tag>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                                Toggle which demographic fields are hidden during the review process. Candidates are identified only by a blind ID.
                            </p>
                            <div className="space-y-2">
                                {blindingOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        className={`w-full flex items-center justify-between p-2.5 rounded-lg border transition-colors ${
                                            option.enabled
                                                ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800'
                                                : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                                        }`}
                                        onClick={() => toggleBlinding(option.id)}
                                    >
                                        <span className={`text-sm font-medium ${option.enabled ? 'text-emerald-700 dark:text-emerald-400' : 'text-gray-500'}`}>
                                            {option.label}
                                        </span>
                                        {option.enabled ? (
                                            <PiToggleRightFill className="text-xl text-emerald-500" />
                                        ) : (
                                            <PiToggleLeftDuotone className="text-xl text-gray-400" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Right — Blinded Candidates */}
                    <div className="xl:col-span-8 space-y-3">
                        <div className="flex items-center justify-between mb-1">
                            <h6 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                <PiEyeSlashDuotone className="text-indigo-500" />
                                Blinded Candidate View ({candidates.length})
                            </h6>
                        </div>

                        {candidates.map((candidate) => (
                            <Card key={candidate.blindId}>
                                <div className="flex items-start gap-4">
                                    {/* Blind ID */}
                                    <div className="w-24 h-20 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center shrink-0">
                                        <span className="text-[10px] text-gray-400 uppercase">Candidate</span>
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {candidate.blindId.replace('CANDIDATE-', '')}
                                        </span>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        {/* Key Metrics */}
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                                            <div className="flex items-center gap-1.5">
                                                <PiTrophyDuotone className="text-amber-500 text-sm" />
                                                <div>
                                                    <p className="text-xs text-gray-400">H-Index</p>
                                                    <p className="text-sm font-bold text-gray-900 dark:text-white">{candidate.hIndex}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <PiQuotesDuotone className="text-blue-500 text-sm" />
                                                <div>
                                                    <p className="text-xs text-gray-400">Citations</p>
                                                    <p className="text-sm font-bold text-gray-900 dark:text-white">{candidate.totalCitations.toLocaleString()}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <PiArticleDuotone className="text-indigo-500 text-sm" />
                                                <div>
                                                    <p className="text-xs text-gray-400">Publications</p>
                                                    <p className="text-sm font-bold text-gray-900 dark:text-white">{candidate.publicationCount}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <PiTargetDuotone className="text-emerald-500 text-sm" />
                                                <div>
                                                    <p className="text-xs text-gray-400">Alignment</p>
                                                    <p className="text-sm font-bold text-gray-900 dark:text-white">{candidate.alignmentScore}%</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Additional Metrics */}
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <Tag className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                                Avg IF: {candidate.avgImpactFactor}
                                            </Tag>
                                            <Tag className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                                Q1: {candidate.q1Percentage}%
                                            </Tag>
                                            <Tag className={`text-[10px] ${candidate.grantFunded ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'}`}>
                                                {candidate.grantFunded ? 'Grant Funded' : 'No Grant Record'}
                                            </Tag>
                                        </div>

                                        {/* Top Venues */}
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <span className="text-[10px] text-gray-400 shrink-0">Top venues:</span>
                                            {candidate.topVenues.map((v, i) => (
                                                <Tag key={i} className="text-[10px] bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                                                    {v}
                                                </Tag>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default BiasMitigation
