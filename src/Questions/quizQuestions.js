var quizQuestions = [
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
    //first question

  ];
  
  export default quizQuestions;