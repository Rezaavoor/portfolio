export default interface ContentType {
  data: {
    title: string;
    description: string;
    image: string;
    techStack: string;
    link: string;
    source: string;
    slug: string;
  };
  content: string;
}
