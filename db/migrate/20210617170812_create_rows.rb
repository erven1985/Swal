class CreateRows < ActiveRecord::Migration[6.0]
  def change
    create_table :rows do |t|
      t.date :event_date
      t.text :description

      t.timestamps
    end
  end
end
