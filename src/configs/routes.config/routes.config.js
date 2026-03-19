import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'

export const publicRoutes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    {
        key: 'innovationInstitute.valueProp',
        path: '/value-proposition',
        component: lazy(
            () => import('@/views/innovation/ValuePropositionGenerator'),
        ),
        authority: [],
    },
    {
        key: 'innovationInstitute.marketIntel',
        path: '/market-intelligence',
        component: lazy(
            () => import('@/views/innovation/MarketIntelligence'),
        ),
        authority: [],
    },
    {
        key: 'innovationInstitute.sentiment',
        path: '/sentiment-analysis',
        component: lazy(
            () => import('@/views/innovation/SentimentAnalysis'),
        ),
        authority: [],
    },
    {
        key: 'ossReviewer.policyRag',
        path: '/policy-advisor',
        component: lazy(
            () => import('@/views/oss/PolicyAdvisor'),
        ),
        authority: [],
    },
    {
        key: 'ossReviewer.deadlineTracker',
        path: '/deadline-tracker',
        component: lazy(
            () => import('@/views/oss/DeadlineTracker'),
        ),
        authority: [],
    },
    {
        key: 'ossReviewer.formPrefiller',
        path: '/form-prefiller',
        component: lazy(
            () => import('@/views/oss/FormPrefiller'),
        ),
        authority: [],
    },
    {
        key: 'library.semanticSearch',
        path: '/semantic-search',
        component: lazy(
            () => import('@/views/library/SemanticSearch'),
        ),
        authority: [],
    },
    {
        key: 'library.citationSynthesis',
        path: '/citation-synthesis',
        component: lazy(
            () => import('@/views/library/CitationSynthesis'),
        ),
        authority: [],
    },
    {
        key: 'library.readingAssistant',
        path: '/reading-assistant',
        component: lazy(
            () => import('@/views/library/ReadingAssistant'),
        ),
        authority: [],
    },
    {
        key: 'ugAdvising.degreeAudit',
        path: '/degree-audit',
        component: lazy(
            () => import('@/views/advising/DegreeAudit'),
        ),
        authority: [],
    },
    {
        key: 'ugAdvising.successPredictor',
        path: '/success-predictor',
        component: lazy(
            () => import('@/views/advising/SuccessPredictor'),
        ),
        authority: [],
    },
    {
        key: 'ugAdvising.peerMatching',
        path: '/peer-matching',
        component: lazy(
            () => import('@/views/advising/PeerMatching'),
        ),
        authority: [],
    },
    {
        key: 'applicantReview.bibliometric',
        path: '/bibliometric-analysis',
        component: lazy(
            () => import('@/views/hiring/BibliometricAnalysis'),
        ),
        authority: [],
    },
    {
        key: 'applicantReview.alignmentScoring',
        path: '/alignment-scoring',
        component: lazy(
            () => import('@/views/hiring/AlignmentScoring'),
        ),
        authority: [],
    },
    {
        key: 'applicantReview.biasMitigation',
        path: '/bias-mitigation',
        component: lazy(
            () => import('@/views/hiring/BiasMitigation'),
        ),
        authority: [],
    },
    {
        key: 'campusReputation.discourseDashboard',
        path: '/discourse-dashboard',
        component: lazy(
            () => import('@/views/social/DiscourseDashboard'),
        ),
        authority: [],
    },
    {
        key: 'campusReputation.sentimentFeed',
        path: '/public-sentiment-feed',
        component: lazy(
            () => import('@/views/social/PublicSentimentFeed'),
        ),
        authority: [],
    },
    {
        key: 'campusReputation.buzzAnalytics',
        path: '/campus-buzz-analytics',
        component: lazy(
            () => import('@/views/social/CampusBuzzAnalytics'),
        ),
        authority: [],
    },
    ...othersRoute,
]
