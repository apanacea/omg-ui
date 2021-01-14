<template>
  <div>
    <PerformerDrawer style="padding-bottom: 24px"/>
    <a-table bordered :data-source="dataSource" :columns="columns">
      <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
      </template>
      <template slot="operation" slot-scope="text, record">
          <a-space> 
        <a href="javascript:;">编辑</a>
        <a-popconfirm
          v-if="dataSource.length"
          title="确定要删除吗?"
          @confirm="() => onDelete(record.key)"
        >
          <a href="javascript:;">删除</a>
        </a-popconfirm>
          </a-space>
        
      </template>
    </a-table>
  </div>
</template>

<script>
import PerformerDrawer from './PerformerDrawer.vue'

const EditableCell = {
  template: `
      <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper">
          <a-input :value="value" @change="handleChange" @pressEnter="check" /><a-icon
            type="check"
            class="editable-cell-icon-check"
            @click="check"
          />
        </div>
        <div v-else class="editable-cell-text-wrapper">
          {{ value || ' ' }}
          <a-icon type="edit" class="editable-cell-icon" @click="edit" />
        </div>
      </div>
    `,
  props: {
    text: String,
  },
  data() {
    return {
      value: this.text,
      editable: false,
    };
  },
  methods: {
    handleChange(e) {
      const value = e.target.value;
      this.value = value;
    },
    check() {
      this.editable = false;
      this.$emit('change', this.value);
    },
    edit() {
      this.editable = true;
    },
  },
};
export default {
    name: 'PerformerTable',
    components: {
    EditableCell,
    PerformerDrawer
  },
  created() {
      this.$axios.get('http://localhost:8081/api/performers')
      .then((resp) => {
        console.log(resp.data);
        this.dataSource=resp.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  data() {
    return {
      dataSource: [
      ],
      count: 0,
      columns: [
        {
          title: 'id',
          dataIndex: 'id',
        },
        {
          title: '中文名',
          dataIndex: 'nameZh',
        //   width: '30%',
        //   scopedSlots: { customRender: 'name' },
        },
        {
          title: '日文名',
          dataIndex: 'nameJa',
        //   width: '30%',
        //   scopedSlots: { customRender: 'name' },
        },
        {
          title: '英文名',
          dataIndex: 'nameEn',
        //   width: '30%',
        //   scopedSlots: { customRender: 'name' },
        },
        {
          title: 'level',
          dataIndex: 'level',
        },
        {
          title: '头像链接',
          dataIndex: 'avatarSrc',
        },
        {
          title: '操作',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' },
        },
      ],
    };
  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },
    handleAdd() {
      const { count, dataSource } = this;
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        age: 32,
        address: `London, Park Lane no. ${count}`,
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    },
  },
};
</script>
<style>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
