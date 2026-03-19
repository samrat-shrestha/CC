import { useState } from 'react'
import { Card, Button, Tag } from '@/components/ui'
import {
    PiScanDuotone,
    PiUploadSimpleDuotone,
    PiBookBookmarkDuotone,
    PiIdentificationBadgeDuotone,
    PiCheckCircleDuotone,
    PiPencilSimpleDuotone,
    PiFileTextDuotone,
} from 'react-icons/pi'
import {
    sampleExtractedData,
    universityForms,
} from '@/views/oss/data/ossData'

const FormPrefiller = () => {
    const [hasScanned, setHasScanned] = useState(false)
    const [selectedForm, setSelectedForm] = useState(null)
    const [scanType, setScanType] = useState(null)

    const extracted = sampleExtractedData

    const handleScan = (type) => {
        setScanType(type)
        setHasScanned(true)
    }

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Form Pre-filler (OCR)
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Scan your passport or visa to automatically populate
                    university immigration forms — reducing manual entry errors.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                {/* Left – Scan & Extracted Data */}
                <div className="xl:col-span-5 space-y-4">
                    {/* Scan Area */}
                    {!hasScanned ? (
                        <Card>
                            <h6 className="font-semibold text-gray-900 dark:text-white mb-4">
                                Scan Document
                            </h6>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    className="flex flex-col items-center gap-3 p-6 border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-all"
                                    onClick={() => handleScan('passport')}
                                >
                                    <PiBookBookmarkDuotone className="text-4xl text-indigo-500" />
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Scan Passport
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        Bio data page
                                    </span>
                                </button>
                                <button
                                    className="flex flex-col items-center gap-3 p-6 border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-all"
                                    onClick={() => handleScan('visa')}
                                >
                                    <PiIdentificationBadgeDuotone className="text-4xl text-indigo-500" />
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Scan Visa
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        U.S. visa page
                                    </span>
                                </button>
                            </div>
                        </Card>
                    ) : (
                        <Card>
                            <div className="flex items-center justify-between mb-4">
                                <h6 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                    <PiCheckCircleDuotone className="text-emerald-500" />
                                    Extracted Data
                                </h6>
                                <Button
                                    size="xs"
                                    variant="default"
                                    onClick={() => {
                                        setHasScanned(false)
                                        setScanType(null)
                                    }}
                                >
                                    Scan Again
                                </Button>
                            </div>

                            {/* Passport Data */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <PiBookBookmarkDuotone className="text-indigo-500" />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Passport
                                    </span>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 space-y-2">
                                    {Object.entries(extracted.passport).map(
                                        ([key, value]) => (
                                            <div
                                                key={key}
                                                className="flex justify-between text-xs"
                                            >
                                                <span className="text-gray-500 capitalize">
                                                    {key.replace(
                                                        /([A-Z])/g,
                                                        ' $1',
                                                    )}
                                                </span>
                                                <span className="font-medium text-gray-900 dark:text-white font-mono">
                                                    {value}
                                                </span>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>

                            {/* Visa Data */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <PiIdentificationBadgeDuotone className="text-indigo-500" />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Visa
                                    </span>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 space-y-2">
                                    {Object.entries(extracted.visa).map(
                                        ([key, value]) => (
                                            <div
                                                key={key}
                                                className="flex justify-between text-xs"
                                            >
                                                <span className="text-gray-500 capitalize">
                                                    {key.replace(
                                                        /([A-Z])/g,
                                                        ' $1',
                                                    )}
                                                </span>
                                                <span className="font-medium text-gray-900 dark:text-white font-mono">
                                                    {value}
                                                </span>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </Card>
                    )}
                </div>

                {/* Right – Form Selection & Preview */}
                <div className="xl:col-span-7 space-y-4">
                    {!selectedForm ? (
                        <>
                            <h6 className="font-semibold text-gray-900 dark:text-white">
                                Select a Form to Pre-fill
                            </h6>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {universityForms.map((form) => (
                                    <Card
                                        key={form.id}
                                        className="cursor-pointer hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600"
                                        onClick={() =>
                                            setSelectedForm(form)
                                        }
                                    >
                                        <div className="flex items-start gap-3">
                                            <PiFileTextDuotone className="text-2xl text-indigo-500 mt-0.5 shrink-0" />
                                            <div>
                                                <h6 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                                    {form.name}
                                                </h6>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                                                    {form.description}
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <Tag className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                                        {form.fields.length} fields
                                                    </Tag>
                                                    {hasScanned && (
                                                        <Tag className="text-[10px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                                                            {form.autoFillable} auto-fillable
                                                        </Tag>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </>
                    ) : (
                        <Card>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h6 className="font-semibold text-gray-900 dark:text-white">
                                        {selectedForm.name}
                                    </h6>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        {selectedForm.description}
                                    </p>
                                </div>
                                <Button
                                    size="sm"
                                    variant="default"
                                    onClick={() => setSelectedForm(null)}
                                >
                                    Back
                                </Button>
                            </div>

                            <div className="space-y-3">
                                {selectedForm.fields.map((field, i) => {
                                    // Check if field can be auto-filled
                                    const fieldLower = field.toLowerCase()
                                    let autoValue = null

                                    if (hasScanned) {
                                        if (fieldLower.includes('full name') || fieldLower === 'full name')
                                            autoValue = `${extracted.passport.givenNames} ${extracted.passport.surname}`
                                        else if (fieldLower.includes('date of birth'))
                                            autoValue = extracted.passport.dateOfBirth
                                        else if (fieldLower.includes('passport'))
                                            autoValue = extracted.passport.passportNumber
                                        else if (fieldLower.includes('sevis'))
                                            autoValue = 'N0012345678'
                                        else if (fieldLower.includes('visa type'))
                                            autoValue = extracted.visa.visaType
                                        else if (fieldLower.includes('program end'))
                                            autoValue = '2026-05-15'
                                    }

                                    return (
                                        <div key={i}>
                                            <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 flex items-center gap-1.5">
                                                {field}
                                                {autoValue && (
                                                    <Tag className="text-[9px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 py-0">
                                                        Auto-filled
                                                    </Tag>
                                                )}
                                            </label>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    defaultValue={
                                                        autoValue || ''
                                                    }
                                                    placeholder={`Enter ${field.toLowerCase()}`}
                                                    className={`w-full bg-gray-50 dark:bg-gray-800 border rounded-lg px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                                                        autoValue
                                                            ? 'border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/10'
                                                            : 'border-gray-200 dark:border-gray-700'
                                                    }`}
                                                />
                                                {autoValue && (
                                                    <PiCheckCircleDuotone className="text-lg text-emerald-500 shrink-0" />
                                                )}
                                                {!autoValue && (
                                                    <PiPencilSimpleDuotone className="text-lg text-gray-400 shrink-0" />
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-xs text-gray-500">
                                    {hasScanned
                                        ? `${selectedForm.autoFillable} of ${selectedForm.fields.length} fields auto-filled from scanned documents`
                                        : 'Scan a document to auto-fill fields'}
                                </p>
                                <Button variant="solid">Submit Form</Button>
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FormPrefiller
