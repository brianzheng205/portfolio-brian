---
title: Blog 1 - Reactive Programming Vue vs React
layout: doc
---

# Blog 1 - Reactive Programming Vue vs React

As someone who learned web development with React, I was very intrigued with the design decision differences between Vue and React for similar features, especially watchers vs useEffect.

## How To Set Reactive Variables

While Vue uses ref() to create a reactive variable, React uses useState(). Here is an example of a button with each framework. The main difference is that with Vue, you can just set toggle.value while with React, you have to initialize your reactive variable `toggle` with a corresponding setter function that you have to use if you want to change the value of `toggle`.

In Vue, it is common to use reactive() instead of ref() for objects and arrays. In react, useState() is used for both.

```vue
<script setup>
import { ref } from "vue";

const toggle = ref(true);

function toggleValue() {
  toggle.value = !toggle.value;
}
</script>

<template>
  <p>
    {{ toggle ? "On" : "Off" }}
    <button @click="toggleValue">Toggle</button>
  </p>
</template>
```

```js
import { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <p>{toggle ? "On" : "Off"}</p>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}
```

## Executing Something Once On Mount

If you want to execute some code only one time when the component first mounts in Vue, you can just put the code in the body of the script. However with React, changes in any state causes the entire code of the component to be executed again so you cannot just put the code directly into the component. Instead, you can use you useEffect with no dependencies because a useEffect triggers immediately and then when the states in its dependency array changes.

```vue
<script setup>
import { ref } from "vue";

const toggle = ref(true);

function toggleValue() {
  toggle.value = !toggle.value;
}
</script>

<template>
  <p>
    {{ toggle ? "On" : "Off" }}
    <button @click="toggleValue">Toggle</button>
  </p>
</template>
```

```js
import { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <p>{toggle ? "On" : "Off"}</p>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}
```

## Eager Watchers vs useEffect

In Vue, a watcher only executes its function when the variable changes and not when the component initially mounts. However, you can make the watcher immediately execute with `{ immediate: true }` following the function.

On the other hand, React's useEffect executes immediately by default.

```js
// https://vuejs.org/guide/essentials/watchers.html
watch(
  source,
  (newValue, oldValue) => {
    // executed immediately, then again when `source` changes
  },
  { immediate: true }
);
```

```js
useEffect(() => {
  // executed immediately, then again when `source` changes
}, [source]);
```

## Computed vs useMemo

In Vue, we can use computed to cache to value of a computation based on a reactive variable. The React equivalent is useMemo, which takes in a dependency array just like useEffect so that the value is only recalculated if a value in the dependency array is changed.

```js
// https://vuejs.org/guide/essentials/computed.html
const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});
```

```js
const [author, setAuthor] = useState({
  name: "John Doe",
  books: [
    "React - Advanced Guide",
    "React - Basic Guide",
    "React - The Mystery",
  ],
});

const publishedBooksMessage = useMemo(() => {
  return author.books.length > 0 ? "Yes" : "No";
}, [author.books]);
```
