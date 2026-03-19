import { useState } from 'react'
import { Card } from '@/components/ui'
import Chart from 'react-apexcharts'
import {
    PiChartPieSliceDuotone,
    PiTrendUpDuotone,
    PiTrendDownDuotone,
    PiThumbsUpDuotone,
    PiThumbsDownDuotone,
    PiMinusCircleDuotone,
    PiChatCircleDuotone,
    PiShareNetworkDuotone,
    PiHeartDuotone,
    PiArrowUpRightBold,
    PiArrowDownRightBold,
} from 'react-icons/pi'
import {
    sentimentSummary,
    sentimentTrend,
    platformStats,
    socialPosts,
} from '@/views/social/data/socialMediaData'

// ─── Helpers ──────────────────────────────────────────────────────────

const sentimentColor = {
    positive: '#10b981',
    negative: '#ef4444',
    neutral: '#6b7280',
}

const platformIcon = {
    twitter: '𝕏',
    reddit: 'R',
    instagram: 'IG',
    facebook: 'f',
}

const timeAgo = (dateStr) => {
    const diff = Date.now() - new Date(dateStr).getTime()
    const hours = Math.floor(diff / 3600000)
    if (hours < 1) return 'Just now'
    if (hours < 24) return `${hours}h ago`
    return `${Math.floor(hours / 24)}d ago`
}

// ─── Stat Card ────────────────────────────────────────────────────────

const StatCard = ({ icon: Icon, color, label, value, change, changeLabel }) => (
    <Card className="relative overflow-hidden">
        <div
            className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-[0.07] -mt-6 -mr-6"
            style={{ backgroundColor: color }}
        />
        <div className="relative flex items-start gap-3">
            <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${color}18`, color }}
            >
                <Icon className="text-xl" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {label}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-0.5">
                    {value}
                </p>
                <div className="flex items-center gap-1 mt-1">
                    {change > 0 ? (
                        <PiArrowUpRightBold
                            className="text-xs"
                            style={{ color: '#10b981' }}
                        />
                    ) : (
                        <PiArrowDownRightBold
                            className="text-xs"
                            style={{ color: '#ef4444' }}
                        />
                    )}
                    <span
                        className="text-xs font-medium"
                        style={{
                            color: change > 0 ? '#10b981' : '#ef4444',
                        }}
                    >
                        {change > 0 ? '+' : ''}
                        {change}%
                    </span>
                    <span className="text-xs text-gray-400">
                        {changeLabel}
                    </span>
                </div>
            </div>
        </div>
    </Card>
)

// ─── Post Highlight Card ──────────────────────────────────────────────

const PostHighlight = ({ post, type }) => {
    const borderColor =
        type === 'positive' ? sentimentColor.positive : sentimentColor.negative

    return (
        <div
            className="p-3 rounded-lg border-l-[3px] bg-white dark:bg-gray-800 mb-3"
            style={{ borderLeftColor: borderColor }}
        >
            <div className="flex items-center gap-2 mb-1.5">
                <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                    style={{
                        backgroundColor:
                            platformStats.find(
                                (p) =>
                                    p.platform
                                        .toLowerCase()
                                        .includes(post.platform),
                            )?.color || '#6b7280',
                    }}
                >
                    {platformIcon[post.platform]}
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    {post.author}
                </span>
                <span className="text-xs text-gray-400 ml-auto">
                    {timeAgo(post.date)}
                </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                {post.content}
            </p>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                    <PiHeartDuotone /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                    <PiShareNetworkDuotone /> {post.shares}
                </span>
                <span className="flex items-center gap-1">
                    <PiChatCircleDuotone /> {post.comments}
                </span>
            </div>
        </div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────

const DiscourseDashboard = () => {
    // Sentiment trend chart config
    const trendChartOptions = {
        chart: {
            type: 'area',
            toolbar: { show: false },
            fontFamily: 'inherit',
        },
        colors: [
            sentimentColor.positive,
            sentimentColor.negative,
            sentimentColor.neutral,
        ],
        stroke: { curve: 'smooth', width: 2.5 },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.25,
                opacityTo: 0.05,
            },
        },
        xaxis: {
            categories: sentimentTrend.map((d) => d.date),
            labels: {
                style: {
                    colors: '#9ca3af',
                    fontSize: '11px',
                },
            },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#9ca3af',
                    fontSize: '11px',
                },
            },
        },
        grid: {
            borderColor: '#f3f4f6',
            strokeDashArray: 4,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            fontSize: '12px',
            markers: { size: 6, shape: 'circle' },
            labels: { colors: '#9ca3af' },
        },
        tooltip: { theme: 'dark' },
        dataLabels: { enabled: false },
    }

    const trendChartSeries = [
        {
            name: 'Positive',
            data: sentimentTrend.map((d) => d.positive),
        },
        {
            name: 'Negative',
            data: sentimentTrend.map((d) => d.negative),
        },
        {
            name: 'Neutral',
            data: sentimentTrend.map((d) => d.neutral),
        },
    ]

    // Platform chart config
    const platformChartOptions = {
        chart: {
            type: 'bar',
            toolbar: { show: false },
            fontFamily: 'inherit',
        },
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 6,
                barHeight: '55%',
            },
        },
        colors: platformStats.map((p) => p.color),
        xaxis: {
            categories: platformStats.map((p) => p.platform),
            labels: {
                style: { colors: '#9ca3af', fontSize: '11px' },
            },
        },
        yaxis: {
            labels: {
                style: { colors: '#9ca3af', fontSize: '12px' },
            },
        },
        grid: { borderColor: '#f3f4f6', strokeDashArray: 4 },
        tooltip: { theme: 'dark' },
        dataLabels: { enabled: false },
        legend: { show: false },
    }

    const platformChartSeries = [
        {
            name: 'Engagement',
            data: platformStats.map((p) => p.engagement),
        },
    ]

    // Highlighted posts
    const positivePosts = socialPosts
        .filter((p) => p.sentiment === 'positive')
        .sort((a, b) => b.sentimentScore - a.sentimentScore)
        .slice(0, 3)

    const negativePosts = socialPosts
        .filter((p) => p.sentiment === 'negative')
        .sort((a, b) => a.sentimentScore - b.sentimentScore)
        .slice(0, 3)

    return (
        <div className="bg-slate-200/70 dark:bg-slate-900/60 -m-8 p-8 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Campus Social Analytics
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Aggregate campus sentiment overview across all monitored
                    social media platforms.
                </p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
                <StatCard
                    icon={PiChatCircleDuotone}
                    color="#6366f1"
                    label="Total Mentions"
                    value={sentimentSummary.total.toLocaleString()}
                    change={6.8}
                    changeLabel="vs last week"
                />
                <StatCard
                    icon={PiThumbsUpDuotone}
                    color={sentimentColor.positive}
                    label="Positive"
                    value={`${sentimentSummary.positive.percentage}%`}
                    change={sentimentSummary.weekOverWeek.positive}
                    changeLabel="vs last week"
                />
                <StatCard
                    icon={PiThumbsDownDuotone}
                    color={sentimentColor.negative}
                    label="Negative"
                    value={`${sentimentSummary.negative.percentage}%`}
                    change={sentimentSummary.weekOverWeek.negative}
                    changeLabel="vs last week"
                />
                <StatCard
                    icon={PiMinusCircleDuotone}
                    color={sentimentColor.neutral}
                    label="Neutral"
                    value={`${sentimentSummary.neutral.percentage}%`}
                    change={sentimentSummary.weekOverWeek.neutral}
                    changeLabel="vs last week"
                />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-6">
                {/* Trend Chart */}
                <div className="xl:col-span-8">
                    <Card>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-1">
                            7-Day Sentiment Trend
                        </h6>
                        <p className="text-xs text-gray-400 mb-4">
                            Daily breakdown of positive, negative, and neutral
                            mentions
                        </p>
                        <Chart
                            options={trendChartOptions}
                            series={trendChartSeries}
                            type="area"
                            height={300}
                        />
                    </Card>
                </div>

                {/* Platform Breakdown */}
                <div className="xl:col-span-4">
                    <Card>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Platform Engagement
                        </h6>
                        <p className="text-xs text-gray-400 mb-4">
                            Total engagement by platform
                        </p>
                        <Chart
                            options={platformChartOptions}
                            series={platformChartSeries}
                            type="bar"
                            height={300}
                        />
                    </Card>
                </div>
            </div>

            {/* Highlighted Posts */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <Card>
                    <div className="flex items-center gap-2 mb-4">
                        <PiThumbsUpDuotone
                            className="text-lg"
                            style={{ color: sentimentColor.positive }}
                        />
                        <h6 className="font-semibold text-gray-900 dark:text-white">
                            Top Positive Mentions
                        </h6>
                    </div>
                    {positivePosts.map((post) => (
                        <PostHighlight
                            key={post.id}
                            post={post}
                            type="positive"
                        />
                    ))}
                </Card>

                <Card>
                    <div className="flex items-center gap-2 mb-4">
                        <PiThumbsDownDuotone
                            className="text-lg"
                            style={{ color: sentimentColor.negative }}
                        />
                        <h6 className="font-semibold text-gray-900 dark:text-white">
                            Top Negative Mentions
                        </h6>
                    </div>
                    {negativePosts.map((post) => (
                        <PostHighlight
                            key={post.id}
                            post={post}
                            type="negative"
                        />
                    ))}
                </Card>
            </div>
        </div>
    )
}

export default DiscourseDashboard
