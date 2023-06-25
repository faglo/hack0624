FROM node:18-alpine

ENV NODE_OPTIONS="--max-old-space-size=8000"
COPY . /app
WORKDIR /app

RUN yarn install --frozen-lockfile --non-interactive --link-duplicates
RUN npx vite build

CMD ["npx", "servor", "dist", "index.html", "8000"]