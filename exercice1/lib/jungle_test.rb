require 'jungle_test/version'
require 'jungle_test/datatable'

ROOT = File.dirname(__FILE__).freeze
CSV_PROF = File.join(ROOT, '../data/technical-test-professions.csv')
               .freeze
CSV_JOBS = File.join(ROOT, '../data/technical-test-jobs.csv')
               .freeze

module JungleTest
  # Runner Class for the JungleTest gem
  class Runner
    class << self
      def execute
        p 'toto'
      end
    end
  end
end
