export interface PostMetaData {
  date: string;
  title: string;
  slug: string;
  description: string;
  sectionNames: string[];
  tags: string[];
  summary: string;
  codeblocks: { [key: string]: string };
}
