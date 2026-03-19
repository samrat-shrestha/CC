import { useState } from 'react'
import { Card, Button, Tag } from '@/components/ui'
import {
    PiBookOpenDuotone,
    PiPaperPlaneRightDuotone,
    PiRobotDuotone,
    PiUserDuotone,
    PiListNumbersDuotone,
    PiCaretDownBold,
} from 'react-icons/pi'
import { libraryBooks, readingConversation } from '@/views/library/data/libraryData'

const ReadingAssistant = () => {
    const [selectedBookId, setSelectedBookId] = useState(libraryBooks[0]?.id)
    const [bookDropdownOpen, setBookDropdownOpen] = useState(false)
    const [messages, setMessages] = useState(readingConversation)
    const [inputValue, setInputValue] = useState('')

    const selectedBook = libraryBooks.find((b) => b.id === selectedBookId)

    const handleSend = () => {
        if (!inputValue.trim()) return
        setMessages([...messages, { role: 'user', text: inputValue }])
        setInputValue('')
    }

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Virtual Reading Assistant
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Chat with any book in the library. Ask for summaries,
                    explanations, or deeper analysis of any chapter.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                {/* Left – Book Selector & Chapters */}
                <div className="xl:col-span-3 space-y-4">
                    {/* Book Selector */}
                    <div className="relative">
                        <button
                            className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors text-left"
                            onClick={() => setBookDropdownOpen(!bookDropdownOpen)}
                        >
                            <PiBookOpenDuotone className="text-xl text-indigo-500 shrink-0" />
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                    Reading
                                </p>
                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                    {selectedBook?.title}
                                </p>
                            </div>
                            <PiCaretDownBold
                                className={`text-gray-400 text-xs transition-transform ${bookDropdownOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {bookDropdownOpen && (
                            <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
                                {libraryBooks.map((book) => (
                                    <button
                                        key={book.id}
                                        className={`w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                                            book.id === selectedBookId
                                                ? 'bg-indigo-50 dark:bg-indigo-900/20'
                                                : ''
                                        }`}
                                        onClick={() => {
                                            setSelectedBookId(book.id)
                                            setBookDropdownOpen(false)
                                        }}
                                    >
                                        <PiBookOpenDuotone className="text-gray-400 shrink-0" />
                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                {book.title}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {book.authors} · {book.year}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Chapter List */}
                    <Card>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <PiListNumbersDuotone className="text-indigo-500" />
                            Chapters
                        </h6>
                        <div className="space-y-1.5">
                            {selectedBook?.chapters.map((ch, i) => (
                                <button
                                    key={i}
                                    className="w-full text-left text-sm p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                                    onClick={() => {
                                        const q = `Summarize chapter ${i + 1}: ${ch}`
                                        setMessages([
                                            ...messages,
                                            { role: 'user', text: q },
                                        ])
                                    }}
                                >
                                    <span className="text-xs text-gray-400 mr-2">
                                        {i + 1}.
                                    </span>
                                    {ch}
                                </button>
                            ))}
                        </div>
                    </Card>

                    {/* Quick Actions */}
                    <Card>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Quick Actions
                        </h6>
                        <div className="space-y-1.5">
                            {[
                                'Give me a high-level overview of this book',
                                'What are the key takeaways?',
                                'List the main arguments in this book',
                                'Compare chapters 2 and 3',
                            ].map((q, i) => (
                                <button
                                    key={i}
                                    className="w-full text-left text-sm p-2 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors text-gray-600 dark:text-gray-400"
                                    onClick={() =>
                                        setMessages([
                                            ...messages,
                                            { role: 'user', text: q },
                                        ])
                                    }
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Right – Chat */}
                <div className="xl:col-span-9 flex flex-col h-[calc(100vh-13rem)]">
                    <Card className="flex-1 flex flex-col overflow-hidden" bodyClass="flex flex-col flex-1 p-0 overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100 dark:border-gray-700">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                <PiBookOpenDuotone className="text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div className="min-w-0">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Reading Assistant
                                </span>
                                <span className="text-xs text-gray-500 ml-2 truncate">
                                    {selectedBook?.title}
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
                                        <div className={`text-sm leading-relaxed whitespace-pre-line ${
                                            msg.role === 'user'
                                                ? ''
                                                : 'text-gray-800 dark:text-gray-200'
                                        }`}>
                                            {msg.text}
                                        </div>
                                        {msg.chapter && (
                                            <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                                                <Tag className="text-[10px] bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                                    Chapter {msg.chapter}
                                                </Tag>
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
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) =>
                                        e.key === 'Enter' && handleSend()
                                    }
                                    placeholder="Ask about the book..."
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

export default ReadingAssistant
