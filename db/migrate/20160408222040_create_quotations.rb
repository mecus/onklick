class CreateQuotations < ActiveRecord::Migration
  def change
    create_table :quotations do |t|
      t.string :name
      t.string :company
      t.string :email
      t.string :telephone
      t.text :message

      t.timestamps null: false
    end
  end
end
