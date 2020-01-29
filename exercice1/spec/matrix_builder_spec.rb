RSpec.describe JungleTest::MatrixBuilder do
  dt_jobs = [
    { id: '1', contract_type: 'INTERN', col: 'aaaa' },
    { id: '2', contract_type: 'FULL_TIME', col: 'aaaa' },
    { id: '3', contract_type: 'FULL_TIME', col: 'aaaa' },
    { id: '4', contract_type: 'INTERN', col: 'aaaa' }
  ]

  dt_merged = [
    { id: '1', contract_type: 'internship', col: 'aaa', category_name: 'TECH' },
    { id: '1', contract_type: 'internship', col: 'aaa', category_name: 'TECH' },
    { id: '3', contract_type: 'apprenticeship', col: 'aaaa',
      category_name: 'ENGINEER' },
    { id: '', contract_type: 'full_time', col: 'aaaa', category_name: nil },
    { id: '5', contract_type: 'freelance', col: 'aaaa', category_name: nil }
  ]

  line_total = { internship: 1292, full_time: 3091, apprenticeship: 423,
                 freelance: 38, total: 5069 }

  subject(:matrix) { described_class.new(dt_jobs) }

  let(:headers) do
    { empty: '', full_time: 'FULL_TIME', intern: 'INTERN', total: 'TOTAL' }
  end

  let(:content) do
    [{ internship: 1292, full_time: 3091, apprenticeship: 423, empty: 'total',
       freelance: 38, total: 5069 },
     { empty: 'TECH', internship: 2, total: 2 },
     { apprenticeship: 1, empty: 'ENGINEER', total: 1 },
     { empty: ' ', freelance: 1, full_time: 1, total: 2 }]
  end

  it 'checks the matrix headers' do
    expect(matrix.matrix_headers)
      .to match(headers)
  end

  it 'checks the matrix content' do
    expect(matrix.content_line_matrix(line_total, dt_merged))
      .to  match(content)
  end
end
