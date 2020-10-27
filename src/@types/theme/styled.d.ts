// add custom type support with emotion styled

declare module '@emotion/styled' {
    import { CreateStyled } from '@emotion/styled/types';
    export * from '@emotion/styled/types';
    const customStyled: CreateStyled<DefaultTheme>;
    export default customStyled;
}
