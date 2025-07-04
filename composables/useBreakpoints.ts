import { useBreakpoints } from '@vueuse/core'

export function useBreakpoint() {
    const breakpoints = useBreakpoints({
        mobile: 0,
        tablet: 768,
        desktop: 1024,
    }, { ssrWidth: 766 });

    return {
        isMobile:   breakpoints.between('mobile', 'tablet'),
        isTablet:   breakpoints.between('tablet', 'desktop'),
        isDesktop:  breakpoints.greater('desktop'),
    }
}
