import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Global } from '@emotion/react';
import { global } from './styles/global';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0, // 자동으로 기본 요청을 3번 더 날리게 되어있는데 0으로 세팅
            
        }
    }
});
const root = document.getElementById('root');

createRoot(root).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Global styles={global} />
            <App />
        </BrowserRouter>
    </QueryClientProvider>
)

// main.jsx는 App 컴포넌트를 최종 사용자 화면에 렌더링하기 전에, 앱이 원활하게 작동하는 데 필수적인 세 가지 핵심 환경을 준비하는 역할을 합니다.

// TanStack Query: <QueryClientProvider>를 통한 서버 상태 관리.

// React Router: <BrowserRouter>를 통한 클라이언트 측 라우팅.

// Emotion: <Global>을 통한 전역 CSS 스타일 적용.
