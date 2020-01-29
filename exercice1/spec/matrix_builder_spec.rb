RSpec.describe JungleTest::MatrixBuilder do
  dt_jobs = [
    { id: '1', contract_type: 'INTERN', col: 'aaaa' },
    { id: '2', contract_type: 'FULL_TIME', col: 'aaaa' },
    { id: '3', contract_type: 'FULL_TIME', col: 'aaaa' },
    { id: '4', contract_type: 'INTERN', col: 'aaaa' }
  ]

  subject(:matrix) { described_class.new(dt_jobs) }

  let(:headers) do
    %w[EMPTY TOTAL FULL_TIME INTERN]
  end

  it 'checks the matrix headers' do
    expect(matrix.matrix_headers)
      .to match(headers)
  end
end
