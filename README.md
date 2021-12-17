![License](https://img.shields.io/github/license/jobsonita/rocketseat-yt-cd-113-node-backend?color=blue)
![Node version](https://img.shields.io/badge/node-v14.18.0-brightgreen)
![Yarn version](https://img.shields.io/badge/yarn-v1.22.15-brightgreen)
![Express version](https://img.shields.io/github/package-json/dependency-version/jobsonita/rocketseat-yt-cd-113-node-backend/express)
![Typescript version](https://img.shields.io/badge/typescript-^4.5.4-lightgrey)
![TypeORM version](https://img.shields.io/badge/typeorm-^0.2.41-brightgreen)

# :rocket::seat: Code/drops #113 - Node Backend - Express, TypeORM and PostgreSQL :outbox_tray:

A simple Node/Express backend using TypeORM and PostgreSQL. Project based on [CRUD com Node.JS, Express, TypeORM e PostgreSQL - CodeDrops #113](https://www.youtube.com/watch?v=9AO2hZJsHrs).

## :hammer: Status

> :white_check_mark: Finished :lock:

## :bookmark: Content Table
<!--ts-->
  * [Results](#newspaper-results)
  * [Technologies](#books-technologies)
  * [Install and Run](#calling-installing-and-running-this-project)
  * [Author and License](#memo-author-and-license)
<!--te-->

## :newspaper: Results

<details>
  <summary>Creating a category</summary>
  <p align="center"><img alt="Category creation request" title="Category creation request" src="./.github/cd_113_1_create_category.png"/></p>
</details>
<details>
  <summary>Error case: repeated category</summary>
  <p align="center"><img alt="Failed duplicate category creation" title="Failed duplicate category creation" src="./.github/cd_113_2_create_category_repeated.png"/></p>
</details>
<details>
  <summary>Listing all available categories</summary>
  <p align="center"><img alt="Category list request" title="Category list request" src="./.github/cd_113_3_list_all_categories.png"/></p>
</details>
<details>
  <summary>Updating a category</summary>
  <p align="center"><img alt="Category update request" title="Category update request" src="./.github/cd_113_4_update_category.png"/></p>
</details>
<details>
  <summary>Deleting a category</summary>
  <p align="center"><img alt="Category deletion request" title="Category deletion request" src="./.github/cd_113_5_delete_category.png"/></p>
</details>
<details>
  <summary>Creating a video</summary>
  <p align="center"><img alt="Video creation request" title="Video creation request" src="./.github/cd_113_6_create_video.png"/></p>
</details>
<details>
  <summary>Listing all available videos</summary>
  <p align="center"><img alt="Video list request" title="Video list request" src="./.github/cd_113_7_list_all_videos.png"/></p>
</details>
<details>
  <summary>Deleting a category</summary>
  <p align="center"><img alt="Video deletion request" title="Video deletion request" src="./.github/cd_113_8_delete_video.png"/></p>
</details>
<details>
  <summary>Listing remaining videos (empty)</summary>
  <p align="center"><img alt="Video listing request" title="Video listing request" src="./.github/cd_113_9_list_all_videos.png"/></p>
</details>

## :books: Technologies

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Insomnia.REST](https://insomnia.rest/)

## :calling: Installing and running this project

### :wrench: Prerequisites

Before starting, make sure you have [Git](https://git-scm.com/), [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed. It's also recommended to have [Insomnia](https://insomnia.rest/) installed in order to perform manual tests in the final step of these instructions.

This project is intended for use with a [PostgreSQL](https://www.postgresql.org/) database. Make sure to create a `.env` file with your credentials following the pattern in `.env.example` in order to configure the connection to your local database.

### :inbox_tray: Installation

Clone the project using Git and install its dependencies through Yarn:

```bash
git clone https://github.com/jobsonita/rocketseat-yt-cd-113-node-backend.git

# wait for git to finish clonning the project, then navigate to the folder and install the dependencies:

cd rocketseat-yt-cd-113-node-backend

yarn
```

After this is done, create a copy of the file `.env.example` (or just rename it) as `.env` and fill it properly.

Finally, run the migrations:

```bash
yarn typeorm migration:run
```

### :traffic_light: Execution

With the project installed and configured, run:

```bash
yarn dev
```

### :mag: Testing

Open Insomnia, import the [Insomnia requests file](tools/Insomnia_Requests.json) and execute the available requests. Use your preferred database administration tool to check your database. If everything is configured correctly, you should see the data being modified according to your requests.

## :memo: Author and License

[![Author: jobsonita](https://avatars.githubusercontent.com/u/1463583?s=48&v=4)](https://github.com/jobsonita/jobsonita) | [Jobson Gilberto](https://github.com/jobsonita/jobsonita)
-|-

[![License](https://img.shields.io/github/license/jobsonita/rocketseat-yt-cd-113-node-backend)](LICENSE)
