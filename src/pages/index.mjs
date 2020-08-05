export const View = state => [
  Slogan({ subTitle: 'artificial reality' }),

  p('artificial reality application.'),
  p(['part of ', Link({ to: 'https://thesystem.at', text: 'THESYSTEM' }), '.']),
  p('more info soon.'),
]
