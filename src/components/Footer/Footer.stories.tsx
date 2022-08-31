import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '.';

export default {
    title: 'Footer',
    component: Component,
} as ComponentMeta<typeof Component>;

export const Default: ComponentStory<typeof Component> = () => {
    return (
        <MemoryRouter>
            <Component />
        </MemoryRouter>
    )
}