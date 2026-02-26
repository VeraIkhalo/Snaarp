# Snaarp

A React dashboard app for cloud network metrics, file sharing, device management, productivity reports, and email analytics. Built with **Vite**, **TypeScript**, **styled-components**, and **Recharts**.

---

## How to run the project

### Prerequisites

- **Node.js** (v18 or newer recommended)
- **npm** (or yarn / pnpm)

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser. Vite will hot-reload on file changes.

### Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview production build locally

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Tech stack

| Area            | Technology              |
|-----------------|-------------------------|
| Framework       | React 19                |
| Build           | Vite 7                  |
| Language        | TypeScript              |
| Styling         | styled-components       |
| Charts          | Recharts                |
| Icons           | react-icons             |
| Drag and drop   | @dnd-kit (Sortable)     |

---

## Project structure

```
src/
├── App.tsx                 # Root layout (sidebar + main content)
├── main.tsx
├── index.css
└── components/
    ├── Sidebar.tsx
    ├── Header.tsx
    ├── CloudNetwork.tsx
    ├── CloudNetworkPanel.tsx   # Metrics grid + storage
    ├── FileSharingActiveUsersPanel.tsx  # Bar chart + active users
    ├── DeviceManagementDashboard.tsx    # Stat cards + device/user/email breakdowns
    ├── ProductivityReport.tsx           # Hours, days, users, web activity cards
    ├── EmailChart.tsx
    ├── MetricsGrid.tsx       # Reusable grid (configurable columns)
    ├── Storage.tsx
    └── DragDropBoard.tsx
```

---

## Challenges faced
There were some inconsistencies in the UI


