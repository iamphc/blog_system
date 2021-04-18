<template>
  <el-row class="font-pick-wrapper">
    <el-table
      class="font-pick-table"
      :data="tableData"
      :row-class-name="setRowClassName">
      <el-table-column
        class="font-header"
        label="字体"
        prop="name">
      </el-table-column> 
      <el-table-column
        class="font-header"
        label="字体形式"
        prop="style">
      </el-table-column>
      <el-table-column
        class="font-header"
        label="字体操作"
        prop="operation">
        <template slot-scope="scope">
          <el-button>使用</el-button>
          <el-button type="danger">禁用</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.tableData = [
      {
        name: '字体1',
        style: '从城邦到霸王'
      },
      {
        name: '字体2',
        style: '从城邦到霸王'
      },
      {
        name: '字体3',
        style: '从城邦到霸王'
      }
    ]
  },
  methods: {
    setRowClassName({ row, rowIndex }) {
      return rowIndex % 2 === 0
        ? 'table-height-row'
        : 'table-normal-row'
    }
  }
}
</script>