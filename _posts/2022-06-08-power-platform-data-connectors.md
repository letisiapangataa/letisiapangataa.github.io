---
title: "MS Power Platform Data Connectors"
header:
  overlay_color: "#000"
  overlay_filter: "0.7"
  overlay_image: https://res.cloudinary.com/louiy9obu/image/upload/v1626002590/letisias_projects_fjlv67.png
  teaser: https://res.cloudinary.com/louiy9obu/image/upload/v1626003528/500x300projects_dbt5xc.png
categories:
  - professional
  - microsoft
  - power platforms
  - build 2022
  - business processes
---

# Data Connectors

##### References

**[https://docs.microsoft.com/en-us/learn/modules/introduction-power-platform/3-data-connectors](https://docs.microsoft.com/en-us/learn/modules/introduction-power-platform/3-data-connectors)**

Microsoft Power Platform is made powerful by its ability to leverage data across many platforms. To do this, components of Microsoft Power Platform use connectors.

You can think of connectors as a bridge from your data source to your app or workflow which allows information to be conveyed back and forth. 

Connectors allow you to extend your business solutions across platforms and add functionality for your users.

# Data Sources

In order to understand the types of connectors and what you can do with them, you must first understand the types of data sources to which they connect. The two types of data sources are tabular and function-based.

**Tabular data** - A tabular data source is one that returns data in a structured table format. Power Apps can directly read and display these tables through galleries, forms, and other controls. Additionally, if the data source supports it, Power Apps can create, edit, and delete data from these data sources. Examples include Microsoft Dataverse, SharePoint, and SQL server.

**Function-based data** - A function-based data source is one that uses functions to interact with the data source. These functions can be used to return a table of data but offer more extensive action such as the ability to send an email, update permissions, or create a calendar event.

Examples include Office 365 Users, Project Online, and Azure Blob Storage.

Both of these data source types are commonly used to bring data and additional functionality to your solutions.

As you can see, connecting to data sources allows you to integrate disparate parts of your business solutions to build them out cohesively.

# Connectors

Now that you understand more about data sources, you are ready to learn about connectors.

**Connectors** are the bridges from your data source to your app, workflow, or dashboard.