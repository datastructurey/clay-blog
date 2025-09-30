import React, {type ReactNode} from 'react';
import Layout from '@theme-original/Admonition/Layout';
import type LayoutType from '@theme/Admonition/Layout';
import type {WrapperProps} from '@docusaurus/types';
import {SpeedInsights} from '@vercel/speed-insights/react';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
    return (
        <>
            <Layout {...props} />
            <SpeedInsights></SpeedInsights>
        </>
    );
}
