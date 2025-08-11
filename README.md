This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


# Service Request API

This document outlines the expected data structure for the new service request form.

## New Service Request

- **Endpoint:** `/api/service-request`
- **Method:** `POST`
- **Data Format:** `JSON`

### Form Data

| Field                | Type      | Description                                      | Required |
| -------------------- | --------- | ------------------------------------------------ | -------- |
| `serviceCategory`    | `string`  | The selected category of the service.            | Yes      |
| `subCategory`        | `string`  | The selected sub-category of the service.        | Yes      |
| `title`              | `string`  | The title of the project.                        | Yes      |
| `description`        | `string`  | A detailed description of the project.           | Yes      |
| `businessIndustry`   | `string`  | The industry of the business.                    | No       |
| `existingUrl`        | `string`  | An existing URL related to the project.          | No       |
| `attachedFiles`      | `string[]`   | An array of files attached to the request.    | No       |
| `desiredStartDate`   | `string`  | The desired start date for the project.          | Yes      |
| `expectedDelivery`   | `string`  | The expected delivery date for the project.      | Yes      |
| `budgetRange`        | `string`  | The budget range for the project.                | Yes      |

## Login

- **Endpoint:** `/api/login`
- **Method:** `POST`
- **Data Format:** `JSON`

### Form Data

| Field      | Type     | Description                  | Required |
| ---------- | -------- | ---------------------------- | -------- |
| `email`    | `string` | The user's email address.    | Yes      |
| `password` | `string` | The user's password.         | Yes      |
