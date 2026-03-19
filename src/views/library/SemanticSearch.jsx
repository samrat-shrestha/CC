import { useState } from 'react'
import { Card, Button, Tag } from '@/components/ui'
import {
    PiMagnifyingGlassDuotone,
    PiBookDuotone,
    PiArticleDuotone,
    PiClockDuotone,
    PiCheckCircleDuotone,
    PiXCircleDuotone,
} from 'react-icons/pi'
import { searchResults, recentSearches } from '@/views/library/data/libraryData'

const typeIcons = {
    Book: PiBookDuotone,
    Journal: PiArticleDuotone,
}

const SemanticSearch = () => {
    const [query, setQuery] = useState('how soil nitrogen affects crop yield')
    const [hasSearched, setHasSearched] = useState(true)
    const [results, setResults] = useState(searchResults)

    const handleSearch = () => {
        if (!query.trim()) return
        setHasSearched(true)
        setResults(searchResults)
    }

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Concept-Based Semantic Search
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Find relevant resources by meaning, not just keywords. The AI
                    understands the underlying scientific concepts.
                </p>
            </div>

            {/* Search Bar */}
            <Card className="mb-6">
                <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                        <PiMagnifyingGlassDuotone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            placeholder="Search by concept, question, or topic..."
                            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                    <Button variant="solid" onClick={handleSearch}>
                        Search
                    </Button>
                </div>

                {/* Recent Searches */}
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                    <PiClockDuotone className="text-gray-400 text-sm" />
                    {recentSearches.map((s, i) => (
                        <button
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            onClick={() => {
                                setQuery(s)
                                setHasSearched(true)
                            }}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </Card>

            {/* Results */}
            {hasSearched && (
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Found {results.length} results matching your concept
                    </p>
                    <div className="space-y-3">
                        {results.map((result) => {
                            const TypeIcon = typeIcons[result.type] || PiBookDuotone
                            return (
                                <Card key={result.id}>
                                    <div className="flex items-start gap-4">
                                        {/* Match score */}
                                        <div className="w-14 h-14 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex flex-col items-center justify-center shrink-0">
                                            <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                                                {result.conceptMatch}
                                            </span>
                                            <span className="text-[10px] text-indigo-400">
                                                match
                                            </span>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-3 mb-1">
                                                <h6 className="font-semibold text-gray-900 dark:text-white">
                                                    {result.title}
                                                </h6>
                                                <div className="flex items-center gap-2 shrink-0">
                                                    {result.available ? (
                                                        <Tag className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                                                            <PiCheckCircleDuotone />
                                                            Available
                                                        </Tag>
                                                    ) : (
                                                        <Tag className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center gap-1">
                                                            <PiXCircleDuotone />
                                                            Checked Out
                                                        </Tag>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                                                <TypeIcon />
                                                <span>{result.type}</span>
                                                <span>·</span>
                                                <span>{result.authors}</span>
                                                <span>·</span>
                                                <span>{result.year}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                                {result.abstract}
                                            </p>
                                            <div className="flex items-center gap-1.5 flex-wrap">
                                                <span className="text-xs text-gray-400 mr-1">
                                                    Concepts:
                                                </span>
                                                {result.concepts.map((c, i) => (
                                                    <Tag
                                                        key={i}
                                                        className="text-[10px] bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                                                    >
                                                        {c}
                                                    </Tag>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SemanticSearch
