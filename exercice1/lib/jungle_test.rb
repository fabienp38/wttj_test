require 'jungle_test/version'
require 'jungle_test/datatable'
require 'jungle_test/professions'
require 'jungle_test/matrix_builder'
require 'fileutils'
require 'csv'

ROOT = File.dirname(__FILE__).freeze
CSV_PROF = File.join(ROOT, '../data/technical-test-professions.csv')
               .freeze
CSV_CAT_JOBS = File.join(ROOT, '../data/technical-test-jobs.csv')
                   .freeze

module JungleTest
  # Runner Class for the JungleTest gem
  class Runner
    class << self
      def execute
        # Initialize datatable for two csv files
        dt_p = JungleTest::DataTable.csv_to_datatable(CSV_PROF)
        dt_j = JungleTest::DataTable.csv_to_datatable(CSV_CAT_JOBS)

        # Create hash that contains profession category by id
        cat = JungleTest::Professions.new(dt_p)
        dt_merged = cat.merge_prof_contract(dt_j)
        line_total = cat.total_by_contract_type(dt_merged)
        mat = JungleTest::MatrixBuilder.new(dt_merged)
        mat.content_line_matrix(line_total, dt_merged)
      end
    end
  end
end
