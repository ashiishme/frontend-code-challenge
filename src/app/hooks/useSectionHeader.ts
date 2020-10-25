import { createContext, useContext } from 'react';

export const ContentHeaderContext = createContext({
    title: '',
    description: '',
    context: '',
});

export const useContentHeaderContext = () => {
    return useContext(ContentHeaderContext);
};
