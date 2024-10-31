# [1.10.0](https://github.com/jimmy-guzman/eslint-config/compare/v1.9.0...v1.10.0) (2024-10-31)


### Bug Fixes

* 🐛 add missing `@typescript-eslint/parser` dep ([32f8abe](https://github.com/jimmy-guzman/eslint-config/commit/32f8abe61ab221a202bcabdcf3c5298b4c96092b))
* 🐛 bump `eslint-plugin-import-x` to v4.4.0 ([9790b2f](https://github.com/jimmy-guzman/eslint-config/commit/9790b2f846c613dc6ff5713aa73653ce2e0c2444))
* 🐛 bump `eslint-plugin-react-refresh` to v0.4.14 ([cb8d93a](https://github.com/jimmy-guzman/eslint-config/commit/cb8d93acdc0777577c62105e99c7936c50050b37))
* 🐛 reference `TSESLint` to address missing types ([939c713](https://github.com/jimmy-guzman/eslint-config/commit/939c713772ab82dd028f2212d39dc8001d75c337))


### Features

* ✨ bump `globals` to v15.11.0 ([c6537e7](https://github.com/jimmy-guzman/eslint-config/commit/c6537e7460a4214b729bd8e8b0b5eebffae4fa49))

# [1.9.0](https://github.com/jimmy-guzman/eslint-config/compare/v1.8.0...v1.9.0) (2024-06-04)


### Features

* ✨ support `@testing-library/dom` v10 ([#24](https://github.com/jimmy-guzman/eslint-config/issues/24)) ([cb6ba2a](https://github.com/jimmy-guzman/eslint-config/commit/cb6ba2a4301714866018649d8a77e15b33dd4086))

# [1.8.0](https://github.com/jimmy-guzman/eslint-config/compare/v1.7.0...v1.8.0) (2024-04-30)


### Features

* ✨ bump `astro` plugin & parser to v1 ([#23](https://github.com/jimmy-guzman/eslint-config/issues/23)) ([ab4bf85](https://github.com/jimmy-guzman/eslint-config/commit/ab4bf85e990108df4be719d54cbed2476be6fc6b))

# [1.7.0](https://github.com/jimmy-guzman/eslint-config/compare/v1.6.1...v1.7.0) (2024-04-16)


### Features

* ✨ add `astro` support ([#19](https://github.com/jimmy-guzman/eslint-config/issues/19)) ([2c1ccda](https://github.com/jimmy-guzman/eslint-config/commit/2c1ccdad7b8e265fb3ec9e9bbc35a652a8f4db2f))

## [1.6.1](https://github.com/jimmy-guzman/eslint-config/compare/v1.6.0...v1.6.1) (2024-04-13)


### Bug Fixes

* 🐛 allow files under `.storybook` to be linted ([4a33b5f](https://github.com/jimmy-guzman/eslint-config/commit/4a33b5f36ff556533b1690de813b420e9fa2a7a0))
* 🐛 ignore `playwright-report` from linting ([d0bf5b9](https://github.com/jimmy-guzman/eslint-config/commit/d0bf5b9b17a211a08f5dec54894fa92e18e52461))

# [1.6.0](https://github.com/jimmy-guzman/eslint-config/compare/v1.5.0...v1.6.0) (2024-04-13)


### Bug Fixes

* 🐛 prevent redundant renaming by adding `no-useless-rename` ([ff5c130](https://github.com/jimmy-guzman/eslint-config/commit/ff5c1306d161c6e253f27dbb4f4f593015ecfbe9))


### Features

* ✨ add type definitions for rules available ([66949d1](https://github.com/jimmy-guzman/eslint-config/commit/66949d1ad11346db9b61d8c0980bfc0773022c2e))
* ✨ improve `curly` rule by adding consistency ([b464c37](https://github.com/jimmy-guzman/eslint-config/commit/b464c37de337d02e6178487cb6a1c03b29f78822))
* ✨ remove `simple-import-sort` type stubs ([78a1ad0](https://github.com/jimmy-guzman/eslint-config/commit/78a1ad0eed2e01c95a745ca2501018ef5bedcdf3))

# [1.5.0](https://github.com/jimmy-guzman/eslint-config/compare/v1.4.0...v1.5.0) (2024-04-13)


### Features

* ✨ add auto detection to enable configurations ([a65831b](https://github.com/jimmy-guzman/eslint-config/commit/a65831b73c6e0f30ec4e71da90bc56000944d9d2))

# [1.4.0](https://github.com/jimmy-guzman/eslint-config/compare/v1.3.0...v1.4.0) (2024-04-11)


### Bug Fixes

* 🐛 disable expect-expect & no-deprecated-functions in e2e ([2ce0b5a](https://github.com/jimmy-guzman/eslint-config/commit/2ce0b5ab2855cf86ed86c3c25b102d1b154ff51f))
* 🐛 include missing `cypress` for e2e testing ([370e228](https://github.com/jimmy-guzman/eslint-config/commit/370e2287be11ef6b5ae452f90e5bbc1b983f7fd3))


### Features

* ✨ add warnings for console logs ([2ee8dd7](https://github.com/jimmy-guzman/eslint-config/commit/2ee8dd7bfbe33539e16504be866b5b0f99f3bf30))
* ✨ allow numbers for restrict-template-expressions ([726264d](https://github.com/jimmy-guzman/eslint-config/commit/726264d860879e9346a52c506e4ca2933b6774e4))

# [1.3.0](https://github.com/jimmy-guzman/eslint-config/compare/v1.2.0...v1.3.0) (2024-04-09)


### Bug Fixes

* 🐛 allow `vi.mock` when tests are using `vitest` ([589fa8b](https://github.com/jimmy-guzman/eslint-config/commit/589fa8b2e721c0dfd675067a4997e5062d8496a4))
* 🐛 unblock some imports rules due to parsing issues ([6c47ef1](https://github.com/jimmy-guzman/eslint-config/commit/6c47ef1bb05fe531920aaec506dcda4e1482083e))


### Features

* ✨ add support for `**/*.cjs` files ([a05113d](https://github.com/jimmy-guzman/eslint-config/commit/a05113d6523515c22b663273d73414f52f5b2592))
* ✨ allow namspace for `react/jsx-pascal-case` ([29a11a4](https://github.com/jimmy-guzman/eslint-config/commit/29a11a4b621d4bacb1ed986a894fc10bdbf88920))

# [1.2.0](https://github.com/jimmy-guzman/eslint-config/compare/v1.1.0...v1.2.0) (2024-04-08)


### Features

* ✨ add `@tanstack/query` rules for `react` ([#5](https://github.com/jimmy-guzman/eslint-config/issues/5)) ([79230c5](https://github.com/jimmy-guzman/eslint-config/commit/79230c5a63f39ec90463908d7cfa983444ba0bb1))

# [1.1.0](https://github.com/jimmy-guzman/eslint-config/compare/v1.0.0...v1.1.0) (2024-04-08)


### Features

* ✨ use `typescript-eslint` shared config's name ([#3](https://github.com/jimmy-guzman/eslint-config/issues/3)) ([2a4d512](https://github.com/jimmy-guzman/eslint-config/commit/2a4d512f0480b1651f351311c7eb5df1d8499333))

# 1.0.0 (2024-04-08)


### Features

* ✨ initial release ([#2](https://github.com/jimmy-guzman/eslint-config/issues/2)) ([7e5ba48](https://github.com/jimmy-guzman/eslint-config/commit/7e5ba486b66b74424f36a370ae5916443db9c0a1))
