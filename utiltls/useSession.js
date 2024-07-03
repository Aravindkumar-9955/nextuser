import { useEffect } from 'react';

export const useSession = () => {
    let timeout = 30 * 1000; // 30 seconds
    let timer;

    const sessionstart = () => {
        clearTimeout(timer);
        timer = setTimeout(logout, timeout);
    }

    const logout = () => {
        window.location.href = '/login';
    }

    useEffect(() => {
        const resetSessionTimeout = () => {
            sessionstart();
        };

        // Initial session start
        sessionstart();

        // Cleanup on unmount or dependency change
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return { sessionstart, timer };
}
