<template>
  <table border="1" class="w-full">
    <thead class="bg-blue-600 text-white">
      <tr>
        <th
          v-for="col in cols"
          :key="col.id"
        >
          {{ col.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in rows"
        :key="row.id"
        class="bg-blue-50 even:(bg-white)"
      >
        <td
          v-for="col in cols"
          :key="col.id"
          class="px-2"
        >
          <slot :name="col.id" :row="row" :col="col">
            {{ row[col.id] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    rows: {
      type: Array,
      default() {
        return [
          { id: 111, code: '6501001', name: 'Name 1', age: 25 },
        ]
      },
    },
    cols: {
      type: Array,
      default() {
        return [
          { id: 'code', text: 'รหัสนักเรียน', width: '100px' },
          { id: 'name', text: 'ชื่อ - นามสกุล' },
        ]
      },
    },
  },
}
</script>
