import caminoSantiago from '../../../assets/images/personalGallery/caminoSantiago.jpg';
import kayak from '../../../assets/images/personalGallery/kayak.jpg';
import sierraEspuna from '../../../assets/images/personalGallery/sierraEspuna.jpg';
import vigo from '../../../assets/images/personalGallery/vigo.jpg';
import { ImageProps } from '../gallery/gallery';

export const PERSONAL_SECTION_DATA: ImageProps[] = [
  {
    title: 'caminoSantiago',
    url: caminoSantiago,
    description: 'First day of the Camino de Santiago',
  },
  {
    title: 'kayak',
    url: kayak,
    description: 'Kayaking in the Tarnita Lake, Romania',
  },
  {
    title: 'Sierra Espuna',
    url: sierraEspuna,
    description: 'Camping on Sierra Espuna, Murcia',
  },
  {
    title: 'PyCon',
    url: vigo,
    description: 'PyCon Conference with my coworkers in Vigo, Spain',
  },
];
