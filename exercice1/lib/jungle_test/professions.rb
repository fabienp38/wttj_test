module JungleTest
  # Professions Class contains method to get a hash of profession per id
  class Professions
    attr_accessor :category_name, :professions

    def initialize(datatable_professions)
      @id = 'id'
      @category = 'category_name'.to_sym
      @profession_id = 'profession_id'.to_sym
      @contract_type = 'contract_type'.to_sym
      @dt_prof = datatable_professions
    end

    # Add category profession to for each line of the datatable jobs.
    def merge_prof_contract(datatable_jobs)
      datatable_jobs.map do |job|
        job.merge(@category => prof_by_id[job[@profession_id]])
      end
    end

    # Sum total for each contract type, and the global sum
    def total_by_contract_type(dt_merged)
      res = dt_merged.group_by { |job| job[@contract_type].downcase.to_sym }
                     .transform_values(&:count)
      res.merge(total: res.values.sum)
    end

    private

    # Return a hash of profession group by id
    def prof_by_id
      @dt_prof.group_by { |prof| prof[@id.to_sym] }
              .transform_values { |prof| prof.first[@category] }
    end
  end
end
