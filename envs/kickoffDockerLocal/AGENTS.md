# Kickoff Docker Local Agent Contract

The backend image runs the standard selected-server builds against the source
and dependencies inside the image. Keep host-generated server code outside its
build context so generated imports resolve within the container.

- Follow the Nodics Kickoff project contract from the repository root `AGENTS.md`.
- Follow every ancestor `AGENTS.md` before changing this group boundary.
- This package owns only the responsibilities declared in `package.json.nodics.owns`.
- Keep reusable framework behavior in Nodics framework modules and project-specific behavior in the correct Kickoff module, environment, server, data, or test boundary.
- Keep `README.md` concise and module-level; detailed publishable documentation belongs in the owning documentation/content-pack source.
