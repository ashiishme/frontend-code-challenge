/**
 * Project          : Frontend Code Challenge
 * Module           : Emotion styled type definition
 * Source filename  : styled.d.ts
 * Description      : Emotion styled default type definition
 * Author           : Ashish Yadav <contact@ashiish.me>
 *
 */

// add custom type support with emotion styled

declare module '@emotion/styled' {
    import { CreateStyled } from '@emotion/styled/types';
    export * from '@emotion/styled/types';
    const customStyled: CreateStyled<DefaultTheme>;
    export default customStyled;
}
