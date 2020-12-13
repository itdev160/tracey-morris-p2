(function () {

        var data = [
            {
            name: "2006 Ford Escape",
            description:
                "2006 Ford Escape XLT AWD, great budget AWD vehicle, 19 inch Alloy wheels, ABS brakes, Illuminated entry, Low tire pressure warning, Remote keyless entry. DESIRABLE FEATURES: *FOG LIGHTS*, *REMOTE ENTRY*, *POWER WINDOWS*. Ewalds Venus Ford also offers extended vehicle service contracts. This four wheel drive 2006 Ford Escape is one of those used cars shoppers seek out for its Beige exterior with a Medium/dark Pebble Interior. With 174,424 miles this 2006 Escape with an duratec 3.0l v6 engine is your best buy near Milwaukee, WI.",
            model: "U93",
            price: 3689,
            url:
                "https://www.ewaldauto.com/vehicle-inventory.php?task=show_items&on_row=0&dealer=0&warranty=0&sort_certified=01&sort_year=0&sort_to_year=10000&sort_price=&sort_to_price=&sort_age=&sort_to_age=&sort_make=&sort_model=&sort_trim=&sort_price_range=&sort_distance_range=&sort_zip_code=&sort_mpg=&sort_miles=&sort_style=Utility&sort_product=1&sort_sortby=3&sort_viewby=1&lane=&keyword_search=",
            selector: "p1",
            },
            {
            name: "2017 Jeep Grand Cherokee Limited",
            description:
            "DESIRABLE FEATURES: This CHRYSLER CERTIFIED 2017 Jeep Grand Cherokee Limited sets itself apart with BackUp Camera, Navigation, Leather, Blind Spot Monitor, Panoramic Roof, Htd Rear Seats, Remote Start, Htd Seats, Htd Wheel, Multizone Climate, Bluetooth, Cooled Seats, Power Lift Tailgate,",
            model: "WKJP74",
            price: 278858,
            url:
                "https://www.ewaldauto.com/vehicle-inventory.php?dealer=0&sort_certified=01&sort_year=0&sort_to_year=10000&sort_make=&sort_model=&sort_trim=&sort_cab=&sort_bed=&sort_exterior=&sort_mileage=&sort_to_mileage=&sort_price=&sort_to_price=&sort_payment=0&sort_to_payment=0&sort_style=Utility&sort_drivetrain=&sort_transmission=&sort_fueltype=&sort_city=&sort_highway=&keyword_search=jeep%20grand%20cherokee&returny=0",
            selector: "p2",
            },
            {
            name: "2017 Nissan Armada SV",
            description:
                "2017 Nissan Armada SV Brilliant Silver AWD 5.6L V8 DOHC 32V EnduranceABS brakes, Electronic Stability Control, Front dual zone A/C, Heated door mirrors, Heated Front Bucket Seats, Heated front seats, Illuminated entry, Low tire pressure warning, Navigation System, Remote keyless entry, Traction...",
            model: "ARMADA",
            price: 26500,
            url:
                "https://www.ewaldauto.com/vehicle-inventory.php?sort_condition=1&sort_make=&sort_trim=&keyword_search=nissan+armada",
            selector: "p3",
            },
            {
            name: "2013 Cadillac Escalade Platinum Edition",
            description:
                "Recent Arrival! 2013 Cadillac Escalade Platinum Edition White Diamond Tricoat AWD Vortec 6.2L V8 SFI VVT** LEATHER ** SUNROOF/MOONROOF ** CLEAN AUTOCHECK HISTORY ** LOW MILES ** POWER REAR LIFTGATE **REMOTE START** HEATED SEATS ** PLATINUM EDITION ** UNDER 100000 MILES ",
            model: "6K10706",
            price: 27500,
            url: "https://www.ewaldauto.com/vehicle-inventory.php?dealer=0&sort_certified=012&sort_year=&sort_to_year=&sort_make=Cadillac&sort_model=&sort_trim=&sort_cab=&sort_bed=&sort_exterior=&sort_mileage=&sort_to_mileage=&sort_price=&sort_to_price=&sort_payment=0&sort_to_payment=0&sort_style=&sort_drivetrain=&sort_transmission=&sort_fueltype=&sort_city=&sort_highway=&keyword_search=&returny=300",
            selector: "p4",
            },
            {
            name: "2014 GMC Acadia SLT",
            description:
                "DESIRABLE FEATURES: Moon/Sunroof, Navigation, Panoramic Roof, 3rd Row Seat, Leather, Htd Seats, Remote Start, Tow Pkg, Multizone Climate, Remote Entry, BackUp Sensors.Ewald CJDR Oconomowoc also offers extended vehicle service contracts so our Mukwonago area drivers enjoy a worry free used car, SUV",
            model: "15389",
            price: 0.0,
            url: "https://www.ewaldauto.com/vehicle-inventory.php?dealer=0&sort_certified=012&sort_year=&sort_to_year=&sort_make=GMC&sort_model=&sort_trim=&sort_cab=&sort_bed=&sort_exterior=&sort_mileage=&sort_to_mileage=&sort_price=&sort_to_price=&sort_payment=0&sort_to_payment=0&sort_style=&sort_drivetrain=&sort_transmission=&sort_fueltype=&sort_city=&sort_highway=&keyword_search=&returny=500",
            selector: "p5",
            },
            {
            name: "2017 Ford Explorer XLT",
            description:
                "This highly sought after Blue Jeans Metallic 4WD Explorer XLT with the Twin Panel Moonroof and 20 Polished Wheels is fresh off of lease and ready for a permanent home! This is one loaded XLT, it comes with Blind Spot Monitor, Voice Activated Navigation, Universal Garage Door Opener, Driver Connect",
            model: "K8D",
            price: 27467,
            url: "https://www.ewaldauto.com/vehicle-inventory.php?task=show_items&on_row=10&dealer=0&warranty=0&sort_certified=012&sort_year=&sort_to_year=&sort_price=&sort_to_price=&sort_age=&sort_to_age=&sort_make=Ford&sort_model=Explorer&sort_trim=&sort_price_range=&sort_distance_range=&sort_zip_code=&sort_mpg=&sort_miles=&sort_style=&sort_product=&sort_sortby=3&sort_viewby=1&lane=&keyword_search=",
            selector: "p6",
            },
            {
            name: "2017 INFINITI QX70 AWD",
            description:
                    "If you are in the market for an AWD Infiniti QX70, you have to come see this freshly traded SPORT Package SUV before it is gone! In addition to the Sport Package, this one also comes loaded with the PREMIUM Package! Call to schedule your test drive today!",
            model: "82217",
            price: 31944,
            url: "https://www.ewaldauto.com/vehicle-inventory.php?dealer=0&sort_certified=012&sort_year=&sort_to_year=&sort_make=INFINITI&sort_model=&sort_trim=&sort_cab=&sort_bed=&sort_exterior=&sort_mileage=&sort_to_mileage=&sort_price=&sort_to_price=&sort_payment=0&sort_to_payment=0&sort_style=&sort_drivetrain=&sort_transmission=&sort_fueltype=&sort_city=&sort_highway=&keyword_search=&returny=400",
            selector: "p7",
            },
            {
            name: "2017 Jeep Grand Cherokee Limited",
            description:
                "DESIRABLE FEATURES: This CHRYSLER CERTIFIED 2017 Jeep Grand Cherokee Limited sets itself apart with BackUp Camera, Moon/Sunroof, Leather, Navigation, Htd Seats, Htd Rear Seats, Htd Wheel, Bluetooth, Multizone Climate, Alloy Wheels, Power Lift Tailgate, U-Connect, Remote Entry, BackUp Sensors for..",
            model: "JKJP78",
            price: 26998,
            url: "https://www.ewaldauto.com/certified-2017-Jeep-Grand+Cherokee-Oconomowoc-WI/v/879544",
            selector: "p8",
            },
            {
            name: "2016 Jeep Wrangler Unlimited Sahara",
            description:
                "Immediate savings of $4,560 off market price! Jeep Wrangler Unlimited Sahara Jeep Certified with only 14,049 Miles! Every Jeep CPO vehicle can be counted on to go the distance. Our CPO vehicles must pass a stringent certification process that guarantees only the finest late model vehicles get..",
            model: "JKJP74",
            price: 33435,
            url: " https://www.ewaldauto.com/vehicle-inventory.php?dealer=0&sort_certified=012&sort_year=&sort_to_year=&sort_make=Jeep&sort_model=Wrangler%20Unlimited|Wrangler&sort_trim=&sort_cab=&sort_bed=&sort_exterior=&sort_mileage=&sort_to_mileage=&sort_price=&sort_to_price=&sort_payment=0&sort_to_payment=0&sort_style=&sort_drivetrain=&sort_transmission=&sort_fueltype=&sort_city=&sort_highway=&keyword_search=&returny=280.79998779296875",
            selector: "p9",
            },
            {
            name: "2017 Jeep Wrangler Unlimited Sport",
            description:
                "2017 Jeep Wrangler Unlimited Sport Black Clearcoat 4WD 3.6L V6 24V VVT** ONE OWNER ** CLEAN AUTOCHECK HISTORY ** 3 PIECE HARD TOP ** READY FOR ANY SEASON **, Aluminum Wheels, Auto-Dimming Mirror w/Reading Lamp, Black 3-Piece Hard Top, Chrome/Leather Wrapped Shift Knob, Connectivity...",
            model: "JKJM74",
            price: 31308,
            url: "https://www.ewaldauto.com/vehicle-inventory.php?dealer=0&sort_certified=012&sort_year=&sort_to_year=&sort_make=Jeep&sort_model=Wrangler%20Unlimited|Wrangler&sort_trim=&sort_cab=&sort_bed=&sort_exterior=&sort_mileage=&sort_to_mileage=&sort_price=&sort_to_price=&sort_payment=0&sort_to_payment=0&sort_style=&sort_drivetrain=&sort_transmission=&sort_fueltype=&sort_city=&sort_highway=&keyword_search=&returny=280.79998779296875",
            selector: "p10",
            },
            {
            name: "2017 Jeep Wrangler Unlimited Sport",
            description:
                "Immediate savings of $7,998 off market price! Jeep Certified with only 8,874 Miles! Every Jeep CPO vehicles can be counted on to go the distance. Our CPO vehicles must pass a stringent certification process that guarantees only the finest late model vehicles get certified. Every vehicle that...",
            model: "JKJM74",
            price: 31997,
            url: "https://www.ewaldauto.com/vehicle-inventory.php?dealer=0&sort_certified=012&sort_year=&sort_to_year=&sort_make=Jeep&sort_model=Wrangler%20Unlimited|Wrangler&sort_trim=&sort_cab=&sort_bed=&sort_exterior=&sort_mileage=&sort_to_mileage=&sort_price=&sort_to_price=&sort_payment=0&sort_to_payment=0&sort_style=&sort_drivetrain=&sort_transmission=&sort_fueltype=&sort_city=&sort_highway=&keyword_search=&returny=280.79998779296875",
            selector: "p11",
            },
            {
            name: "2017 Jeep Wrangler Unlimited Rubicon",
            description:
                "Immediate savings of $6,405 off market price! Jeep Wrangler Unlimited Rubicon Jeep Certified with only 28,498 Miles! Every Jeep CPO vehicle can be counted on to go the distance. Our CPO vehicles must pass a stringent certification process that guarantees only the finest late model vehicles get.",
            model: "JKJS74",
            price: 39590,
            url: "https://www.ewaldauto.com/certified-2017-Jeep-Wrangler-Franklin-WI/v/559996",
            selector: "p12",
            },
            {
            name: "2017 Honda Pilot EX-L",
            description:
                "2017 Honda Pilot EX-L Crystal Black Pearl AWD 3.5L V6 24V SOHC i-VTEC** LEATHER ** SUNROOF/MOONROOF ** ONE OWNER ** CLEAN AUTOCHECK HISTORY ** LOCAL TRADE ** LOW MILES **REMOTE START** REAR VISION CAMERA ** HEATED SEATS ** Odometer is 9450 miles below market average!",
            model: "YF6H5HJNW",
            price: 28389,
            url: "https://www.ewaldauto.com/used-2017-Honda-Pilot-Oconomowoc-WI/v/47193",
            selector: "p13",
            },
            {
            name: "2011 Chevrolet Traverse LT w/2LT",
            description:
                "Recent Arrival! 2011 Chevrolet Traverse 2LT 2LT White Diamond Tricoat AWD 3.6L V6 SIDIOdometer is 15300 miles below market average!",
            model: "CV14526",
            price: 10000,
            url: "https://www.ewaldauto.com/used-2011-Chevrolet-Traverse-Oconomowoc-WI/v/318046",
            selector: "p14",
            }
        ];
    
        function Used(data) {
            this.name = data.name;
            this.description = data.description;
            this.model = data.model;
            this.price = data.price;
            this.url = data.url;
            this.selector = data.selector;
    
            this.getFormattedPrice = function () {
            return this.price.toLocaleString();
            };
        }
    
        /*********************
        * Utility
        *********************/
    
        var getEl = function (id) {
            return document.getElementById(id);
        };
    
        var writePackageInfo = function (used) {
            // Get reference to DOM elements
            var selector = used.selector,
                nameEl = getEl(selector + "-name"),
                descEl = getEl(selector + "-description"),
                modelEl = getEl(selector + "-model");
                priceEl = getEl(selector + "-price");
                urlEl = getEl(selector + "-url");
    
        // Write package data to DOM elements
            nameEl.textContent = used.name;
            descEl.textContent = used.description;
            modelEl.textContent = used.model;
            priceEl.textContent = used.price;
            urlEl.textContent = used.url;
        };
        
        var ford = new Used(data[0]);
        writePackageInfo(ford);
    
        var jepch = new Used(data[1]);
        writePackageInfo(jepch);
    
        var armada = new Used(data[2]);
        writePackageInfo(armada);
    
        var cades = new Used(data[3]);
        writePackageInfo(cades);
    
        var denali = new Used(data[4]);
        writePackageInfo(denali);
    
        var expxlt = new Used(data[5]);
        writePackageInfo(expxlt);
    
        var finqx70 = new Used(data[6]);
        writePackageInfo(finqx70);

        var grcher = new Used(data[7]);
        writePackageInfo(grcher);

        var jepsah = new Used(data[8]);
        writePackageInfo(jepsah);

        var jpspt = new Used(data[9]);
        writePackageInfo(jpspt);

        var redjep = new Used(data[10]);
        writePackageInfo(redjep);

        var rubicon = new Used(data[11]);
        writePackageInfo(rubicon);

        var pilot = new Used(data[12]);
        writePackageInfo(pilot);

        var traverse = new Used(data[13]);
        writePackageInfo(traverse);
    }());