import { access, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const pages = ['index.html', 'work/index.html', 'about/index.html', 'contact/index.html']

for (const page of pages) {
  const html = await readFile(join('dist', page), 'utf8')

  if (html.includes('/src/main.tsx')) {
    throw new Error(`${page} references uncompiled TypeScript source`)
  }

  const scripts = [...html.matchAll(/src="(\/assets\/[^"]+\.js)"/g)]
  const styles = [...html.matchAll(/href="(\/assets\/[^"]+\.css)"/g)]

  if (scripts.length !== 1 || styles.length !== 1) {
    throw new Error(`${page} does not reference exactly one compiled script and stylesheet`)
  }

  await access(join('dist', scripts[0][1].slice(1)))
  await access(join('dist', styles[0][1].slice(1)))
}

await Promise.all([
  access('dist/_redirects'),
  access('dist/_headers'),
  access('dist/favicon.svg'),
  access('dist/images/rideau-canal-dawn.png'),
])

console.log('Verified compiled Pages output, routes, redirects, and public assets.')
