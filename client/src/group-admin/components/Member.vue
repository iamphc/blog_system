<template>
  <el-row class="member-wrapper">
    <el-table
      class="member-table"
      :data="tableData"
      :row-class-name="setRowClassName">
      <el-table-column
        class="date"
        label="注册日期"
        prop="date"> 
      </el-table-column>
      <el-table-column
        class="member"
        label="组员"
        prop="member"> 
      </el-table-column> 
      <el-table-column
        class="operation"
        label="操作"
        prop="operation"> 
        <template slot-scope="scope">
          <el-button type="danger">删除成员</el-button>
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
        date: '2020.02.01',
        member: 'admin'
      },
      {
        date: '2020.05.01',
        member: 'member'
      }
    ]
  },
  methods: {
    setRowClassName({ row, rowIndex } = {}) {
      return rowIndex % 2 === 0
        ? 'table-height-row'
        : 'table-normal-row'
    }
  }
}
</script>