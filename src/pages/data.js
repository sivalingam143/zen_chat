const categoryData = {
  Apartment: {
    totalQuestions: 16,
    totalAnswers: 16,
    data: [
      {
        question: "What is an apartment block?",
        answer:
          "building containing more than one dwelling unit, primarily for domestic use, sometimes including retail or commercial features.",
      },
      {
        question:
          "What does the Sales Comps database track for apartment buildings?",
        answer: "It tracks the number of units.",
      },
      {
        question:
          "What is the minimum number of units required for inclusion in the Sales Comps database?",
        answer: "minimum of 4 units, unless part of a greater portfolio.",
      },
      {
        question: "Can apartment units be arranged side-by-side or stacked?",
        answer:
          "Yes, units can be next to each other or stacked on top of each other.",
      },
      {
        question: "What defines a High-Rise apartment building?",
        answer:
          "building with 11 or more floors, typically located in downtown submarkets of larger cities.",
      },
      {
        question: "What defines a Mid-Rise apartment building?",
        answer:
          "building with 4 to 10 floors, often found in suburbs of larger cities.",
      },
      {
        question: "What defines a Garden/Low-Rise apartment building?",
        answer:
          "1–3 story complex, generally located in the suburbs, often with landscaped gardens or lawns.",
      },
      {
        question: "What is an Age-Restricted apartment property?",
        answer:
          "residential rental property restricted to adults aged 55 or older.",
      },
      {
        question:
          "Do Age-Restricted properties typically provide meals to residents?",
        answer: "No, they generally do not provide meals.",
      },
      {
        question: "What amenities might Age-Restricted properties offer?",
        answer: "Community rooms and social activities.",
      },
      {
        question: "What is Subsidized housing?",
        answer:
          "Government-sponsored economic assistance for housing costs for low to moderate income individuals.",
      },
      {
        question: "What is the purpose of housing subsidies?",
        answer:
          "To alleviate housing costs and expenses for low to moderate income households.",
      },
      {
        question: "Name one type of housing subsidy.",
        answer: "Section 8 vouchers.",
      },
      {
        question: "Name another type of housing subsidy.",
        answer: "Low Income Housing Tax Credit (LIHTC).",
      },
      {
        question: "What does HUD stand for?",
        answer: "U.S. Department of Housing and Urban Development.",
      },
      {
        question:
          "What is the main difference between Age-Restricted and Subsidized housing?",
        answer:
          "ge-Restricted housing is based on age eligibility, while Subsidized housing is based on income eligibility.",
      },
    ],
  },
  "Cold Storage": {
    totalQuestions: 13,
    totalAnswers: 13,
    data: [
      {
        question: "What is a Cold Storage property?",
        answer:
          "Cold Storage property is typically 25,000 sq ft (2,500 sq m) or larger, designed for temperature-controlled storage and often operated by a third party.",
      },
      {
        question:
          "What is the minimum size requirement for a Cold Storage property?",
        answer: "25,000 square feet or 2,500 square meters.",
      },
      {
        question:
          "What is the loading dock requirement for Cold Storage buildings?",
        answer:
          "One loading dock for every 15,000 sq ft (1,400 sq m) of rentable building area.",
      },
      {
        question:
          "What is the usual site coverage for Cold Storage properties?",
        answer: "Up to 50% of the site.",
      },
      {
        question: "Who typically operates Cold Storage facilities?",
        answer: "third-party operator.",
      },
      {
        question: "What are some quality attributes of Cold Storage buildings?",
        answer:
          "1. Pallet capacity, freezer combination, and insulation structure.",
      },
      {
        question:
          "What does TICI track for Cold Storage properties in the US ?",
        answer: "Square feet.",
      },
      {
        question:
          "What does TICI track for Cold Storage properties in the EU only?",
        answer: "Square meters.",
      },
      {
        question:
          "Why is insulation structure important in Cold Storage facilities?",
        answer: "It helps maintain temperature control and energy efficiency.",
      },
      {
        question: "What is the purpose of pallet capacity in Cold Storage?",
        answer: "To determine how much inventory can be stored efficiently.",
      },
      {
        question:
          "What does the freezer combination attribute refer to in Cold Storage?",
        answer:
          "The configuration and capacity of freezer units within the facility.",
      },
      {
        question: "What is an industrial park?",
        answer:
          "site where several industrial buildings are built together on landscaped grounds.",
      },
      {
        question:
          "If a building within an industrial park is sold independently, how is it classified?",
        answer: "It is still considered part of the industrial park.",
      },
    ],
  },
  "Data Center": {
    totalQuestions: 12,
    totalAnswers: 12,
    data: [
      {
        question: "What is a data center?",
        answer:
          "facility that centralizes an organization's shared IT operations and equipment to store, process, and disseminate data and applications.",
      },
      {
        question: "What does PPU stand for in the context of data centers?",
        answer:
          "Price Per Unit, based on rentable square feet or square meters.",
      },
      {
        question: "What is a network-dense data center?",
        answer:
          "colocation data center distinguished by the number of networks that connect within the facility, creating a dense ecosystem.",
      },
      {
        question: "Why are network-dense data centers difficult to replicate?",
        answer:
          "Because of their established ecosystem and high switching costs.",
      },
      {
        question:
          "How many network-dense data centers typically exist per major metro area?",
        answer: "Usually one per major metro.",
      },
      {
        question:
          "What type of leases are common in network-dense data centers?",
        answer: "Shorter-term leases.",
      },
      {
        question:
          "What is a key revenue source for network-dense data centers?",
        answer: "Interconnection revenue.",
      },
      {
        question: "What is an enterprise data center?",
        answer:
          "lso known as wholesale, hyperscale, or colocation, it houses most of the daily data we access and tends to have large credit tenants and long-term leases.",
      },
      {
        question:
          "What types of data are typically stored in enterprise data centers?",
        answer: "pps, websites, videos, and social media content.",
      },
      {
        question: "What kind of tenants are common in enterprise data centers?",
        answer: "Large credit tenants.",
      },
      {
        question: "What is a data center park?",
        answer:
          "group of data centers (offices/industrial/flex) built together on landscaped grounds.",
      },
      {
        question:
          "If a building within a data center park is sold independently, how is it classified?",
        answer: "It is still considered part of the data center park.",
      },
    ],
  },
  "Dev. Site": {
    totalQuestions: 18,
    totalAnswers: 18,
    data: [
      {
        question: "What is a Development Site (Dev Site)?",
        answer:
          "parcel of vacant land intended for a planned commercial development project.",
      },
      {
        question: "How is a Development Site defined ?",
        answer: "s raw land with no structure or building on site.",
      },
      {
        question: "What unit does TICI use to track Development Sites in US?",
        answer: "cres",
      },
      {
        question: "What unit does TICI use to track Development Sites in EU?",
        answer: "hectares",
      },
      {
        question:
          "What is the purpose of aWhat is the purpose of a Retail Development Site? Development Site?",
        answer:
          "To build a retail property such as a mall, strip center, high street shops, or retail park.",
      },
      {
        question: "What is the purpose of an Office Development Site?",
        answer: "To build an office property.",
      },
      {
        question: "What is the purpose of an Industrial Development Site?",
        answer:
          "To build an industrial property such as a warehouse, flex space, cold storage, or specialty facility.",
      },
      {
        question: "What is the purpose of a Residential Development Site?",
        answer:
          "To build a residential property such as an apartment, mobile home park (MHP), or student housing.",
      },
      {
        question: "What is the purpose of a Data Center Development Site?",
        answer: "To build a data center property.",
      },
      {
        question: "What is the purpose of a Self-Storage Development Site?",
        answer: "To build a self-storage facility.",
      },
      {
        question: "What is the purpose of a Lodging Development Site?",
        answer: "To build a hotel property.",
      },
      {
        question: "What is the purpose of a Healthcare Development Site?",
        answer:
          "To build a healthcare property such as senior housing, acute care, hospital, or inpatient rehab.",
      },
      {
        question: "What is the purpose of a Gaming Development Site?",
        answer:
          "To build a gaming property such as a casino, racino, or dockside facility.",
      },
      {
        question: "What is the purpose of a Commercial Development Site?",
        answer: "To build a general commercial property.",
      },
      {
        question: "What is the purpose of a Mixed Development Site?",
        answer: "To build a mixed-use commercial property.",
      },
      {
        question: "What is the purpose of a Tower Development Site?",
        answer: "To build a tower structure.",
      },
      {
        question:
          "Can a Development Site include existing buildings in the US?",
        answer: "No, only raw land is included in the US definition.",
      },
      {
        question:
          "Can a Development Site include land under development in the EU?",
        answer: "Yes, the EU includes both raw land and land in development.",
      },
    ],
  },
  Gaming: {
    totalQuestions: 7,
    totalAnswers: 7,
    data: [
      {
        question: "What is the Gaming sector in real estate?",
        answer:
          "properties with gaming elements such as casinos, racetracks, and dockside facilities.",
      },
      {
        question:
          "What are the two main types of casinos in the U.S. gaming industry?",
        answer: "Commercial casinos and tribal casinos.",
      },
      {
        question: "Where are tribal casinos typically located?",
        answer: "On Native American-controlled land.",
      },
      {
        question: "What is the PPU typically based on in the Gaming sector?",
        answer: "Rentable square feet/square meters and number of rooms.",
      },
      {
        question: "What is a Casino in the context of the Gaming sector?",
        answer:
          "facility for gambling, often combined with hotels, resorts, restaurants, and retail.",
      },
      {
        question: "What is a Dockside gaming property?",
        answer:
          "casino connected to a waterway, such as riverboats or cruise ships, common in the Midwest and South.",
      },
      {
        question: "What is a Racing gaming property?",
        answer:
          "combined racetrack and casino, often limited to slot machines but increasingly including table games.",
      },
    ],
  },
  "Health care": {
    totalQuestions: 20,
    totalAnswers: 20,
    data: [
      {
        question: "What is the healthcare industry sector?",
        answer:
          "It is a continuum of businesses that provide medical services, manufacture medical equipment or drugs, offer medical insurance, or otherwise facilitate healthcare provision to patients.",
      },
      {
        question: "What are the main subsectors in healthcare real estate?",
        answer:
          "Medical Office, Hospital, Senior Housing, and Skilled Nursing.",
      },
      {
        question: "What is a Medical Office Building (MOB)?",
        answer:
          "An office building outfitted for physicians, often located near a hospital.",
      },
      {
        question: "What is an On-Campus Medical Office?",
        answer: "A building located on or adjacent to a hospital campus.",
      },
      {
        question: "What is an Off-Campus Medical Office?",
        answer:
          "A building not directly on or adjacent to a hospital campus but still serving healthcare needs.",
      },
      {
        question: "What is an Acute Care Hospital?",
        answer:
          "A facility providing short-term inpatient care for surgery, acute medical conditions, or injuries. Track square feet/meters.",
      },
      {
        question: "What is a Long-Term Acute Care Hospital?",
        answer:
          "A facility for patients requiring extended hospitalization. Track number of beds.",
      },
      {
        question: "What is an Inpatient Rehab Facility?",
        answer:
          "A licensed facility offering intensive rehabilitative services. Track number of beds.",
      },
      {
        question: "What is Behavioral Health in a hospital context?",
        answer:
          "Services focusing on habits and behaviors affecting mental and physical health. Track square feet/meters.",
      },
      {
        question: "What is Senior Housing?",
        answer:
          "Apartment communities for the 80+ age group that also offer care.",
      },
      {
        question: "What is Memory Care?",
        answer:
          "Housing for adults with Alzheimer’s or dementia. Track units or beds. Must be >50% of total unit count.",
      },
      {
        question: "What is Assisted Living?",
        answer:
          "Communities for adults needing help with daily activities. Track units or beds. Must be >50% of total unit count.",
      },
      {
        question: "What is Independent Living?",
        answer:
          "Communities for independent seniors offering lifestyle amenities. Track units or beds. Must be >50% of total unit count.",
      },
      {
        question: "What is Nursing Care in Senior Housing?",
        answer:
          "Facilities offering 24-hour nursing care. Track beds or units. Must be >50% of total unit count.",
      },
      {
        question: "What is a Continuing Care Retirement Community (CCRC)?",
        answer:
          "A campus offering a continuum of care (IL, AL, MC, SNF) with no majority unit type.",
      },
      {
        question:
          "How do you classify a senior housing property with mixed unit types?",
        answer: "If no unit type exceeds 50%, classify it as a CCRC.",
      },
      {
        question: "What metric is used to classify hospital types?",
        answer:
          "Square feet/meters for Acute and Behavioral Health; number of beds for Long-Term Acute Care and Inpatient Rehab.",
      },
      {
        question: "What metric is used to classify senior housing types?",
        answer: "Number of units or beds, depending on the attribute.",
      },
      {
        question: "When should a property be classified as Assisted Living?",
        answer:
          "When assisted living units account for more than 50% of the total unit count.",
      },
      {
        question:
          "What distinguishes Nursing Care from other senior housing types?",
        answer: "24-hour medical staff and care, tracked by beds or units.",
      },
    ],
  },
  Industrial: {
    totalQuestions: 18,
    totalAnswers: 18,
    data: [
      {
        question: "What is the industrial real estate sector?",
        answer:
          "It includes properties used to develop, manufacture, or produce goods and products, such as warehouses and distribution centers.",
      },
      {
        question:
          "What metric is tracked for industrial properties in the Deal Database?",
        answer: "Square feet or square meters.",
      },
      {
        question: "How do you enter an industrial property into TICI?",
        answer: "Select “Industrial” in the Sector field.",
      },
      {
        question: "What is Flex Industrial?",
        answer:
          "Flex Industrial properties have 25% or more office buildout, resulting in higher parking ratios and more flexibility in use.",
      },
      {
        question: "What is a Warehouse?",
        answer:
          "A warehouse is used for storage, manufacturing, and/or distribution of goods.",
      },
      {
        question: "What is Industrial-Specialty?",
        answer:
          "A category for unique industrial properties like truck terminals and industrial parks.",
      },
      {
        question: "What is Warehouse-Bulk Distribution?",
        answer:
          "Large, single-story buildings (250k to over 1M sq ft) used for wide-area storage and distribution.",
      },
      {
        question: "What is Warehouse-Light Industrial?",
        answer:
          "Smaller, more divisible buildings for local or regional distribution.",
      },
      {
        question: "What is Warehouse-Manufacturing/Heavy Industrial?",
        answer:
          "Buildings used for manufacturing, typically 300,000 sq ft or more.",
      },
      {
        question: "What are Truck Terminals?",
        answer:
          "Facilities used as freight transfer points for trucking or distribution companies like UPS or FedEx.",
      },
      {
        question: "What is an Industrial Park?",
        answer:
          "A landscaped area with multiple industrial buildings. Even if a building sells independently, it remains part of the park.",
      },
      {
        question: "How do you classify a property with 30% office buildout?",
        answer: "As Flex Industrial.",
      },
      {
        question:
          "What distinguishes Flex Industrial from traditional industrial space?",
        answer: "Higher office buildout and parking ratios.",
      },
      {
        question:
          "What type of industrial property is best for regional distribution?",
        answer: "Warehouse-Light Industrial.",
      },
      {
        question: "What type of industrial property is used for manufacturing?",
        answer: "Warehouse-Manufacturing/Heavy Industrial.",
      },
      {
        question: "Can a building in an industrial park be sold independently?",
        answer: "Yes, but it is still considered part of the industrial park.",
      },
      {
        question:
          "What is the typical size range for Bulk Distribution warehouses?",
        answer: "250,000 to over 1 million square feet.",
      },
      {
        question: "What is the function of a truck terminal?",
        answer:
          "To transfer freight and materials between trucks or distribution networks.",
      },
    ],
  },
  "Life science": {
    totalQuestions: 18,
    totalAnswers: 18,
    data: [
      {
        question: "What is the life science industry sector?",
        answer:
          "It includes biotechnology, pharmaceuticals, biomedical technologies, life systems technologies, nutraceuticals, and the manufacturing of biomedical devices.",
      },
      {
        question:
          "What metric is tracked for life science properties in the Deal Database?",
        answer: "Square feet (US/UK) and square meters (Europe).",
      },
      {
        question: "How do you enter a life science transaction into TICI?",
        answer: "Select “Life Science” in the Sector field.",
      },
      {
        question: "Are there any subsector options for life science in TICI?",
        answer: "No, there are currently no subsector options.",
      },
      {
        question:
          "What types of tenants typically occupy life science properties?",
        answer: "Pharmaceutical, medical device, and biotech companies.",
      },
      {
        question:
          "Can a life science property be a standard office or industrial building?",
        answer: "Yes, as long as it is built out for a life science tenant.",
      },
      {
        question: "What is R&D / Lab Space in life science real estate?",
        answer:
          "A building used for office, research, and development, often including laboratory space such as clean rooms or wet labs.",
      },
      {
        question:
          "What is the typical office-to-lab ratio in life science buildings?",
        answer: "Between 40% office / 60% lab and 60% office / 40% lab.",
      },
      {
        question:
          "Why is the office-to-lab ratio important in life science classification?",
        answer:
          "It ensures the property has a balanced mix of lab and office space, distinguishing it from pure industrial or office buildings.",
      },
      {
        question:
          "Should a building with only one lab floor in a 60-story office tower be classified as life science?",
        answer:
          "No, because it lacks the appropriate balance of lab and office space.",
      },
      {
        question:
          "Should a large-scale vaccine manufacturing facility be classified as life science?",
        answer:
          "No, because it lacks R&D utilization and is more industrial in nature.",
      },
      {
        question: "What is a life science park?",
        answer: "A landscaped area with multiple life science buildings.",
      },
      {
        question:
          "If a building in a life science park is sold independently, is it still considered part of the park?",
        answer: "Yes, it retains the park attribute.",
      },
      {
        question:
          "Is the park attribute primary or secondary in life science classification?",
        answer: "It is a secondary attribute to R&D / Lab Space.",
      },
      {
        question:
          "A building has 50% lab and 50% office space. Can it be classified as life science?",
        answer: "Yes, it fits within the typical range for R&D / Lab Space.",
      },
      {
        question:
          "A biotech company leases a standard office building with no lab space. Should it be classified as life science?",
        answer: "No, unless the space is built out with lab components.",
      },
      {
        question:
          "A property has a clean room and multiple wet labs. What attribute should it be classified under?",
        answer: "R&D / Lab Space.",
      },
      {
        question:
          "What differentiates a life science building from a traditional industrial facility?",
        answer:
          "The presence of lab space and R&D usage rather than large-scale manufacturing.",
      },
    ],
  },
  Lodging: {
    totalQuestions: 41,
    totalAnswers: 41,
    data: [
      {
        question: "What is the lodging sector?",
        answer:
          "An establishment providing accommodations, meals, and other services for travelers and tourists.",
      },
      {
        question: "What metric is tracked for lodging properties in TICI?",
        answer: "Units are the main size field captured.",
      },
      {
        question: "What should you do to enter a lodging property into TICI?",
        answer: "Select 'Lodging' in the Sector field.",
      },
      {
        question: "What distinguishes the Gaming sector from Lodging?",
        answer:
          "If any gaming element exists, the property should be classified under the Gaming sector.",
      },
      {
        question: "What is a Full Service hotel?",
        answer:
          "Hotels with a greater array of amenities such as full-service restaurants, spas, and event spaces.",
      },
      {
        question: "What are attributes of a Luxury hotel?",
        answer:
          "Prime locations, superior service, fine dining, luxurious facilities, and spacious rooms with superior finishes.",
      },
      {
        question: "Can you name examples of Luxury hotels?",
        answer: "Four Seasons, St. Regis, Ritz-Carlton.",
      },
      {
        question: "What are attributes of an Upper Upscale hotel?",
        answer:
          "High-quality brands, strategic locations, professional service, quality dining, and top furnishings.",
      },
      {
        question: "Can you name examples of Upper Upscale hotels?",
        answer: "DoubleTree by Hilton, Hilton, Hyatt, Weston.",
      },
      {
        question: "What is a Resort hotel?",
        answer:
          "Combines lodging with recreation, food, spa, and shopping, typically in picturesque surroundings.",
      },
      {
        question: "Can you name examples of Resort hotels?",
        answer: "Grand Wailea Maui, A Waldorf Astoria Resort.",
      },
      {
        question: "What is a Boutique hotel under Full Service?",
        answer:
          "10 to 100 rooms, intimate service, contemporary vibe, rich in local flavor, pet-friendly.",
      },
      {
        question: "Can you name examples of Full Service Boutique hotels?",
        answer: "Andaz, Aertson.",
      },
      {
        question: "What is an Independent Full Service hotel?",
        answer:
          "A full-service hotel independently owned and operated, not franchised.",
      },
      {
        question: "Can you name examples of Independent Full Service hotels?",
        answer: "Eau Palm Beach Resort & Spa.",
      },
      {
        question: "What is a Limited Service hotel?",
        answer:
          "Budget-friendly hotels offering accommodations without on-site food/beverage services.",
      },
      {
        question: "What are attributes of a Midscale hotel?",
        answer:
          "Simple, low-priced, basic properties with limited dining and amenities.",
      },
      {
        question: "Can you name examples of Midscale hotels?",
        answer: "Comfort Inn, Hampton, Ramada.",
      },
      {
        question: "What are attributes of an Economy hotel?",
        answer:
          "Simple, clean, low-priced with basic amenities and modest rooms.",
      },
      {
        question: "Can you name examples of Economy hotels?",
        answer: "Extended Stay America, Days Inn, Super 8.",
      },
      {
        question: "What is an Independent Limited Service hotel?",
        answer: "A limited-service hotel independently owned and operated.",
      },
      {
        question:
          "Can you name examples of Independent Limited Service hotels?",
        answer: "Surfhouse, Encinitas, CA.",
      },
      {
        question: "What are attributes of an Upscale Limited Service hotel?",
        answer:
          "Good quality, stylish architecture, attentive staff, pleasant dining, and quality rooms.",
      },
      {
        question: "Can you name examples of Upscale Limited Service hotels?",
        answer: "AC Hotels, Courtyard Marriott, aloft Hotels.",
      },
      {
        question: "What are attributes of an Upper Midscale hotel?",
        answer:
          "Pleasant accommodations, good value, roadside/suburban locations, helpful staff.",
      },
      {
        question: "Can you name examples of Upper Midscale hotels?",
        answer: "Wingate by Wyndham, Comfort Suites, Home2 Suites by Hilton.",
      },
      {
        question: "What is a Boutique hotel under Limited Service?",
        answer:
          "10 to 100 rooms, intimate service, quirky-modern spirit, rich in local flavor.",
      },
      {
        question: "What is an Extended Stay hotel?",
        answer:
          "Also known as Apartment or Residential Hotel, offering home-like amenities such as kitchens.",
      },
      {
        question:
          "What distinguishes Extended Stay hotels from standard hotels?",
        answer:
          "They provide features like kitchens and are designed for longer stays.",
      },
      {
        question: "What is the typical room count for Boutique hotels?",
        answer: "Between 10 to 100 rooms.",
      },
      {
        question: "What makes Boutique hotels unique?",
        answer:
          "Intimate service, local flavor, fewer rules, and pet-friendly policies.",
      },
      {
        question:
          "What is the difference between Full Service and Limited Service hotels?",
        answer:
          "Full Service offers extensive amenities including dining, while Limited Service focuses on budget-friendly lodging without full dining options.",
      },
      {
        question:
          "What type of hotel is best for travelers seeking luxury and fine dining?",
        answer: "Luxury Full Service hotels.",
      },
      {
        question:
          "What type of hotel is ideal for long-term stays with kitchen amenities?",
        answer: "Extended Stay hotels.",
      },
      {
        question:
          "What type of hotel offers recreation and spa services in scenic locations?",
        answer: "Resort hotels.",
      },
      {
        question:
          "What type of hotel is independently owned and not franchised?",
        answer: "Independent hotels (Full or Limited Service).",
      },
      {
        question: "What distinguishes Upper Upscale hotels from Luxury hotels?",
        answer:
          "Upper Upscale hotels offer high-quality service and amenities but may not reach the exclusivity and opulence of Luxury hotels.",
      },
      {
        question: "What is the primary focus of Boutique hotels?",
        answer: "Personalized service, local culture, and unique design.",
      },
      {
        question: "What type of hotel is best for budget-conscious travelers?",
        answer: "Economy or Midscale Limited Service hotels.",
      },
      {
        question:
          "What type of hotel is often located in suburban or roadside areas?",
        answer: "Upper Midscale Limited Service hotels.",
      },
      {
        question:
          "What type of hotel offers stylish architecture and pleasant dining without being full service?",
        answer: "Upscale Limited Service hotels.",
      },
    ],
  },
  Mall: {
    totalQuestions: 18,
    totalAnswers: 18,
    data: [
      {
        question: "What is the Mall sector in real estate?",
        answer:
          "The Mall sector includes US malls (regional and super regional), European shopping centers, outlets, and lifestyle centers.",
      },
      {
        question: "How is a Mall property entered into TICI?",
        answer: "By selecting 'Mall' in the Sector field.",
      },
      {
        question: "What metric is tracked for Mall properties in TICI?",
        answer: "Rentable Square Feet or Rentable Square Meter.",
      },
      {
        question: "What is a European Shopping Centre?",
        answer:
          "An all-purpose centre that can be open air or enclosed, selling apparel, electronics, general merchandise, luxury goods, and food. Often anchored by a hypermarket or department store. Range: 5,000 – 19,999 sq m.",
      },
      {
        question:
          "What does 'With a Grocer' mean in European Shopping Centres?",
        answer:
          "It means the anchored tenant is a grocer occupying more than 8,000 sq m.",
      },
      {
        question:
          "What does 'Without a Grocer' mean in European Shopping Centres?",
        answer:
          "It means the anchored tenants are typically department stores.",
      },
      {
        question: "What is a US Regional Mall?",
        answer:
          "A mall with general merchandise or fashion-oriented offerings, typically enclosed with inward-facing stores connected by a common walkway. Range: 400,000 – 800,000 sq ft.",
      },
      {
        question: "What is a US Super Regional Mall?",
        answer:
          "Similar to regional malls but offering more variety and assortment. Range: 800,000+ sq ft.",
      },
      {
        question: "What is an Outlet Mall?",
        answer:
          "Manufacturers and retailers outlet stores selling brand name goods at a discount. US range: 50,000–400,000 sq ft. EU range: 5,000+ sq m.",
      },
      {
        question: "What is a Lifestyle Center?",
        answer:
          "Upscale national chain specialty stores with dining and entertainment in an outdoor setting. Range: 150,000 – 500,000 sq ft (14,000 – 50,000 sq m).",
      },
      {
        question:
          "How do you classify a mall with a grocer occupying more than 8,000 sq m?",
        answer: "As a European Shopping Centre 'With a Grocer'.",
      },
      {
        question:
          "What distinguishes a Super Regional Mall from a Regional Mall?",
        answer:
          "Super Regional Malls offer more variety and assortment and are larger than 800,000 sq ft.",
      },
      {
        question:
          "What type of mall is typically open air and includes dining and entertainment?",
        answer: "A Lifestyle Center.",
      },
      {
        question: "What is the typical size range for Outlet Malls in the US?",
        answer: "50,000 to 400,000 sq ft.",
      },
      {
        question:
          "What is the typical size range for European Shopping Centres?",
        answer: "5,000 to 19,999 sq m.",
      },
      {
        question:
          "What type of anchor tenant is found in a European Shopping Centre 'Without a Grocer'?",
        answer: "Department stores.",
      },
      {
        question:
          "Can a mall be classified as both a Lifestyle Center and an Outlet?",
        answer:
          "No, they are distinct classifications based on tenant type and layout.",
      },
      {
        question:
          "What is the primary difference between US and EU mall classifications?",
        answer:
          "US malls are categorized by size and type (Regional, Super Regional, Outlet, Lifestyle), while EU malls are categorized as Shopping Centres with attributes like 'With a Grocer' or 'Without a Grocer'.",
      },
    ],
  },
  "Net Lease": {
    totalQuestions: 17,
    totalAnswers: 17,
    data: [
      {
        question: "What is the Net Lease sector?",
        answer:
          "It refers to retail space usually occupied by a single tenant, including anchor-only properties sold within a mall, lifestyle center, or strip center.",
      },
      {
        question:
          "What metric is tracked for Net Lease properties in the Deal Database?",
        answer: "Square feet or square meters (EU).",
      },
      {
        question: "How do you enter a Net Lease property into TICI?",
        answer:
          "Select “Net Lease” in the Sector field. There are no subsector options.",
      },
      {
        question: "What is the 'Airport' attribute in Net Lease?",
        answer:
          "A consolidation of retail stores located within a commercial airport.",
      },
      {
        question: "What does 'Anchor Only' mean?",
        answer: "It refers to an anchor tenant that is not a grocer.",
      },
      {
        question: "What is a 'Bank Branch' in Net Lease?",
        answer:
          "A retail location for a financial institution offering face-to-face and automated services.",
      },
      {
        question: "What defines a 'Big Box' property?",
        answer:
          "A freestanding single-tenant retail property, typically single-story and over 30 ft tall (e.g., Costco, Sam’s Club).",
      },
      {
        question: "What is a 'Casual Dining Restaurant'?",
        answer:
          "A sit-down restaurant serving moderately priced food in a casual atmosphere, often with a full bar.",
      },
      {
        question: "What is a 'Convenience Store'?",
        answer:
          "A store with extended hours and limited household goods and groceries.",
      },
      {
        question: "What is a 'Drug Store'?",
        answer:
          "A retail pharmacy, often part of a regional, national, or international chain.",
      },
      {
        question: "What does 'Freestanding' mean in Net Lease?",
        answer:
          "A property separate from a shopping center, consisting of up to 2 tenants.",
      },
      {
        question: "What is 'Grocery (Anchored Only)'?",
        answer:
          "Indicates the transaction was only for the property occupied by the grocery anchor.",
      },
      {
        question: "What is a 'Gym/Fitness' property?",
        answer: "A health fitness center or gym.",
      },
      {
        question: "What is a 'Movie Theatre/Cinema'?",
        answer: "A property used as a movie theatre or cinema.",
      },
      {
        question: "What is an 'Outparcel'?",
        answer:
          "A single-tenant property located on a pad within a center or mall, part of a greater center.",
      },
      {
        question: "What is a 'QSR'?",
        answer:
          "A Quick Service Restaurant, also known as a fast food restaurant, with minimal table service.",
      },
      {
        question: "What does the 'Other' attribute include?",
        answer:
          "Unanchored or Anchor Only tenants and other miscellaneous classifications.",
      },
    ],
  },
  Office: {
    totalQuestions: 14,
    totalAnswers: 14,
    data: [
      {
        question:
          "What is considered an Office property in commercial real estate?",
        answer:
          "An Office property is a commercial space where a company conducts its business. It can be located in a single building, a business park, or a large urban/CBD office tower.",
      },
      {
        question:
          "What unit of measurement does the TICI database use to track Office properties?",
        answer:
          "The TICI database tracks Office properties in square feet or square meters.",
      },
      {
        question: "How do you enter an Office property into the TICI database?",
        answer:
          "You select “Office” in the Sector field when entering the property.",
      },
      {
        question:
          "What does the “Flex” subsector represent in Office properties?",
        answer:
          "“Flex” stands for flexible office space that includes 25% or more industrial buildout, making it a hybrid between office and industrial use.",
      },
      {
        question:
          "What is the definition of “CBD” in the context of Office properties?",
        answer:
          "“CBD” stands for Central Business District, which is the downtown or central commercial area of a city.",
      },
      {
        question: "What qualifies an Office property as “Suburban”?",
        answer:
          "Any Office inventory not located in the CBD is classified as Suburban.",
      },
      {
        question: "What defines a High-Rise Office building?",
        answer: "A High-Rise Office building typically has 12 or more floors.",
      },
      {
        question: "What defines a Mid-Rise Office building?",
        answer: "A Mid-Rise Office building typically has 4 to 11 floors.",
      },
      {
        question: "What defines a Low-Rise Office building?",
        answer: "A Low-Rise Office building typically has 1 to 3 floors.",
      },
      {
        question: "What is meant by the “Park” attribute in Office properties?",
        answer:
          "“Park” refers to an Office property that is part of a group of offices built together on landscaped grounds. Even if a building within the park sells independently, it retains the “Park” attribute.",
      },
      {
        question:
          "If an Office building has 10 floors and is located outside the CBD, how would you classify it?",
        answer:
          "It would be classified as Suburban in the subsector and Mid-Rise in the attribute.",
      },
      {
        question: "Can a Flex property be located in the CBD?",
        answer:
          "Yes, Flex properties can be located in any area, including the CBD, as long as they meet the industrial buildout criteria.",
      },
      {
        question:
          "If a building in an Office Park is sold independently, should it still be marked as “Park”?",
        answer: "Yes, it should still be marked with the “Park” attribute.",
      },
      {
        question:
          "What is the minimum industrial buildout percentage for a property to be classified as Flex?",
        answer: "The property must have 25% or greater industrial buildout.",
      },
    ],
  },
  "Self storage": {
    totalQuestions: 14,
    totalAnswers: 14,
    data: [
      {
        question: "What is a Self-Storage property in commercial real estate?",
        answer:
          "A Self-Storage property is a niche real estate business that rents storage units on a monthly basis to individuals and businesses for various needs such as relocation, life changes, or excess belongings.",
      },
      {
        question:
          "What types of needs does the Self-Storage industry accommodate?",
        answer:
          "It accommodates needs from life events like death, divorce, marriage, relocation, moving, college, military service, and discretionary uses like storing excess items.",
      },
      {
        question:
          "How is area tracked for Self-Storage properties in the TICI database?",
        answer:
          "Area is tracked in square feet (US & EU) or square meters (EU only).",
      },
      {
        question:
          "Is it mandatory to capture the number of units in the TICI database for Self-Storage properties?",
        answer:
          "No, it is not required, but the number of units can be captured if available.",
      },
      {
        question:
          "How do you enter a Self-Storage property into the TICI database?",
        answer: "You select “Self-Storage” in the Sector field.",
      },
      {
        question: "What is a Climate Controlled storage unit?",
        answer:
          "A Climate Controlled unit maintains a temperature between 55°F and 85°F, and is ideal for storing valuable or environmentally sensitive items. These units are typically indoor with stable temperature and humidity.",
      },
      {
        question: "What is a Non Climate Controlled storage unit?",
        answer:
          "A Non Climate Controlled unit is not heated or cooled, meaning items stored are exposed to fluctuating outdoor temperatures, though most items are still generally protected.",
      },
      {
        question:
          "Why might someone choose a Climate Controlled unit over a Non Climate Controlled one?",
        answer:
          "For storing items that are sensitive to temperature and humidity, such as electronics, artwork, documents, or antiques.",
      },
      {
        question: "Can Climate Controlled units be located outdoors?",
        answer:
          "No, they are almost always indoor to maintain stable environmental conditions.",
      },
      {
        question:
          "If a Self-Storage facility in Europe provides measurements in square meters and includes unit count, how should it be entered into TICI?",
        answer:
          "Enter the area in square meters, and include the unit count if provided.",
      },
      {
        question:
          "What attribute would you assign to a facility with no temperature regulation?",
        answer: "Non Climate Controlled",
      },
      {
        question:
          "What attribute would you assign to a facility with temperature regulation between 55°F and 85°F?",
        answer: "Climate Controlled",
      },
      {
        question:
          "Is it possible for a Self-Storage facility to have both Climate Controlled and Non Climate Controlled units?",
        answer:
          "Yes, many facilities offer a mix of both types to cater to different storage needs.",
      },
      {
        question:
          "What kind of items are typically stored in Non Climate Controlled units?",
        answer:
          "Items like furniture, tools, seasonal decorations, and general household goods that are less sensitive to temperature changes.",
      },
    ],
  },
  "Strip Center": {
    totalQuestions: 20,
    totalAnswers: 20,
    data: [
      {
        question: "What is a Strip Center in commercial real estate?",
        answer:
          "A Strip Center (or strip mall/plaza) is a type of shopping center where stores are arranged in a row with a sidewalk in front, typically developed as a unit with large parking lots in front.",
      },
      {
        question:
          "How is area tracked for Strip Center properties in the TICI database?",
        answer:
          "Area is tracked in square feet (US/EU) or square meters (EU only).",
      },
      {
        question:
          "How do you enter a Strip Center property into the TICI database?",
        answer: "You select “Strip Center” in the Sector field.",
      },
      {
        question: "What is a Community Center in the context of Strip Centers?",
        answer:
          "A Community Center offers general merchandise or convenience-oriented goods, often laid out in a straight line, L-shape, or U-shape. Size Range: 125,000–400,000 sq ft (10,000–40,000 sq m)",
      },
      {
        question: "What is a Neighborhood Center?",
        answer:
          "A Neighborhood Center is convenience-oriented and often anchored by a supermarket.Size Range: 30,000–125,000 sq ft (3,000–10,000 sq m)",
      },
      {
        question: "What is a Power Center (US) or Retail Park (EU)?",
        answer:
          "Power Center (US): Specialized center with category-dominant anchors like discount department stores and wholesale clubs. Size Range: 250,000–800,000 sq ft",
      },
      {
        question: "What is Street Retail?",
        answer:
          "Pedestrian-oriented retail use adjacent to and accessible from the sidewalk, including stores, restaurants, and service shops.",
      },
      {
        question: "What is Strip/Convenience?",
        answer:
          "A small retail center with attached stores in a row, typically with front parking and open canopies. Size Range: <30,000 sq ft (<3,000 sq m) Note: Must have an anchor tenant to use this subsector; otherwise, use “Unanchored Strip.”",
      },
      {
        question: "What is an Unanchored Strip?",
        answer: "A Strip/Convenience center without an anchor tenant.",
      },
      {
        question: "What does “With a Grocer” mean as an attribute?",
        answer: "The center’s anchor tenant is a grocer.",
      },
      {
        question: "What does “Without a Grocer” mean as an attribute?",
        answer: "The anchor tenant is not a grocer.",
      },
      {
        question: "What is an Urban Store Front (US only)?",
        answer:
          "A retail property in a downtown or urban area, not part of an enclosed or open-air center.",
      },
      {
        question: "What is High Street (EU only)?",
        answer:
          "Retailers located on the primary business streets of towns or cities, typically >2,800 sq m, including both international and local stores.",
      },
      {
        question:
          "If a retail center in the US has 300,000 sq ft and includes a discount department store as anchor, how is it classified?",
        answer: "It would be classified as a Power Center.",
      },
      {
        question:
          "A small retail center in Europe with 2,500 sq m and no anchor tenant—how should it be classified?",
        answer: "It should be classified as an Unanchored Strip.",
      },
      {
        question:
          "A retail property in downtown New York selling fashion and food, not part of a mall—what attribute applies?",
        answer: "Urban Store Front",
      },
      {
        question:
          "A European retail center with 30,000 sq m and multiple large retailers in an open-air layout—what is the subsector?",
        answer: "Retail Park",
      },
      {
        question:
          "Can a Strip Center be configured in shapes other than a straight line?",
        answer: "Yes, it can also be laid out in an L or U shape.",
      },
      {
        question: "What is the minimum size for a Community Center?",
        answer: "125,000 sq ft (or 10,000 sq m)",
      },
      {
        question: "What is the maximum size for a Neighborhood Center?",
        answer: "125,000 sq ft (or 10,000 sq m)",
      },
    ],
  },
  "Student Housing": {
    totalQuestions: 14,
    totalAnswers: 14,
    data: [
      {
        question: "What is Student Housing in commercial real estate?",
        answer:
          "Student Housing refers to apartment communities designed specifically for students in higher education, offering features like per-bed leasing, roommate matching, flexible lease terms aligned with academic calendars, furnished units, and student-focused amenities.",
      },
      {
        question:
          "What distinguishes Student Housing from traditional multifamily housing?",
        answer:
          "Key differences include per-bed leasing, roommate matching, academic calendar lease terms, fully furnished units, and student-specific amenities.",
      },
      {
        question:
          "What does the Sales Comps database track for Student Housing properties?",
        answer:
          "It tracks the number of units, but beds are also important and should not be confused with units.",
      },
      {
        question:
          "Why is it important to differentiate between units and beds in Student Housing?",
        answer:
          "Because leasing is often done per bed, not per unit, making bed count critical for valuation and comparison.",
      },
      {
        question: "What defines a High-Rise Student Housing building?",
        answer:
          "A High-Rise building has 11 or more floors and is typically located in downtown submarkets of larger cities.",
      },
      {
        question: "What defines a Mid-Rise Student Housing building?",
        answer:
          "A Mid-Rise building has 4 to 10 floors and is often found in suburban areas of larger cities.",
      },
      {
        question: "What defines a Garden/Low-Rise Student Housing building?",
        answer:
          "A Garden/Low-Rise building has 1 to 3 floors, often with landscaped gardens or lawns, and is generally located in suburban areas.",
      },
      {
        question:
          "If a student housing property has 200 units and 600 beds, what does this imply?",
        answer:
          "It implies that each unit houses multiple students, and leasing is likely done per bed, not per unit.",
      },
      {
        question:
          "A student housing building with 12 floors in a downtown area—what attribute applies?",
        answer: "High-Rise",
      },
      {
        question:
          "A student housing complex with 3 floors and landscaped gardens in the suburbs—what attribute applies?",
        answer: "Garden/Low-Rise",
      },
      {
        question:
          "Why might a student prefer a property with roommate matching and flexible lease terms?",
        answer:
          "Because these features accommodate academic schedules and help students find compatible roommates, enhancing convenience and affordability.",
      },
      {
        question: "Can a Student Housing property be unfurnished?",
        answer:
          "While possible, most Student Housing properties are fully furnished to meet student needs.",
      },
      {
        question:
          "What kind of amenities are typically found in Student Housing?",
        answer:
          "Amenities may include study lounges, fitness centers, game rooms, high-speed internet, and shuttle services to campus.",
      },
      {
        question:
          "Is per-bed leasing common in traditional multifamily housing?",
        answer:
          "No, per-bed leasing is unique to Student Housing and not typical in traditional multifamily properties.",
      },
    ],
  },
  ARC: {
    totalQuestions: 50,
    totalAnswers: 50,
    data: [
      {
        question: "What is the purpose of the ARC Entity Master Module?",
        answer:
          "It stores details on every entity—company, investment fund, or individual—referenced by any of the other ARC modules (ABS, CMBS, CLO, RE).",
      },
      {
        question:
          "Why must an entity be in the Entity Master Module before being added to a transaction?",
        answer:
          "Because all other ARC modules pull entity data from the Entity Master, ensuring consistency and centralized management.",
      },
      {
        question: "Which ARC modules rely on the Entity Master Module?",
        answer: "The ABS, CMBS, CLO, and RE modules.",
      },
      {
        question: "What is the Entity ID and when can it be edited?",
        answer:
          "The Entity ID is a six-character identifier for the entity, editable only when creating a new entity.",
      },
      {
        question: "How should you choose an Entity ID?",
        answer:
          "Choose an ID that is reasonably suggestive of the full entity name (e.g., Green Street ARC Company → GSARCC). If it's taken, try a slight variation.",
      },
      {
        question: "What should you do before creating a new entity name?",
        answer:
          "Verify that a common variant of the name isn’t already in use (e.g., JPMorgan Chase vs. J.P. Morgan Chase).",
      },
      {
        question: "How should individual names be entered?",
        answer:
          "Use first and last names, and include a middle name only if necessary to distinguish between individuals with the same name.",
      },
      {
        question: "What is the Editorial Name field used for?",
        answer:
          "It follows Green Street News’s editorial style, as outlined in the Editorial Names tab.",
      },
      {
        question: "What is the Editorial Description field?",
        answer:
          "A text description of the entity for editorial or reporting purposes.",
      },
      {
        question: "What is the Entity Type field?",
        answer:
          "It classifies the entity (e.g., Investment Bank, Insurance Company, Pension Fund, Individual).",
      },
      {
        question:
          "What should you do if you're unsure about the correct Entity Type?",
        answer:
          "Look up a similar company in the database or ask your manager.",
      },
      {
        question: "What is the Parent Entity field used for?",
        answer:
          "To capture the ultimate parent company of a subsidiary or unit.",
      },
      {
        question: "What kind of phone number should be entered?",
        answer: "The primary main office phone number.",
      },
      {
        question: "What should be entered in the Website field?",
        answer: "The company’s official website.",
      },
      {
        question: "What does the Year Founded field capture?",
        answer: "The year the company was established.",
      },
      {
        question: "What address details are required?",
        answer:
          "The headquarters address, including city, state, postal code, and country.",
      },
      {
        question:
          "If you’re entering a subsidiary of JPMorgan Chase, what should you enter in the Parent Entity field?",
        answer: "JPMorgan Chase, as the ultimate parent.",
      },
      {
        question:
          "If two individuals named John Smith exist in the database, how should you differentiate them?",
        answer: "Include a middle name for one or both to distinguish them.",
      },
      {
        question:
          "What should you do if the Entity ID you want is already taken?",
        answer:
          "Try a slight variation of the ID that still reflects the entity name.",
      },
      {
        question: "Why is it important to follow editorial naming conventions?",
        answer:
          "To ensure consistency across Green Street News publications and internal records.",
      },
      {
        question:
          "What is the purpose of the Entity Type field in the ARC Entity Master Module?",
        answer:
          "It provides a general description of how an entity is organized or what type of business it operates in.",
      },
      {
        question:
          "What should you do if none of the listed entity types exactly fit the entity you're entering?",
        answer:
          "Choose the best fit option available. If no option feels appropriate, use “Other.”",
      },
      {
        question:
          "What are highlighted entity types, and why are they important?",
        answer:
          "Highlighted entity types take precedence over non-highlighted ones when multiple types could apply. For example, “Government Entity” takes precedence over “Student Lender” if both apply.",
      },
      {
        question: "What is an Auto Lender (Independent)?",
        answer:
          "A finance company not affiliated with an auto manufacturer or retailer, focused on automobile loans.",
      },
      {
        question: "What is a Bank/Thrift?",
        answer:
          "A bank focused on consumer services like savings, checking, and home loans.",
      },
      {
        question: "What is a Credit Card Bank (Monoline)?",
        answer: "A company that issues credit cards as its primary business.",
      },
      {
        question: "What is a Developer?",
        answer:
          "A company that develops or redevelops commercial or residential properties.",
      },
      {
        question: "What is a Factoring Company?",
        answer: "A business that purchases another company’s invoices.",
      },
      {
        question: "What is a Finance Company (Captive)?",
        answer:
          "A subsidiary that finances retail purchases from its parent firm (e.g., auto manufacturer’s finance arm).",
      },
      {
        question: "What is a Finance Company (Diversified)?",
        answer:
          "A company offering a wide range of consumer finance products, not limited to one category.",
      },
      {
        question: "What is a Fund Manager?",
        answer:
          "An investment advisor managing commingled investment funds pooling capital from multiple investors.",
      },
      {
        question: "What is a Government Entity?",
        answer: "Any government or government-owned organization.",
      },
      {
        question: "What is an Investment Bank?",
        answer:
          "A bank offering investment services like underwriting, brokerage, and advisory.",
      },
      {
        question: "What is a Law Firm?",
        answer: "A firm providing legal services and representation.",
      },
      {
        question: "What is a Leasing Company?",
        answer:
          "A company specializing in leasing physical goods, such as equipment or vehicles.",
      },
      {
        question: "What is a Mortgage Bank?",
        answer: "A bank whose primary business is writing mortgages.",
      },
      {
        question: "What is a Pension Fund?",
        answer: "A fund or plan that provides retirement income.",
      },
      {
        question: "What is a Private Equity Fund?",
        answer:
          "An investment fund targeting company investments using private equity strategies.",
      },
      {
        question: "What is a Property Management Company?",
        answer:
          "A company that manages commercial properties, including leasing and maintenance.",
      },
      {
        question: "What is a Real Estate Fund?",
        answer:
          "An investment fund focused on commercial or residential real estate.",
      },
      {
        question: "What is a REIT?",
        answer:
          "A Real Estate Investment Trust, organized to own, operate, or finance income-producing real estate.",
      },
      {
        question: "What is a Retailer?",
        answer:
          "A company selling goods to consumers, either physically or online.",
      },
      {
        question: "What is a Student Lender?",
        answer: "A lender specializing in education loans for students.",
      },
      {
        question: "What is a Technology Company?",
        answer:
          "A company providing technology products or services (e.g., Google, Facebook).",
      },
      {
        question: "What is a Utility?",
        answer:
          "A provider of electricity, gas, telecommunications, or similar services.",
      },
      {
        question:
          "If a company both manages real estate and invests in it, which entity type should you choose?",
        answer:
          "Choose the highlighted type if applicable, or the best fit based on primary business. If unclear, consult similar entries or ask a manager.",
      },
      {
        question:
          "If a government agency provides student loans, which entity type should be used?",
        answer:
          "Government Entity, because it is highlighted and takes precedence over Student Lender.",
      },
      {
        question:
          "What should you do if a company is involved in both media production and retail?",
        answer:
          "Choose the primary business focus. If both are equally significant, select the highlighted type or use Other if no fit applies.",
      },
      {
        question:
          "Can “Other” be used for a company that fits multiple categories?",
        answer:
          "Only if none of the listed types adequately describe the entity.",
      },
      {
        question:
          "What’s the difference between a Finance Company (Captive) and Finance Company (Diversified)?",
        answer:
          "Captive: Finances purchases from its parent firm. Diversified: Offers varied consumer finance products across sectors.",
      },
    ],
  },
};

export default categoryData;
