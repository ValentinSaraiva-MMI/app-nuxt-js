import MyFavoriteCard from '@/components/MyFavoriteCard.vue'

export default {
  title: 'components/MyFavoriteCard',
  component: MyFavoriteCard,
  argTypes: {
    title: {
      control: 'text'
    },

    description: {
      control: 'text'
    },
    imagesrc: {
      control: 'text'
    },
    imagealt: {
      control: 'text'
    },

    monnaie: {
      control: 'select',
      options: ['$', '€']
    },

    iconName: {
      control: 'select',
      options: ['default', 'fleche']
    },
    iconSize: {
      control: 'select',
      options: ['default', 'big']
    },
    iconColor: {
      control: 'select',
      options: ['default', 'primary']
    },
    iconDirection: {
      control: 'select',
      options: ['default', 'primary']
    }
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyFavoriteCard
      },
      setup() {
        return { args }
      },
      template: `<MyFavoriteCard v-bind="args"></MyFavoriteCard>`
    }
  },
  args: {
    prix: '9.15',
    title: 'titre',
    description: 'description',
    imagesrc: '/image/burger.png',
    imagealt: 'Carte représentant les articles favoris, présent dans le hero de la page.',
    monnaie: '$',

    iconName: 'fleche',
    iconColor: 'primary',
    iconSize: 'big',
    iconDirection: 'big'
  }
}
