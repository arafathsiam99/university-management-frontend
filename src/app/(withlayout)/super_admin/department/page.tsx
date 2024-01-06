"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { DeleteOutlined,EditOutlined,EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import UMTable from "@/components/ui/UMTable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { useState } from "react";

const ManageDepartmentPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  // const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data, isLoading } = useDepartmentsQuery({ ...query });

  const departments = data?.departments;
  const meta = data?.meta;

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      sorter: true
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
         <>
           <Button
            onClick={() => {
              console.log(data);
            }}
            type="primary"
            
          >
            <EyeOutlined /> 
          </Button>
          <Button style={{
            margin:"0 5px"
          }}
            onClick={() => {
              console.log(data);
            }}
            type="primary"
            
          >
            <EditOutlined />
          </Button>
          <Button
            onClick={() => {
              console.log(data);
            }}
            type="primary"
            danger
          >
            <DeleteOutlined />
          </Button>
         </>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <h1>Department List</h1>
      <Link href="/super_admin/department/create">
        <Button type="primary">Create</Button>
      </Link>
      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={departments}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageDepartmentPage;
