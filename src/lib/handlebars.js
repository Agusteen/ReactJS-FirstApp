//Dependencies
import { minify } from 'html-minifier';

export function compress(content) {
  return minify(content.fn(this), {
    removeContents: true,
    collapseWhitespace: true,
    minifyJS: true
  });
}
