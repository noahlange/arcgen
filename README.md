# arcgen

A collection of things to help randomly generate populate a cyberpunky megastructure.

The most important implementation detail in the random generation here is that it tries to enforce content stability independently of
generation order. If you generate 15 rooms with one seed, you should get the same 15 rooms with the same seed, regardless of when or
where you generate them. (As far as I am aware, this is still an issue in [Eigengrau's Generator](https://eigengrausgenerator.com) which, along with [Stars Without Number](https://www.drivethrurpg.com/product/226996/Stars-Without-Number-Revised-Edition), is the
primary inspiration here.)

Includes a partial dataset from [philipperemy/name-dataset](https://github.com/philipperemy/name-dataset), filtering out all names outside the top 500 per country.

## To-do

- text generation
- character-organization mapping
- personality traits, distinctive characteristics
- family groups, relationships, kids

## Features

### Groups & Organizations

- types (e.g., corporation, criminal, religious, social)
- SWN-style tags
  - for groups (e.g., "violent", "wealthy", "local")
  - for corps (e.g., "intel", "goods")
  - for crime (.e.g, "drugs", "arms", "gambling")
  - for ideologies (e.g., "theocratic", "neoliberal")

### Characters

- physique, with height, weight and BMIs roughly approximating real-world data
- ethnicity/country of origin
- name, determined by ethnicity/immigrant generation
- languages, with modified odds of multilinguality for 1-3 generation immigrants.
- sexuality, again with approximated data
- religious affiliations with denominations and sects (WIP)
- RPG stats, for my RPG but D&D 5e-able without too much trouble
  - stat-determined "role" (e.g., "muscle", "hacker", "medic")
