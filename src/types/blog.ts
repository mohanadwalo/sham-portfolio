type BlogType = {
  tags: string[];
  blogs: {
    id: string;
    icon: string;
    title: string;
    date: string;
    banner: string;
    subNav: [{ id: string; title: string }];
    sections: {
      id: string;
      title: string;
      descriptions: {
        text: string;
        commands: string[];
        list: string[];
        image: string;
      }[];
    }[];
    tags: string[];
  }[];
};
export default BlogType;
