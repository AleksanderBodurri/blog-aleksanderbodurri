import { NgMe } from "@aleksanderbodurri/ng-me";
import { readFile, readdir, writeFile, mkdir } from "fs/promises";
import { format } from "prettier";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkPrism from "remark-prism";

NgMe({
  pathToSrcDir: "projects/blog/src",
  hooks: {
    onSelectorFound: codeblocksHook,
  },
  routes: {
    title: ({ title }) => `${title} | Aleksander Bodurri | Blog`,
    path: ({ slug }) => `posts/${slug}`,
    meta: {
      description: ({ description }) => description,
      tags: ({ tags }) => tags,
      "og:title": ({ title }) => title,
      "og:type": (_metadata) => "article",
      "og:url": ({ slug }) => `https://aleksanderbodurri.com/posts/${slug}`,
      "og:image": (_metadata) => `http://aleksanderbodurri.com/assets/me.png`,
      "og:image:secure_url": (_metadata) =>
        `http://aleksanderbodurri.com/assets/me.png`,
    },
  },
});

async function mdToHtml(md) {
  return await remark()
    .use(remarkPrism)
    .use(remarkHtml, { sanitize: false })
    .process(md)
    .then((output) => String(output));
}

async function codeblocksHook(selector, template, metadata) {
  if (selector !== "code-block") {
    return;
  }
  const { slug, paths } = metadata;
  const { markdownPath, generatedAssetsPath } = paths;

  const path = `${markdownPath}/${slug}`;
  const codeblocks = (await readdir(path)).filter(
    (name) => name !== "index.md" && name !== "summary.md"
  );

  let codeblocksToGenerate = codeblocks.filter((codeblock) => {
    const srcRegex = new RegExp(`src="${codeblock}"`, "g");
    const hasSrc = [...template.matchAll(srcRegex)].length > 0;
    return hasSrc;
  });

  await Promise.all(
    codeblocksToGenerate.map(async (codeblock) => {
      let codeblockOutput = "" + (await readFile(`${path}/${codeblock}`));
      codeblockOutput = format(await mdToHtml(codeblockOutput), {
        semi: false,
        parser: "html",
      });
      metadata["codeblocks"][codeblock] = codeblockOutput;
    })
  );

  let lazyCodeblocksToGenerate = codeblocks.filter((codeblock) => {
    const srcRegex = new RegExp(`lazySrc="${codeblock}"`, "g");
    const hasSrc = template.matchAll(srcRegex);
    return hasSrc;
  });

  const dir = `${generatedAssetsPath}/${slug}`;
  try {
    await mkdir(dir);
  } catch {}

  await Promise.all(
    lazyCodeblocksToGenerate.map(async (codeblock) => {
      // @ts-ignore
      let codeblockOutput = await readFile(`${path}/${codeblock}`).then(
        (output) => mdToHtml(output)
      );
      return writeFile(
        `${dir}/${codeblock.replace(".md", ".html")}`,
        codeblockOutput
      );
    })
  );
}
