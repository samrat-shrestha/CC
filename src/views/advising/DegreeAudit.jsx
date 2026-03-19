import { useState } from 'react'
import { Card, Button, Tag } from '@/components/ui'
import {
    PiPathDuotone,
    PiGraduationCapDuotone,
    PiClockDuotone,
    PiBooksDuotone,
    PiWarningDuotone,
    PiCaretDownBold,
    PiArrowRightBold,
} from 'react-icons/pi'
import {
    studentProfile,
    whatIfScenarios,
    availableMajors,
} from '@/views/advising/data/advisingData'

const DegreeAudit = () => {
    const [selectedMajor, setSelectedMajor] = useState('')
    const [activeScenario, setActiveScenario] = useState(null)

    const handleSimulate = () => {
        const scenario = whatIfScenarios.find(
            (s) => s.targetMajor === selectedMajor,
        )
        setActiveScenario(scenario || whatIfScenarios[0])
    }

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Degree Audit Pathing
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Simulate what-if scenarios to find the most efficient path
                    to graduation after switching majors.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                {/* Left – Student Info & Controls */}
                <div className="xl:col-span-4 space-y-4">
                    {/* Student Profile */}
                    <Card>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <PiGraduationCapDuotone className="text-indigo-500" />
                            Student Profile
                        </h6>
                        <div className="space-y-2.5">
                            {[
                                ['Name', studentProfile.name],
                                ['Student ID', studentProfile.studentId],
                                ['Current Major', studentProfile.currentMajor],
                                ['Classification', studentProfile.classification],
                                ['Credits Completed', studentProfile.creditsCompleted],
                                ['GPA', studentProfile.gpa],
                                ['Expected Graduation', studentProfile.expectedGrad],
                            ].map(([label, value]) => (
                                <div
                                    key={label}
                                    className="flex justify-between text-sm"
                                >
                                    <span className="text-gray-500 dark:text-gray-400">
                                        {label}
                                    </span>
                                    <span className="font-medium text-gray-900 dark:text-white">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* What-If Simulator */}
                    <Card>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                            What-If Simulator
                        </h6>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                            Select a target major to see how it affects your path to graduation.
                        </p>
                        <select
                            value={selectedMajor}
                            onChange={(e) => setSelectedMajor(e.target.value)}
                            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5 text-sm text-gray-900 dark:text-white mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="">Choose a major...</option>
                            {availableMajors.map((m) => (
                                <option key={m} value={m}>
                                    {m}
                                </option>
                            ))}
                        </select>
                        <Button
                            variant="solid"
                            block
                            disabled={!selectedMajor}
                            onClick={handleSimulate}
                            icon={<PiPathDuotone />}
                        >
                            Simulate Switch
                        </Button>
                    </Card>
                </div>

                {/* Right – Results */}
                <div className="xl:col-span-8">
                    {!activeScenario ? (
                        <Card className="flex items-center justify-center py-16">
                            <div className="text-center">
                                <PiPathDuotone className="text-5xl text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                                <p className="text-gray-500 dark:text-gray-400">
                                    Select a target major and click "Simulate Switch" to see your optimal path.
                                </p>
                            </div>
                        </Card>
                    ) : (
                        <div className="space-y-4">
                            {/* Summary Cards */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                {[
                                    {
                                        label: 'Transferable Credits',
                                        value: activeScenario.creditsTransferable,
                                        sub: `of ${activeScenario.totalCreditsNeeded}`,
                                        color: 'text-emerald-600',
                                    },
                                    {
                                        label: 'Remaining Credits',
                                        value: activeScenario.remainingCredits,
                                        sub: 'to complete',
                                        color: 'text-indigo-600',
                                    },
                                    {
                                        label: 'Fastest Graduation',
                                        value: activeScenario.fastestGrad,
                                        sub: `delayed ${activeScenario.delayedBy}`,
                                        color: 'text-amber-600',
                                    },
                                    {
                                        label: 'Semesters Remaining',
                                        value: activeScenario.additionalSemesters,
                                        sub: 'semesters',
                                        color: 'text-blue-600',
                                    },
                                ].map((stat) => (
                                    <Card key={stat.label}>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                            {stat.label}
                                        </p>
                                        <p className={`text-xl font-bold ${stat.color}`}>
                                            {stat.value}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {stat.sub}
                                        </p>
                                    </Card>
                                ))}
                            </div>

                            {/* Prerequisite Gaps */}
                            {activeScenario.prerequisiteGaps.length > 0 && (
                                <Card>
                                    <h6 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                        <PiWarningDuotone className="text-amber-500" />
                                        Prerequisite Gaps ({activeScenario.prerequisiteGaps.length})
                                    </h6>
                                    <div className="space-y-2">
                                        {activeScenario.prerequisiteGaps.map(
                                            (gap, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center justify-between p-2.5 bg-amber-50 dark:bg-amber-900/10 rounded-lg"
                                                >
                                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                        {gap.course}
                                                    </span>
                                                    <div className="flex items-center gap-2">
                                                        <Tag className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                                            {gap.credits} cr
                                                        </Tag>
                                                        <Tag className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                                            {gap.semester}
                                                        </Tag>
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </Card>
                            )}

                            {/* Suggested Path */}
                            <Card>
                                <h6 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <PiBooksDuotone className="text-indigo-500" />
                                    Suggested Course Path to {activeScenario.targetMajor}
                                </h6>
                                <div className="space-y-4">
                                    {activeScenario.suggestedPath.map(
                                        (sem, i) => (
                                            <div key={i}>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                                        {sem.semester}
                                                    </span>
                                                    <Tag className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                                        {sem.totalCredits} credits
                                                    </Tag>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                    {sem.courses.map(
                                                        (course, j) => (
                                                            <div
                                                                key={j}
                                                                className="flex items-center justify-between p-2.5 bg-gray-50 dark:bg-gray-800 rounded-lg"
                                                            >
                                                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                                                    {course.name}
                                                                </span>
                                                                <span className="text-xs text-gray-400">
                                                                    {course.credits} cr
                                                                </span>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                                {i < activeScenario.suggestedPath.length - 1 && (
                                                    <div className="flex justify-center my-2">
                                                        <PiArrowRightBold className="text-gray-300 rotate-90" />
                                                    </div>
                                                )}
                                            </div>
                                        ),
                                    )}
                                </div>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DegreeAudit
