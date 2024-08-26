---
layout: center
---

<div class="grid grid-cols-3 gap-4 w-full">
  <div class="col-span-2">
<!-- Use with slidev poll component addon
<Poll question="What is your favorite color ?" 
:correctAnswer="[0]"
:controlled="true"
 :clearable="true" 
 displayResults="poll">

```js
() => 'Red';
```

```js
() => 'Green';
```

```js
() => 'Blue';
```


</Poll>
-->

# What is your favorite color ?
  
  </div>


  <div class="col-span-1">
<QrCodeCurrentSlide
    :width="300"
    :height="300"
    color="blue"
/>
</div>
</div>