import { useState } from 'react'
import { Card, Tag, Button } from '@/components/ui'
import {
    PiChartBarDuotone,
    PiWarningDiamondDuotone,
    PiTrendDownDuotone,
    PiTrendUpDuotone,
    PiLightbulbDuotone,
    PiClockDuotone,
    PiBookOpenDuotone,
    PiUsersDuotone,
    PiChalkboardTeacherDuotone,
    PiCheckCircleDuotone,
    PiInfoDuotone,
} from 'react-icons/pi'
import { myGatekeeperCourses } from '@/views/advising/data/advisingData'

const riskStyles = {
    high: {
        bg: 'bg-red-50 dark:bg-red-900/10',
        border: 'border-red-200 dark:border-red-800',
        tag: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
        label: 'Needs Attention',
    },
    medium: {
        bg: 'bg-amber-50 dark:bg-amber-900/10',
        border: 'border-amber-200 dark:border-amber-800',
        tag: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400',
        label: 'Monitor',
    },
    low: {
        bg: 'bg-emerald-50 dark:bg-emerald-900/10',
        border: 'border-emerald-200 dark:border-emerald-800',
        tag: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
        label: 'On Track',
    },
}

const recIcons = {
    tutoring: PiChalkboardTeacherDuotone,
    office_hours: PiBookOpenDuotone,
    study_group: PiUsersDuotone,
    self_study: PiBookOpenDuotone,
    encouragement: PiCheckCircleDuotone,
}

const impactColors = {
    high: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
    medium: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400',
    low: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
}

const SuccessPredictor = () => {
    const [expandedCourse, setExpandedCourse] = useState(
        myGatekeeperCourses[0]?.id,
    )

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Success Predictor
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Your personal early warning system. See how you are
                    tracking in challenging courses and get proactive
                    recommendations before midterms.
                </p>
            </div>

            {/* Course Cards */}
            <div className="space-y-4">
                {myGatekeeperCourses.map((course) => {
                    const style = riskStyles[course.riskLevel]
                    const isExpanded = expandedCourse === course.id
                    const lastYou =
                        course.trajectory[course.trajectory.length - 1]?.you
                    const lastAvg =
                        course.trajectory[course.trajectory.length - 1]?.classAvg
                    const diff = lastYou - lastAvg

                    return (
                        <Card
                            key={course.id}
                            className={`border ${style.border} ${isExpanded ? style.bg : ''}`}
                        >
                            {/* Course Header — always visible */}
                            <button
                                className="w-full text-left"
                                onClick={() =>
                                    setExpandedCourse(
                                        isExpanded ? null : course.id,
                                    )
                                }
                            >
                                <div className="flex items-center gap-4">
                                    {/* Midterm countdown */}
                                    <div className="w-20 h-20 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center shrink-0">
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {course.daysToMidterm}
                                        </span>
                                        <span className="text-[10px] text-gray-400 whitespace-nowrap">
                                            days left
                                        </span>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <h6 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                                                {course.name}
                                            </h6>
                                            <Tag
                                                className={`text-[10px] shrink-0 ${style.tag}`}
                                            >
                                                {style.label}
                                            </Tag>
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {course.instructor} · Midterm:{' '}
                                            {course.midtermDate}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 shrink-0">
                                        <div className="text-center">
                                            <p className="text-xs text-gray-400">
                                                You
                                            </p>
                                            <p className="text-lg font-bold text-gray-900 dark:text-white">
                                                {course.currentGrade}
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs text-gray-400">
                                                Class Avg
                                            </p>
                                            <p className="text-lg font-bold text-gray-500 dark:text-gray-400">
                                                {course.classAvg}
                                            </p>
                                        </div>
                                        <div
                                            className={`flex items-center gap-1 text-sm font-medium ${
                                                diff >= 0
                                                    ? 'text-emerald-600'
                                                    : 'text-red-500'
                                            }`}
                                        >
                                            {diff >= 0 ? (
                                                <PiTrendUpDuotone />
                                            ) : (
                                                <PiTrendDownDuotone />
                                            )}
                                            {diff >= 0 ? '+' : ''}
                                            {diff} pts
                                        </div>
                                    </div>
                                </div>
                            </button>

                            {/* Expanded Details */}
                            {isExpanded && (
                                <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    {/* Performance Trajectory */}
                                    <div className="mb-5">
                                        <h6 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1.5">
                                            <PiChartBarDuotone />
                                            Your Trajectory vs. Class Average
                                        </h6>
                                        <div className="flex items-end gap-1 h-32">
                                            {course.trajectory.map(
                                                (point, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex-1 flex flex-col items-center gap-1"
                                                    >
                                                        <div className="w-full flex items-end justify-center gap-0.5 h-24">
                                                            <div
                                                                className="w-3 rounded-t bg-indigo-500"
                                                                style={{
                                                                    height: `${(point.you / 100) * 96}px`,
                                                                }}
                                                                title={`You: ${point.you}%`}
                                                            />
                                                            <div
                                                                className="w-3 rounded-t bg-gray-300 dark:bg-gray-600"
                                                                style={{
                                                                    height: `${(point.classAvg / 100) * 96}px`,
                                                                }}
                                                                title={`Class: ${point.classAvg}%`}
                                                            />
                                                        </div>
                                                        <span className="text-[10px] text-gray-400">
                                                            {point.week}
                                                        </span>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-2 text-xs">
                                            <span className="flex items-center gap-1.5">
                                                <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500" />{' '}
                                                You
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <span className="w-2.5 h-2.5 rounded-sm bg-gray-300 dark:bg-gray-600" />{' '}
                                                Class Avg
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                        {/* Risk Factors */}
                                        <div>
                                            <h6 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                                                <PiWarningDiamondDuotone />
                                                {course.riskFactors.length > 0
                                                    ? 'Risk Factors'
                                                    : 'Status'}
                                            </h6>
                                            {course.riskFactors.length > 0 ? (
                                                <div className="space-y-2">
                                                    {course.riskFactors.map(
                                                        (rf, i) => (
                                                            <div
                                                                key={i}
                                                                className="p-2.5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-lg"
                                                            >
                                                                <div className="flex items-center justify-between mb-1">
                                                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                                        {rf.factor}
                                                                    </span>
                                                                    <Tag
                                                                        className={`text-[10px] ${
                                                                            rf.severity ===
                                                                            'high'
                                                                                ? 'bg-red-100 dark:bg-red-900/30 text-red-600'
                                                                                : 'bg-amber-100 dark:bg-amber-900/30 text-amber-600'
                                                                        }`}
                                                                    >
                                                                        {rf.severity}
                                                                    </Tag>
                                                                </div>
                                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                                    {rf.detail}
                                                                </p>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg flex items-center gap-3 text-sm text-emerald-700 dark:text-emerald-400">
                                                    <PiCheckCircleDuotone className="text-xl shrink-0" />
                                                    No risk factors detected. You
                                                    are performing well.
                                                </div>
                                            )}
                                        </div>

                                        {/* Recommendations */}
                                        <div>
                                            <h6 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                                                <PiLightbulbDuotone />
                                                Recommended Actions
                                            </h6>
                                            <div className="space-y-2">
                                                {course.recommendations.map(
                                                    (rec, i) => {
                                                        const RecIcon =
                                                            recIcons[rec.type] ||
                                                            PiLightbulbDuotone
                                                        return (
                                                            <div
                                                                key={i}
                                                                className="p-2.5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-lg"
                                                            >
                                                                <div className="flex items-center gap-2 mb-1">
                                                                    <RecIcon className="text-indigo-500 shrink-0" />
                                                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                                        {rec.title}
                                                                    </span>
                                                                    <Tag
                                                                        className={`text-[10px] ml-auto shrink-0 ${impactColors[rec.impact]}`}
                                                                    >
                                                                        {rec.impact}{' '}
                                                                        impact
                                                                    </Tag>
                                                                </div>
                                                                <p className="text-xs text-gray-500 dark:text-gray-400 pl-6">
                                                                    {rec.description}
                                                                </p>
                                                            </div>
                                                        )
                                                    },
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Historical Insight */}
                                    <div className="mt-4 p-3 bg-indigo-50 dark:bg-indigo-900/15 rounded-lg flex items-start gap-2">
                                        <PiInfoDuotone className="text-indigo-500 text-lg shrink-0 mt-0.5" />
                                        <p className="text-xs text-indigo-700 dark:text-indigo-300">
                                            {course.historicalInsight}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default SuccessPredictor
