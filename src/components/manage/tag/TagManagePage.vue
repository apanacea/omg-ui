<template>
  <div>
    <a-page-header
        style="padding: 0 0 10px 0; border-bottom: 1px solid rgb(235, 237, 240)"
        title="标签管理"
        sub-title="添加或修改已有的标签信息"
    />

    <div style="padding: 24px 0 24px 0">
      <a-button type="primary">
        添加
      </a-button>
    </div>
<!--    <PerformerDrawer style="padding-bottom: 24px; padding-top: 24px"/>-->
    <a-table
        bordered
        :data-source="dataSource"
        :columns="columns">
      <template slot="operation" slot-scope="text, record">
        <a-space>
<!--          <PerformerDrawer/>-->
          <a-popconfirm
              v-if="dataSource.length"
              title="确定要删除吗?"
              @confirm="() => onDelete(record.id)"
          >
            <a-button type="danger">
              删除
            </a-button>
            <!--            <a href="javascript:;">删除</a>-->
          </a-popconfirm>
        </a-space>

      </template>
    </a-table>
  </div>
</template>

<script>
// import PerformerDrawer from './PerformerDrawer.vue'

export default {
  name: 'TagManagePage',
  components: {
    // PerformerDrawer
  },
  created() {
    this.$axios.get(this.$urls.selectTags)
        .then((resp) => {
          console.log(resp.data);
          this.dataSource = resp.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
  data() {
    return {
      dataSource: [],
      count: 0,
      columns: [
        {
          title: 'id',
          dataIndex: 'id',
        },
        {
          title: '标签名',
          dataIndex: 'name',
        },
        {
          title: '标签类型',
          dataIndex: 'type',
        },
        {
          title: '操作',
          dataIndex: 'operation',
          scopedSlots: {customRender: 'operation'},
        },
      ],
    };
  },
  methods: {
    onDelete(id) {
      console.log(id);
      this.$axios({
        url: this.$urls.deleteTag + id,
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        }
      })
          .then((resp) => {
            console.log(resp.data);
            this.flashTable();
          })
          .catch((error) => {
            console.log(error)
          })
    },
    flashTable() {
      this.$axios.get(this.$urls.selectTags)
          .then((resp) => {
            this.dataSource = resp.data
          })
          .catch((error) => {
            console.log(error)
          })
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
