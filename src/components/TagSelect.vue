<template>
  <a-select
    show-search
    placeholder="添加一个标签"
    option-filter-prop="children"
    style="width: 200px"
    :filter-option="filterOption"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  >
    <a-select-option value="jack">
      Jack
    </a-select-option>
    <a-select-option value="lucy">
      Lucy
    </a-select-option>
    <a-select-option value="tom">
      Tom
    </a-select-option>
  </a-select>
</template>
<script>
export default {
    name: 'TagSelect',
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log('blur');
    },
    handleFocus() {
      console.log('focus');
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
  },
};
</script>
