import MyCards from '@/components/MyCards.vue'

export default {
  title: 'Components/MyCards',
  component: MyCards
}

export const Cards = {
  render: () => {
    return {
      components: {
        MyCards
      },
      template: `<MyCards />`
    }
  },

  args: [
    {
      title: '100% Gratuit',
      imagesrc: 'http://placekitten.com/485/351',
      imagealt: 'Image de chat',
      buttonLabel: 'Bouton de la card',
      prix: '10',
      note: '5.0',
      button__title: 'Add to cart'
    },

    {
      title: '100% Gratuit',
      imagesrc: 'http://placekitten.com/300/150',
      imagealt: 'Image de chat',
      buttonLabel: 'Bouton de la card',
      prix: '8',
      note: '5.0',
      button__title: 'Add to cart'
    },

    {
      title: '100% Gratuit',
      imagesrc: 'http://placekitten.com/300/150',
      imagealt: 'Image de chat',
      buttonLabel: 'Bouton de la card',
      prix: '10',
      note: '5.0',
      button__title: 'Add to cart'
    },

    {
      title: '100% Gratuit',
      imagesrc: 'http://placekitten.com/300/150',
      imagealt: 'Image de chat',
      buttonLabel: 'Bouton de la card',
      prix: '10',
      note: '5.0',
      button__title: 'Add to cart'
    },
    {
      title: '100% Gratuit',
      imagesrc: 'http://placekitten.com/300/150',
      imagealt: 'Image de chat',
      buttonLabel: 'Bouton de la card',
      prix: '10',
      note: '5.0',
      button__title: 'Add to cart'
    },

    {
      title: '100% Gratuit',
      imagesrc: 'http://placekitten.com/300/150',
      imagealt: 'Image de chat',
      buttonLabel: 'Bouton de la card',
      prix: '10',
      note: '5.0',
      button__title: 'Add to cart'
    }
  ]
}
