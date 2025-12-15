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
