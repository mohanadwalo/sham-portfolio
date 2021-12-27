import { CSSProperties } from 'styled-components';
import highlightIcon from '../../../assets/svgs/highlight/highlight-bg.svg';
import searchIcon from '../../../assets/svgs/shared/search.svg';

const colors = {
  primary: '#6EC8E6', // Sky Blue (Crayola)
  primaryLight: '#DDF5FD', // Light Cyan
  primaryVariant1: '#37B4DD', // Picton Blue
  primaryVariant2: '#1C84A7', // Cyan Cornflower Blue
  primaryVariant3: '#186E8B', // Blue Sapphire
  primaryDark: '#00252E',
  black: '#05161C',
  white: '#fff',
  overlay: 'rgba(0,0,0,0.5)',
  accent1: '#D885E6',
  success: '#6EC8E6',
  fail: '#D885E6',
};
const fonts: { [key: string]: CSSProperties } = {
  h1: {
    fontSize: '3.052rem',
    fontWeight: 700,
    lineHeight: '4.578rem',
  },
  h2: { fontSize: '2.441rem', fontWeight: 400, lineHeight: '3.663rem' },
  h2Bold: {
    fontSize: '2.441rem',
    fontWeight: 700,
    lineHeight: '3.663rem',
  },
  h3: {
    fontSize: '1.953rem',
    fontWeight: 400,
    lineHeight: '3.125rem',
  },
  h3Bold: {
    fontSize: '1.953rem',
    fontWeight: 700,
    lineHeight: '3.125rem',
  },
  h4: { fontSize: '1.563rem', fontWeight: 400, lineHeight: '2.344rem' },
  h5: { fontSize: '1.25rem', fontWeight: 400, lineHeight: '1.875rem' },
  h6: { fontSize: '1rem', fontWeight: 700, lineHeight: '1.5rem' },
  body: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.5rem',
    letterSpacing: '0.5px',
  },
  buttonOrLink: {
    fontSize: '0.875rem',
    fontWeight: 700,
    lineHeight: '1.313rem',
  },
  subNavLink: {
    fontSize: '0.8rem',
    fontWeight: 700,
    lineHeight: '1.2rem',
  },
  small: {
    fontSize: '0.64rem',
    fontWeight: 700,
    lineHeight: '0.963rem',
  },
};

type ThemeType = {
  [key: string]: CSSProperties | { [key: string]: string };
};
export const webTheme: ThemeType = {
  colors,
  fonts,
  layout: {
    color: colors.white,
    maxWidth: '113.75rem',
    padding: '7rem 3rem 5rem 3rem',
  },
  topNav: {
    maxWidth: '113.75rem',
    padding: '0.6rem 1rem 1rem 3rem',
    margin: '0 auto',
    ['li:not(:first-child)' as string]: {
      backgroundPosition: '0.7rem 0.38rem',
    },
  },
  twoColumnLayout: {
    ['.main-content' as string]: {
      ['.right,.left' as string]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
  },
  regionSpace: {
    padding: '4rem 0 ',
  },
  areaMargin: {
    padding: '0 0 5rem 0',
  },
  titleSpace: {
    padding: '1rem',
  },
  titleSpaceTopBottom: {
    padding: '1rem 0',
  },
  titleSpaceLeftRight: {
    padding: '0 1rem',
  },
  bodySpace: {
    padding: '1rem',
  },
  bodySpaceTopBottom: {
    padding: '1rem 0',
  },
  header: {
    ['.header' as string]: {
      borderTop: '4px solid ' + colors.primary,
      backgroundColor: colors.primaryDark,
      padding: '0.5rem 3rem',
    },
    ['.small-nav' as string]: {
      padding: '1rem',
      borderTop: '6px solid ' + colors.primary,
    },

    ['.wrapper' as string]: {
      maxWidth: '113.75rem',
    },
  },
  button: {
    ['button' as string]: {
      border: 0,
      outline: 0,
      borderRadius: 20,
      color: colors.primaryDark,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ['&.primary' as string]: {
        backgroundColor: colors.primary,
      },
      ['&.white-fill' as string]: {
        backgroundColor: colors.white,
      },
      ['&.outline' as string]: {
        backgroundColor: colors.primaryDark,
        color: colors.white,
        border: '1px solid ' + colors.white,
      },
      ['&.tag' as string]: {
        backgroundColor: colors.white,
        ['&.active' as string]: {
          backgroundColor: colors.primary,
        },
      },
    },
  },
  input: {
    ['input' as string]: {
      borderRadius: 20,
      outline: 0,
      border: 0,
      backgroundColor: colors.primaryLight,
      padding: '1rem',
      height: '2.625rem',
      ['&.search-input' as string]: {
        backgroundImage: `url(${searchIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '2% center',
        padding: '0 1rem 0 3rem',
        width: '75%',
      },
      ['&.required' as string]: {
        border: '2px solid ' + colors.accent1,
      },
    },
  },
  logo: {
    ['.name' as string]: {
      fontSize: fonts.h3Bold.fontSize,
      fontWeight: fonts.h3Bold.fontWeight,
      lineHeight: fonts.h3Bold.lineHeight,
      textTransform: 'uppercase',
    },
  },
  brand: {
    ['.vision' as string]: {
      justifyContent: 'center',
    },
    ['.profile' as string]: {
      ['.details' as string]: {
        paddingLeft: '4rem',
      },
      ['.picture' as string]: {
        width: '18.75rem',
        height: '18.75rem',
        flexShrink: 0,
      },
    },
  },
  highlight: {
    paddingBottom: '23rem',
    ['.title' as string]: {
      ['.line' as string]: {
        margin: '0 2rem',
        width: '5rem',
      },
    },
    ['.skills' as string]: {
      ['.skill' as string]: {
        ['.icon' as string]: {
          backgroundImage: `url(${highlightIcon})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '229px',
          width: '229px',
        },
      },
    },
  },
  whoWeAre: {
    padding: '0 3rem',
    ['.background' as string]: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '-15%',
      top: 0,
      zIndex: -1,
      borderRadius: '1.25rem 1.25rem 0 0',
      backgroundColor: colors.primaryLight,
    },
    ['.wrapper' as string]: {
      marginTop: '-16rem',
      ['.title' as string]: {
        color: colors.primary,
        justifyContent: 'center',
        ['.line' as string]: {
          margin: '0 2rem',
        },
      },
      ['.items-group' as string]: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        ['.item' as string]: {
          width: '22.75rem',
          height: '20.813rem',
          borderRadius: '1.25rem',
          margin: '1.5rem',
          border: '1px solid ' + colors.primary,
          boxShadow: '0px 2px 2px ' + colors.primary,
        },
      },
    },
  },
  projects: {
    ['.goals' as string]: {
      width: '70%',
    },
    ['.projects-list' as string]: {
      ['.project-container' as string]: {
        flex: '25%',
        width: '25%',
        ['.project' as string]: {
          width: '17.125rem',

          ['.title' as string]: {
            padding: '1rem',
            [':before' as string]: {
              height: '3rem',
              top: '10px',
            },
          },
        },
      },
    },
    ['.gallery-list' as string]: {
      ['.image-container ' as string]: {
        height: '13.125rem',
        width: '17.938rem',
        margin: '5px',
      },
    },
  },
  about: {
    ['.future-bg' as string]: {
      paddingLeft: '10rem',
    },

    ['.experience, .education' as string]: {
      ['.time-line' as string]: {
        width: '7.125rem',
        padding: '0 0.5rem',
        ['.location' as string]: {
          textAlign: 'left',
        },
        ['.path' as string]: {
          display: 'flex',
          flexDirection: 'column-reverse',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          ['.middle' as string]: {
            width: '0.5rem',
            height: '0.5rem',
            backgroundColor: colors.primaryLight,
            borderRadius: '50%',
          },
        },
      },
      ['.details' as string]: {
        ['.projects-list,.courses-list' as string]: {
          display: 'flex',
          flexWrap: 'wrap',
          textTransform: 'capitalize',
        },
        ['.projects .title, .tasks .title, .courses .title' as string]: {
          paddingLeft: '1rem',
          [':before' as string]: {
            height: '3rem',
            top: '-0.6rem',
          },
        },
      },
    },
  },
  blog: {
    ['.blogs-list' as string]: {
      flexWrap: 'wrap',
      ['.blog-container' as string]: {
        ['.blog' as string]: {
          width: '22.313rem',
          height: '15.5rem',
          margin: '5px',
          flexShrink: 0,
        },
      },
    },
    ['.article' as string]: {
      ['.section' as string]: {
        paddingTop: '5.8rem',
        ['.description' as string]: {
          width: '80%',
          ['img' as string]: {
            width: '70%',
          },
        },
      },
    },

    ['.subnav' as string]: {
      width: '7.688rem',
      ['.fixed' as string]: {
        position: 'fixed',
        paddingLeft: '1rem',
      },
    },
    ['.options' as string]: {
      width: '2rem',
    },
  },
  certifications: {
    ['img' as string]: {
      width: '22.063rem',
      height: '19rem',
    },
    ['.certification' as string]: {
      paddingBottom: '6.25rem',
    },
  },
  service: {
    justifyContent: 'space-between',

    ['.service' as string]: {
      width: '33%',
      paddingBottom: '6.25rem',
    },
  },
  contact: {
    ['.contact-info' as string]: {
      ['.list']: {
        width: '33.33%',
      },
    },
    ['.contact-form' as string]: {
      ['.email-input']: {
        ['input' as string]: {
          width: '50%',
          height: '3rem',
        },
      },
    },
  },
  footer: {
    ['a' as string]: {
      height: '3rem',
      width: '3rem',
    },
  },
};
