class Blog < ActiveRecord::Base
	has_attached_file :image, styles: { large: "1200x700>", medium: "400x600>", thumb: "100x100>" }
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
	# validates :contents, presence: true
	belongs_to :admin
end
