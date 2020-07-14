FROM ruby:2.6.6

WORKDIR /app

RUN curl -sL https://deb.nodesource.com/setup_13.x -o nodesource_setup.sh  && \
    bash nodesource_setup.sh && \
    apt install nodejs

# Copy Ruby and Node dependencies
COPY Gemfile Gemfile.lock package.json package-lock.json ./

# Install dependencies
RUN gem install bundler:2.1.4 && \
    bundle install --without debug && npm install

EXPOSE 4567
