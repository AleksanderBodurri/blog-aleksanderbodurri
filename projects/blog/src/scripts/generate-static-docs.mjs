import { readdir, readdirSync, readFileSync } from 'fs';

const appModulePath = './projects/blog/src/app/app.module.ts';
const markdownPath = './projects/blog/src/assets/md';

let pages = [];

const files = readdirSync(markdownPath);
files.forEach(file => {
  const path = `${markdownPath}/${file}`
  const mdFiles = readdirSync(path);
  const nonSummaryFiles = mdFiles.filter(name => name !== 'summary.md');

  const constructComponent = (names) => {
    let content = '';
    names.forEach(name => {
      content += readFileSync(`${path}/${name}`);      
    });

    return `
      @Component({
        selector: 'blog-${file}',
        template: \`<markdown ngPreserveWhitespaces>${toUpperCamelCase(file)}</markdown>\`
      })
      export class ${toUpperCamelCase(file)}Component {}
    `
  };

  const constructRoute = (name) => {
    return `{
      path: 'posts/${name}',
      component: ${toUpperCamelCase(name)}Component
    }`
  }

  const contructDirectiveDef = (name) => {
    return `${toUpperCamelCase(name)}Component`;
  }

  const route = constructRoute(file);
  const directiveDef = contructDirectiveDef(file);
  const component = constructComponent(nonSummaryFiles);

  pages.push({
    component,
    route,
    directiveDef
   })
});

let routingModuleAsString = readFileSync(appModulePath, 'utf8');
let replaceString = `import { Component } from '@angular/core';\n`;
pages.forEach(page => {
  replaceString += page.component;
});
routingModuleAsString = routingModuleAsString.replace('// MAGIC_TARGET_FOR_TOOLING', replaceString);

// routingModuleAsString = routingModuleAsString.replace('const GENERATED: Routes = [];', `const GENERATED: Routes = []`);

replaceString = `const GENERATED_ROUTES: Routes = [${pages.map(page => page.route).join(',')}];`
routingModuleAsString = routingModuleAsString.replace('const GENERATED_ROUTES: Routes = [];', replaceString);

replaceString = `const GENERATED_DECLARATIONS: any[] = [${pages.map(page => page.directiveDef).join(',')}];`
routingModuleAsString = routingModuleAsString.replace('const GENERATED_DECLARATIONS: any[] = [];', replaceString);

console.log(routingModuleAsString);

function toUpperCamelCase(string) {
  return string
    .toLowerCase()
    .split('-')
    .map(it => it.charAt(0).toUpperCase() + it.substr(1))
    .join('');
}