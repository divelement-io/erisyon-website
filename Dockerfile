FROM ruby:2.6.6

WORKDIR /app

# node 12 is the stable/ LTS release
RUN curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh  && \
    bash nodesource_setup.sh && \
    apt-get install nodejs

# Copy Ruby and Node dependencies
COPY Gemfile Gemfile.lock package.json package-lock.json ./

# Install dependencies
ENV BUNDLE_WITHOUT "debug"
RUN gem install bundler:2.1.4 && \
    bundle install && npm install

EXPOSE 4567
