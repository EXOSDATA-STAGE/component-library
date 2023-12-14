import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { ColumnDef } from "@tanstack/react-table";

const meta = {
  title: "Table",
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
  {
    accessorKey: "userName",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "status",
    header: "Status",
    filterFn: "equals",
  },
  {
    accessorKey: "unityPrice",
    header: "Unity Price",
    filterFn: "weakEquals",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    filterFn: "weakEquals",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
];

const data = [
  {
    _id: "6465ee07c880a233a856b461",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    product: "6465e887cbc34f8354380adc",
    status: "pending",
    createdAt: "2023-05-18T09:21:11.863Z",
    updatedAt: "2023-05-18T09:21:11.863Z",
    __v: 0,
  },
  {
    _id: "6465ee0dc880a233a856b464",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    product: "6465e887cbc34f8354380adc",
    status: "verified",
    createdAt: "2023-05-18T09:21:17.119Z",
    updatedAt: "2023-05-18T09:21:17.119Z",
    __v: 0,
  },
  {
    _id: "6465ee17c880a233a856b467",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    product: "6465e887cbc34f8354380adc",
    status: "pending",
    createdAt: "2023-05-18T09:21:27.601Z",
    updatedAt: "2023-05-18T09:21:27.601Z",
    __v: 0,
  },
  {
    _id: "6465ee35c064d004c01e9431",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    product: "6465e887cbc34f8354380adc",
    status: "unverified",
    createdAt: "2023-05-18T09:21:57.902Z",
    updatedAt: "2023-05-18T09:21:57.902Z",
    __v: 0,
  },
  {
    _id: "64664848869e5a2feb02098a",
    userName: "Hassan Al Meftah",
    phone: "0644679856",
    unityPrice: 200,
    quantity: 3,
    product: "64663e3a869e5a2feb020937",
    status: "verified",
    createdAt: "2023-05-18T15:46:16.093Z",
    updatedAt: "2023-05-18T15:46:16.093Z",
    __v: 0,
  },
];
export const Default: Story = {
  args: {
    columns: columns as ColumnDef<
      {
        [x: string]: {};
      },
      any
    >[],
    data: data,
    pageSize: 7,
    filterColumns: ["userName", "phone", "status"],
  },
};
