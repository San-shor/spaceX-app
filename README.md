# SpaceX Landing Pads Dashboard

A web application to display and interact with SpaceX landing pad data using the SpaceX API. The app includes features such as table/grid views, a map, a doughnut chart, and data filtering.

## Live Demo

Check out the live version of the app: [SpaceX Landing Pads Dashboard](https://space-x-app-ten.vercel.app/)

---

## Features

1. **Table/Grid View**

   - Fetches all landing pad data from the SpaceX API (`https://api.spacexdata.com/v3/landpads`).
   - Displays the data in a table (list view) and a custom grid view.
   - Allows users to toggle between list and grid views.

2. **Map Integration**

   - An OpenLayers map displaying the locations of all landing pads.
   - Differentiates active and inactive landing pads visually.
   - Uses latitude and longitude to position landing pads.

3. **Doughnut Chart**

   - Displays the success rate of each landing pad.
   - Formula: `success_rate = (successful_landings / attempted_landings) * 100`.
   - Built using Flowbite's built-in chart components.

4. **Data Filtering**
   - A dropdown filter to filter landing pad data based on criteria such as:
     - Active/Inactive status
     - Landing success rate
   - Filters update the table, map, and chart views dynamically.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/spacex-landing-pads-dashboard.git
cd spacex-landing-pads-dashboard
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
