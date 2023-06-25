FROM node:18-alpine

ENV NODE_OPTIONS="--max-old-space-size=8000"
COPY . /app
WORKDIR /app

RUN yarn config set httpProxy 172.67.181.120:80
RUN yarn config set httpsProxy 41.76.145.136:8080
RUN yarn install --frozen-lockfile --non-interactive --link-duplicates
RUN npx vite build

CMD ["npx", "servor", "dist", "index.html", "8000"]