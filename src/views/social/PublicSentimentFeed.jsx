import { useState, useMemo } from 'react'
import { Card, Button, Tag } from '@/components/ui'
import {
    PiChatTeardropTextDuotone,
    PiHeartDuotone,
    PiShareNetworkDuotone,
    PiChatCircleDuotone,
    PiFunnelDuotone,
    PiThumbsUpDuotone,
    PiThumbsDownDuotone,
    PiMinusCircleDuotone,
    PiCaretDownBold,
    PiCaretUpBold,
} from 'react-icons/pi'
import { socialPosts } from '@/views/social/data/socialMediaData'

// ─── Helpers ──────────────────────────────────────────────────────────

const sentimentConfig = {
    positive: { color: '#10b981', bg: 'bg-emerald-50 dark:bg-emerald-900/15', label: 'Positive', icon: PiThumbsUpDuotone },
    negative: { color: '#ef4444', bg: 'bg-red-50 dark:bg-red-900/15', label: 'Negative', icon: PiThumbsDownDuotone },
    neutral: { color: '#6b7280', bg: 'bg-gray-50 dark:bg-gray-800', label: 'Neutral', icon: PiMinusCircleDuotone },
}

const platformConfig = {
    twitter: { label: 'Twitter / X', color: '#1DA1F2', abbr: '𝕏' },
    reddit: { label: 'Reddit', color: '#FF4500', abbr: 'R' },
    instagram: { label: 'Instagram', color: '#E1306C', abbr: 'IG' },
    facebook: { label: 'Facebook', color: '#1877F2', abbr: 'f' },
}

const formatDate = (dateStr) => {
    const d = new Date(dateStr)
    const now = new Date()
    const diffMs = now - d
    const diffHours = Math.floor(diffMs / 3600000)
    if (diffHours < 1) return 'Just now'
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffHours < 48) return 'Yesterday'
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

// ─── Filter Button ────────────────────────────────────────────────────

const FilterChip = ({ label, active, color, onClick }) => (
    <button
        onClick={onClick}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 border ${
            active
                ? 'border-transparent text-white shadow-sm'
                : 'border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-gray-300'
        }`}
        style={active ? { backgroundColor: color } : {}}
    >
        {label}
    </button>
)

// ─── Post Card ────────────────────────────────────────────────────────

const PostCard = ({ post, expanded, onToggle }) => {
    const sent = sentimentConfig[post.sentiment]
    const plat = platformConfig[post.platform]

    return (
        <Card
            className="cursor-pointer transition-all duration-200 hover:shadow-md"
            onClick={onToggle}
        >
            <div className="flex items-start gap-3">
                {/* Platform Avatar */}
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: plat.color }}
                >
                    {plat.abbr}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {post.author}
                        </span>
                        <span className="text-xs text-gray-400">
                            {plat.label}
                        </span>
                        <span className="text-xs text-gray-400">·</span>
                        <span className="text-xs text-gray-400">
                            {formatDate(post.date)}
                        </span>
                        <div className="ml-auto flex items-center gap-1.5">
                            <Tag
                                className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                                style={{
                                    backgroundColor: `${sent.color}15`,
                                    color: sent.color,
                                    border: `1px solid ${sent.color}30`,
                                }}
                            >
                                {sent.label}
                            </Tag>
                        </div>
                    </div>

                    <p
                        className={`text-sm text-gray-600 dark:text-gray-400 leading-relaxed ${
                            expanded ? '' : 'line-clamp-2'
                        }`}
                    >
                        {post.content}
                    </p>

                    {/* Engagement + Expand */}
                    <div className="flex items-center gap-5 mt-2.5">
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                            <PiHeartDuotone className="text-sm" />
                            {post.likes.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                            <PiShareNetworkDuotone className="text-sm" />
                            {post.shares.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                            <PiChatCircleDuotone className="text-sm" />
                            {post.comments.toLocaleString()}
                        </span>
                        <span className="ml-auto flex items-center gap-0.5 text-[10px] text-gray-400">
                            {expanded ? (
                                <>
                                    Collapse <PiCaretUpBold />
                                </>
                            ) : (
                                <>
                                    Expand <PiCaretDownBold />
                                </>
                            )}
                        </span>
                    </div>

                    {/* Expanded metadata */}
                    {expanded && (
                        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-4 text-xs">
                                <span className="text-gray-500 dark:text-gray-400">
                                    <strong>Topic:</strong> {post.topic}
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    <strong>Sentiment Score:</strong>{' '}
                                    <span
                                        className="font-semibold"
                                        style={{ color: sent.color }}
                                    >
                                        {post.sentimentScore > 0 ? '+' : ''}
                                        {post.sentimentScore.toFixed(2)}
                                    </span>
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    )
}

// ─── Main Component ───────────────────────────────────────────────────

const PublicSentimentFeed = () => {
    const [platformFilter, setPlatformFilter] = useState('all')
    const [sentimentFilter, setSentimentFilter] = useState('all')
    const [expandedId, setExpandedId] = useState(null)

    const filteredPosts = useMemo(() => {
        return socialPosts
            .filter((p) =>
                platformFilter === 'all'
                    ? true
                    : p.platform === platformFilter,
            )
            .filter((p) =>
                sentimentFilter === 'all'
                    ? true
                    : p.sentiment === sentimentFilter,
            )
            .sort((a, b) => new Date(b.date) - new Date(a.date))
    }, [platformFilter, sentimentFilter])

    const counts = useMemo(() => {
        const c = { positive: 0, negative: 0, neutral: 0 }
        filteredPosts.forEach((p) => c[p.sentiment]++)
        return c
    }, [filteredPosts])

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Public Sentiment Feed
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Real-time stream of campus social media activity with
                    sentiment classification and engagement metrics.
                </p>
            </div>

            {/* Filter Bar */}
            <Card className="mb-5">
                <div className="flex items-center gap-2 mb-3">
                    <PiFunnelDuotone className="text-gray-400" />
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Platform
                    </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    <FilterChip
                        label="All Platforms"
                        active={platformFilter === 'all'}
                        color="#6366f1"
                        onClick={() => setPlatformFilter('all')}
                    />
                    {Object.entries(platformConfig).map(([key, cfg]) => (
                        <FilterChip
                            key={key}
                            label={cfg.label}
                            active={platformFilter === key}
                            color={cfg.color}
                            onClick={() => setPlatformFilter(key)}
                        />
                    ))}
                </div>

                <div className="flex items-center gap-2 mb-3">
                    <PiFunnelDuotone className="text-gray-400" />
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Sentiment
                    </span>
                </div>
                <div className="flex flex-wrap gap-2">
                    <FilterChip
                        label="All Sentiments"
                        active={sentimentFilter === 'all'}
                        color="#6366f1"
                        onClick={() => setSentimentFilter('all')}
                    />
                    {Object.entries(sentimentConfig).map(([key, cfg]) => (
                        <FilterChip
                            key={key}
                            label={cfg.label}
                            active={sentimentFilter === key}
                            color={cfg.color}
                            onClick={() => setSentimentFilter(key)}
                        />
                    ))}
                </div>
            </Card>

            {/* Summary counts */}
            <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 dark:text-gray-400">
                <span className="font-medium">
                    {filteredPosts.length} posts
                </span>
                <span className="flex items-center gap-1">
                    <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: sentimentConfig.positive.color }}
                    />
                    {counts.positive} positive
                </span>
                <span className="flex items-center gap-1">
                    <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: sentimentConfig.negative.color }}
                    />
                    {counts.negative} negative
                </span>
                <span className="flex items-center gap-1">
                    <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: sentimentConfig.neutral.color }}
                    />
                    {counts.neutral} neutral
                </span>
            </div>

            {/* Posts */}
            <div className="space-y-3">
                {filteredPosts.map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                        expanded={expandedId === post.id}
                        onToggle={() =>
                            setExpandedId(
                                expandedId === post.id ? null : post.id,
                            )
                        }
                    />
                ))}

                {filteredPosts.length === 0 && (
                    <Card className="flex items-center justify-center min-h-[200px]">
                        <div className="text-center text-gray-400">
                            <PiChatTeardropTextDuotone className="text-4xl mx-auto mb-2 opacity-40" />
                            <p className="font-medium">No posts found</p>
                            <p className="text-sm mt-1">
                                Adjust filters to see more results
                            </p>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default PublicSentimentFeed
