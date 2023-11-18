import MyCard from '@/components/MyCard.vue'

export default {
  title: 'components/MyCard',
  component: MyCard,
  argTypes: {
    imagesrc: {
      control: 'text'
    },
    imagealt: {
      control: 'text'
    },

    title: {
      control: 'text'
    },

    Description: {
      control: 'text'
    },

    button__title: {
      control: 'text'
    }
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyCard
      },
      setup() {
        return { args }
      },
      template: `<MyCard v-bind="args"></MyCard>`
    }
  },
  args: {
    imagesrc: 'http://placekitten.com/g/485/333',
    title: 'titre',
    Description: 'description',
    imagealt: 'alt img',
    button__title: 'Add To Cart',
    prix: '$15.00',
    note: '4.9'
  }
}
