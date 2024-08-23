// Page.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Page } from './Page'; // Adjust the import based on your file structure
import { TemplatesApi } from './-api/templates.api.ts';

// Mock the TemplatesApi
jest.mock('./-api/templates.api.ts', () => ({
    TemplatesApi: {
        getTemplateGroups: jest.fn(),
    },
}));

const queryClient = new QueryClient();

describe('Page Component', () => {
    beforeEach(() => {
        // Mock the API response
        TemplatesApi.getTemplateGroups.mockReturnValue({
            queryKey: ['Templates', 'groups'],
            queryFn: async () => [
                {
                    id: 1,
                    name: 'Group 1',
                    templates: [{ id: 1, name: 'Template 1' }, { id: 2, name: 'Template 2' }],
                },
                {
                    id: 2,
                    name: 'Group 2',
                    templates: [{ id: 3, name: 'Template 3' }],
                },
            ],
        });
    });

    it('renders the template groups', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Page />
            </QueryClientProvider>
        );

        // Check if the title is rendered
        expect(await screen.findByText(/выберите группу шаблонов/i)).toBeInTheDocument();

        // Check if the groups are rendered
        expect(await screen.findByText(/Group 1/i)).toBeInTheDocument();
        expect(await screen.findByText(/Group 2/i)).toBeInTheDocument();

        // Check if the templates are rendered
        expect(await screen.findByText(/Template 1/i)).toBeInTheDocument();
        expect(await screen.findByText(/Template 2/i)).toBeInTheDocument();
        expect(await screen.findByText(/Template 3/i)).toBeInTheDocument();
    });
});
