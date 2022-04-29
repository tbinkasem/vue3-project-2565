<template>
  <ui-card>
    <template #title>
      Student List
    </template>
    <ui-table :rows="studentList" :cols="columns">
      <template #gender="{ row }">
        <span class="icon" :title="row.gender">{{ row.gender === 'M' ? 'male' : 'female' }}</span>
      </template>
      <template #fullname="{ row }">
        {{ row.fname }} {{ row.lname }}
      </template>
      <template #actions="{ row }">
        <ui-button @click="doEdit(row)">
          Edit
        </ui-button>
        <ui-button>Del</ui-button>
      </template>
    </ui-table>
  </ui-card>
</template>

<script>
export default {
  data() {
    const studentList = []
    for (let i = 0; i < 10; i++) {
      studentList.push({
        id: i + 1,
        code: `6501${String(i + 1).padStart(4, '0')}`,
        fname: `Name ${i + 1}`,
        lname: `Lname ${i + 1}`,
        age: 25 + i,
        gender: Math.random() < 0.5 ? 'M' : 'F',
      })
    }
    return {
      studentList,
      columns: [
        { id: 'code', text: 'Student Code' },
        { id: 'fullname', text: 'Student Name' },
        { id: 'gender', text: 'Gender' },
        { id: 'actions', text: 'Actions' },
      ],
    }
  },
}
</script>
