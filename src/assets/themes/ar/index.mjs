export const vars = {
  pageMargin: '3vw',
}

export default v => {
  v = { ...vars, ...v }

  return {
    '.Footer': {
      margin: '3em 0 0 3vw',
    },

    '.Page': {
      margin: `0 ${v.pageMargin}`,

      h1: {
        margin: `0 0 0 -${v.pageMargin}`,
        padding: '1em 0 2em',
      },
    },

    [`@media screen and (min-height: ${v.widths.laptop})`]: {
      '.Footer': {
        position: 'absolute',
        bottom: 0,
      },
    },
  }
}