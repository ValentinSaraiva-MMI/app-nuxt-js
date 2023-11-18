import MyIcon from '@/components/elements/MyIcon.vue'

export default {
  title: 'Elements/MyIcon',
  component: MyIcon,
  argTypes: {
    name: {
      control: 'select',
      options: [
        'community',
        'ecosysteme',
        'documentation',
        'support',
        'camion',
        'ustencile',
        'ustencile_crossed',
        'facebook',
        'twitter',
        'linkedin',
        'instagram',
        'play',
        'fleche',
        'chevron',
        'bag',
        'search',
        'clock',
        'phone',
        'star'
      ]
    },

    size: {
      control: 'select',
      options: ['default', 'big']
    },

    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'white', 'dark']
    },

    direction: {
      control: 'select',
      options: ['default', 'reverse']
    }
  }
}

export const IconDefault = {
  render: (args) => {
    return {
      components: {
        MyIcon
      },
      setup() {
        return { args }
      },
      template: `<MyIcon v-bind="args"></MyIcon>`
    }
  },
  args: {
    variant: 'default',
    size: 'default',
    color: 'default'
  }
}

export const PrimaryIcon = {
  render: (args) => {
    return {
      components: {
        MyIcon
      },
      setup() {
        return { args }
      },
      template: `<MyIcon v-bind="args"></MyIcon>`
    }
  },

  args: {
    size: 'default',
    variant: 'primary',
    color: 'primary'
  }
}

export const SecondaryIcon = {
  render: (args) => {
    return {
      components: {
        MyIcon
      },
      setup() {
        return { args }
      },
      template: `<MyIcon v-bind="args"></MyIcon>`
    }
  },

  args: {
    size: 'default',
    variant: 'default',
    color: 'secondary'
  }
}

export const BigSecondaryIcon = {
  render: (args) => {
    return {
      components: {
        MyIcon
      },
      setup() {
        return { args }
      },
      template: `<MyIcon v-bind="args"></MyIcon>`
    }
  },

  args: {
    size: 'big',
    variant: 'default',
    color: 'secondary'
  }
}

export const DarkIcon = {
  render: (args) => {
    return {
      components: {
        MyIcon
      },
      setup() {
        return { args }
      },
      template: `<MyIcon v-bind="args"></MyIcon>`
    }
  },

  args: {
    size: 'default',
    variant: 'default',
    color: 'dark'
  }
}

export const WhiteIcon = {
  render: (args) => {
    return {
      components: {
        MyIcon
      },
      setup() {
        return { args }
      },
      template: `<MyIcon v-bind="args"></MyIcon>`
    }
  },

  args: {
    size: 'default',
    variant: 'default',
    color: 'white'
  }
}

export const ReverseIcon = {
  render: (args) => {
    return {
      components: {
        MyIcon
      },
      setup() {
        return { args }
      },
      template: `<MyIcon v-bind="args"></MyIcon>`
    }
  },

  args: {
    size: 'default',
    variant: 'default',
    color: 'default',
    direction: 'reverse'
  }
}
