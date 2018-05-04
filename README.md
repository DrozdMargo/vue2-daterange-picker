# vue2-daterange-picker

> Vue2 date range picker base on https://github.com/dangrossman/bootstrap-daterangepicker (no jQuery)




## Installlation

``` bash
# install via npm

npm i vue2-daterange-picker-with-custom-button --save
```

## Usage

```javascript
import DateRangePicker from 'vue-daterange-picker/src/components/DateRangePicker'

export default {
    components: { DateRangePicker },
    data() {
        return {
            startDate: '2017-09-05',
            endDate: '2017-09-15',
            button: 'button title'                   
        }
    }
}
```

```html
<template>
    <date-range-picker :startDate="startDate" :endDate="endDate" @input="console.log(value)"  @cancel="openSchedules" :custom="button">
</template>
```

```
:locale-data="{ daysOfWeek: [ 'Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ] }" for locale lang
```

### Run local demo

```npm install```

```npm run dev```


added translation with
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

