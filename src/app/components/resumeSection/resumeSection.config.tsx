import escudoUM from '../../../assets/images/escudoUM.jpg';
import cyberdatalab from '../../../assets/images/cyberdatalab.jpeg';
import feverLogo from '../../../assets/images/feverLogo.jpeg';
import { Props as ResumeStageProps } from './resumeStage/resumeStage';

export const RESUME_STAGES_DATA: ResumeStageProps[] = [
  {
    date: 'Sep 2019 - Jun 2023',
    title: 'Computer Science Student',
    organization: 'University of Murcia',
    organizationLogo: escudoUM,
    description: `Scientific and technological studies in the field of Computer Science, 
      leading to an adequate preparation for professional practice in the development 
      and application of information and communication technologies (ICT).`,
    stages: [
      {
        title: 'Study Exchange',
        description: `Full academic year in English at Universitatea Babeș-Bolyai 
        in Cluj-Napoca`,
        date: ' Sep 2021 - Jun 2022',
      },
      {
        title: 'Mention in Computational Learning',
        description: `Coursed the Computational Learning specialization on the last year 
        of the degree, learning about ML and their applications in the real world.`,
        date: ' Sep 2022 - Jun 2023',
      },
    ],
  },
  {
    date: 'Mar 2023 - Sep 2023',
    title: 'Research Intern',
    organization: 'Cybersecurity & Data Science Lab',
    organizationLogo: cyberdatalab,
    description: `Collaboration scholarship for the realization of my TFG, oriented to 
    the extraction of Instagram users, analysis/processing of their data and finally, 
    classifying them through Machine Learning techniques, while contributing in other 
    projects of the research group.`,
  },
  {
    date: 'Oct 2023 - Now',
    title: 'Software Engineer',
    organization: 'Fever',
    organizationLogo: feverLogo,
    stages: [
      {
        title: 'Intern Software Engineer',
        description: `Internship mentored by an experienced developer. I mainly learned Backend Development, 
        using Django and applying DDD, Hexagonal Architecture, Design Patterns and many other approaches to 
        create clean and easily maintainable code. I also had the opportunity to learn Frontend concepts, 
        working with Angular.`,
        date: 'Oct 2023 - March 2024',
      },
      {
        title: 'Junior Software Engineer',
        description: `Creation and improvement of features in websites of different partners, from the 
        structuring of the initial idea to its implementation in both Frontend and Backend.`,
        date: 'April 2024 - March 2026',
      },
      {
        title: 'Mid Software Engineer',
        description: `Leading the design, planning and delivery of features for large-scale partners such as 
        the London Eye and Madame Tussauds, coordinating the developers involved and supporting the 
        onboarding of new teammates.`,
        date: 'April 2026 - Now',
      },
    ],
  },
];
