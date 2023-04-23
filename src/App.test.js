import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('When interacting with the github api', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });


    it('Receives github name from the rest api', async () => {
        fetch.mockResponseOnce(JSON.stringify({ name: 'coder' }));
        render(<App/>);
        const githubName = await waitFor(() => {
            return screen.getByRole('heading', { level: 2 })
        })
        expect(githubName).toHaveTextContent('coder');
    });

    test('It receives the github url for user', async () => {
        fetch.mockResponseOnce(JSON.stringify({ html_url: 'http://github.com/learningToCode1234' }));
        render(<App/>);
        const githubUrl = await waitFor(() => screen.getByRole('link'));
        expect(githubUrl).toHaveAttribute('href', expect.stringContaining('github.com'));
    })

        test('It receives the gitbuh image url', async () => {
            fetch.mockResponseOnce(JSON.stringify(
                { 
                    avatar_url: 'https://avatars.githubusercontent.com/u/87375911?v=4'
                }
            ))
            render(<App/>);
            const githubImageUrl = await waitFor(() => screen.getByAltText('Github profile image'));
            expect(githubImageUrl).toHaveAttribute('src', expect.stringContaining('githubusercontent'));
        })


})
