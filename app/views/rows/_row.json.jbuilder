json.extract! row, :id, :event_date, :description, :created_at, :updated_at
json.url row_url(row, format: :json)
