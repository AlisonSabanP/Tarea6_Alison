import { create } from 'zustand';

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;

    login: (token: string) => void;
    logout: () => void;
    checkAuth: () => void;
    isTokenExpired: (token: string) => boolean;
}

const useAuthStore = create<AuthState>((set, get) => ({
    isAuthenticated: false,
    token: null,

    login: (token: string) => {
        localStorage.setItem('authToken', token);
        set({ isAuthenticated: true, token });
    },

    logout: () => {
        localStorage.removeItem('authToken');
        set({ isAuthenticated: false, token: null });
    },

    isTokenExpired: (token: string): boolean => {
        try {
            const payloadBase64 = token.split('.')[1];
            const payload = JSON.parse(atob(payloadBase64));
            const expirationTime = payload.exp * 1000;
            return Date.now() > expirationTime;
        } catch (error) {
            console.warn('Token inválido o mal formado:', error);
            return true;
        }
    },

    checkAuth: () => {
        const token = localStorage.getItem('authToken');
        if (token && !get().isTokenExpired(token)) {
            set({ isAuthenticated: true, token });
        } else {
            localStorage.removeItem('authToken');
            set({ isAuthenticated: false, token: null });
        }
    },
}));

export default useAuthStore;