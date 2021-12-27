type ProjectType = {
  id: string;
  title: string;
  icon: string;
  goals: string;
  gallery: { image: string; description: string }[];
  development: string[];
  video: string;
};
export default ProjectType;
