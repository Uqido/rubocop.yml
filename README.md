# Uqido Linters Config

This repository contains some linter configurations for the linter tools used in Uqido.

# How to use these rule set

## Rubocop

* In your project's root create a new file named `.rubocop.yml`

* Add to `.rubocop.yml` the `inherit_from` rule like this to inherit from the main rubocop configuration:

    ```yaml
    inherit_from:
      - https://raw.githubusercontent.com/Uqido/uqido-linters-config/master/.rubocop.yml
    ```

* If you use another Rubocop version (eg. 0.80), you have to specify another rule set

    ```yaml
    inherit_from:
      - https://raw.githubusercontent.com/Uqido/uqido-linters-config/master/.rubocop.0.80.yml
    ```

* Then, add below the `inherit_from` rule your custom rule set.

### Example of .rubocop.yml

```yaml
inherit_from:
  - https://raw.githubusercontent.com/Uqido/uqido-linters-config/master/.rubocop.yml
AllCops:
  TargetRubyVersion: '2.6.6'
  Include:
    - Gemfile
    - Rakefile
    - config.ru
    - lib/**/*.rake
    - spec/**/*
  Exclude:
    - db/schema.rb
    - db/migrate/*.*
    - Capfile
    - tmp/**/*.*
    - spec/**/*.csv
    - spec/**/*.json
    - spec/**/*.xlsx
    - spec/**/*.js

# Your rules below ..

Layout/LineLength:
  Enabled: true
  Max: 160

Metrics/BlockLength:
  ExcludedMethods: ['describe', 'context']
```
