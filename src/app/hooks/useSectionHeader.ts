import { createContext, useContext } from 'react';

export const ContentHeaderContext = createContext({
    title: '',
    description: '',
});

export const useContentHeaderContext = () => {
    return useContext(ContentHeaderContext);
};
