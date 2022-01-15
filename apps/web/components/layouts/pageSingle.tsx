import { NextSeo } from "next-seo";
import React from "react";
import { Page } from "../../schema";
import { PageBuilderComponent } from "../pageBuilder/pageBuilder";

interface PageSingleProps {
  page: Page;
}

export default function PageSingle(pageData: PageSingleProps) {
  if (!pageData.page) {
    return <div>No Content Found</div>
  }

  const { title, description, pageBuilder } = pageData.page;
  return (
    <>
      <NextSeo title={title} description={description} />
      <PageBuilderComponent pageBuilder={pageBuilder} />
    </>
  );
}
