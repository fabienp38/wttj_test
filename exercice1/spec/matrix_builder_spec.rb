RSpec.describe JungleTest::MatrixBuilder do
  dt_jobs = [
    { id: '1', contract_type: 'INTERN', col: 'aaaa' },
    { id: '2', contract_type: 'FULL_TIME', col: 'aaaa' },
    { id: '3', contract_type: 'FULL_TIME', col: 'aaaa' },
    { id: '4', contract_type: 'INTERN', col: 'aaaa' }
  ]

  subject(:matrix) { described_class.new(dt_jobs) }

  let(:headers) do
    { empty: '', full_time: 'FULL_TIME', intern: 'INTERN', total: 'TOTAL' }
  end

  it 'checks the matrix headers' do
    expect(matrix.matrix_headers)
      .to match(headers)
  end
end
