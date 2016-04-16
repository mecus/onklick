json.array!(@blogs) do |blog|
  json.extract! blog, :id, :title, :excerpt, :image, :content.text
  json.url blog_url(blog, format: :json)
end
