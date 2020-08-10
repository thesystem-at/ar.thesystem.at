export const View = state => [
  Slogan({ subTitle: 'augmented reality' }),

  p('augmented reality application.'),
  p(['part of ', Link({ to: 'https://thesystem.at', text: 'THESYSTEM' }), '.']),
  p('more info soon.'),
]
