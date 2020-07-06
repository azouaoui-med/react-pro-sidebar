import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';

import packageJson from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      // sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      // sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    scss({
      output: 'dist/css/styles.css',
      watch: 'src/scss',
    }),
    copy({
      targets: [
        {
          src: 'src/scss',
          dest: 'dist',
        },
      ],
    }),
  ],
  external: ['react', 'react-dom', 'prop-types'],
};
