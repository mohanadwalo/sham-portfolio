type EducationType = {
  id: string;
  startDate: Date;
  endDate: Date;
  location: string;
  subject: string;
  university: string;
  description: string;
  projects: { id: string; title: string }[];
  courses: string[];
};

type ExperienceType = {
  id: string;
  startDate: Date;
  endDate: Date;
  location: string;
  companyName: string;
  companyDescription: string;
  projects: { id: string; title: string }[];
  tasks: string[];
};
type AboutType = {
  education: EducationType[];
  experience: ExperienceType[];
};
export default AboutType;
