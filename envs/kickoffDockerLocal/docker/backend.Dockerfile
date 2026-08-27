FROM node:24-bookworm-slim

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

USER node
ENTRYPOINT ["node"]
