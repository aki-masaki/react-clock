import { useEffect } from 'react';

const useShortcut = (
    key: string,
    callback: () => any,
    modifiers?: {
        control?: boolean;
        shift?: boolean;
    }
) => {
    const onKeyDown = (e: KeyboardEvent) => {
        if (
            (modifiers?.control ? e.ctrlKey : true) &&
            (modifiers?.shift ? e.shiftKey : true) &&
            e.key === key
        )
            callback();
    };

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);

        return () => window.removeEventListener('keydown', onKeyDown);
    });
};

const useShortcutMap = (keys: string[], callback: (key: string) => any) => {
    const onKeyDown = (e: KeyboardEvent) =>
        keys.includes(e.key) && callback(e.key);

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);

        return () => window.removeEventListener('keydown', onKeyDown);
    });
};

export { useShortcutMap, useShortcut };
