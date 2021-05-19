export interface ContentItem {
  id: number;
  title: string;
  children?: Array<ContentItem>;
}
