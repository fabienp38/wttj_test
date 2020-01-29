RSpec.describe JungleTest::MatrixDraw do
  content_matrix = [
    { internship: 1292, full_time: 3091, apprenticeship: 423 },
    { internship: 366, apprenticeship: 100, full_time: 'AAAAAAAAA' }
  ]
  headers = {
    apprenticeship: 'APPRENTICESHIP',
    full_time: 'FULL_TIME',
    internship: 'INTERNSHIP'
  }
  column_spec_input = {
    apprenticeship: { label: 'APPRENTICESHIP', width: 14 },
    full_time: { label: 'FULL_TIME', width: 9 },
    internship: { label: 'INTERNSHIP', width: 10 }
  }
  line = { apprenticeship: 'test', full_time: '3091', internship: '1292' }

  subject(:matrix) { described_class }

  let(:column_spec) do
    {
      apprenticeship: { label: 'APPRENTICESHIP', width: 14 },
      full_time: { label: 'FULL_TIME', width: 9 },
      internship: { label: 'INTERNSHIP', width: 10 }
    }
  end

  it 'checks the column specification (width, label)' do
    expect(matrix.columns_spec(headers, content_matrix))
      .to match(column_spec)
  end

  specify do
    expect { matrix.puts_divider(column_spec_input) }
      .to output("+----------------+-----------+------------+\n").to_stdout
  end

  specify do
    expect { matrix.puts_header(column_spec_input) }
      .to output("| APPRENTICESHIP | FULL_TIME | INTERNSHIP |\n").to_stdout
  end

  specify do
    expect { matrix.puts_line(line, column_spec_input) }
      .to output("| test           | 3091      | 1292       |\n").to_stdout
  end
end
