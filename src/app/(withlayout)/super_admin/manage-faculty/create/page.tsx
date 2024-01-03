"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
const CreateFacultyPage = () => {
  const base = "super_admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-faculty", link: `/${base}/manage-faculty` },
        ]}
      />
      <h1>CreateFaculty</h1>
    </div>
  );
};

export default CreateFacultyPage;
