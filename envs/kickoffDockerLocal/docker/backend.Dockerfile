FROM node:24.20.0-bookworm-slim

LABEL org.opencontainers.image.title="Nodics Docker Local backend" \
      org.opencontainers.image.description="Shared immutable backend image for kickoffDockerLocal server composition"

ENV NODE_ENV=production \
    ENV=kickoffDockerLocal \
    NODICS_FRAMEWORK_ROOT=/workspace/nodics.ai

WORKDIR /workspace
COPY nodics.ai /workspace/nodics.ai
COPY nodics.kickoff /workspace/nodics.kickoff
RUN rm -rf /workspace/nodics.kickoff/envs/kickoffDockerLocal/generated
WORKDIR /workspace/nodics.ai
RUN npm install --include=dev --ignore-scripts
WORKDIR /workspace/nodics.kickoff
RUN npm install --omit=dev --ignore-scripts \
    && npm cache clean --force

# Generate runtime artifacts in the image from its own source and dependencies.
RUN set -eu; \
    for serverPackage in envs/kickoffDockerLocal/*/package.json; do \
        serverPath="${serverPackage%/package.json}"; \
        node_modules/.bin/nodics build --environment=kickoffDockerLocal --server="${serverPath##*/}" --source-only; \
    done

USER node
ENTRYPOINT ["node"]
