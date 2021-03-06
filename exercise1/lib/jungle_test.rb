require 'jungle_test/datatable'
require 'jungle_test/professions'
require 'jungle_test/matrix_builder'
require 'jungle_test/matrix_draw'
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
      # This function returns a hash with hearders and content of table
      def build_content_matrix
        # Initialize datatable for two csv files
        dt_p = JungleTest::DataTable.csv_to_datatable(CSV_PROF)
        dt_j = JungleTest::DataTable.csv_to_datatable(CSV_CAT_JOBS)

        # Create hash that contains profession category by id
        cat = JungleTest::Professions.new(dt_p)
        dt_merged = cat.merge_prof_contract(dt_j)

        # Create hash that contains the first line (total) of the table
        line_total = cat.total_by_contract_type(dt_merged)
        mat = JungleTest::MatrixBuilder.new(dt_merged)
        content = mat.content_line_matrix(line_total, dt_merged)
        headers = mat.matrix_headers
        { headers: headers, content: content }
      end

      def draw_headers(columns_info)
        JungleTest::MatrixDraw.puts_divider(columns_info)
        JungleTest::MatrixDraw.puts_header(columns_info)
        JungleTest::MatrixDraw.puts_divider(columns_info)
      end

      def execute
        headers = build_content_matrix[:headers]
        content = build_content_matrix[:content]
        columns_info = JungleTest::MatrixDraw.columns_spec(headers, content)
        draw_headers(columns_info)
        res = {}
        content.each do |ct|
          headers.each_key { |key| res[key] = ct[key].to_s.upcase }
          JungleTest::MatrixDraw.puts_line(res, columns_info)
        end
        JungleTest::MatrixDraw.puts_divider(columns_info)
      end
    end
  end
end
