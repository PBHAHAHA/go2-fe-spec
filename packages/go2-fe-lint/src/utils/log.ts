/**
 * @description 此文件用来定义终端的打印样式
 * @author pub
 * @time 2023-08-29 14:36
 */

import chalk from 'chalk';
import { PKG_NAME, UNICODE } from './constants';

const { green, blue, yellow, red } = chalk;

export default {
  success(text: string) {
    console.log(green(text));
  },
  info(text: string) {
    console.info(blue(text));
  },
  warn(text: string) {
    console.info(yellow(text));
  },
  error(text: string) {
    console.error(red(text));
  },
  result(text: string, pass: boolean) {
    console.info(
      blue(`[${PKG_NAME}] ${text}`),
      pass ? green(UNICODE.success) : red(UNICODE.fail),
    );
  },
};