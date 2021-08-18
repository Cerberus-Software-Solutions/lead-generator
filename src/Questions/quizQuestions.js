var quizQuestions = [
    //first question
    {
        question: "What type of car are you looking for?",
        answers: [
            {
                type: "Car",
                content: "Car"
            },

            {
                type: "Truck",
                content: "Truck"
            },

            {
                type: "SUV",
                content: "SUV"
            },

            {
                type: "New Hyundai",
                content: "New Hyundai"
            }
        ]
    },
    {
    //PATH IF CAR OR SUV PICKED
    pathOne: [
        {
            question: "New or Used?",
            answers: [
                {
                    type: "Car",
                    content: "New"
                },
    
                {
                    type: "Truck",
                    content: "Used"
                }
            ]
        },
        {
            question: "Gas or Hybrid/Electric?",
            answers: [
                {
                    type: "Car",
                    content: "Gas"
                },
    
                {
                    type: "Truck",
                    content: "Hybrid/Electric"
                }
            ]
        },
        {
            //PATH FOR IF THEY PICK HYBRID/ELECTRIC
            pathOneHybrid: [
                {
                    question: "Which type are you looking for?",
                    answers: [
                        {
                            type: "Car",
                            content: "Hybrid"
                        },
            
                        {
                            type: "Truck",
                            content: "Plug in Hybrid"
                        },
                        {
                            type: "Car",
                            content: "Electric"
                        }
                    ]
                },
                {
                    question: "Choose one of the following:",
                    answers: [
                        {
                            type: "Car",
                            content: "Import"
                        },
            
                        {
                            type: "Truck",
                            content: "Domestic (North America)"
                        },
                        {
                            type: "Car",
                            content: "European"
                        }
                    ]
                },
                {
                    question: "Monthly Budget?",
                    answers: [
                        {
                            type: "Car",
                            content: "Less than 200"
                        },
            
                        {
                            type: "Truck",
                            content: "200-300"
                        },
                        {
                            type: "Car",
                            content: "300-400"
                        },
            
                        {
                            type: "Truck",
                            content: "400-500"
                        },
                        {
                            type: "Car",
                            content: "500-600"
                        },
            
                        {
                            type: "Truck",
                            content: "More than 600"
                        },
                    ]
                },
                {
                    question: "Are you trading in a vehicle?",
                    answers: [
                        {
                            type: "Car",
                            content: "Yes"
                        },
            
                        {
                            type: "Truck",
                            content: "No"
                        }
                    ]
                },
                {
                    question: "Year and Mileage",
                    answers: [
                        {
                            type: "Car",
                            content: "Yes"
                        }
                    ]
                },
                {
                    question: "What features/packages are you looking for?",
                    answers: [
                        {
                            type: "Car",
                            content: "Basic"
                        },
            
                        {
                            type: "Truck",
                            content: "Middle"
                        },
                        {
                            type: "Car",
                            content: "Loaded"
                        }
                    ]
                },
                {
                    question: "When were you looking to purchase?",
                    answers: [
                        {
                            type: "Car",
                            content: "Less than a week"
                        },
            
                        {
                            type: "Truck",
                            content: "2 weeks"
                        },
            
                        {
                            type: "SUV",
                            content: "1 month"
                        },
            
                        {
                            type: "New Hyundai",
                            content: "More than a month"
                        }
                    ]
                },
            ]
        },
        {
            question: "Monthly Budget?",
            answers: [
                {
                    type: "Car",
                    content: "Less than 200"
                },
    
                {
                    type: "Truck",
                    content: "200-300"
                },
                {
                    type: "Car",
                    content: "300-400"
                },
    
                {
                    type: "Truck",
                    content: "400-500"
                },
                {
                    type: "Car",
                    content: "500-600"
                },
    
                {
                    type: "Truck",
                    content: "More than 600"
                },
            ]
        },
        {
            question: "Are you trading in a vehicle?",
            answers: [
                {
                    type: "Car",
                    content: "Yes"
                },
                {
                    type: "Truck",
                    content: "No"
                }
            ]
        },
        {
            question: "Choose one of the following:",
            answers: [
                {
                    type: "Car",
                    content: "Import"
                },
    
                {
                    type: "Truck",
                    content: "Domestic (North America)"
                },
                {
                    type: "Car",
                    content: "European"
                }
            ]
        },
        {
            question: "Year and Mileage",
            answers: [
                {
                    type: "Car",
                    content: "Yes"
                }
            ]
        },
        {
            question: "What features/packages are you looking for?",
            answers: [
                {
                    type: "Car",
                    content: "Basic"
                },
    
                {
                    type: "Truck",
                    content: "Middle"
                },
                {
                    type: "Car",
                    content: "Loaded"
                }
            ]
        },
        {
            question: "When were you looking to purchase?",
            answers: [
                {
                    type: "Car",
                    content: "Less than a week"
                },
    
                {
                    type: "Truck",
                    content: "2 weeks"
                },
    
                {
                    type: "SUV",
                    content: "1 month"
                },
    
                {
                    type: "New Hyundai",
                    content: "More than a month"
                }
            ]
        },
        ]
    },
    //TRUCK PATH
    {
        pathTwo: [
            {
                question: "New or Used?",
                answers: [
                    {
                        type: "Car",
                        content: "New"
                    },
        
                    {
                        type: "Truck",
                        content: "Used"
                    }
                ]
            },
            {
                question: "Monthly Budget?",
                answers: [
                    {
                        type: "Car",
                        content: "350-450"
                    },
        
                    {
                        type: "Truck",
                        content: "500-550"
                    },
                    {
                        type: "Car",
                        content: "600-700"
                    },
        
                    {
                        type: "Truck",
                        content: "800-1000+"
                    },
                ]
            },
            {
                question: "Are you trading in a vehicle?",
                answers: [
                    {
                        type: "Car",
                        content: "Yes"
                    },
        
                    {
                        type: "Truck",
                        content: "No"
                    }
                ]
            },
            {
                question: "What size of Truck are you looking for?",
                answers: [
                    {
                        type: "Car",
                        content: "Mid size"
                    },
        
                    {
                        type: "Truck",
                        content: "Full size"
                    }
                ]
            },
            {
                question: "Year and Mileage",
                answers: [
                    {
                        type: "Car",
                        content: "Yes"
                    }
                ]
            },
            {
                question: "What features and packages are you looking for? (select all that applies)",
                answers: [
                    {
                        type: "Car",
                        content: "Yes"
                    }
                ]
            },
            {
                question: "When were you looking to purchase?",
                answers: [
                    {
                        type: "Car",
                        content: "Less than a week"
                    },
        
                    {
                        type: "Truck",
                        content: "2 weeks"
                    },
        
                    {
                        type: "SUV",
                        content: "1 month"
                    },
        
                    {
                        type: "New Hyundai",
                        content: "More than a month"
                    }
                ]
            },
        ]
    },
    {
        pathThree:[
            {
                question: "Which type were you looking for?",
                answers: [
                    {
                        type: "Car",
                        content: "Car"
                    },
        
                    {
                        type: "Truck",
                        content: "SUV"
                    }
                ]
            },
            {
                pathThreeCar: [
                    {
                        question: "Which model are you interted in?",
                        answers: [
                            {
                                type: "Car",
                                content: "Elantra"
                            },

                            {
                                type: "Car",
                                content: "Veloster"
                            },
                        ]
                    },
                    {
                        question: "Monthly Budget?",
                        answers: [
                            {
                                type: "Car",
                                content: "Less than 200"
                            },
                
                            {
                                type: "Truck",
                                content: "200-300"
                            },
                            {
                                type: "Car",
                                content: "300-400"
                            },
                
                            {
                                type: "Truck",
                                content: "400-500"
                            },
                            {
                                type: "Car",
                                content: "500-600"
                            },
                
                            {
                                type: "Truck",
                                content: "More than 600"
                            },
                        ]
                    },
                    {
                        question: "Are you trading in a vehicle?",
                        answers: [
                            {
                                type: "Car",
                                content: "Yes"
                            },
                
                            {
                                type: "Truck",
                                content: "No"
                            }
                        ]
                    },
                    {
                        question: "What features/packages are you looking for?",
                        answers: [
                            {
                                type: "Car",
                                content: "Basic"
                            },
                
                            {
                                type: "Truck",
                                content: "Middle"
                            },
                            {
                                type: "Car",
                                content: "Loaded"
                            }
                        ]
                    },
                    {
                        question: "When were you looking to purchase?",
                        answers: [
                            {
                                type: "Car",
                                content: "Less than a week"
                            },
                
                            {
                                type: "Truck",
                                content: "2 weeks"
                            },
                
                            {
                                type: "SUV",
                                content: "1 month"
                            },
                
                            {
                                type: "New Hyundai",
                                content: "More than a month"
                            }
                        ]
                    },
                ]
            },
            {
                pathThreeSUV: [
                    {
                        question: "Which model are you interted in?",
                        answers: [
                            {
                                type: "Car",
                                content: "Venue"
                            },

                            {
                                type: "Car",
                                content: "Kona"
                            },
                            {
                                type: "Car",
                                content: "Tucson"
                            },
                            {
                                type: "Car",
                                content: "Santa Fe"
                            },
                            {
                                type: "Car",
                                content: "Palisade"
                            },
                        ]
                    },
                    {
                        question: "Monthly Budget?",
                        answers: [
                            {
                                type: "Car",
                                content: "Less than 200"
                            },
                
                            {
                                type: "Truck",
                                content: "200-300"
                            },
                            {
                                type: "Car",
                                content: "300-400"
                            },
                
                            {
                                type: "Truck",
                                content: "400-500"
                            },
                            {
                                type: "Car",
                                content: "500-600"
                            },
                
                            {
                                type: "Truck",
                                content: "More than 600"
                            },
                        ]
                    },
                    {
                        question: "Are you trading in a vehicle?",
                        answers: [
                            {
                                type: "Car",
                                content: "Yes"
                            },
                
                            {
                                type: "Truck",
                                content: "No"
                            }
                        ]
                    },
                    {
                        question: "What features/packages are you looking for?",
                        answers: [
                            {
                                type: "Car",
                                content: "Basic"
                            },
                
                            {
                                type: "Truck",
                                content: "Middle"
                            },
                            {
                                type: "Car",
                                content: "Loaded"
                            }
                        ]
                    },
                    {
                        question: "When were you looking to purchase?",
                        answers: [
                            {
                                type: "Car",
                                content: "Less than a week"
                            },
                
                            {
                                type: "Truck",
                                content: "2 weeks"
                            },
                
                            {
                                type: "SUV",
                                content: "1 month"
                            },
                
                            {
                                type: "New Hyundai",
                                content: "More than a month"
                            }
                        ]
                    },
                ]
            },
        ]
    },
  ];
  
  export default quizQuestions;