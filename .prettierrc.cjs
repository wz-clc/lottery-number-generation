/** 配置必读
 * 在VSCode中安装prettier插件
 * 打开插件配置填写`.prettierrc.js` 将本文件作为其代码格式化规范
 * 在本文件中修改格式化规则，不会同时触发改变ESLint代码检查，所以每次修改本文件需要重启VSCode，ESLint检查才能同步代码格式化
 * 需要相应的代码格式化规范请自行查阅配置，下面为默认项目配置
 */
module.exports = {
  // 一行最多多少字符
  printWidth: 120,
  // 指定每个缩进级别的空格数
  tabWidth: 2,
  // 使用制表符而不是空格缩进行
  useTabs: false,
  // 在语句末尾是否需要分号
  semi: false,
  // 是否使用单引号
  singleQuote: true,
  // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
  trailingComma: 'es5',
  // 花括号是否在同一行
  bracketSameLine: false,
  // 对象属性名是否需要引号包裹 as-needed 自动|consistent 保持一致|preserve 全都使用"
  quoteProps: 'as-needed',
  // 在对象文字中的括号之间打印空格
  bracketSpacing: true,
  // 在单独的箭头函数参数周围包括括号 always：(x) => x \ avoid：x => x
  arrowParens: 'always',
  // 使用默认的折行标准 always\never\preserve
  proseWrap: 'preserve',
  // 指定HTML文件的全局空格敏感度 css\strict\ignore
  htmlWhitespaceSensitivity: 'css',
  // 是否将HTML标记中单个属性放在单独的一行
  singleAttributePerLine: true,
  // <script>和<style>块是否需要进行缩进
  vueIndentScriptAndStyle: true,
  //在 windows 操作系统中换行符通常是回车 (CR) 加换行分隔符 (LF)，也就是回车换行(CRLF)，
  //然而在 Linux 和 Unix 中只使用简单的换行分隔符 (LF)。
  //对应的控制字符为 "\n" (LF) 和 "\r\n"(CRLF)。auto意为保持现有的行尾
  // 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
  endOfLine: 'auto',
  'tailwindcss.sortOrder': 'alphabetical',
  plugins: ['prettier-plugin-tailwindcss'],
}
