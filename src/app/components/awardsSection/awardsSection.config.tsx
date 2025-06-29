// Import documents and images
import instagramPaper from '../../../assets/documents/instagramPaper.pdf';
import c1Certificate from '../../../assets/documents/c1Certificate.pdf';
import academicExcellence from '../../../assets/images/acedemicExcellence.jpg';

export interface AwardPillProps {
  title: string;
  description: string;
  year: number;
  organization: string;
  link: string;
}

export const AWARDS_PILLS_CONTENT: AwardPillProps[] = [
  {
    title: 'Winner - V SANTANDER INGENIO CONTEST',
    description:
      'Winner of the "V Contest SANTANDER-Ingenio Bernardo Cascales" Scholarship.',
    year: 2021,
    organization: 'Banco Santander',
    link: 'https://www.um.es/web/ari/-/entrega-premios-v-concurso-santander-ingenio-bernardo-cascales-',
  },
  {
    title:
      'Paper Released: Data Collection and Processing for Computational Learning',
    description: 'Classification of professional photographers on Instagram',
    year: 2023,
    organization: 'University of Murcia',
    link: instagramPaper,
  },
  {
    title: 'Computer Science Graduate',
    description: 'Final grade: 8.66',
    year: 2023,
    organization: 'University of Murcia',
    link: academicExcellence,
  },
  {
    title: 'Honorable Mention: Academic Excellence',
    description:
      'Certificate of Academic Excellence on the Computer Science Degree',
    year: 2023,
    organization: 'University of Murcia',
    link: academicExcellence,
  },
  {
    title: 'English C1 CEFR Level',
    description: 'C1 Advanced Level - Cambridge English Certificate',
    year: 2025,
    organization: 'Cambridge University',
    link: c1Certificate,
  },
];
