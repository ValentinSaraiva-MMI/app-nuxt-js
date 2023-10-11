<template>
  <main class="layout">
    <header class="layout__header">
      <slot name="header"></slot>
    </header>
    <aside class="layout__aside">
      <slot name="aside"></slot>
    </aside>
    <article class="layout__article">
      <slot></slot>
    </article>
    <footer class="layout__footer">
      <slot name="footer"></slot>
    </footer>
  </main>
</template>

<script></script>

<style lang="scss" scoped>
.layout {
  display: grid;
  height: 100vh;
  grid-template:
    'header'
    'article'
    'aside'
    'footer';

  @include medium-up {
    grid-template:
      'header header header'
      'aside article article'
      'footer footer footer';
  }

  > * {
    padding: 16px;
  }

  &__header {
    padding: rem(16px);
    background-color: red;
    grid-area: header;
  }

  &__article {
    padding: rem(16px);
    background-color: purple;
    grid-area: article;
  }

  &__aside {
    grid-area: aside;
    background-color: blue;
  }

  &__footer {
    grid-area: footer;
    background-color: rgb(21, 255, 0);
  }
}
</style>
