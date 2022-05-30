import { postMetaData } from './generated-post-metadata';

export let posts: Post[] = [];

export class Post {
  tags = new Set<string>();
  constructor(
    public date: Date,
    public title: string,
    public slug: string,
    public summary: string,
    public contentPaths: string[],
    private _tags: string[]
  ) {
    this._tags.forEach((tag) => this.tags.add(tag));
  }

  hasTag(tag: string): boolean {
    return this.tags.has(tag);
  }
}

const definePost = (
  date: string,
  title: string,
  slug: string,
  sectionNames: string[],
  tags: string[],
  summary: string
) => {
  const contentPaths: string[] = sectionNames.map((sectionName) => {
    return `assets/md/${slug}/${sectionName}.md`;
  });

  posts.push(
    new Post(new Date(date), title, slug, summary, contentPaths, tags)
  );
};

postMetaData.forEach((post) => {
  definePost(
    post.date,
    post.title,
    post.slug,
    post.sectionNames,
    post.tags,
    post.summary
  );
});

posts = posts.sort((a, b) => b.date.getTime() - a.date.getTime());
