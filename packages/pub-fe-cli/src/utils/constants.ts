import path from "path"
import fs from "fs-extra"

const pkg: Record<string, any> = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../package.json"), "utf8")
)

export const UNICODE = {
  success: '✔', // ✔
  fail: '✖', // ✖
}

// 包名
export const PKG_NAME:string = pkg.name
export const PKG_VERSION: string = pkg.version

/**
 * 项目类型
 */
export const PROJECT_TYPES: Array<{ name: string; value: string }> = [
  {
    name: '未使用 React、Vue、Node.js 的项目（JavaScript）',
    value: 'index',
  },
  // {
  //   name: '未使用 React、Vue、Node.js 的项目（TypeScript）',
  //   value: 'typescript',
  // },
  // {
  //   name: 'React 项目（JavaScript）',
  //   value: 'react',
  // },
  // {
  //   name: 'React 项目（TypeScript）',
  //   value: 'typescript/react',
  // },
  // {
  //   name: 'Rax 项目（JavaScript）',
  //   value: 'rax',
  // },
  // {
  //   name: 'Rax 项目（TypeScript）',
  //   value: 'typescript/rax',
  // },
  {
    name: 'Vue 项目（JavaScript）',
    value: 'vue',
  },
  {
    name: 'Vue 项目（TypeScript）',
    value: 'typescript/vue',
  },
  // {
  //   name: 'Node.js 项目（JavaScript）',
  //   value: 'node',
  // },
  // {
  //   name: 'Node.js 项目（TypeScript）',
  //   value: 'typescript/node',
  // },
  {
    name: '使用 ES5 及之前版本 JavaScript 的老项目',
    value: 'es5',
  },
];

// stylelint 需要忽略的文件
export const STYLELINT_IGNORE_PATTERN: string[] = [
  'node_modules/',
  'build/',
  'dist/',
  'coverage/',
  'es/',
  'lib/',
  '**/*.min.css',
  '**/*-min.css',
  '**/*.bundle.css',
];
// stylelint 扫描文件扩展名 用于写入vscode中的settings.json
export const STYLELINT_FILE_EXT: string[] = ['.css', '.scss', '.less', '.sass','vue'];


/**
 * eslint 扫描文件扩展名
 */
export const ESLINT_FILE_EXT: string[] = ['.js', '.jsx', '.ts', '.tsx', '.vue'];

/**
 * eslint 扫描忽略的文件或文件目录
 * 需要同步到 config/.eslintignore.ejs
 */
export const ESLINT_IGNORE_PATTERN: string[] = [
  'node_modules/',
  'build/',
  'dist/',
  'coverage/',
  'es/',
  'lib/',
  '**/*.min.js',
  '**/*-min.js',
  '**/*.bundle.js',
];
