import { Card } from '@/components/ui'
import {
    PiTrendUpDuotone,
    PiTrendDownDuotone,
    PiFireDuotone,
    PiCrownDuotone,
    PiUsersDuotone,
    PiHeartDuotone,
    PiHashDuotone,
    PiArrowUpBold,
    PiArrowDownBold,
} from 'react-icons/pi'
import {
    trendingTopics,
    engagementHeatmap,
    topInfluencers,
} from '@/views/social/data/socialMediaData'

// ─── Helpers ──────────────────────────────────────────────────────────

const sentimentBarColors = {
    positive: '#10b981',
    negative: '#ef4444',
    neutral: '#d1d5db',
}

const platformConfig = {
    twitter: { label: 'Twitter / X', color: '#1DA1F2' },
    reddit: { label: 'Reddit', color: '#FF4500' },
    instagram: { label: 'Instagram', color: '#E1306C' },
    facebook: { label: 'Facebook', color: '#1877F2' },
}

const heatmapColor = (value) => {
    if (value >= 60) return 'bg-indigo-500 text-white'
    if (value >= 45) return 'bg-indigo-400 text-white'
    if (value >= 30) return 'bg-indigo-300 text-white'
    if (value >= 15) return 'bg-indigo-200 text-indigo-800'
    return 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300'
}

const formatFollowers = (n) => {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}K`
    return n
}

// ─── Trending Topic Row ──────────────────────────────────────────────

const TopicRow = ({ topic, rank }) => {
    const total = topic.positive + topic.negative + topic.neutral
    const posWidth = (topic.positive / total) * 100
    const negWidth = (topic.negative / total) * 100
    const neuWidth = (topic.neutral / total) * 100

    return (
        <div className="flex items-center gap-4 py-3 border-b border-gray-50 dark:border-gray-700/50 last:border-0">
            {/* Rank */}
            <span className="text-sm font-bold text-gray-300 dark:text-gray-600 w-6 text-right">
                {rank}
            </span>

            {/* Topic info */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <PiHashDuotone className="text-sm text-gray-400" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {topic.topic}
                    </span>
                    <span className="text-xs text-gray-400">
                        {topic.postCount} posts
                    </span>
                </div>

                {/* Stacked bar */}
                <div className="flex h-2 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <div
                        className="h-full rounded-l-full"
                        style={{
                            width: `${posWidth}%`,
                            backgroundColor: sentimentBarColors.positive,
                        }}
                    />
                    <div
                        className="h-full"
                        style={{
                            width: `${neuWidth}%`,
                            backgroundColor: sentimentBarColors.neutral,
                        }}
                    />
                    <div
                        className="h-full rounded-r-full"
                        style={{
                            width: `${negWidth}%`,
                            backgroundColor: sentimentBarColors.negative,
                        }}
                    />
                </div>
            </div>

            {/* Trend */}
            <div className="flex items-center gap-1 w-20 justify-end">
                {topic.trend === 'up' ? (
                    <PiArrowUpBold
                        className="text-xs"
                        style={{ color: '#10b981' }}
                    />
                ) : (
                    <PiArrowDownBold
                        className="text-xs"
                        style={{ color: '#ef4444' }}
                    />
                )}
                <span
                    className="text-xs font-medium"
                    style={{
                        color:
                            topic.trend === 'up' ? '#10b981' : '#ef4444',
                    }}
                >
                    {topic.changePercent > 0 ? '+' : ''}
                    {topic.changePercent}%
                </span>
            </div>
        </div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────

const CampusBuzzAnalytics = () => {
    const hours = ['8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm']

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Campus Buzz Analytics
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Trending topics, engagement patterns, and key opinion
                    leaders across campus social channels.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                {/* Left — Trending Topics */}
                <div className="xl:col-span-7">
                    <Card>
                        <div className="flex items-center gap-2 mb-4">
                            <PiFireDuotone className="text-lg text-orange-500" />
                            <h6 className="font-semibold text-gray-900 dark:text-white">
                                Trending Topics
                            </h6>
                        </div>

                        {/* Legend */}
                        <div className="flex items-center gap-4 mb-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                                <span
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{
                                        backgroundColor:
                                            sentimentBarColors.positive,
                                    }}
                                />
                                Positive
                            </span>
                            <span className="flex items-center gap-1">
                                <span
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{
                                        backgroundColor:
                                            sentimentBarColors.neutral,
                                    }}
                                />
                                Neutral
                            </span>
                            <span className="flex items-center gap-1">
                                <span
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{
                                        backgroundColor:
                                            sentimentBarColors.negative,
                                    }}
                                />
                                Negative
                            </span>
                        </div>

                        {trendingTopics.map((topic, i) => (
                            <TopicRow
                                key={topic.id}
                                topic={topic}
                                rank={i + 1}
                            />
                        ))}
                    </Card>
                </div>

                {/* Right Column */}
                <div className="xl:col-span-5 space-y-6">
                    {/* Engagement Heatmap */}
                    <Card>
                        <div className="flex items-center gap-2 mb-4">
                            <PiTrendUpDuotone className="text-lg text-indigo-500" />
                            <h6 className="font-semibold text-gray-900 dark:text-white">
                                Engagement Heatmap
                            </h6>
                        </div>
                        <p className="text-xs text-gray-400 mb-3">
                            Posts per time slot by day of week
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-center">
                                <thead>
                                    <tr>
                                        <th className="text-[10px] text-gray-400 font-medium pb-2 pr-2 text-left w-10">
                                            Day
                                        </th>
                                        {hours.map((h) => (
                                            <th
                                                key={h}
                                                className="text-[10px] text-gray-400 font-medium pb-2 px-1"
                                            >
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {engagementHeatmap.map((row) => (
                                        <tr key={row.day}>
                                            <td className="text-[11px] font-medium text-gray-500 dark:text-gray-400 py-1 pr-2 text-left">
                                                {row.day}
                                            </td>
                                            {hours.map((h) => (
                                                <td key={h} className="p-0.5">
                                                    <div
                                                        className={`w-full h-8 rounded flex items-center justify-center text-[10px] font-medium ${heatmapColor(row[h])}`}
                                                    >
                                                        {row[h]}
                                                    </div>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>

                    {/* Top Influencers */}
                    <Card>
                        <div className="flex items-center gap-2 mb-4">
                            <PiCrownDuotone className="text-lg text-amber-500" />
                            <h6 className="font-semibold text-gray-900 dark:text-white">
                                Top Campus Voices
                            </h6>
                        </div>

                        <div className="space-y-3">
                            {topInfluencers.map((inf, i) => {
                                const plat = platformConfig[inf.platform]
                                return (
                                    <div
                                        key={inf.id}
                                        className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                                    >
                                        <span className="text-xs font-bold text-gray-300 dark:text-gray-600 w-4">
                                            {i + 1}
                                        </span>
                                        <div
                                            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                                            style={{
                                                backgroundColor: plat.color,
                                            }}
                                        >
                                            {inf.name
                                                .split(' ')
                                                .map((w) => w[0])
                                                .join('')
                                                .slice(0, 2)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                {inf.handle}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                                <span>
                                                    {formatFollowers(
                                                        inf.followers,
                                                    )}{' '}
                                                    followers
                                                </span>
                                                <span>·</span>
                                                <span>
                                                    {inf.recentPosts} posts
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                                {inf.avgEngagement.toLocaleString()}
                                            </p>
                                            <p className="text-[10px] text-gray-400">
                                                avg engagement
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CampusBuzzAnalytics
