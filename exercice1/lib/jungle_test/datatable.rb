module JungleTest
  # Datatable Class contains method to generate datatable from csv file
  class DataTable
    class << self
      def csv_to_datatable(path_csv_file)
        CSV.open(path_csv_file, headers: true, header_converters: :symbol)
           .map(&:to_h)
      end
    end
  end
end
