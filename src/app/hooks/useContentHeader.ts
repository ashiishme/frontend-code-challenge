import { createContext, useContext } from 'react';

// Content header context
export const ContentHeaderContext = createContext({
    title: '',
    description: '',
    context: '',
});

export const useContentHeaderContext = () => {
    return useContext(ContentHeaderContext);
};
