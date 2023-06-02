'use client';

import React, { useState } from 'react';
import NavBar from './navbar';
import NavPanel from './navpanel';

export interface NavigationKey {
    id: string;
    displayName: string;
    iconClass: string;
}

const Navigation = ({
    children,
    keys
}: {
    keys: NavigationKey[];
    children: React.ReactNode;
}) => {
    const [activeKeyId, setActiveKeyId] = useState<string>(keys[0].id);

    return (
        <>
            <NavBar
                keys={keys}
                onChange={key => setActiveKeyId(key.id)}
                activeKeyId={activeKeyId}></NavBar>

            {(React.Children.toArray(children) as React.ReactElement[]).find(
                child => {
                    return child.key === `.$${activeKeyId}`;
                }
            )}
        </>
    );
};

export default Navigation;
