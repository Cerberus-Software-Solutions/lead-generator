var quizQuestions = [
    //first question
    {
        firstQuestion: [
            {
                question: "What type of car are you looking for?",
                answers: [
                    {
                        type: "pathOne",
                        content: "Car"
                    },

                    {
                        type: "pathTwo",
                        content: "Truck"
                    },

                    {
                        type: "pathOne",
                        content: "SUV"
                    },

                    {
                        type: "pathThree",
                        content: "New Hyundai"
                    }
                ],
            }
        ],
        //PATH IF CAR OR SUV PICKED
        pathOne: [
            {
                question: "New or Used?",
                prev: "firstQuestion",
                answers: [
                    {
                        type: "pathOne",
                        content: "New"
                    },
        
                    {
                        type: "pathOne",
                        content: "Used"
                    }
                ]
            },
            {
                question: "Gas or Hybrid/Electric?",
                prev: "pathOne",
                answers: [
                    {
                        type: "pathOneGasPath",
                        content: "Gas"
                    },
        
                    {
                        type: "pathOneHybrid",
                        content: "Hybrid/Electric"
                    }
                ]
            },
        ],
        pathOneGasPath: [
            {
                question: "Monthly Budget?",
                prev: "pathOne",
                hasInput: true,
                inputContent: "Prefer to pay in cash? Enter the full amount below",
                answers: [
                    {
                        type: "pathOneGasPath",
                        content: "Less than 200"
                    },
        
                    {
                        type: "pathOneGasPath",
                        content: "200-300"
                    },
                    {
                        type: "pathOneGasPath",
                        content: "300-400"
                    },
        
                    {
                        type: "pathOneGasPath",
                        content: "400-500"
                    },
                    {
                        type: "pathOneGasPath",
                        content: "500-600"
                    },
        
                    {
                        type: "pathOneGasPath",
                        content: "More than 600"
                    },
                ]
            },
            {
                question: "Are you trading in a vehicle?",
                prev: "pathOneGasPath",
                answers: [
                    {
                        type: "pathOneGasPath",
                        content: "Yes"
                    },
                    {
                        type: "pathOneGasPath",
                        content: "No"
                    }
                ]
            },
            {
                question: "Choose one of the following:",
                prev: "pathOneGasPath",
                answers: [
                    {
                        type: "pathOneGasPath",
                        content: "Import"
                    },
        
                    {
                        type: "pathOneGasPath",
                        content: "Domestic (North America)"
                    },
                    {
                        type: "pathOneGasPath",
                        content: "European"
                    }
                ]
            },
            {
                question: "What year were you looking for?",
                prev: "pathOneGasPath",
                answers: [
                    {
                        type: "pathOneGasPath",
                        content: "2014-2015"
                    },
                    {
                        type: "pathOneGasPath",
                        content: "2016-2017"
                    },
                    {
                        type: "pathOneGasPath",
                        content: "2018-2019"
                    },
                    {
                        type: "pathOneGasPath",
                        content: "2020-2021+"
                    }
                ]
            },
            {
                question: "What mileage do you expect?",
                prev: "pathOneGasPath",
                answers: [
                    {
                        type: "pathOneGasPath",
                        content: "0-20 000"
                    },
                    {
                        type: "pathOneGasPath",
                        content: "30 000-60 000"
                    },
                    {
                        type: "pathOneGasPath",
                        content: "70 000-100 000"
                    },
                    {
                        type: "pathOneGasPath",
                        content: "More than 100 000"
                    }
                ]
            },
            {
                question: "What features/packages are you looking for?",
                prev: "pathOneGasPath",
                hasInput: true,
                inputContent: "Got a trim/model in mind? Describe it below",
                answers: [
                    {
                        type: "pathOneGasPath",
                        content: "Basic",
                        packageOptions: [
                            "-try to type! big chungus",
                            "Big Chungus1",
                            "a",
                            "b"
                        ]
                    },
        
                    {
                        type: "pathOneGasPath",
                        content: "Middle",
                        packageOptions: [
                            "-try to type!",
                            "Big Chungus2"
                        ]
                    },
                    {
                        type: "pathOneGasPath",
                        content: "Loaded",
                        packageOptions: [
                            "-try to type!",
                            "Big Chungus3"
                        ]
                    }
                ]
            },
            {
                question: "When were you looking to purchase?",
                prev: "pathOneGasPath",
                answers: [
                    {
                        type: "pathOneGasPath",
                        content: "Less than a week"
                    },
        
                    {
                        type: "pathOneGasPath",
                        content: "2 weeks"
                    },
        
                    {
                        type: "pathOneGasPath",
                        content: "1 month"
                    },
        
                    {
                        type: "pathOneGasPath",
                        content: "More than a month"
                    }
                ]
            },
            {
                question: "Please provide your contact information",
                prev: "pathOneGasPath",
                answers: [
                    {
                        type: "Done",
                        content: "Name"
                    },
                    {
                        type: "Done",
                        content: "Phone number"
                    },
                    {
                        type: "Done",
                        content: "Email"
                    }
                ]
            }
        ],
        //PATH FOR IF THEY PICK HYBRID/ELECTRIC
        pathOneHybrid: [
            {
                question: "Which type are you looking for?",
                prev: "pathOne",
                answers: [
                    {
                        type: "pathOneHybrid",
                        content: "Hybrid"
                    },
        
                    {
                        type: "pathOneHybrid",
                        content: "Plug in Hybrid"
                    },
                    {
                        type: "pathOneHybrid",
                        content: "Electric"
                    }
                ]
            },
            {
                question: "Choose one of the following:",
                prev: "pathOneHybrid",
                answers: [
                    {
                        type: "pathOneHybrid",
                        content: "Import"
                    },
        
                    {
                        type: "pathOneHybrid",
                        content: "Domestic (North America)"
                    },
                    {
                        type: "pathOneHybrid",
                        content: "European"
                    }
                ]
            },
            {
                question: "Monthly Budget?",
                prev: "pathOneHybrid",
                hasInput: true,
                inputContent: "Prefer to pay in cash? Enter the full amount below",
                answers: [
                    {
                        type: "pathOneHybrid",
                        content: "Less than 200"
                    },
        
                    {
                        type: "pathOneHybrid",
                        content: "200-300"
                    },
                    {
                        type: "pathOneHybrid",
                        content: "300-400"
                    },
        
                    {
                        type: "pathOneHybrid",
                        content: "400-500"
                    },
                    {
                        type: "pathOneHybrid",
                        content: "500-600"
                    },
        
                    {
                        type: "pathOneHybrid",
                        content: "More than 600"
                    },
                ]
            },
            {
                question: "Are you trading in a vehicle?",
                prev: "pathOneHybrid",
                answers: [
                    {
                        type: "pathOneHybrid",
                        content: "Yes"
                    },
        
                    {
                        type: "pathOneHybrid",
                        content: "No"
                    }
                ]
            },
            {
                question: "What year were you looking for?",
                prev: "pathOneHybrid",
                answers: [
                    {
                        type: "pathOneHybrid",
                        content: "2014-2015"
                    },
                    {
                        type: "pathOneHybrid",
                        content: "2016-2017"
                    },
                    {
                        type: "pathOneHybrid",
                        content: "2018-2019"
                    },
                    {
                        type: "pathOneHybrid",
                        content: "2020-2021+"
                    }
                ]
            },
            {
                question: "What mileage do you expect?",
                prev: "pathOneHybrid",
                answers: [
                    {
                        type: "pathOneHybrid",
                        content: "0-20 000"
                    },
                    {
                        type: "pathOneHybrid",
                        content: "30 000-60 000"
                    },
                    {
                        type: "pathOneHybrid",
                        content: "70 000-100 000"
                    },
                    {
                        type: "pathOneHybrid",
                        content: "More than 100 000"
                    }
                ]
            },
            {
                question: "What features/packages are you looking for?",
                prev: "pathOneHybrid",
                hasInput: true,
                inputContent: "Got a trim/model in mind? Describe it below",
                answers: [
                    {
                        type: "pathOneHybrid",
                        content: "Basic",
                        packageOptions: [
                            "-try to type! big chungus",
                            "Big Chungus1",
                            "a",
                            "b"
                        ]
                    },
        
                    {
                        type: "pathOneHybrid",
                        content: "Middle",
                        packageOptions: [
                            "-try to type!",
                            "Big Chungus2"
                        ]
                    },
                    {
                        type: "pathOneHybrid",
                        content: "Loaded",
                        packageOptions: [
                            "-try to type!",
                            "Big Chungus3"
                        ]
                    }
                ]
            },
            {
                question: "When were you looking to purchase?",
                prev: "pathOneHybrid",
                answers: [
                    {
                        type: "pathOneHybrid",
                        content: "Less than a week"
                    },
        
                    {
                        type: "pathOneHybrid",
                        content: "2 weeks"
                    },
        
                    {
                        type: "pathOneHybrid",
                        content: "1 month"
                    },
        
                    {
                        type: "pathOneHybrid",
                        content: "More than a month"
                    }
                ]
            },
            {
                question: "Placeholder for last question",
                prev: "pathOneHybrid",
                answers: [
                    {
                        type: "Done",
                        content: "Basic"
                    },
        
                    {
                        type: "Done",
                        content: "Middle"
                    },
                    {
                        type: "Done",
                        content: "Loaded"
                    }
                ]
            }
        ],
        pathTwo: [
            {
                question: "New or Used?",
                prev: "firstQuestion",
                answers: [
                    {
                        type: "pathTwo",
                        content: "New"
                    },
        
                    {
                        type: "pathTwo",
                        content: "Used"
                    }
                ]
            },
            {
                question: "Monthly Budget?",
                prev: "pathTwo",
                hasInput: true,
                inputContent: "Prefer to pay in cash? Enter the full amount below",
                answers: [
                    {
                        type: "pathTwo",
                        content: "350-450"
                    },
        
                    {
                        type: "pathTwo",
                        content: "500-550"
                    },
                    {
                        type: "pathTwo",
                        content: "600-700"
                    },
        
                    {
                        type: "pathTwo",
                        content: "800-1000+"
                    },
                ]
            },
            {
                question: "Are you trading in a vehicle?",
                prev: "pathTwo",
                answers: [
                    {
                        type: "pathTwo",
                        content: "Yes"
                    },
        
                    {
                        type: "pathTwo",
                        content: "No"
                    }
                ]
            },
            {
                question: "What size of Truck are you looking for?",
                prev: "pathTwo",
                hasInput: true,
                inputContent: "Got another idea? Describe it below",
                answers: [
                    {
                        type: "pathTwo",
                        content: "Mid size"
                    },
        
                    {
                        type: "pathTwo",
                        content: "Full size"
                    }
                ]
            },
            {
                question: "What year were you looking for?",
                prev: "pathTwo",
                answers: [
                    {
                        type: "pathTwo",
                        content: "2014-2015"
                    },
                    {
                        type: "pathTwo",
                        content: "2016-2017"
                    },
                    {
                        type: "pathTwo",
                        content: "2018-2019"
                    },
                    {
                        type: "pathTwo",
                        content: "2020-2021+"
                    }
                ]
            },
            {
                question: "What mileage do you expect?",
                prev: "pathTwo",
                answers: [
                    {
                        type: "pathTwo",
                        content: "0-20 000"
                    },
                    {
                        type: "pathTwo",
                        content: "30 000-60 000"
                    },
                    {
                        type: "pathTwo",
                        content: "70 000-100 000"
                    },
                    {
                        type: "pathTwo",
                        content: "More than 100 000"
                    }
                ]
            },
            {
                question: "What features and packages are you looking for? (select all that applies)",
                prev: "pathTwo",
                hasInput: true,
                inputContent: "Got a trim/model in mind? Describe it below",
                answers: [
                    {
                        type: "pathTwo",
                        content: "Basic                                                         "
                    },
                    {
                        type: "pathTwo",
                        content: "Middle"
                    },
                    {
                        type: "pathTwo",
                        content: "Loaded"
                    },
                    {
                        type: "pathTwo",
                        content: "Two door"
                    },
                    {
                        type: "pathTwo",
                        content: "Quad cab"
                    },
                    {
                        type: "pathTwo",
                        content: "Crew cab"
                    },
                    {
                        type: "pathTwo",
                        content: "Short box"
                    },
                    {
                        type: "pathTwo",
                        content: "Regular box"
                    },
                    {
                        type: "pathTwo",
                        content: "Extended box"
                    },
                ]
            },
            {
                question: "When were you looking to purchase?",
                prev: "pathTwo",
                answers: [
                    {
                        type: "pathTwo",
                        content: "Less than a week"
                    },
        
                    {
                        type: "pathTwo",
                        content: "2 weeks"
                    },
        
                    {
                        type: "pathTwo",
                        content: "1 month"
                    },
        
                    {
                        type: "pathTwo",
                        content: "More than a month"
                    }
                ]
            },
            {
                question: "Placeholder for last question",
                prev: "pathTwo",
                answers: [
                    {
                        type: "Done",
                        content: "Basic"
                    },
        
                    {
                        type: "Done",
                        content: "Middle"
                    },
                    {
                        type: "Done",
                        content: "Loaded"
                    }
                ]
            }
        ],
        pathThree:[
            {
                question: "Which type were you looking for?",
                prev: "firstQuestion",
                answers: [
                    {
                        type: "pathThreeCar",
                        content: "Car"
                    },
        
                    {
                        type: "pathThreeSUV",
                        content: "SUV"
                    }
                ]
            },
        ],
        pathThreeCar: [
            {
                question: "Which model are you interted in?",
                prev: "pathThree",
                answers: [
                    {
                        type: "pathThreeCar",
                        content: "Elantra"
                    },

                    {
                        type: "pathThreeCar",
                        content: "Veloster"
                    },
                ]
            },
            {
                question: "Monthly Budget?",
                prev: "pathThreeCar",
                hasInput: true,
                inputContent: "Prefer to pay in cash? Enter the full amount below",
                answers: [
                    {
                        type: "pathThreeCar",
                        content: "Less than 200"
                    },
        
                    {
                        type: "pathThreeCar",
                        content: "200-300"
                    },
                    {
                        type: "pathThreeCar",
                        content: "300-400"
                    },
        
                    {
                        type: "pathThreeCar",
                        content: "400-500"
                    },
                    {
                        type: "pathThreeCar",
                        content: "500-600"
                    },
        
                    {
                        type: "pathThreeCar",
                        content: "More than 600"
                    },
                ]
            },
            {
                question: "Are you trading in a vehicle?",
                prev: "pathThreeCar",
                answers: [
                    {
                        type: "pathThreeCar",
                        content: "Yes"
                    },
        
                    {
                        type: "pathThreeCar",
                        content: "No"
                    }
                ]
            },
            {
                question: "What features/packages are you looking for?",
                prev: "pathThreeCar",
                hasInput: true,
                inputContent: "Got a trim/model in mind? Describe it below",
                answers: [
                    {
                        type: "pathThreeCar",
                        content: "Basic"
                    },
        
                    {
                        type: "pathThreeCar",
                        content: "Middle"
                    },
                    {
                        type: "pathThreeCar",
                        content: "Loaded"
                    }
                ]
            },
            {
                question: "When were you looking to purchase?",
                prev: "pathThreeCar",
                answers: [
                    {
                        type: "pathThreeCar",
                        content: "Less than a week"
                    },
        
                    {
                        type: "pathThreeCar",
                        content: "2 weeks"
                    },
        
                    {
                        type: "pathThreeCar",
                        content: "1 month"
                    },
        
                    {
                        type: "pathThreeCar",
                        content: "More than a month"
                    }
                ]
            },
            {
                question: "Placeholder for last question",
                prev: "pathThreeCar",
                answers: [
                    {
                        type: "Done",
                        content: "Basic"
                    },
        
                    {
                        type: "Done",
                        content: "Middle"
                    },
                    {
                        type: "Done",
                        content: "Loaded"
                    }
                ]
            }
        ],
        pathThreeSUV: [
            {
                question: "Which model are you interested in?",
                prev: "pathThree",
                answers: [
                    {
                        type: "pathThreeSUV",
                        content: "Venue"
                    },

                    {
                        type: "pathThreeSUV",
                        content: "Kona"
                    },
                    {
                        type: "pathThreeSUV",
                        content: "Tucson"
                    },
                    {
                        type: "pathThreeSUV",
                        content: "Santa Fe"
                    },
                    {
                        type: "pathThreeSUV",
                        content: "Palisade"
                    },
                ]
            },
            {
                question: "Monthly Budget?",
                prev: "pathThreeSUV",
                hasInput: true,
                inputContent: "Prefer to pay in cash? Enter the full amount below",
                answers: [
                    {
                        type: "pathThreeSUV",
                        content: "Less than 200"
                    },
        
                    {
                        type: "pathThreeSUV",
                        content: "200-300"
                    },
                    {
                        type: "pathThreeSUV",
                        content: "300-400"
                    },
        
                    {
                        type: "pathThreeSUV",
                        content: "400-500"
                    },
                    {
                        type: "pathThreeSUV",
                        content: "500-600"
                    },
        
                    {
                        type: "pathThreeSUV",
                        content: "More than 600"
                    },
                ]
            },
            {
                question: "Are you trading in a vehicle?",
                prev: "pathThreeSUV",
                answers: [
                    {
                        type: "pathThreeSUV",
                        content: "Yes"
                    },
        
                    {
                        type: "pathThreeSUV",
                        content: "No"
                    }
                ]
            },
            {
                question: "What features/packages are you looking for?",
                prev: "pathThreeSUV",
                hasInput: true,
                inputContent: "Got a trim/model in mind? Describe it below",
                answers: [
                    {
                        type: "pathThreeSUV",
                        content: "Basic"
                    },
        
                    {
                        type: "pathThreeSUV",
                        content: "Middle"
                    },
                    {
                        type: "pathThreeSUV",
                        content: "Loaded"
                    }
                ]
            },
            {
                question: "When were you looking to purchase?",
                prev: "pathThreeSUV",
                answers: [
                    {
                        type: "pathThreeSUV",
                        content: "Less than a week"
                    },
        
                    {
                        type: "pathThreeSUV",
                        content: "2 weeks"
                    },
        
                    {
                        type: "pathThreeSUV",
                        content: "1 month"
                    },
        
                    {
                        type: "pathThreeSUV",
                        content: "More than a month"
                    }
                ]
            },
            {
                question: "Placeholder for last question",
                prev: "pathThreeSUV",
                answers: [
                    {
                        type: "Done",
                        content: "Basic"
                    },
        
                    {
                        type: "Done",
                        content: "Middle"
                    },
                    {
                        type: "Done",
                        content: "Loaded"
                    }
                ]
            }
        ],
    }
];
  
  export default quizQuestions;