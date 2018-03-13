function autoPopulateDropdown(selectStateDom, selectCityDom, selectCentreDom) {
        var selectCitiesOptionValue = [];
        var selectCentresOptionValue = [];

        // UPDATE your JSON exactly as how its done HERE !.. It should be in the same hierarchy.
        var selectStatesOptionValues = {
            "Andhra Pradesh": [{
                "name": "Tirupati",
                "centres": [
                        "Jetking Tirupati Learning Center",
                    ] 
                },
                {
                    "name":"Vijayawada",
                    "centres": [
                        "Jetking Vijayawada Learning Center",
                    ]
                }
            ],

            "Bagmati": [{
                "name": "Kathamandu",
                "centres": [
                        "Jetking Kathamandu Learning Center",
                    ] 
                }
            ],

            "Bihar": [{
                "name": "Patna",
                "centres": [
                        "Jetking Patna Learning Center",
                    ] 
                }
            ],

            "Chhattisgarh": [{
                "name": "Durg",
                "centres": [
                        "Jetking Durg Learning Center",
                    ] 
                },
                {
                    "name":"Raipur",
                    "centres": [
                        "Jetking Raipur Learning Center",
                    ]
                }
            ],

            "Delhi/NCR": [{
                "name": "Delhi/NCR",
                "centres": [
                        "Jetking Delhi/NCR Learning Center",
                    ] 
                }
            ],

            "Dhaka": [{
                "name": "Mirpur",
                "centres": [
                        "Jetking Mirpur Learning Center",
                    ] 
                }
            ],

            "Goa": [{
                "name": "Panajim",
                "centres": [
                        "Jetking Panajim Learning Center",
                    ] 
                },
                {
                    "name":"Margao",
                    "centres": [
                        "Jetking Margao Learning Center",
                    ]
                }
            ],

            "Gujarat": [{
                "name": "Ahmedabad",
                "centres": [
                        "Jetking Ahmedabad Learning Center",
                    ] 
                },
                {
                    "name":"Junagadh",
                    "centres": [
                        "Jetking Junagadh Learning Center",
                    ]
                },
                {
                    "name":"Surat",
                    "centres": [
                        "Jetking Surat Learning Center",
                    ]
                }
            ],

            "Ha Noi": [{
                "name": "Ha Noi",
                "centres": [
                        "Jetking Ha Noi Learning Center",
                    ] 
                }
            ],

            "Haryana": [{
                "name": "Bahadurgarh",
                "centres": [
                        "Jetking Bahadurgarh Learning Center",
                    ] 
                },
                {
                    "name":"Faridabad",
                    "centres": [
                        "Jetking Faridabad Learning Center",
                    ]
                },
                {
                    "name":"Gurgaon",
                    "centres": [
                        "Jetking Gurgaon Learning Center",
                    ]
                }
            ],

            "Himachal Pradesh": [{
                "name": "Hamipur",
                "centres": [
                        "Jetking Hamipur Learning Center",
                    ] 
                },
                {
                    "name":"Shimla",
                    "centres": [
                        "Jetking Shimla Learning Center",
                    ]
                }
            ],

            "Ho Chi Minh": [{
                "name": "Ho Chi Minh City",
                "centres": [
                        "Jetking Ho Chi Minh City Learning Center",
                    ] 
                }
            ],

            "Jammu and Kashmir": [{
                "name": "Jammu",
                "centres": [
                        "Jetking Jammu Learning Center",
                    ] 
                }
            ],

            "Jharkhand": [{
                "name": "Dhanbad",
                "centres": [
                        "Jetking Dhanbad Learning Center",
                    ] 
                }
            ],

            "Karnataka": [{
                    "name": "Bengaluru",
                    "centres": [
                        "Jetking Shivajinagar (Indiranagar/Banasvadi) Learning Center",
                        "Jetking Rajajinagar/Vijayanagar Learning Center",
                        "Jetking Sadashivnagar (Malleswaram/Yelhanka/Dasarahalli) Learning Center",
                        "Jetking Jaynagar Learning Center",
                        "Jetking Marathahalli Learning Center",
                        "Jetking RR Nagar Learning Center",
                    ]
                },
                {
                    "name": "Mysore",
                    "centres": [
                        "Jetking Mysore Learning Center"
                    ]
                }

            ],

            "Madhya Pradesh": [{
                "name": "Bhopal",
                "centres": [
                        "Jetking Bhopal (A.B Road) Learning Center",
                    ] 
                },
                {
                    "name":"Indore",
                    "centres": [
                        "Jetking Indore Learning Center",
                    ]
                },
                {
                    "name":"Jabalpur",
                    "centres": [
                        "Jetking Jabalpur Learning Center",
                    ]
                }
            ],

            "Maharashtra": [{
                "name": "Nashik",
                "centres": [
                    "Jetking Nashik Learning Center"
                    ]
                },
                {
                    "name":"Mumbai",
                    "centres": [
                        "Jetking Chembur Learning Center",
                        "Jetking Ghatkopar Learning Center",
                        "Jetking Vashi Learning Center",
                        "Jetking Sewri (Mankhurd / Wadala / Govandi) Learning Center",
                        "Jetking Borivali Learning Center",
                        "Jetking Andheri Learning Center",
                        "Jetking Vasai (Virar/Nalasopara) Learning Center",
                    ]
                },
                {
                    "name":"Thane",
                    "centres": [
                        "Jetking Thane Learning Center",
                    ]
                },
                {
                    "name":"Pune",
                    "centres": [
                        "Jetking Chinchwad Learning Center",
                        "Jetking Hadapsar Learning Center",
                        "Jetking Swargate Learning Center",
                        "Jetking Wakad Learning Center",
                    ]
                },
                {
                    "name":"Aurangabad",
                    "centres": [
                        "Jetking Aurangabad Learning Center",
                    ]
                },
                {
                    "name":"Kolhapur",
                    "centres": [
                        "Jetking Kolhapur Learning Center",
                    ]
                },
                {
                    "name":"Nagpur",
                    "centres": [
                        "Jetking Nagpur Gokulpeth Learning Center",
                        "Jetking Nagpur Mahal Learning Center",
                    ]
                }
            ],

            "Odisha": [{
                    "name": "Balasore",
                    "centres": [
                        "Jetking Balasore Learning Center",
                    ]
                },
                {
                    "name": "Bhubneshwear",
                    "centres": [
                        "Jetking Bhubneshwear Learning Center"
                    ]
                }
            ],

            "Punjab": [{
                    "name": "Amritsar",
                    "centres": [
                        "Jetking Amritsar Learning Center",
                    ]
                },
                {
                    "name": "Chandigarh",
                    "centres": [
                        "Jetking Chandigarh Learning Center"
                    ]
                }
            ],

            "Telangana": [{
                    "name": "Hyderabad",
                    "centres": [
                        "Jetking Ameerpet (Kukatpally) Learning Center",
                        "Jetking Dilsukhnagar Learning Center",
                        "Jetking Secunderabad Learning Center",
                    ]
                }

            ],

            "Uttar Pradesh": [{
                "name": "Agra",
                "centres": [
                    "Jetking Agra Learning Center"
                    ]
                },
                {
                    "name":"Allahabad",
                    "centres": [
                        "Jetking Allahabad Learning Center",
                    ]
                },
                {
                    "name":"Bareilly",
                    "centres": [
                        "Jetking Bareilly Learning Center",
                    ]
                },
                {
                    "name":"Ghaziabad",
                    "centres": [
                        "Jetking Ghaziabad Learning Center",
                    ]
                },
                {
                    "name":"Gorakhpur",
                    "centres": [
                        "Jetking Gorakhpur Learning Center",
                    ]
                },
                {
                    "name":"Greater Noida",
                    "centres": [
                        "Jetking Greater Noida Learning Center",
                    ]
                },
                {
                    "name":"Kanpur",
                    "centres": [
                        "Jetking Kanpur Learning Center",
                    ]
                },
                {
                    "name":"Lucknow",
                    "centres": [
                        "Jetking Lucknow-Station Road Learning Center",
                        "Jetking Lucknow-Indiranagar Learning Center",
                        "Jetking Lucknow - Aliganj Learning Center",

                    ]
                },
                {
                    "name":"Meerut",
                    "centres": [
                        "Jetking Meerut Learning Center",
                    ]
                },
                {
                    "name":"Noida",
                    "centres": [
                        "Jetking Noida Learning Center",
                    ]
                },
                {
                    "name":"Varanasi",
                    "centres": [
                        "Jetking Varanasi Learning Center",
                    ]
                }
            ],

            "West Bengal": [{
                "name": "Asansol",
                "centres": [
                        "Jetking Asansol Learning Center",
                    ] 
                },
                {
                    "name":"Kolkata",
                    "centres": [
                        "Jetking Gariahat Learning Centre",
                        "Jetking Bhawanipore Learning Center",
                        "Jetking Rajarhat (NewTown / MegaCity) Learning Center ",
                    ]
                },
                {
                    "name":"Siliguri",
                    "centres": [
                        "Jetking Siliguri Learning Center",
                    ]
                }
            ]

        }; //end:selectStatesOptionValues

        var popup1_selectStates = $(selectStateDom);
        var popup1_selectCities = $(selectCityDom);
        var popup1_selectCenters = $(selectCentreDom);

        popup1_selectStates.empty().append(function () {
            var option = '';
            option += '<option value="">Select Your State</option>';
            $.each(selectStatesOptionValues, function (key, item) {
                option += '<option value="' + key + '">' + key + '</option>';
            }); //end:each
            return option;
        }); //end:append

        popup1_selectStates.on('change', function () {
            var selectedValue = $(this).val();
            selectCitiesOptionValue = [];
            // option += '<option value="">Select Your City</option>';
            $.each(selectStatesOptionValues, function (key, item) {
                if (key == selectedValue) {
                    selectCitiesOptionValue = item;
                }
            }); //end:each
            console.log('State Selected has: ', selectCitiesOptionValue);
            //Fill all the cities
            if (selectCitiesOptionValue) {
                popup1_selectCities.empty().append(function () {
                    var option = '';
                    option += '<option value="">Select Your City</option>';
                    $.each(selectCitiesOptionValue, function (key, item) {
                        option += '<option value="' + item.name + '">' + item.name + '</option>';
                    }); //end:each
                    return option;
                }); //end:append

                popup1_selectCities.on('change', function () {
                    var selectedValue = $(this).val();
                    selectCentresOptionValue = [];
                    $.each(selectCitiesOptionValue, function (key, item) {
                        if (item.name == selectedValue) {
                            selectCentresOptionValue = item.centres;
                        }
                    }); //end:each
                    console.log('Seleted Centers is: ', selectCentresOptionValue);

                    if (selectCentresOptionValue) {
                        popup1_selectCenters.empty().append(function () {
                            var option = '';
                            option += '<option value="">Select your preferred Jetking center</option>';
                            $.each(selectCentresOptionValue, function (key, item) {
                                option += '<option value="' + item + '">' + item + '</option>';
                            }); //end:each
                            return option;
                        }); //end:append
                    } //end:if

                }); //end:change    
                popup1_selectCities.change(); // prefill all the option values
            } //end:if
        }); //end:change

        popup1_selectStates.change(); //prefill all the option values
    } //end:autoPopulateDropdown