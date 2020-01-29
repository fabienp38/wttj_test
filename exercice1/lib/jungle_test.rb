require 'jungle_test/version'
require 'jungle_test/datatable'
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
        dt_prof = JungleTest::DataTable.csv_to_datatable(CSV_PROF)
        dt_cat_job = JungleTest::DataTable.csv_to_datatable(CSV_CAT_JOBS)
      end
    end
  end
end
