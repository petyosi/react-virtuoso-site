import Typography from 'typography'
import theme from 'typography-theme-github'

const typography = new Typography(theme)

typography.options.overrideStyles = ({ rhythm, scale }, options) => {
  return {
    '@media only screen and (max-width:1440px)': {
      html: {
        fontSize: '80%',
      },
    },
    dt: {
      marginTop: '2rem',
    },
    dd: {
      marginBottom: '0.5rem',
    },
    'a:link': {
      color: '#2B92E4',
      textDecoration: 'none',
    },
    'a:visited': {
      color: '#5192E4',
    },
    code: {
      fontSize: '1em',
      color: '#e83e8c',
      lineHeight: 'auto',
    },
    'pre code': {
      color: '#f8f8f2',
    },
    'h3 code': {
      fontSize: '1rem',
    },
  }
}

export const { scale, rhythm, options } = typography
export default typography
