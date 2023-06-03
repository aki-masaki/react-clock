'use client';

import React, { useState } from 'react';
import NavBar from './navbar';

export interface NavigationKey {
    id: string;
    displayName: string;
    iconClass: string;
}

const Navigation = ({
    children,
    keys,
    defaultKeyId
}: {
    keys: NavigationKey[];
    children: React.ReactNode;
    defaultKeyId: string;
}) => {
    const [activeKeyId, setActiveKeyId] = useState<string>(defaultKeyId);

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
