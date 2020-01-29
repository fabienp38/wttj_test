CSV_TEST = File.join(File.dirname(__FILE__).freeze, 'data/test.csv').freeze

RSpec.describe JungleTest::DataTable do
  it 'checks the csv conversion to datatable' do
    expect(JungleTest::DataTable.csv_to_datatable(CSV_TEST)).to match([
      a_hash_including(col1: 'val', col2: '2', col3: 'AAAA'),
      a_hash_including(col1:'res', col2: '3', col3: 'BBBB')
    ])
  end
end