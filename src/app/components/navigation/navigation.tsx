'use client';

import React, { useEffect, useState } from 'react';
import NavBar from './navbar';
import { useShortcutMap } from '../../useShortcut';

export interface NavigationKey {
    id: string;
    displayName: string;
    iconClass: string;
}

const Navigation = ({
    children,
    keys,
    defaultKeyId,
    onChange
}: {
    keys: NavigationKey[];
    children: React.ReactNode;
    defaultKeyId: string;
    onChange?(key: NavigationKey): any;
}) => {
    const [activeKeyId, setActiveKeyId] = useState<string>(defaultKeyId);

    const handleShortcuts = (key: string) => {
        setActiveKeyId(keys[Number(key) - 1].id);
    };

    useShortcutMap(['1', '2', '3', '4'], handleShortcuts);

    useEffect(
        () =>
            onChange &&
            onChange(keys.find(key => key.id === activeKeyId) as NavigationKey),
        [activeKeyId, onChange, keys]
    );

    useEffect(() => {
        setActiveKeyId(defaultKeyId);
    }, [defaultKeyId]);

    return (
        <>
            <NavBar
                keys={keys}
                onChange={key => setActiveKeyId(key.id)}
                activeKeyId={activeKeyId}></NavBar>

            {(React.Children.toArray(children) as React.ReactElement[]).find(
                child => {
                    return child.props.keyId === `${activeKeyId}`;
                }
            )}
        </>
    );
};

export default Navigation;
