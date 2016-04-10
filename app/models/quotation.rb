class Quotation < ActiveRecord::Base
	validates :name, :company, :email, presence: true
end
