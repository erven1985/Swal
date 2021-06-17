require "application_system_test_case"

class RowsTest < ApplicationSystemTestCase
  setup do
    @row = rows(:one)
  end

  test "visiting the index" do
    visit rows_url
    assert_selector "h1", text: "Rows"
  end

  test "creating a Row" do
    visit rows_url
    click_on "New Row"

    fill_in "Description", with: @row.description
    fill_in "Event date", with: @row.event_date
    click_on "Create Row"

    assert_text "Row was successfully created"
    click_on "Back"
  end

  test "updating a Row" do
    visit rows_url
    click_on "Edit", match: :first

    fill_in "Description", with: @row.description
    fill_in "Event date", with: @row.event_date
    click_on "Update Row"

    assert_text "Row was successfully updated"
    click_on "Back"
  end

  test "destroying a Row" do
    visit rows_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Row was successfully destroyed"
  end
end
