import { useState } from 'react'
import { Card, Tag } from '@/components/ui'
import {
    PiArticleDuotone,
    PiCaretDownBold,
    PiBuildingsDuotone,
    PiChartBarDuotone,
    PiTrophyDuotone,
    PiQuotesDuotone,
} from 'react-icons/pi'
import {
    organizations,
    applicantPublications,
} from '@/views/hiring/data/hiringData'

const quartileColors = {
    Q1: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
    Q2: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
}

const BibliometricAnalysis = () => {
    const [selectedOrg, setSelectedOrg] = useState(null)
    const [selectedPosition, setSelectedPosition] = useState(null)
    const [orgDropdownOpen, setOrgDropdownOpen] = useState(false)

    const positionApplicants = selectedPosition
        ? applicantPublications[selectedPosition.id] || []
        : []

    const handleSelectOrg = (org) => {
        setSelectedOrg(org)
        setSelectedPosition(null)
        setOrgDropdownOpen(false)
    }

    return (
        <div>
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Bibliometric Analysis
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Automatically pull Impact Factor, H-index, and citation
                    counts for every publication listed on a candidate's CV.
                </p>
            </div>

            {/* Position Selector */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
                {/* Organization */}
                <div className="relative">
                    <button
                        className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 transition-colors text-left"
                        onClick={() => setOrgDropdownOpen(!orgDropdownOpen)}
                    >
                        <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                            <PiBuildingsDuotone className="text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                                Organization / Lab
                            </p>
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

                {/* Position */}
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

            {/* Applicants */}
            {!selectedPosition ? (
                <Card className="flex items-center justify-center py-16">
                    <div className="text-center">
                        <PiArticleDuotone className="text-5xl text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                        <p className="text-gray-500 dark:text-gray-400">
                            Select an organization and position to view applicant bibliometrics.
                        </p>
                    </div>
                </Card>
            ) : (
                <div className="space-y-4">
                    {positionApplicants.map((applicant) => (
                        <Card key={applicant.applicantId}>
                            {/* Applicant Header */}
                            <div className="flex items-center justify-between mb-4">
                                <h6 className="font-semibold text-gray-900 dark:text-white">
                                    {applicant.name}
                                </h6>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1.5 text-sm">
                                        <PiTrophyDuotone className="text-amber-500" />
                                        <span className="font-semibold text-gray-900 dark:text-white">h-{applicant.hIndex}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm">
                                        <PiQuotesDuotone className="text-blue-500" />
                                        <span className="font-semibold text-gray-900 dark:text-white">{applicant.totalCitations.toLocaleString()}</span>
                                        <span className="text-gray-400 text-xs">citations</span>
                                    </div>
                                </div>
                            </div>

                            {/* Publications Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="text-left text-xs text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">
                                            <th className="pb-2 font-medium">Publication</th>
                                            <th className="pb-2 font-medium">Journal</th>
                                            <th className="pb-2 font-medium text-center">Year</th>
                                            <th className="pb-2 font-medium text-center">IF</th>
                                            <th className="pb-2 font-medium text-center">Citations</th>
                                            <th className="pb-2 font-medium text-center">Quartile</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {applicant.publications.map((pub, i) => (
                                            <tr key={i} className="border-b border-gray-50 dark:border-gray-800 last:border-0">
                                                <td className="py-2 pr-3 text-gray-900 dark:text-white max-w-[280px] truncate">{pub.title}</td>
                                                <td className="py-2 pr-3 text-gray-500 dark:text-gray-400 max-w-[180px] truncate">{pub.journal}</td>
                                                <td className="py-2 text-center text-gray-500">{pub.year}</td>
                                                <td className="py-2 text-center font-medium text-gray-900 dark:text-white">{pub.impactFactor ?? '—'}</td>
                                                <td className="py-2 text-center font-medium text-gray-900 dark:text-white">{pub.citations}</td>
                                                <td className="py-2 text-center">
                                                    {pub.quartile ? (
                                                        <Tag className={`text-[10px] ${quartileColors[pub.quartile] || ''}`}>
                                                            {pub.quartile}
                                                        </Tag>
                                                    ) : (
                                                        <span className="text-gray-400 text-xs">Conf</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}

export default BibliometricAnalysis
