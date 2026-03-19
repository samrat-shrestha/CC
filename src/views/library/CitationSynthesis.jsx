import { useState } from 'react'
import { Card, Button, Tag } from '@/components/ui'
import {
    PiCheckSquareDuotone,
    PiSquareDuotone,
    PiTableDuotone,
    PiSparkleDuotone,
    PiArrowRightBold,
} from 'react-icons/pi'
import { paperLibrary, synthesisMatrix } from '@/views/library/data/libraryData'

const stanceColors = {
    supporting: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
    conflicting: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    neutral: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
}

const CitationSynthesis = () => {
    const [papers, setPapers] = useState(paperLibrary)
    const [showMatrix, setShowMatrix] = useState(false)

    const selectedCount = papers.filter((p) => p.selected).length

    const togglePaper = (id) => {
        setPapers(
            papers.map((p) =>
                p.id === id ? { ...p, selected: !p.selected } : p,
            ),
        )
    }

    const handleGenerate = () => {
        setShowMatrix(true)
    }

    const getPaperTitle = (id) => {
        const paper = papers.find((p) => p.id === id)
        return paper ? paper.title : ''
    }

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Smart Citation & Synthesis
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Select papers to generate a synthesis matrix highlighting common
                    themes and conflicting findings.
                </p>
            </div>

            {!showMatrix ? (
                <>
                    {/* Paper Selection */}
                    <Card className="mb-4">
                        <div className="flex items-center justify-between mb-4">
                            <h6 className="font-semibold text-gray-900 dark:text-white">
                                Select Papers for Synthesis
                            </h6>
                            <span className="text-sm text-gray-500">
                                {selectedCount} selected
                            </span>
                        </div>
                        <div className="space-y-2">
                            {papers.map((paper) => (
                                <button
                                    key={paper.id}
                                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                                        paper.selected
                                            ? 'bg-indigo-50 dark:bg-indigo-900/15 border border-indigo-200 dark:border-indigo-800'
                                            : 'bg-gray-50 dark:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-600'
                                    }`}
                                    onClick={() => togglePaper(paper.id)}
                                >
                                    {paper.selected ? (
                                        <PiCheckSquareDuotone className="text-lg text-indigo-600 dark:text-indigo-400 shrink-0" />
                                    ) : (
                                        <PiSquareDuotone className="text-lg text-gray-400 shrink-0" />
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                            {paper.title}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {paper.authors} · {paper.year}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </Card>

                    <div className="flex justify-end">
                        <Button
                            variant="solid"
                            disabled={selectedCount < 2}
                            onClick={handleGenerate}
                            icon={<PiSparkleDuotone />}
                        >
                            Generate Synthesis Matrix ({selectedCount} papers)
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    {/* Back Button */}
                    <div className="mb-4">
                        <Button
                            size="sm"
                            variant="default"
                            onClick={() => setShowMatrix(false)}
                        >
                            Back to Paper Selection
                        </Button>
                    </div>

                    {/* Synthesis Matrix */}
                    <Card className="mb-4">
                        <div className="flex items-center gap-2 mb-4">
                            <PiTableDuotone className="text-xl text-indigo-500" />
                            <h6 className="font-semibold text-gray-900 dark:text-white">
                                Synthesis Matrix
                            </h6>
                        </div>

                        <div className="flex items-center gap-4 mb-5 text-xs">
                            <span className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                Supporting
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                Conflicting
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                                Neutral
                            </span>
                        </div>

                        <div className="space-y-5">
                            {synthesisMatrix.themes.map((theme, i) => (
                                <div key={i}>
                                    <div className="mb-2">
                                        <h6 className="text-sm font-semibold text-gray-900 dark:text-white">
                                            {theme.name}
                                        </h6>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {theme.description}
                                        </p>
                                    </div>
                                    <div className="space-y-1.5">
                                        {theme.papers.map((entry, j) => (
                                            <div
                                                key={j}
                                                className="flex items-start gap-3 p-2.5 bg-gray-50 dark:bg-gray-800 rounded-lg"
                                            >
                                                <Tag
                                                    className={`text-[10px] shrink-0 mt-0.5 ${stanceColors[entry.stance]}`}
                                                >
                                                    {entry.stance}
                                                </Tag>
                                                <div className="min-w-0">
                                                    <p className="text-xs font-medium text-gray-900 dark:text-white truncate">
                                                        {getPaperTitle(entry.id)}
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                                        {entry.note}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {i < synthesisMatrix.themes.length - 1 && (
                                        <div className="border-b border-gray-100 dark:border-gray-700 mt-4" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </Card>
                </>
            )}
        </div>
    )
}

export default CitationSynthesis
