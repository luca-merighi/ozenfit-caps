import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins'],
                lato: ['Lato']
            },
            colors: {
                'slate-150': '#ebeff5'
            },
            keyframes: {
                slideDown: {
                    from: { height: '0px' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                  },
                  slideUp: {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0px' },
                  },
                  overlayShow: {
					from: { opacity: '0', transform: 'translateX(100%)' },
					to: { opacity: '1', transform: 'translateX(0%)' },
				},
				overlayHide: {
					from: { opacity: '1', transform: 'translateX(0%)' },
					to: { opacity: '0', transform: 'translateX(100%)' },
				},
				contentShow: {
					from: { opacity: '0', transform: 'translateX(100%)' },
					to: { opacity: '1', transform: 'translateX(0%)' },
				},
                contentHide: {
					from: { opacity: '1', transform: 'translateX(0%)' },
					to: { opacity: '0', transform: 'translateX(100%)' },
				}
            },
            animation: {
                slideDown: 'slideDown 300ms',
                slideUp: 'slideUp 300ms',
                overlayShow: 'overlayShow 150ms',
				overlayHide: 'overlayHide 150ms',
				contentShow: 'contentShow 150ms',
				contentHide: 'contentHide 150ms'
            }
        }
    },
    plugin: []
} satisfies Config