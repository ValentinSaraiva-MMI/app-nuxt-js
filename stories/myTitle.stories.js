import MyTitle from '@/components/elements/MyTitle.vue'

export default {
  title: 'Elements/MyTitle',
  component: MyTitle,
  argTypes: {
    content: {
      control: 'text'
    },

    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'p1', 'p2']
    }
  }
}

export const Title = {
  render: (args) => {
    return {
      components: {
        MyTitle
      },
      setup() {
        return { args }
      },
      template: `<MyTitle v-bind="args">Titre</MyTitle>`
    }
  },

  args: {
    content: 'TitreCarte',
    variant: 'h1'
  }
}

export const SecondaryTitle = {
  render: (args) => {
    return {
      components: {
        MyTitle
      },
      setup() {
        return { args }
      },
      template: `<MyTitle v-bind="args">Titre</MyTitle>`
    }
  },

  args: {
    content: 'TitreCarte',
    variant: 'h2'
  }
}

export const ThirdTitle = {
  render: (args) => {
    return {
      components: {
        MyTitle
      },
      setup() {
        return { args }
      },
      template: `<MyTitle v-bind="args">Titre</MyTitle>`
    }
  },

  args: {
    content: 'TitreCarte',
    variant: 'h3'
  }
}

export const FourthTitle = {
  render: (args) => {
    return {
      components: {
        MyTitle
      },
      setup() {
        return { args }
      },
      template: `<MyTitle v-bind="args">Titre</MyTitle>`
    }
  },

  args: {
    content: 'TitreCarte',
    variant: 'h4'
  }
}

export const FifthTitle = {
  render: (args) => {
    return {
      components: {
        MyTitle
      },
      setup() {
        return { args }
      },
      template: `<MyTitle v-bind="args">Titre</MyTitle>`
    }
  },

  args: {
    content: 'TitreCarte',
    variant: 'h5'
  }
}
