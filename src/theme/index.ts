/**
 * Project          : Frontend Code Challenge
 * Module           : Theme root file
 * Source filename  : index.tsx
 * Description      : Root export file for application theme
 * Author           : Ashish Yadav <contact@ashiish.me>
 *
 */
import font from './font';
import color from './color';
import breakpoints from './responsive';

const theme: DefaultTheme = { font, color, breakpoints };

export default theme;
