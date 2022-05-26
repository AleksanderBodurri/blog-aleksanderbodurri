export let posts: Post[] = [];

export class Post {
  tags = new Set<string>()
  constructor(
    public date: Date,
    public title: string,
    public slug: string,
    public summaryPath: string,
    public contentPaths: string[],
    private _tags: string[]
  ) {
    this._tags.forEach(tag => this.tags.add(tag));
  }

  hasTag(tag: string): boolean {
    return this.tags.has(tag);
  }
}

const definePost = (date: string, title: string, slug: string, sectionNames: string[], tags: string[] = []) => {
  const summaryPath = `assets/md/${slug}/summary.md`;
  const contentPaths: string[] = sectionNames.map(sectionName => {
    return `assets/md/${slug}/${sectionName}.md`;
  });
  
  posts.push(new Post(new Date(date), title, slug, summaryPath, contentPaths, tags));
};

definePost('2022-05-25T23:12:00.000Z', 'Ngx Runtime Env', 'ngx-runtime-env', ['chapter-1'], ['library']);

posts = posts.sort((a, b) => b.date.getTime() - a.date.getTime());
console.log({ posts });