# Adding Projects

Add new portfolio projects in `projects.ts`.

1. Copy one existing object inside the `projects` array.
2. Change `slug` to a short URL-safe value, for example `crm-reporting-tool`.
3. Fill in `title`, `description`, `tags` and the `detail` texts.
4. Choose one `visualVariant`: `workflow`, `dashboard`, `bpmn` or `tool`.
5. Optional: set `featured: true` on one project to highlight it on the homepage.
6. The detail page is created automatically at `/projekte/<slug>`.

Keep each `slug` unique. If you later add real screenshots, put them in `frontend/public/projects/<slug>/` and reference them from the project object.
