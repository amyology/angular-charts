class CreateVisits < ActiveRecord::Migration[5.0]
  def change
    create_table :visits do |t|
      t.string :ip
      t.string :country
      t.string :state
      t.string :city
      t.string :postal_code

      t.timestamps
    end
  end
end
