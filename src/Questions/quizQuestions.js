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
                question: "Year and Mileage",
                answers: [
                    {
                        type: "pathOneGasPath",
                        content: "Yes"
                    }
                ]
            },
            {
                question: "What features/packages are you looking for?",
                answers: [
                    {
                        type: "pathOneGasPath",
                        content: "Basic"
                    },
        
                    {
                        type: "pathOneGasPath",
                        content: "Middle"
                    },
                    {
                        type: "pathOneGasPath",
                        content: "Loaded"
                    }
                ]
            },
            {
                question: "When were you looking to purchase?",
                answers: [
                    {
                        type: "lastQuestion",
                        content: "Less than a week"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "2 weeks"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "1 month"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "More than a month"
                    }
                ]
            },
        ],
        //PATH FOR IF THEY PICK HYBRID/ELECTRIC
        pathOneHybrid: [
            {
                question: "Which type are you looking for?",
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
                question: "Year and Mileage",
                answers: [
                    {
                        type: "pathOneHybrid",
                        content: "Yes"
                    }
                ]
            },
            {
                question: "What features/packages are you looking for?",
                answers: [
                    {
                        type: "pathOneHybrid",
                        content: "Basic"
                    },
        
                    {
                        type: "pathOneHybrid",
                        content: "Middle"
                    },
                    {
                        type: "pathOneHybrid",
                        content: "Loaded"
                    }
                ]
            },
            {
                question: "When were you looking to purchase?",
                answers: [
                    {
                        type: "lastQuestion",
                        content: "Less than a week"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "2 weeks"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "1 month"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "More than a month"
                    }
                ]
            },
        ],
        pathTwo: [
            {
                question: "New or Used?",
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
                question: "Year and Mileage",
                answers: [
                    {
                        type: "pathTwo",
                        content: "Yes"
                    }
                ]
            },
            {
                question: "What features and packages are you looking for? (select all that applies)",
                answers: [
                    {
                        type: "pathTwo",
                        content: "Yes"
                    }
                ]
            },
            {
                question: "When were you looking to purchase?",
                answers: [
                    {
                        type: "lastQuestion",
                        content: "Less than a week"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "2 weeks"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "1 month"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "More than a month"
                    }
                ]
            },
        ],
        pathThree:[
            {
                question: "Which type were you looking for?",
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
                answers: [
                    {
                        type: "lastQuestion",
                        content: "Less than a week"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "2 weeks"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "1 month"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "More than a month"
                    }
                ]
            },
        ],
        pathThreeSUV: [
            {
                question: "Which model are you interested in?",
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
                answers: [
                    {
                        type: "lastQuestion",
                        content: "Less than a week"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "2 weeks"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "1 month"
                    },
        
                    {
                        type: "lastQuestion",
                        content: "More than a month"
                    }
                ]
            },
        ],
        lastQuestion: [
            {
                question: "Placeholder for last question",
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
        ]
    }
];
  
  export default quizQuestions;