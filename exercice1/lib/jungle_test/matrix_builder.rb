module JungleTest
  # MatrixBuilder contains method to build the contents of the result matrix
  class MatrixBuilder
    def initialize(dt_job)
      @dt_job = dt_job
      @headers = {}
    end

    # retrun a hash that containt the header value
    def matrix_headers
      list_contract_types.each do |ct|
        @headers[ct.downcase.to_sym] = (ct == 'EMPTY' ? '' : ct)
      end
      @headers
    end

    # retrun a hash that contains each row of the table
    def content_line_matrix(line_total, dt_merged)
      { total: line_total }
        .merge(add_line_total(sum_by_cat_cont(dt_merged)))
        .each do |key, values|
          key = ' ' if key.nil?
          values.merge!(empty: key.to_s)
        end.values
    end

    private

    def list_contract_types
      @dt_job.map { |values| values[:contract_type] }
             .uniq.sort.unshift('EMPTY', 'TOTAL')
    end

    def add_line_total(hash)
      hash.transform_values do |job|
        job.merge(total: job.values.sum)
      end
    end

    def sum_by_cat_cont(dt_merged)
      dt_merged.group_by { |prof| prof[:category_name] }
               .transform_values do |tot|
                 tot.group_by { |job| job[:contract_type].downcase.to_sym }
                    .transform_values(&:count)
               end
    end
  end
end
