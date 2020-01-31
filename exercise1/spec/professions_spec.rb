RSpec.describe JungleTest::Professions do
  datatable_prof = [
    { id: '1', category_name: 'cat1', col: 'aaaa' },
    { id: '1', category_name: 'cat1', col: 'aaaa' },
    { id: '3', category_name: 'cat2', col: 'aaaa' },
  ]

  datatable_job = [
    { profession_id: '1', contract_type: 'cont1', col: 'aaaa' },
    { profession_id: '3', contract_type: 'cont3', col: 'aaaa' },
  ]

  datatable_merged = [
    { id: '1', contract_type: 'cont1', col: 'aaaa', category_name: 'cat1' },
    { id: '1', contract_type: 'cont1', col: 'aaaa', category_name: 'cat1' },
    { id: '3', contract_type: 'cont3', col: 'aaaa', category_name: 'cat3' },
    { id: '', contract_type: 'cont4', col: 'aaaa', category_name: nil },
    { id: '5', contract_type: 'cont5', col: 'aaaa', category_name: nil }
  ]

  subject(:professions) { described_class.new(datatable_prof) }

  let(:hash_total) { { cont1: 2, cont3: 1, cont4: 1, cont5: 1, total: 5 } }

  let(:array_merged) do
    [
      { profession_id: '1', contract_type: 'cont1',
        col: 'aaaa', category_name: 'cat1' },
      { profession_id: '3', contract_type: 'cont3',
        col: 'aaaa', category_name: 'cat2' }
    ]
  end

  it 'checks the merge of category for each line of datatable' do
    expect(professions.merge_prof_contract(datatable_job))
      .to match(array_merged)
  end

  it 'checks the calcul of total by contract type' do
    expect(professions.total_by_contract_type(datatable_merged))
      .to match(hash_total)
  end
end
