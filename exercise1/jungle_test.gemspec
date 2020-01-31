Gem::Specification.new do |s|
  s.name        = 'jungle_test'
  s.version     = '0.0.2'
  s.licenses    = ['MIT']
  s.summary     = 'Jungle Test gem'
  s.description = 'Jungle Test generate a matric from two csv files'
  s.authors     = ['fabienp38']
  s.email       = 'fabienpipard@gmail.com'
  s.files       = ['lib/jungle_test.rb']
  s.homepage    = 'https://github.com/fabienp38/jungle_test/tree/master/exercise1'
  s.metadata    = { 'source_code_uri' =>
                       'https://github.com/fabienp38/jungle_test' }
  s.add_dependency('csv', '~>3.1.2')
  s.add_dependency('fileutils', '~>1.4.1')
end
