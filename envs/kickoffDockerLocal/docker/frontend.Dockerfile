FROM node:24-bookworm-slim AS build
ARG FRONTEND_PROJECT
WORKDIR /workspace/frontend
COPY ${FRONTEND_PROJECT}/package.json ${FRONTEND_PROJECT}/package-lock.json ./
RUN npm ci --ignore-scripts
COPY ${FRONTEND_PROJECT}/ ./
ENV AXIS_BACKOFFICE_BASE_URL=http://localhost:5300 \
    AXIS_ENTERPRISE_CODE=default \
    AXIS_PROJECT_CODE=nodics.kickoff \
    AXIS_CLIENT_CONTRACT_VERSION=1 \
    AXIS_REQUEST_TIMEOUT_MS=10000 \
    AXIS_BROWSER_SESSION_CSRF_COOKIE_NAME=nodics_axis_csrf \
    AXIS_ASSISTANT_MAXIMUM_EVENT_BYTES=65536 \
    AXIS_ASSISTANT_RECONNECT_WINDOW_MS=120000 \
    AXIS_ASSISTANT_IDLE_TIMEOUT_MS=45000 \
    AXIS_DEV_HOST=0.0.0.0 \
    AXIS_DEV_PORT=4100 \
    AXIS_STRICT_PORT=true \
    AXIS_BUILD_SOURCEMAP=false \
    NEXUS_AXIS_BASE_URL=http://localhost:4100 \
    NEXUS_PLATFORM_BASE_URL=http://localhost:5300 \
    NEXUS_ENTERPRISE_CODE=default \
    NEXUS_DEFAULT_LOCALE=en \
    NEXUS_CHANNEL=web \
    NEXUS_CLIENT_CONTRACT_VERSION=1 \
    NEXUS_REQUEST_TIMEOUT_MS=10000 \
    NEXUS_CORPORATE_HOSTS=localhost,127.0.0.1 \
    NEXUS_CORPORATE_SITE=nexusCorporateSite \
    NEXUS_DEV_HOST=0.0.0.0 \
    NEXUS_DEV_PORT=4200 \
    NEXUS_STRICT_PORT=true \
    NEXUS_BUILD_SOURCEMAP=false
RUN npm run build

FROM nginx:1.29-alpine
COPY nodics.kickoff/envs/kickoffDockerLocal/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /workspace/frontend/dist /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/run
USER nginx
