class CreateWorks < ActiveRecord::Migration
  def change
    create_table :works do |t|
      t.string :client
      t.string :job_type
      t.attachment :image
      t.string :industry
      t.text :description

      t.timestamps null: false
    end
  end
end
