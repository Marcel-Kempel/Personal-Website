# Backend

No backend is configured yet.

The portfolio currently uses `mailto:` links for contact. Add API routes, server functions or form handling here only when a real backend contact flow is needed.

## Security Notes for Future Backend Work

- Do not add state-changing `POST`, `PUT`, `PATCH` or `DELETE` endpoints without CSRF protection.
- Use `Secure`, `HttpOnly` and `SameSite=Lax` or `SameSite=Strict` cookies for sessions.
- Generate CSRF tokens on the server, bind them to the user session and validate them on every state-changing request.
- Reject requests with missing, invalid or reused tokens.
- Keep CORS closed by default and allow only the production frontend origin when needed.
- Validate and normalize all incoming data on the server, even when the frontend already validates it.
