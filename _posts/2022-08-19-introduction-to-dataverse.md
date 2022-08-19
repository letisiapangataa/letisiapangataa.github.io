---
title: "Introduction to Dataverse"
header:
  overlay_color: "#000"
  overlay_filter: "0.7"
  overlay_image: https://res.cloudinary.com/louiy9obu/image/upload/v1626002590/letisias_projects_fjlv67.png
  teaser: https://res.cloudinary.com/louiy9obu/image/upload/v1626003528/500x300projects_dbt5xc.png
categories:
  - professional
  - microsoft
  - dataverse
---

# Introduction to Dataverse

##### References

**[https://docs.microsoft.com/en-us/learn/modules/introduction-common-data-service/1-introduction](https://docs.microsoft.com/en-us/learn/modules/introduction-common-data-service/1-introduction)**

Microsoft Dataverse is a cloud-based, low-code data service and app platform that allows you to leverage the security and connectivity of Microsoft services.

Dataverse connects easily to all aspects of Microsoft Power Platform so that you can fully control, automate, and strengthen your business. With standard tables and columns, as well as the ability to easily define relationships between your data, Dataverse was built for powerful, scalable solutions.

In this module, you will :

Explain what environments, tables, columns, annd relationships are in Microsoft Dataverse.

Describe the difference between Microsoft Dataverse and Common Data Model.

Explain use cases and limitations of business rules and process flows.

## Overview of Dataverse

Microsoft Dataverse is a cloud-based solution that easily structures a variety of data and business logic to support interconnected applications and processes in a secure and compliant manner.

Managed and maintained by Microsoft, Dataverse is available globally but deployed geographically to comply with your potential data residency. It is not designed for stand-alone use on your serves, so you will need an internet conenction to access and use it.

Dataverse is designed to be your central data repository for business data, and you might even be using it already. Behind the scenes, it powers many Microsoft Dynamics 365 solutions such as Field Service, Marketing, Customer Service and Sales.

It is also available as part of Power Apps and Power Automate with native connectivity built right in. The AI Builder and Portals features of Microsoft Power Platform also utilize Dataverse.

Below is a visualization that brings together the many offerings of Microsoft Dataverse.

![MS Diagram](https://docs.microsoft.com/en-us/learn/modules/introduction-common-data-service/media/common-data-service-diagram.png)


As you can see, Microsoft Dataverse offers a great deal of functionality. Below is a brief explanation of each category of features.

**Security :** Dataverse handles authentication with Azure Active Directory (Azure AD) to allow for conditional access and multi-factor authentication. It supports authorization down to the row and column level and provides rich auditing capabilities.

**Logic :** Dataverse allows you to easily apply business logic at the data level. Regardless of how a user is interacting with the data, the same rules apply. These rules could be related to duplicate detection, business rules, workflows, or more.

**Data :** Dataverse offers you the control to shape your data, allowing you to discover, model, validate, and report on your data. This control ensures your data looks the way you want regardless of how it is used.

**Storage :** Dataverse stores your physical data in the Azure cloud. This cloud-based storage removes the burden of worrying about where your data lives or how it scales. These concerns are all handled for you.

**Integration :** Dataverse connects in different ways to support your business needs. APIs, webhooks, eventing, and data exports give your flexibility to get data in and out.

As you can see, Microsoft Dataverse is a very powerful cloud-based solution for storing and working with your business data.

In the following sections, you will look at Microsoft Dataverse from the lens of data storage for Microsoft Power Platform, where you will start your journey.

Keep in mind the additional rich capabilities discussed above which you can explore further as your usage increases.

To get started, Microsoft Dataverse lets you create one or many cloud-based instances of a standardized database. The database includes predefined tables and columns which store data commonly found across nearly all organizations and businesses.

You can customize and extend what is stored by adding new columns or tables. The ease of setting up a Microsoft Dataverse database and standardized data model under it simplifies your ability to concentrate your efforts on building solutions without worrying about infrastructure, storage, and data integration.

With your data stored in Microsoft Dataverse, there are many different ways to access it. You can work with the data natively with tools such as Power Apps or Power Automate. Or through connectors and APIs you can connect to Microsoft Dataverse from any business solution. With the power of features such as role-based security and business rules you can trust your data is safe no matter how it is accessed.

## Microsoft Dataverse Defined

A Dataverse database is a single instance of Microsoft Dataverse which stores data in a set of standard and custom data structures called tables. A table is a logical set of rows that is used to store data. Rows within a table contain many columns to manage individual pieces of information about a single row.

You can create one or many database instances in Microsoft Dataverse to host data behind your business solutions. Each instance of a Microsoft Dataverse will start with the same set of tables to store data, but you can always extend and customize a Microsoft Dataverse database to meet specific business needs.

This means that you can share business solutions that reference standard tables in Microsoft Dataverse across your organization or with any other organization by using it anywhere in the world.

## Scalability

A Dataverse database supports large data sets and complex data models. Tables can hold millions of items, and you can extend the storage in each instance of a Microsoft Dataverse database to four (4) terabytes per instance.

The amount of data that is available in your instance of Microsoft Dataverse is based upon the number and type of licenses that are associated with it. Data storage is pooled 