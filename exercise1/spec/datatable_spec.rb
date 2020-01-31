CSV_TEST = File.join(File.dirname(__FILE__).freeze, 'data/test.csv').freeze

RSpec.describe JungleTest::DataTable do
  subject(:datatable) { described_class.csv_to_datatable(CSV_TEST) }

  let(:headers) { %i[col1 col2 col3] }

  it 'checks the csv conversion to datatable' do
    expect(datatable).to match_array([{ col1: 'val', col2: '2', col3: 'éééé' },
                                      { col1: 'res', col2: '3', col3: 'BBBB' }])
  end

  it 'checks the csv headers matches the hash keys' do
    datatable.each do |hash|
      expect(hash.keys).to contain_exactly(*headers)
    end
  end
end
