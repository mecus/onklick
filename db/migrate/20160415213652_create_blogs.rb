class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :excerpt
      t.attachment :image
      t.text :contents

      t.timestamps null: false
    end
  end
end
