# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Webpack
activate :external_pipeline,
 name: :webpack,
 command: build? ?
   "npm run build" :
   "npm start",
 source: ".tmp/dist",
 latency: 1

# Reload the browser automatically whenever files change
activate :livereload, host: '0.0.0.0', port: '1234'

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# Dev environment
configure :development do
 config[:css_dir] = ".tmp/dist"
 config[:js_dir] = ".tmp/dist"
end

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end

activate :s3_sync do |s3_sync|
  s3_sync.bucket = 'erisyon.manas.dev'
  s3_sync.region = 'us-east-1'
  s3_sync.delete = true
  s3_sync.after_build = false
  s3_sync.prefer_gzip = false
  s3_sync.path_style = true
  s3_sync.reduced_redundancy_storage = false
  s3_sync.acl = 'public-read'
  s3_sync.encryption = false
  s3_sync.prefix = ''
  s3_sync.version_bucket = false
  s3_sync.index_document = 'index.html'
end
