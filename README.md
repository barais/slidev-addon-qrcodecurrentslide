# slidev-addon-qrcodecurrentslide

QR-Code component for [sli.dev](https://sli.dev/) with default url to current location (used for poll) (fork of [kravetsone/slidev-addon-qrcode](https://github.com/kravetsone/slidev-addon-qrcode) )

![example](https://raw.githubusercontent.com/kravetsone/slidev-addon-qrcode/main/example-export/001.png)

```md
---
layout: center
addons:
    - slidev-addon-qrcodecurrentslide
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
```

## Installation

```bash
npm i slidev-addon-qrcodecurrentslide
```

### Usage

-   Define this addon in `frontmatter`

```yaml
addons:
    - slidev-addon-qrcodecurrentslide
```

-   or in `package.json`

```json
 "slidev": {
    "addons": [
      "slidev-addon-qrcodecurrentslide"
    ]
  },
```

## Components

### QRCode

```vue
<QrCodeCurrentSlide
    :width="300"
    :height="300"
    color="blue"
    image="logo.svg"
/>
<!-- logo must be pushed in public folder -->
```

Props for the components are the [following](https://github.com/barais/slidev-addon-qrcodecurrentslide/blob/main/components/QrCodeCurrentSlide.vue#L11)

```ts

interface QRCodeOption { 
    width : number,
    height: number,
    color: string,
    image:string,
    type: string,
    margin:number
    dotsType:DotType,
    data:string
}

const props = withDefaults(defineProps<QRCodeOption>(), {
    width: 200,
    height: 200,
    color:"blue",
    image : "logo.svg",
    margin: 5,
    dotsType: "extra-rounded",
    data:window.location.href
});

```


> Find more about options in [qr-code-styling repo](https://github.com/kozakdenys/qr-code-styling/tree/master?tab=readme-ov-file#qrcodestyling-instance)

## Thanks

-   [qr-code-styling](https://github.com/kozakdenys/qr-code-styling) - this addon use it under the hood
