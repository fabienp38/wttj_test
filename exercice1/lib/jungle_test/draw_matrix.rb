module JungleTest
  # In this class we find the method to print the result matrix in the console
  class DrawMatrix
    class << self
      def puts_header(columns)
        puts "| #{columns.map { |_, g| g[:label].ljust(g[:width]) }
                          .join(' | ')} |"
      end

      def puts_divider(columns)
        puts "+-#{columns.map { |_, g| '-' * g[:width] }
                          .join('-+-')}-+"
      end

      def puts_line(line, columns)
        str = line.keys.map { |k| line[k].ljust(columns[k][:width]) }
                  .join(' | ')
        puts "| #{str} |"
      end

      def columns_spec(headers, contents)
        headers.each_with_object({}) do |(col, label), h|
          h[col] = { label: label, width: [contents.map do |g|
                                             g[col].to_s.size
                                           end.max, label.size].max }
        end
      end
    end
  end
end
