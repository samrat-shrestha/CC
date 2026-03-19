import { useState } from 'react'
import { Card, Button, Tag } from '@/components/ui'
import {
    PiPaperPlaneRightDuotone,
    PiBookOpenTextDuotone,
    PiShieldCheckDuotone,
    PiUserDuotone,
    PiRobotDuotone,
    PiInfoDuotone,
} from 'react-icons/pi'
import {
    policySources,
    sampleConversation,
    suggestedQuestions,
} from '@/views/oss/data/ossData'

const PolicyAdvisor = () => {
    const [messages, setMessages] = useState(sampleConversation)
    const [inputValue, setInputValue] = useState('')

    const handleSend = () => {
        if (!inputValue.trim()) return
        setMessages([...messages, { role: 'user', text: inputValue }])
        setInputValue('')
    }

    const handleSuggestedQuestion = (q) => {
        setMessages([...messages, { role: 'user', text: q }])
    }

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Policy Advisor
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    AI-powered immigration policy guidance grounded in official
                    USCIS, ISSS, and federal regulation sources.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                {/* Left – Sources & Info */}
                <div className="xl:col-span-3 space-y-4">
                    {/* Sources */}
                    <Card>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <PiBookOpenTextDuotone className="text-indigo-500" />
                            Knowledge Sources
                        </h6>
                        <div className="space-y-2">
                            {policySources.map((source) => (
                                <div
                                    key={source.id}
                                    className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm"
                                >
                                    <span className="text-lg">{source.icon}</span>
                                    <span className="text-gray-700 dark:text-gray-300">
                                        {source.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Disclaimer */}
                    <Card>
                        <div className="flex items-start gap-2 text-xs text-amber-700 dark:text-amber-400">
                            <PiInfoDuotone className="text-lg shrink-0 mt-0.5" />
                            <p>
                                This tool retrieves information from official
                                sources only. It does <strong>not</strong>{' '}
                                constitute legal advice. Always confirm critical
                                actions with your ISSS advisor.
                            </p>
                        </div>
                    </Card>

                    {/* Suggested Questions */}
                    <Card>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Suggested Questions
                        </h6>
                        <div className="space-y-2">
                            {suggestedQuestions.map((q, i) => (
                                <button
                                    key={i}
                                    className="w-full text-left text-sm p-2 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors text-gray-600 dark:text-gray-400"
                                    onClick={() => handleSuggestedQuestion(q)}
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Right – Chat Area */}
                <div className="xl:col-span-9 flex flex-col h-[calc(100vh-13rem)]">
                    <Card className="flex-1 flex flex-col overflow-hidden" bodyClass="flex flex-col flex-1 p-0 overflow-hidden">
                        {/* Chat header */}
                        <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100 dark:border-gray-700">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                <PiShieldCheckDuotone className="text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div>
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                    ISSS Policy Assistant
                                </span>
                                <span className="text-xs text-gray-500 ml-2">
                                    RAG-powered · Sources only
                                </span>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-4">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}
                                >
                                    {msg.role === 'assistant' && (
                                        <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 mt-1">
                                            <PiRobotDuotone className="text-sm text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[75%] ${
                                            msg.role === 'user'
                                                ? 'bg-indigo-600 text-white rounded-2xl rounded-br-md px-4 py-2.5'
                                                : 'bg-gray-50 dark:bg-gray-800 rounded-2xl rounded-bl-md px-4 py-3'
                                        }`}
                                    >
                                        {msg.role === 'user' ? (
                                            <p className="text-sm">{msg.text}</p>
                                        ) : (
                                            <div>
                                                <div className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line prose-sm">
                                                    {msg.text}
                                                </div>
                                                {msg.sources && (
                                                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                                                        <p className="text-xs font-medium text-gray-500 mb-2">
                                                            Sources:
                                                        </p>
                                                        <div className="space-y-1.5">
                                                            {msg.sources.map(
                                                                (src, j) => (
                                                                    <div
                                                                        key={j}
                                                                        className="flex items-center justify-between gap-2 text-xs"
                                                                    >
                                                                        <span className="text-gray-600 dark:text-gray-400 truncate">
                                                                            {src.title}
                                                                        </span>
                                                                        <Tag className="text-[10px] shrink-0 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                                                                            {Math.round(src.relevance * 100)}% match
                                                                        </Tag>
                                                                    </div>
                                                                ),
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    {msg.role === 'user' && (
                                        <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0 mt-1">
                                            <PiUserDuotone className="text-sm text-gray-600 dark:text-gray-400" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="px-5 py-3 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) =>
                                        setInputValue(e.target.value)
                                    }
                                    onKeyDown={(e) =>
                                        e.key === 'Enter' && handleSend()
                                    }
                                    placeholder="Ask about immigration policies..."
                                    className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <Button
                                    variant="solid"
                                    size="sm"
                                    onClick={handleSend}
                                    icon={<PiPaperPlaneRightDuotone />}
                                >
                                    Send
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PolicyAdvisor
