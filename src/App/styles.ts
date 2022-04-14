import { Depths, getTheme, SharedColors } from '@fluentui/react';
import { FontSizes, FontWeights } from '@fluentui/theme';

const { palette } = getTheme();

export const COLORS = {
    RED: SharedColors.red20,
    GREEN: SharedColors.greenCyan10,
};

export const HEADER_GRADIENT = `
  background: -webkit-linear-gradient(300deg, ${palette.themePrimary}, ${palette.themeDark});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `;

export const FONTS = {
    header: `font-size: ${FontSizes.size68}; font-weight: ${FontWeights.semibold};`,
    localHeader: `font-size: ${FontSizes.size32}; font-weight: ${FontWeights.regular};`,
    localHeaderBold: `font-size: ${FontSizes.size32}; font-weight: ${FontWeights.semibold};`,
    text: `font-size: ${FontSizes.size20}; font-weight: ${FontWeights.regular};`,
    smallText: `font-size: ${FontSizes.size16}; font-weight: ${FontWeights.regular}; color: ${palette.neutralSecondary}`,
};

export const MOBILE_WIDTH = '420px';

export const GAP = {
    xl: '30px',
    l: '20px',
    m: '15px',
    s: '10px',
};

export const DEPTH = {
    l: Depths.depth64,
    s: Depths.depth4,
};
