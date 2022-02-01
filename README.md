# Branching Strategy

A project should at least have the following branches
    • master
    • develop
    • feature

## To execute Tests
# must have

    - node js installed 
    - Any JS supported ide

# to install reqiured dependencies, run following command in the root folder

    npm install 


###### IMPORTANT ##################

#### To run tests on Operating System other than Windows you can follow -- Section B, and if you are on Windows follow -- Section A  ########

#### SECTION A #########
# RUN following command in the root folder, which will execute the tests

    npm test


## Also, there are number of other commands in package.json file in scripts object
# you can use those commands as follows

    npm run name_of_command


#### SECTION B #########
# RUN following command in the root folder, which will execute the tests

    npm run non-windows-os-test


## Also, there are number of other commands in package.json file in scripts object

    To use those commands remove "set" and use "export" keyword in package.json file in scripts

# And then you can use those commands as follows

    npm run name_of_command



