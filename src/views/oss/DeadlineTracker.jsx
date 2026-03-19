import { useState } from 'react'
import { Card, Tag, Button } from '@/components/ui'
import {
    PiWarningDiamondDuotone,
    PiWarningDuotone,
    PiInfoDuotone,
    PiCalendarCheckDuotone,
    PiUserDuotone,
    PiAirplaneTiltDuotone,
    PiCertificateDuotone,
    PiCaretDownBold,
} from 'react-icons/pi'
import { studentProfiles, deadlineAlerts } from '@/views/oss/data/ossData'

const alertStyles = {
    critical: {
        bg: 'bg-red-50 dark:bg-red-900/15',
        border: 'border-red-200 dark:border-red-800',
        icon: PiWarningDiamondDuotone,
        iconColor: 'text-red-500',
        tag: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
    },
    warning: {
        bg: 'bg-amber-50 dark:bg-amber-900/15',
        border: 'border-amber-200 dark:border-amber-800',
        icon: PiWarningDuotone,
        iconColor: 'text-amber-500',
        tag: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400',
    },
    info: {
        bg: 'bg-blue-50 dark:bg-blue-900/15',
        border: 'border-blue-200 dark:border-blue-800',
        icon: PiInfoDuotone,
        iconColor: 'text-blue-500',
        tag: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    },
}

const categoryIcons = {
    OPT: PiCertificateDuotone,
    CPT: PiCertificateDuotone,
    'STEM OPT': PiCertificateDuotone,
    Travel: PiAirplaneTiltDuotone,
    'J-1 Compliance': PiCalendarCheckDuotone,
}

const DeadlineTracker = () => {
    const [selectedStudentId, setSelectedStudentId] = useState(
        studentProfiles[0]?.id,
    )
    const [studentDropdownOpen, setStudentDropdownOpen] = useState(false)

    const selectedStudent = studentProfiles.find(
        (s) => s.id === selectedStudentId,
    )
    const alerts = deadlineAlerts[selectedStudentId] || []

    const sortedAlerts = [...alerts].sort(
        (a, b) => a.daysRemaining - b.daysRemaining,
    )

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Deadline Tracker & Alert System
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Predictive AI analyzes visa documents to proactively alert
                    about filing windows and deadlines.
                </p>
            </div>

            {/* Student Selector */}
            <div className="mb-6 relative">
                <button
                    className="w-full flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors text-left"
                    onClick={() =>
                        setStudentDropdownOpen(!studentDropdownOpen)
                    }
                >
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                        <PiUserDuotone className="text-xl text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Tracking Deadlines For
                        </p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                            {selectedStudent?.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            {selectedStudent?.visaType} ·{' '}
                            {selectedStudent?.program} · SEVIS:{' '}
                            {selectedStudent?.sevisId}
                        </p>
                    </div>
                    <PiCaretDownBold
                        className={`text-gray-400 transition-transform ${studentDropdownOpen ? 'rotate-180' : ''}`}
                    />
                </button>

                {studentDropdownOpen && (
                    <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
                        {studentProfiles.map((student) => (
                            <button
                                key={student.id}
                                className={`w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                                    student.id === selectedStudentId
                                        ? 'bg-indigo-50 dark:bg-indigo-900/20'
                                        : ''
                                }`}
                                onClick={() => {
                                    setSelectedStudentId(student.id)
                                    setStudentDropdownOpen(false)
                                }}
                            >
                                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center shrink-0">
                                    <PiUserDuotone className="text-gray-500 dark:text-gray-400" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                        {student.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {student.visaType} · {student.program}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                {/* Left – Student Info */}
                <div className="xl:col-span-4 space-y-4">
                    <Card>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Student Details
                        </h6>
                        <div className="space-y-3">
                            {[
                                ['Visa Type', selectedStudent?.visaType],
                                ['Program', selectedStudent?.program],
                                ['SEVIS ID', selectedStudent?.sevisId],
                                [
                                    'Program Start',
                                    selectedStudent?.i20StartDate ||
                                        selectedStudent?.ds2019StartDate,
                                ],
                                [
                                    'Program End',
                                    selectedStudent?.i20EndDate ||
                                        selectedStudent?.ds2019EndDate,
                                ],
                                [
                                    'OPT Eligible',
                                    selectedStudent?.optEligible
                                        ? 'Yes'
                                        : 'No',
                                ],
                                [
                                    'STEM OPT Eligible',
                                    selectedStudent?.stemEligible
                                        ? 'Yes'
                                        : 'No',
                                ],
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

                    {/* Summary */}
                    <Card>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Alert Summary
                        </h6>
                        <div className="grid grid-cols-3 gap-3 text-center">
                            {[
                                {
                                    label: 'Critical',
                                    count: alerts.filter(
                                        (a) => a.type === 'critical',
                                    ).length,
                                    color: 'text-red-600',
                                },
                                {
                                    label: 'Warning',
                                    count: alerts.filter(
                                        (a) => a.type === 'warning',
                                    ).length,
                                    color: 'text-amber-600',
                                },
                                {
                                    label: 'Info',
                                    count: alerts.filter(
                                        (a) => a.type === 'info',
                                    ).length,
                                    color: 'text-blue-600',
                                },
                            ].map((item) => (
                                <div key={item.label}>
                                    <div
                                        className={`text-2xl font-bold ${item.color}`}
                                    >
                                        {item.count}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Right – Alerts Timeline */}
                <div className="xl:col-span-8 space-y-3">
                    {sortedAlerts.map((alert) => {
                        const style = alertStyles[alert.type]
                        const Icon = style.icon
                        const CatIcon =
                            categoryIcons[alert.category] ||
                            PiCalendarCheckDuotone

                        return (
                            <Card
                                key={alert.id}
                                className={`border ${style.border} ${style.bg}`}
                            >
                                <div className="flex items-start gap-3">
                                    <Icon
                                        className={`text-xl ${style.iconColor} mt-0.5 shrink-0`}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-3 mb-1">
                                            <h6 className="font-semibold text-gray-900 dark:text-white text-sm">
                                                {alert.title}
                                            </h6>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <Tag
                                                    className={`text-xs ${style.tag}`}
                                                >
                                                    {alert.daysRemaining <= 0
                                                        ? 'Overdue / Open'
                                                        : `${alert.daysRemaining} days`}
                                                </Tag>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                            {alert.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <CatIcon />
                                                <span>{alert.category}</span>
                                                <span>·</span>
                                                <span>
                                                    Due: {alert.dueDate}
                                                </span>
                                            </div>
                                            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                                                {alert.action}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DeadlineTracker
