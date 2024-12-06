ARG NODE_VERSION=22.12.0

###### BASE ######
FROM node:${NODE_VERSION}-alpine AS base

WORKDIR /usr/src/app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN chown -R appuser:appgroup /usr/src/app

USER appuser

###### DEPS ######
FROM base AS deps

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

###### BUILD ######
FROM deps AS build

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY --chown=appuser:appgroup . .

RUN npm run build

###### DEV ######
FROM base AS dev

COPY --chown=appuser:appgroup . .

EXPOSE 3000

CMD npm install && npm run start:dev

###### PROD ######
FROM base AS prod

ENV NODE_ENV=production

# Copy package.json so that npm scripts commands can be used
COPY package.json .

# Copy the production dependencies from the deps stage
# and the built application from the build stage into the image.
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 3000

CMD npm run start