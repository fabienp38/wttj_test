# frozen_string_literal: true

require_relative 'lib/jungle_test/version'

Gem::Specification.new do |spec|
  spec.name          = 'jungle_test'
  spec.version       = JungleTest::VERSION
  spec.authors       = ['fabienp38']
  spec.email         = ['fabienpipard@gmail.com']

  spec.summary       = 'Jungle Test gem'
  spec.description   = 'Jungle Test generate a matric from two csv files'
  spec.homepage      = 'https://github.com/fabienp38/jungle_test/tree/master/exercice1'
  spec.required_ruby_version = Gem::Requirement.new('>= 2.3.0')

  spec.metadata['allowed_push_host'] = "TODO: Set to 'http://mygemserver.com'"

  spec.metadata['homepage_uri'] = spec.homepage

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem
  # that have been added into git.
  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    `git ls-files -z`.split('\x0')
                     .reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.bindir = 'exe'
  spec.executables = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ['lib']

  # Runtime dependencies
  spec.add.runtime_dependency 'fileutils'
  spec.add.runtime_dependency 'csv'
end
