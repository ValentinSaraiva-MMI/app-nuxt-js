import MyServiceCard from '@/components/MyServiceCard.vue'

export default {
  title: 'components/MyServiceCard',
  component: MyServiceCard,
  argTypes: {
    title: {
      control: 'text'
    },

    description: {
      control: 'text'
    },

    button__title: {
      control: 'text'
    }
    /*
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
    }
*/
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyServiceCard
      },
      setup() {
        return { args }
      },
      template: `<MyServiceCard v-bind="args"></MyServiceCard>`
    }
  },
  args: {
    title: 'titre',
    description: 'description'
    /*
    iconName: 'fleche',
    iconColor: 'primary',
    iconSize: 'big'
*/
  }
}

//plutot Nirvana ou foo fighters ?
