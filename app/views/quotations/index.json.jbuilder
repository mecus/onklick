json.array!(@quotations) do |quotation|
  json.extract! quotation, :id, :name, :company, :email, :telephone, :message
  json.url quotation_url(quotation, format: :json)
end
