import { useBreakpoints, useSSRWidth } from '@vueuse/core';

export function useBreakpoint() {
    const width = useSSRWidth();

    const breakpoints = useBreakpoints({
        mobile: 0,
        tablet: 768,
        desktop: 1024,
    }, { ssrWidth: width });

    return {
        isMobile:   breakpoints.between('mobile', 'tablet'),
        isTablet:   breakpoints.between('tablet', 'desktop'),
        isDesktop:  breakpoints.greater('desktop'),
    }
}
