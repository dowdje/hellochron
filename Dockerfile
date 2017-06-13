FROM node:7.7.4

# =========================================================================
# Variables
ENV APP_DIR hellochron
# =========================================================================

# Create app directory
RUN mkdir -p /usr/src/${APP_DIR}
WORKDIR /usr/src/${APP_DIR}

# Bundle app source
COPY . /usr/src/${APP_DIR}

# Build the app
RUN npm install

# Run app
CMD ["npm", "start"]