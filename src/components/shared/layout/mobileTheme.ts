import { CSSProperties } from 'styled-components';

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
    fontSize: '1.8rem',
    fontWeight: 700,
    lineHeight: '3rem',
  },
  h2: { fontSize: '1.8rem', fontWeight: 400, lineHeight: '2.7rem' },
  h2Bold: {
    fontSize: '1.8rem',
    fontWeight: 700,
    lineHeight: '2.7rem',
  },
  h3: {
    fontSize: '1.2rem',
    fontWeight: 400,
    lineHeight: '2.1rem',
  },
  h3Bold: {
    fontSize: '1.2rem',
    fontWeight: 700,
    lineHeight: '2.1rem',
  },
  h4: { fontSize: '1.17rem', fontWeight: 400, lineHeight: '1.75rem' },
  h5: { fontSize: '0.93rem', fontWeight: 400, lineHeight: '1.4rem' },
  h6: { fontSize: '0.75rem', fontWeight: 700, lineHeight: '1.125rem' },
  body: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.313rem',
  },
  buttonOrLink: {
    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: '1.11rem',
  },
  subNavLink: {
    fontSize: '0.7rem',
    fontWeight: 700,
    lineHeight: '1rem',
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
export const mobileTheme: ThemeType = {
  colors,
  fonts,
  layout: {
    color: colors.white,
    padding: '7rem 1rem 4rem 1rem',
  },
  topNav: {
    padding: '0.6rem',
    ['li:not(:first-child)' as string]: {
      backgroundPosition: '0.7rem 0.3rem',
    },
  },
  twoColumnLayout: {
    ['.main-content' as string]: {
      flexDirection: 'column',
      ['.right' as string]: {
        display: 'flex',
        flexSirection: 'column',
        alignItems: 'flex-start',
      },
      ['.left' as string]: {
        display: 'none',
      },
    },
  },
  regionSpace: {
    padding: '1rem 0 ',
  },
  areaMargin: {
    margin: '0 0 4rem 0',
  },
  titleSpace: {
    padding: '0.5rem',
  },
  titleSpaceTopBottom: {
    padding: '0.5rem 0',
  },
  titleSpaceLeftRight: {
    padding: '0 0.5rem',
  },
  bodySpace: {
    padding: '1rem',
  },
  bodySpaceTopBottom: {
    padding: '1rem 0',
  },

  header: {
    ['.header' as string]: {
      backgroundColor: colors.primaryDark,
    },
    ['.small-nav' as string]: {
      padding: '0.5rem',
      backgroundColor: colors.primaryVariant3,
    },
  },
  button: {
    ['button' as string]: {
      border: 'none',
      outline: 'none',
      borderRadius: 20,
      color: colors.primaryDark,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [':focus' as string]: {
        border: 0,
        outline: 0,
      },
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
      padding: '0 1rem',
      width: '100%',
      height: '2.5rem',
      ['&.search-input' as string]: {
        backgroundImage: `url(${searchIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '3% center',
        padding: '0 1rem 0 3rem',
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
      font: fonts.h3,
    },
    ['.profile' as string]: {
      flexDirection: 'column',
      alignItems: 'center',
      ['.picture' as string]: {
        width: '18.75rem',
        height: '18.75rem',
        flexShrink: '0',
      },
      ['.message,.name,.options' as string]: {
        justifyContent: 'center',
        textAlign: 'center',
      },
      ['.name' as string]: {
        font: fonts.h4,
      },
      ['.options button' as string]: {
        margin: '1rem 0.5rem',
      },
    },
  },
  highlight: {
    paddingTop: '1rem',
    ['.title' as string]: {
      ['.line' as string]: {
        margin: '0 1rem',
        width: '2rem',
      },
    },
    ['.skills' as string]: {
      flexWrap: 'wrap',
      alignItems: 'center',
      ['.skill' as string]: {
        width: '50%',
        height: '10rem',
        zIndex: 1,
        ['.name' as string]: {
          paddingTop: '2rem',
        },
        ['&.frontend' as string]: {
          backgroundColor: colors.primaryVariant3,
          ['svg' as string]: {
            path: {
              fill: colors.white,
            },
          },
        },
        ['&.webdesign' as string]: {
          backgroundColor: colors.primary,
          ['svg' as string]: {
            path: {
              fill: colors.primaryDark,
            },
          },
          ['.name' as string]: {
            color: colors.primaryDark,
          },
        },
        ['&.uxui' as string]: {
          backgroundColor: colors.primary,
          ['svg' as string]: {
            path: {
              fill: colors.primaryDark,
            },
          },
          ['.name' as string]: {
            color: colors.primaryDark,
          },
        },
        ['&.webdev' as string]: {
          backgroundColor: colors.primaryVariant1,
          ['svg' as string]: {
            path: {
              fill: colors.white,
            },
          },
          ['.name' as string]: {
            color: colors.white,
          },
        },
      },
    },
  },
  whoWeAre: {
    paddingTop: '2rem',
    ['.wrapper' as string]: {
      ['.title' as string]: {
        justifyContent: 'center',
        color: colors.primary,
        ['.line' as string]: {
          margin: '0 1rem',
        },
      },

      ['.items-group' as string]: {
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        ['.item' as string]: {
          width: '49%',
          height: '15rem',
          marginBottom: '0.8rem',
          alignItems: 'space-between',
          boxShadow: '0px 1px 1px ' + colors.primary,
          ['&.projects' as string]: {
            borderTopLeftRadius: '1.25rem',
          },
          ['&.about' as string]: {
            borderTopRightRadius: '1.25rem',
          },
          ['&.certifications' as string]: {
            borderBottomLeftRadius: '1.25rem',
          },
          ['&.contact' as string]: {
            borderBottomRightRadius: '1.25rem',
          },
          ['.name' as string]: {
            paddingTop: '1rem',
          },
          ['svg' as string]: {
            width: '3rem',
          },
        },
      },
    },
  },
  projects: {
    ['.projects-list' as string]: {
      flexDirection: 'column',
      width: '100%',
      ['.project-container' as string]: {
        width: '100%',
        ['.project' as string]: {
          width: '25rem',
          maxWidth: '100%',
          ['.title' as string]: {
            padding: '0.5rem 1rem',
            [':before' as string]: {
              height: '2rem',
              top: '5px',
            },
          },
        },
      },
    },
    ['.gallery-list' as string]: {
      ['.image-container ' as string]: {
        height: '13.125rem',
        width: '50%',
        border: '0.3rem solid ' + colors.primaryDark,
      },
    },
  },
  about: {
    ['.future-bg' as string]: {
      ['img' as string]: {
        width: '100%',
      },
    },
    ['.experience, .education' as string]: {
      flexDirection: 'column',
      boxShadow: '0 0 3px ' + colors.primary,
      padding: '0.5rem',
      borderRadius: '10px',
      ['.time-line' as string]: {
        width: '100%',
        flexWrap: 'wrap',
        ['.location' as string]: {
          width: '100%',
          textAlign: 'left',
        },
        ['.path' as string]: {
          width: '100%',
          display: 'flex',
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
            height: '2.2rem',
            top: '-0.5rem',
          },
        },
      },
    },
  },
  blog: {
    flexDirection: 'column-reverse',
    ['.blogs-list' as string]: {
      flexDirection: 'column',
      ['.blog-container' as string]: {
        width: '100%',
        ['.blog' as string]: {
          width: '100%',
          height: '15.5rem',
        },
      },
    },
    ['.image-text-wrapper' as string]: {
      flexDirection: 'column',
      ['img' as string]: {
        maxWidth: '22rem',
        height: '15.5rem',
      },
    },
    ['.images-list' as string]: {
      ['img' as string]: {
        flexShrink: 1,
        maxHeight: '12.188rem',
      },
    },
    ['.subnav' as string]: {
      width: '100%',
      textAlign: 'left',
      ['.fixed' as string]: {
        position: 'relative',
      },
    },
    ['.options' as string]: {
      width: '100%',
      textAlign: 'left',
      ['svg' as string]: {
        marginRight: '1rem',
      },
    },
  },
  certifications: {
    ['img' as string]: {
      maxWidth: '100%',
      maxHeight: '19rem',
    },
    ['.certification' as string]: {
      paddingBottom: '3rem',
      flexDirection: 'column',
      alignItems: 'center',
      ['.certification-details' as string]: {
        ['.title' as string]: {
          paddingTop: '1rem',
        },
      },
    },
  },
  service: {
    justifyContent: 'space-between',
    ['.service' as string]: {
      width: '100%',
      padding: '0 3rem 3rem 3rem',
    },
  },
  contact: {
    ['.contact-info' as string]: {
      flexDirection: 'column',
    },
    ['.contact-form' as string]: {
      ['.email-input']: {
        ['input' as string]: {
          width: '100%',
          height: '2.563rem',
        },
      },
    },
  },
  footer: {
    ['a' as string]: {
      height: '2rem',
      width: '2rem',
    },
  },
};
