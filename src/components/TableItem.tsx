import React from 'react'

type Props = {}

const TableItem = (props: Props) => {
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
        <div>
          <h2 class="font-medium text-gray-800 ">Catalog</h2>
          <p class="text-sm font-normal text-gray-600 da">catalogapp.io</p>
        </div>
      </td>
      <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
        <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60">
          Customer
        </div>
      </td>
      <td class="px-4 py-4 text-sm whitespace-nowrap">
        <div>
          <h4 class="text-gray-700">Content curating app</h4>
          <p class="text-gray-500">Brings all your news into one place</p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
        <h2 class="font-medium text-gray-800">Catalog</h2>
        <p class="text-sm font-normal text-gray-600">catalogapp.io</p>
      </td>
    </tr>
  )
}

export default TableItem
