import { useState } from 'react'
import { Card, Button, Tag, Progress } from '@/components/ui'
import {
    PiMicrophoneStageDuotone,
    PiUploadSimpleDuotone,
    PiPlayDuotone,
    PiCheckCircleDuotone,
    PiWarningDuotone,
    PiClockDuotone,
    PiUserDuotone,
} from 'react-icons/pi'
import { pitchAnalysisData } from '@/views/innovation/data/innovationData'

const scoreColor = (score) => {
    if (score >= 85) return '#10b981'
    if (score >= 70) return '#6366f1'
    if (score >= 55) return '#f59e0b'
    return '#ef4444'
}

const ScoreRing = ({ score, size = 56, strokeWidth = 5, label }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius

    return (
        <div className="flex flex-col items-center">
            <div className="relative" style={{ width: size, height: size }}>
                <svg
                    viewBox={`0 0 ${size} ${size}`}
                    className="w-full h-full -rotate-90"
                >
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        className="text-gray-100 dark:text-gray-700"
                    />
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={scoreColor(score)}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={`${(score / 100) * circumference} ${circumference}`}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {score}
                    </span>
                </div>
            </div>
            {label && (
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
                    {label}
                </span>
            )}
        </div>
    )
}

const SentimentAnalysis = () => {
    const [selectedPitch, setSelectedPitch] = useState(null)

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Sentiment Analysis for Pitching
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Analyze elevator pitches for tone, clarity, and persuasive
                    impact with actionable feedback.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                {/* Left – Upload & Pitch List */}
                <div className="xl:col-span-4 space-y-4">
                    {/* Upload */}
                    <Card>
                        <div className="border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-xl p-6 text-center">
                            <PiUploadSimpleDuotone className="text-4xl text-gray-400 mx-auto mb-3" />
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                                Upload Pitch Recording
                            </p>
                            <p className="text-xs text-gray-400">
                                Video (MP4, MOV) or Audio (MP3, WAV)
                            </p>
                            <Button
                                size="sm"
                                variant="solid"
                                className="mt-3"
                            >
                                Choose File
                            </Button>
                        </div>
                    </Card>

                    {/* Pitch List */}
                    <Card>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Analyzed Pitches
                        </h6>
                        <div className="space-y-3">
                            {pitchAnalysisData.map((pitch) => (
                                <div
                                    key={pitch.id}
                                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-150 ${
                                        selectedPitch?.id === pitch.id
                                            ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                                            : 'border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
                                    }`}
                                    onClick={() => setSelectedPitch(pitch)}
                                >
                                    <div className="flex items-start gap-3">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-semibold text-sm"
                                            style={{
                                                backgroundColor: scoreColor(
                                                    pitch.overallScore,
                                                ),
                                            }}
                                        >
                                            {pitch.overallScore}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                {pitch.pitchTitle}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                                                <PiUserDuotone />
                                                <span>
                                                    {pitch.studentName}
                                                </span>
                                                <span>·</span>
                                                <PiClockDuotone />
                                                <span>{pitch.duration}</span>
                                            </div>
                                            <span className="text-xs text-gray-400">
                                                {pitch.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Right – Analysis Results */}
                <div className="xl:col-span-8">
                    {!selectedPitch ? (
                        <Card className="flex items-center justify-center min-h-[400px]">
                            <div className="text-center text-gray-400">
                                <PiMicrophoneStageDuotone className="text-5xl mx-auto mb-3 opacity-40" />
                                <p className="font-medium">
                                    Select a pitch to view its analysis
                                </p>
                                <p className="text-sm mt-1">
                                    AI-generated feedback on tone, clarity, and
                                    persuasive impact
                                </p>
                            </div>
                        </Card>
                    ) : (
                        <div className="space-y-4">
                            {/* Score Overview */}
                            <Card>
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h5 className="font-semibold text-gray-900 dark:text-white">
                                            {selectedPitch.pitchTitle}
                                        </h5>
                                        <p className="text-sm text-gray-500">
                                            {selectedPitch.studentName} ·{' '}
                                            {selectedPitch.duration} ·{' '}
                                            {selectedPitch.date}
                                        </p>
                                    </div>
                                    <div
                                        className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-white font-bold text-xl"
                                        style={{
                                            backgroundColor: scoreColor(
                                                selectedPitch.overallScore,
                                            ),
                                        }}
                                    >
                                        {selectedPitch.overallScore}
                                        <span className="text-[10px] font-normal opacity-80">
                                            overall
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-4 flex-wrap">
                                    {Object.entries(selectedPitch.scores).map(
                                        ([key, value]) => (
                                            <ScoreRing
                                                key={key}
                                                score={value}
                                                label={
                                                    key.charAt(0).toUpperCase() +
                                                    key.slice(1)
                                                }
                                            />
                                        ),
                                    )}
                                </div>
                            </Card>

                            {/* Feedback Items */}
                            <Card>
                                <h6 className="font-semibold text-gray-900 dark:text-white mb-4">
                                    Detailed Feedback
                                </h6>
                                <div className="space-y-3">
                                    {selectedPitch.feedback.map((fb, i) => (
                                        <div
                                            key={i}
                                            className={`flex items-start gap-3 p-3 rounded-lg ${
                                                fb.type === 'strength'
                                                    ? 'bg-emerald-50 dark:bg-emerald-900/15'
                                                    : 'bg-amber-50 dark:bg-amber-900/15'
                                            }`}
                                        >
                                            {fb.type === 'strength' ? (
                                                <PiCheckCircleDuotone className="text-lg text-emerald-500 mt-0.5 shrink-0" />
                                            ) : (
                                                <PiWarningDuotone className="text-lg text-amber-500 mt-0.5 shrink-0" />
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-gray-800 dark:text-gray-200">
                                                    {fb.text}
                                                </p>
                                                <span className="text-xs text-gray-400 mt-1 block">
                                                    at {fb.timestamp}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            {/* Transcript */}
                            <Card>
                                <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                                    Transcript
                                </h6>
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                    {selectedPitch.transcript}
                                </div>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SentimentAnalysis
