import { Card, Tag, Button } from '@/components/ui'
import {
    PiUsersDuotone,
    PiUserCircleDuotone,
    PiBooksDuotone,
    PiClockDuotone,
    PiStarDuotone,
    PiHandshakeDuotone,
} from 'react-icons/pi'
import { currentStudent, peerMatches } from '@/views/advising/data/advisingData'

const PeerMatching = () => {
    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Peer-Matching Logic
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    AI-powered study group recommendations based on shared
                    courses, learning styles, and availability.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                {/* Left – Your Profile */}
                <div className="xl:col-span-4 space-y-4">
                    <Card>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <PiUserCircleDuotone className="text-indigo-500" />
                            Your Profile
                        </h6>
                        <div className="space-y-3">
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                    Name
                                </p>
                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                    {currentStudent.name}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                    Current Courses
                                </p>
                                <div className="space-y-1">
                                    {currentStudent.courses.map((c, i) => (
                                        <div
                                            key={i}
                                            className="text-sm bg-gray-50 dark:bg-gray-800 px-2.5 py-1.5 rounded-lg text-gray-700 dark:text-gray-300"
                                        >
                                            {c}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                        Learning Style
                                    </p>
                                    <Tag className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                        {currentStudent.learningStyle}
                                    </Tag>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                        Performance
                                    </p>
                                    <Tag className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                                        {currentStudent.performanceLevel}
                                    </Tag>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                    Availability
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {currentStudent.availability.map(
                                        (slot, i) => (
                                            <Tag
                                                key={i}
                                                className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                            >
                                                {slot}
                                            </Tag>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Right – Matches */}
                <div className="xl:col-span-8 space-y-3">
                    <div className="flex items-center justify-between mb-1">
                        <h6 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            <PiUsersDuotone className="text-indigo-500" />
                            Recommended Study Partners ({peerMatches.length})
                        </h6>
                    </div>

                    {peerMatches.map((peer) => (
                        <Card key={peer.id}>
                            <div className="flex items-start gap-4">
                                {/* Match Score */}
                                <div className="w-14 h-14 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex flex-col items-center justify-center shrink-0">
                                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                                        {peer.matchScore}
                                    </span>
                                    <span className="text-[10px] text-indigo-400">
                                        match
                                    </span>
                                </div>

                                <div className="flex-1 min-w-0">
                                    {/* Name & Tags */}
                                    <div className="flex items-center justify-between mb-2">
                                        <h6 className="font-semibold text-gray-900 dark:text-white text-sm">
                                            {peer.name}
                                        </h6>
                                        <div className="flex items-center gap-2">
                                            <Tag className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                                {peer.learningStyle}
                                            </Tag>
                                            <Tag className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                                                {peer.performanceLevel}
                                            </Tag>
                                        </div>
                                    </div>

                                    {/* Shared Courses */}
                                    <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                                        <PiBooksDuotone className="text-gray-400 text-sm shrink-0" />
                                        {peer.sharedCourses.map((c, i) => (
                                            <Tag
                                                key={i}
                                                className="text-[10px] bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                            >
                                                {c}
                                            </Tag>
                                        ))}
                                    </div>

                                    {/* Availability */}
                                    <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                                        <PiClockDuotone className="text-gray-400 text-sm shrink-0" />
                                        {peer.availability.map((slot, i) => {
                                            const isCommon =
                                                currentStudent.availability.includes(
                                                    slot,
                                                )
                                            return (
                                                <Tag
                                                    key={i}
                                                    className={`text-[10px] ${
                                                        isCommon
                                                            ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                                                            : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                                                    }`}
                                                >
                                                    {slot}
                                                    {isCommon && ' ✓'}
                                                </Tag>
                                            )
                                        })}
                                    </div>

                                    {/* Strengths */}
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                        <PiStarDuotone className="text-gray-400 text-sm shrink-0" />
                                        {peer.strengths.map((s, i) => (
                                            <span
                                                key={i}
                                                className="text-xs text-gray-600 dark:text-gray-400"
                                            >
                                                {s}
                                                {i < peer.strengths.length - 1 &&
                                                    ' · '}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="shrink-0">
                                    <Button
                                        size="sm"
                                        variant="solid"
                                        icon={<PiHandshakeDuotone />}
                                    >
                                        Connect
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PeerMatching
