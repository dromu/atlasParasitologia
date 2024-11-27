export const parasites = {
  'giardia-lamblia': {
    name: 'Giardia lamblia',
    type: 'Protozoo',
    images: [
      {
        url: '/images/giardia1.jpg',
        description: 'Trofozoíto de Giardia lamblia visto al microscopio óptico. Se observa su característica forma de lágrima y los dos núcleos.'
      },
      {
        url: '/images/giardia2.jpg',
        description: 'Quiste de Giardia lamblia. Nótese la forma ovalada y la presencia de cuatro núcleos en su interior.'
      },
      {
        url: '/images/giardia3.jpg',
        description: 'Colonización del intestino delgado por Giardia lamblia. Se pueden observar múltiples trofozoítos adheridos a la superficie del epitelio intestinal.'
      }
    ]
  },
  'entamoeba-histolytica': {
    name: 'Entamoeba histolytica',
    type: 'Protozoo',
    images: [
      {
        url: '/images/Entamoeba_hitolytica1.jpg',
        description: 'Trofozoíto de Entamoeba histolytica con un glóbulo rojo fagocitado, característica distintiva de esta especie.'
      },
      {
        url: '/images/Entamoeba_hitolytica2.jpg',
        description: 'Quiste maduro de Entamoeba histolytica con cuatro núcleos visibles.'
      },
      {
        url: '/images/Entamoeba_hitolytica3.jpg',
        description: 'Úlcera amebiana en el colon, causada por la invasión de Entamoeba histolytica en la mucosa intestinal.'
      }
    ]
  },
  'cryptosporidium-parvum': {
    name: 'Cryptosporidium parvum',
    type: 'Protozoo',
    images: [
      {
        url: '/images/Cryptosporidium1.jpg',
        description: 'Ooquistes de Cryptosporidium parvum. Se observan estructuras esféricas con una pared resistente.'
      },
      {
        url: '/images/Cryptosporidium2.jpg',
        description: 'Infección por Cryptosporidium parvum en el intestino delgado. Se observan múltiples ooquistes en la luz intestinal.'
      },
      {
        url: '/images/Cryptosporidium3.jpg',
        description: 'Microfotografía electrónica de un ooquiste de Cryptosporidium parvum, mostrando detalles de su estructura.'
      }
    ]
  },
  'ascaris-lumbricoides': {
    name: 'Ascaris lumbricoides',
    type: 'Helminto',
    images: [
      {
        url: '/images/ascarisLum1.jpg',
        description: 'Adulto de Ascaris lumbricoides hembra. Se observa su tamaño considerable y su forma cilíndrica.'
      },
      {
        url: '/images/ascarisLum2.jpg',
        description: 'Huevos de Ascaris lumbricoides. Se observan huevos fértiles y no fértiles.'
      },
      {
        url: '/images/ascarisLum3.jpg',
        description: 'Ascaris lumbricoides adulto en el intestino delgado. Se observa su gran tamaño en relación con el intestino.'
      }
    ]
  },
  'taenia-solium': {
    name: 'Taenia solium',
    type: 'Helminto',
    images: [
      {
        url: '/images/taenia1.jpg',
        description: 'Proglótide grávida de Taenia solium. Se observan los numerosos huevos en su interior.'
      },
      {
        url: '/images/taenia2.jpg',
        description: 'Huevos de Taenia solium. Se observan los embriones hexacanto en su interior.'
      },
      {
        url: '/images/taenia3.jpg',
        description: 'Cisticerco de Taenia solium en el tejido muscular. Se observa la vesícula llena de líquido y el escólex invaginado.'
      }
    ]
  },
  'trichuris-trichiura': {
    name: 'Trichuris trichiura',
    type: 'Helminto',
    images: [
      {
        url: '/images/trichurisTri1.jpg',
        description: 'Adulto de Trichuris trichiura. Se observa su forma característica de látigo.'
      },
      {
        url: '/images/trichurisTri2.jpg',
        description: 'Huevos de Trichuris trichiura. Se observan los huevos con sus tapones polares.'
      },
      {
        url: '/images/trichurisTri3.jpg',
        description: 'Trichuris trichiura adulto en el intestino grueso. Se observa su extremo anterior incrustado en la mucosa intestinal.'
      }
    ]
  },

}

export type Parasite = {
  name: string;
  type: 'Protozoo' | 'Helminto';
  images: Array<{
    url: string;
    description: string;
  }>;
}

export type ParasiteId = keyof typeof parasites;

