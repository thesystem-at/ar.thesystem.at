export const vars = {
  pageMargin: '3vw',
}

export default v => {
  v = { ...vars, ...v }

  return {
    '.Footer': {
      bottom: 0,
      margin: `0 ${v.pageMargin}`,
      position: 'absolute',
    },

    '.Page': {
      margin: `0 ${v.pageMargin}`,

      h1: {
        margin: `0 0 0 -${v.pageMargin}`,
        padding: '1em 0 2em',
      },
    },
  }
}