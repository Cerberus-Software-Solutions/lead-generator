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
                question: "Year and Mileage",
                prev: "pathOneGasPath",
                answers: [
                    {
                        type: "pathOneGasPath",
                        content: "Yes"
                    }
                ]
            },
            {
                question: "What features/packages are you looking for?",
                prev: "pathOneGasPath",
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
                question: "Placeholder for last question",
                prev: "pathOneGasPath",
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
                question: "Year and Mileage",
                prev: "pathOneHybrid",
                answers: [
                    {
                        type: "pathOneHybrid",
                        content: "Yes"
                    }
                ]
            },
            {
                question: "What features/packages are you looking for?",
                prev: "pathOneHybrid",
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
                prev: "pathTwo",
                answers: [
                    {
                        type: "pathTwo",
                        content: "Yes"
                    }
                ]
            },
            {
                question: "What features and packages are you looking for? (select all that applies)",
                prev: "pathTwo",
                answers: [
                    {
                        type: "pathTwo",
                        content: "Yes"
                    }
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