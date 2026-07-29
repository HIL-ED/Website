/* =========================================================================
   AP CONNECTIONS — DATA
   Five AP courses, each broken into its official College Board units.
   Every unit has an Easy category set and a Hard category set. Hard sets
   avoid "these are all people" / "these are all terms" groupings in favor
   of shared years, mirrored pairs (push vs. pull, expansionary vs.
   contractionary), and vocabulary that looks interchangeable but isn't.
========================================================================= */
const COURSES = [

/* ======================================================================
   AP WORLD HISTORY: MODERN
====================================================================== */
{
  id:"apworld", icon:"🌍", name:"AP World History: Modern",
  blurb:"Nine units from 1200 to the present: empires, exchange networks, revolutions, and the modern global system.",
  units:[
    {
      id:"apwh-u1", unit:"Unit 1", title:"The Global Tapestry", range:"c. 1200–1450",
      easy:{
        blurb:"Empires, religions, rulers, and trade hubs of the period.",
        categories:[
          { name:"Empires and Kingdoms (c. 1200–1450)", items:["Mali Empire","Byzantine Empire","Khmer Empire","Delhi Sultanate"] },
          { name:"Major World Religions Spreading in This Era", items:["Buddhism","Islam","Christianity","Hinduism"] },
          { name:"Rulers of the Period", items:["Mansa Musa","Genghis Khan","Kublai Khan","Sundiata Keita"] },
          { name:"Trade Cities & Hubs", items:["Timbuktu","Swahili Coast City-States","Novgorod","Hangzhou"] }
        ]
      },
      hard:{
        blurb:"Mansa Musa's hajj, Song China's social order, Mongol legacies, and titles of legitimacy.",
        categories:[
          { name:"Elements of Mansa Musa's Famous Hajj", items:["Mali Empire","Timbuktu","Gold","Cairo"] },
          { name:"Song Dynasty Neo-Confucian Society", items:["Civil Service Exams","Foot Binding","Filial Piety","Scholar-Officials"] },
          { name:"Effects of the Mongol Conquests", items:["Pax Mongolica","Silk Roads Revival","Bubonic Plague Spread","Yuan Dynasty"] },
          { name:"Titles & Concepts Legitimizing Rulers", items:["Caliphate","Sultanate","Mandate of Heaven","Khan"] }
        ]
      }
    },
    {
      id:"apwh-u2", unit:"Unit 2", title:"Networks of Exchange", range:"c. 1200–1450",
      easy:{
        blurb:"Trade networks, the technology and goods that moved along them, and the plague's effects.",
        categories:[
          { name:"Major Trade Networks (c. 1200–1450)", items:["Silk Roads","Indian Ocean Trade Network","Trans-Saharan Trade Routes","Hanseatic League"] },
          { name:"Technologies That Spread Along Trade Routes", items:["Compass","Gunpowder","Woodblock Printing","Astrolabe"] },
          { name:"Goods Traded Across Afro-Eurasia", items:["Silk","Spices","Gold","Salt"] },
          { name:"Effects of Cross-Cultural Contact", items:["Spread of Islam","Spread of Buddhism","Bubonic Plague","Diaspora Communities"] }
        ]
      },
      hard:{
        blurb:"Everything that traveled the Silk Roads, merchant vocabulary, plague effects, and how geography shaped trade.",
        categories:[
          { name:"Traveled the Silk Roads", items:["Buddhism","Bubonic Plague","Papermaking","Silk"] },
          { name:"Trade & Merchant Vocabulary", items:["Diaspora","Caravanserai","Trading Post","Entrepôt"] },
          { name:"Effects of the Bubonic Plague", items:["Labor Shortages","Population Decline","Flagellant Movements","Decline of Feudalism"] },
          { name:"How Geography Shaped Trade Routes", items:["Monsoon Winds","Camel Caravans","The Grand Canal","Desert Oases"] }
        ]
      }
    },
    {
      id:"apwh-u3", unit:"Unit 3", title:"Land-Based Empires", range:"c. 1450–1750",
      easy:{
        blurb:"Gunpowder empires, their rulers, Ming/Qing governance, and religion under empire.",
        categories:[
          { name:"Gunpowder Empires", items:["Ottoman Empire","Safavid Empire","Mughal Empire","Songhai Empire"] },
          { name:"Rulers of Land-Based Empires", items:["Suleiman the Magnificent","Akbar the Great","Shah Abbas I","Kangxi Emperor"] },
          { name:"Ming & Qing Chinese Governance", items:["Forbidden City","Civil Service Exam","Confucianism","Tribute System"] },
          { name:"Religion & Administration in Gunpowder Empires", items:["Sunni-Shia Divide","Sikhism","Devshirme","Millet System"] }
        ]
      },
      hard:{
        blurb:"Ottoman institutions, rulers' religious policies, Chinese governing tools, and imperial titles.",
        categories:[
          { name:"Ottoman Imperial Institutions", items:["Janissaries","Devshirme","Millet System","Topkapi Palace"] },
          { name:"Religious Policies of Gunpowder Empire Rulers", items:["Sunni-Shia Rivalry","Aurangzeb's Jizya Tax","Ottoman Millet System","Akbar's Din-i-Ilahi"] },
          { name:"Ming & Qing Governing Tools", items:["Tribute System","Civil Service Exam","Mandate of Heaven","Cohong System"] },
          { name:"Imperial Titles of Land-Based Empires", items:["Padishah","Tsar","Son of Heaven","Shahanshah"] }
        ]
      }
    },
    {
      id:"apwh-u4", unit:"Unit 4", title:"Transoceanic Interconnections", range:"c. 1450–1750",
      easy:{
        blurb:"Explorers, the Columbian Exchange, colonial powers, and systems of coerced labor.",
        categories:[
          { name:"Explorers of the Age of Exploration", items:["Christopher Columbus","Vasco da Gama","Ferdinand Magellan","Zheng He"] },
          { name:"Items Exchanged in the Columbian Exchange", items:["Potatoes","Horses","Smallpox","Sugar"] },
          { name:"European Colonial Powers in the Americas", items:["Spain","Portugal","France","England"] },
          { name:"Systems of Coerced Labor", items:["Encomienda System","Chattel Slavery","Indentured Servitude","Mit'a System"] }
        ]
      },
      hard:{
        blurb:"Which direction the Columbian Exchange went, the Triangular Trade, and how empires organized colonial trade.",
        categories:[
          { name:"Went from the Old World to the New", items:["Horses","Smallpox","Sugarcane","Wheat"] },
          { name:"Went from the New World to the Old", items:["Potatoes","Maize","Tomatoes","Syphilis"] },
          { name:"Commodities & Legs of the Atlantic Triangular Trade", items:["Middle Passage","Manufactured Goods","Cash Crops","Enslaved Labor"] },
          { name:"How European Powers Organized Colonial Trade", items:["Mercantilism","Joint-Stock Company","Chartered Company","Cash Crop Economy"] }
        ]
      }
    },
    {
      id:"apwh-u5", unit:"Unit 5", title:"Revolutions", range:"c. 1750–1900",
      easy:{
        blurb:"Enlightenment thinkers, Atlantic Revolutions, independence leaders, and the era's ideologies.",
        categories:[
          { name:"Enlightenment Thinkers", items:["John Locke","Voltaire","Jean-Jacques Rousseau","Montesquieu"] },
          { name:"Atlantic Revolutions", items:["American Revolution","French Revolution","Haitian Revolution","Latin American Wars of Independence"] },
          { name:"Leaders of Independence Movements", items:["Toussaint Louverture","Simón Bolívar","José de San Martín","Miguel Hidalgo"] },
          { name:"Ideologies Spreading in This Era", items:["Nationalism","Liberalism","Conservatism","Socialism"] }
        ]
      },
      hard:{
        blurb:"A single revolutionary year, Enlightenment ideas without the names attached, founding documents, and the conservative backlash.",
        categories:[
          { name:"All Happened in 1789", items:["French Revolution Begins","Storming of the Bastille","Declaration of the Rights of Man","US Constitution Takes Effect"] },
          { name:"Enlightenment Concepts (Not the Philosophers)", items:["Separation of Powers","Social Contract","Natural Rights","Religious Tolerance"] },
          { name:"Revolutionary-Era Founding Documents", items:["Haitian Declaration of Independence","Cádiz Constitution of 1812","US Declaration of Independence","Bolívar's Cartagena Manifesto"] },
          { name:"Post-Napoleonic Conservative Backlash", items:["Congress of Vienna","Concert of Europe","Metternich System","Balance of Power"] }
        ]
      }
    },
    {
      id:"apwh-u6", unit:"Unit 6", title:"Consequences of Industrialization", range:"c. 1750–1900",
      easy:{
        blurb:"Industrial technology, new economic ideologies, imperial powers, and reform movements.",
        categories:[
          { name:"Technologies of the Industrial Revolution", items:["Steam Engine","Spinning Jenny","Telegraph","Railroad"] },
          { name:"Economic Ideologies Born from Industrialization", items:["Capitalism","Socialism","Communism","Laissez-Faire"] },
          { name:"Imperialist Powers in the Scramble for Africa", items:["Britain","France","Belgium","Germany"] },
          { name:"Reform Movements of the Industrial Era", items:["Abolitionism","Labor Unions","Women's Suffrage Movement","Public Health Reform"] }
        ]
      },
      hard:{
        blurb:"Marxist vocabulary, imperial justifications, urban consequences, and forms of imperial control.",
        categories:[
          { name:"Marxist Vocabulary", items:["Bourgeoisie","Proletariat","Class Struggle","Communist Manifesto"] },
          { name:"Justifications for New Imperialism", items:["Social Darwinism","The White Man's Burden","Civilizing Mission","Racial Hierarchy"] },
          { name:"Urban Consequences of Industrialization", items:["Urbanization","Tenement Housing","Child Labor","Pollution"] },
          { name:"Forms of Imperial Control", items:["Colony","Protectorate","Sphere of Influence","Concession"] }
        ]
      }
    },
    {
      id:"apwh-u7", unit:"Unit 7", title:"Global Conflict", range:"c. 1900–present",
      easy:{
        blurb:"Alliance systems, WWII battles, interwar dictators, and 20th-century genocides.",
        categories:[
          { name:"Alliance Systems Before WWI", items:["Triple Alliance","Triple Entente","Central Powers","Allied Powers"] },
          { name:"Major WWII Battles (Global Theaters)", items:["Battle of Stalingrad","Battle of Midway","D-Day","Battle of Britain"] },
          { name:"Interwar Totalitarian Leaders", items:["Adolf Hitler","Benito Mussolini","Joseph Stalin","Hideki Tojo"] },
          { name:"20th-Century Genocides", items:["The Holocaust","Armenian Genocide","Rwandan Genocide","Cambodian Genocide"] }
        ]
      },
      hard:{
        blurb:"A single pivotal year, dictators' titles instead of their names, Versailles provisions, and genocide mechanisms.",
        categories:[
          { name:"All Happened in 1917", items:["US Enters WWI","Russian Revolution","Zimmermann Telegram Revealed","Balfour Declaration"] },
          { name:"Titles Assumed by Interwar Dictators", items:["Führer","Duce","Vozhd","Generalissimo"] },
          { name:"Provisions of the Treaty of Versailles", items:["War Guilt Clause","Reparations","League of Nations","Demilitarization of the Rhineland"] },
          { name:"Mechanisms of 20th-Century Genocide", items:["Ethnic Cleansing","Concentration Camps","Propaganda","Scapegoating"] }
        ]
      }
    },
    {
      id:"apwh-u8", unit:"Unit 8", title:"Cold War and Decolonization", range:"c. 1900–present",
      easy:{
        blurb:"Cold War blocs and proxy wars, and the leaders and nations of decolonization.",
        categories:[
          { name:"Cold War Superpowers & Blocs", items:["United States","Soviet Union","NATO","Warsaw Pact"] },
          { name:"Cold War Proxy Wars", items:["Korean War","Vietnam War","Soviet-Afghan War","Angolan Civil War"] },
          { name:"Decolonization Leaders", items:["Mahatma Gandhi","Ho Chi Minh","Kwame Nkrumah","Jomo Kenyatta"] },
          { name:"Newly Independent Nations (Post-WWII)", items:["India","Ghana","Vietnam","Kenya"] }
        ]
      },
      hard:{
        blurb:"A single postwar year, Cold War strategy terms, paths to independence, and Third World solidarity movements.",
        categories:[
          { name:"All Happened in 1947", items:["Indian Independence and Partition","Truman Doctrine Announced","Marshall Plan Proposed","US National Security Act"] },
          { name:"Cold War Strategy & Policy Terms", items:["Containment","Nonalignment","Brinkmanship","Détente"] },
          { name:"Paths to Independence", items:["Nonviolent Civil Disobedience","Guerrilla Warfare","Negotiated Transition","Armed Uprising"] },
          { name:"Third World Solidarity Movements", items:["Non-Aligned Movement","Bandung Conference","Pan-Africanism","Organization of African Unity"] }
        ]
      }
    },
    {
      id:"apwh-u9", unit:"Unit 9", title:"Globalization", range:"c. 1900–present",
      easy:{
        blurb:"International institutions, effects of globalization, environmental issues, and modern rights movements.",
        categories:[
          { name:"International Economic Organizations", items:["World Bank","International Monetary Fund","World Trade Organization","United Nations"] },
          { name:"Effects of Globalization", items:["Multinational Corporations","Free Trade Agreements","Outsourcing","Cultural Diffusion"] },
          { name:"Global Environmental Issues", items:["Climate Change","Deforestation","Ozone Depletion","Overfishing"] },
          { name:"Modern Human Rights & Advocacy Movements", items:["Feminism","Environmentalism","LGBTQ+ Rights Movement","Indigenous Rights Movement"] }
        ]
      },
      hard:{
        blurb:"The postwar economic order, backlash against globalization, technology's role, and migration's drivers.",
        categories:[
          { name:"Institutions of the Post-WWII Economic Order", items:["International Monetary Fund","World Bank","Fixed Exchange Rate System","GATT"] },
          { name:"Reactions Against Globalization", items:["Religious Fundamentalism","Economic Nationalism","Anti-Globalization Protests","Populism"] },
          { name:"Technologies That Accelerated Globalization", items:["The Internet","Green Revolution","Container Shipping","Satellite Communication"] },
          { name:"Drivers of Contemporary Migration", items:["Labor Demand","Political Conflict","Climate Displacement","Family Reunification"] }
        ]
      }
    }
  ]
},

/* ======================================================================
   AP HUMAN GEOGRAPHY
====================================================================== */
{
  id:"aphug", icon:"🗺️", name:"AP Human Geography",
  blurb:"Seven units on how geographers study space: population, culture, politics, agriculture, cities, and development.",
  units:[
    {
      id:"aphg-u1", unit:"Unit 1", title:"Thinking Geographically",
      easy:{
        blurb:"Map types, geographic technology, region types, and ways to describe location.",
        categories:[
          { name:"Types of Thematic Maps", items:["Choropleth Map","Cartogram","Dot Density Map","Isoline Map"] },
          { name:"Geographic Technologies", items:["Geographic Information Systems","Global Positioning System","Remote Sensing","Aerial Photography"] },
          { name:"Types of Regions", items:["Formal Region","Functional Region","Perceptual Region","Administrative Region"] },
          { name:"Ways to Describe Location", items:["Absolute Location","Relative Location","Site","Situation"] }
        ]
      },
      hard:{
        blurb:"Diffusion types, what map projections distort, and how geographers measure distance and space.",
        categories:[
          { name:"Types of Spatial Diffusion", items:["Contagious Diffusion","Hierarchical Diffusion","Stimulus Diffusion","Relocation Diffusion"] },
          { name:"What Map Projections Distort", items:["Shape","Area","Distance","Direction"] },
          { name:"Ways Geographers Measure 'Distance'", items:["Distance Decay","Time-Distance","Cost-Distance","Space-Time Compression"] },
          { name:"Core Spatial Concepts", items:["Scale","Pattern","Distribution","Density"] }
        ]
      }
    },
    {
      id:"aphg-u2", unit:"Unit 2", title:"Population and Migration Patterns and Processes",
      easy:{
        blurb:"Density measures, demographic rates, the Demographic Transition Model, and migration types.",
        categories:[
          { name:"Ways Geographers Study Where People Live", items:["Arithmetic Density","Physiological Density","Agricultural Density","Population Distribution"] },
          { name:"Demographic Rates & Measures", items:["Crude Birth Rate","Crude Death Rate","Total Fertility Rate","Natural Increase Rate"] },
          { name:"Stages of the Demographic Transition Model", items:["High Stationary Stage","Early Expanding Stage","Late Expanding Stage","Low Stationary Stage"] },
          { name:"Types of Migration", items:["Forced Migration","Voluntary Migration","Internal Migration","International Migration"] }
        ]
      },
      hard:{
        blurb:"Push factors vs. pull factors, population policy, and Malthusian theory.",
        categories:[
          { name:"Push Factors (Reasons to Leave)", items:["War","Famine","Persecution","Natural Disaster"] },
          { name:"Pull Factors (Reasons to Move To)", items:["Job Opportunities","Political Freedom","Family Reunification","Better Climate"] },
          { name:"Population Policies Around the World", items:["China's One-Child Policy","Pro-Natalist Policies","Anti-Natalist Policies","India's Family Planning Program"] },
          { name:"Malthusian Theory", items:["Exponential Population Growth","Arithmetic Food Growth","Carrying Capacity","Malthusian Catastrophe"] }
        ]
      }
    },
    {
      id:"aphg-u3", unit:"Unit 3", title:"Cultural Patterns and Processes",
      easy:{
        blurb:"Language families, universalizing and ethnic religions, and the cultural landscape.",
        categories:[
          { name:"Major Language Families", items:["Indo-European","Sino-Tibetan","Afro-Asiatic","Niger-Congo"] },
          { name:"Universalizing Religions", items:["Christianity","Islam","Buddhism","Sikhism"] },
          { name:"Ethnic Religions", items:["Hinduism","Judaism","Shinto","Daoism"] },
          { name:"Concepts in Cultural Landscape", items:["Cultural Trait","Cultural Complex","Cultural Landscape","Cultural Realm"] }
        ]
      },
      hard:{
        blurb:"Types of place names, religious landscape features, and folk culture vs. popular culture.",
        categories:[
          { name:"Types of Place Names (Toponyms)", items:["Descriptive Toponym","Possessive Toponym","Commemorative Toponym","Religious Toponym"] },
          { name:"Elements of Religious Cultural Landscapes", items:["Pilgrimage Site","Sacred Space","Shrine","Cemetery Orientation"] },
          { name:"Examples of Folk Culture", items:["Amish Quilting","Traditional Irish Step Dancing","Native American Powwow Regalia","Appalachian Bluegrass Music"] },
          { name:"Examples of Popular Culture", items:["Blue Jeans","Hip-Hop Music","Fast Food Chains","Social Media Trends"] }
        ]
      }
    },
    {
      id:"aphg-u4", unit:"Unit 4", title:"Political Patterns and Processes",
      easy:{
        blurb:"Boundary types, supranational organizations, government structures, and territory vocabulary.",
        categories:[
          { name:"Types of Political Boundaries", items:["Geometric Boundary","Physical Boundary","Cultural Boundary","Antecedent Boundary"] },
          { name:"Supranational Organizations", items:["European Union","United Nations","NATO","ASEAN"] },
          { name:"Forms of Governmental Structure", items:["Unitary State","Federal State","Confederation","Devolution"] },
          { name:"Terms for a State's Territory", items:["Enclave","Exclave","Landlocked State","Microstate"] }
        ]
      },
      hard:{
        blurb:"Types of boundary disputes, gerrymandering tactics, Cold War geopolitical theories, and shifts in political power.",
        categories:[
          { name:"Types of Boundary Disputes", items:["Definitional Dispute","Locational Dispute","Operational Dispute","Allocational Dispute"] },
          { name:"Gerrymandering Vocabulary", items:["Packing","Cracking","Stacking","Redistricting"] },
          { name:"Geopolitical Theories", items:["Heartland Theory","Rimland Theory","Domino Theory","Containment"] },
          { name:"Ways Political Power Shifts or Territory Changes Hands", items:["Devolution","Balkanization","Annexation","Secession"] }
        ]
      }
    },
    {
      id:"aphg-u5", unit:"Unit 5", title:"Agricultural and Rural Land-Use Patterns and Processes",
      easy:{
        blurb:"Agricultural revolutions, subsistence agriculture types, rural settlement, and land survey systems.",
        categories:[
          { name:"Agricultural Revolutions", items:["First Agricultural Revolution","Second Agricultural Revolution","Green Revolution","Biotechnology Revolution"] },
          { name:"Types of Subsistence Agriculture", items:["Shifting Cultivation","Pastoral Nomadism","Intensive Subsistence Agriculture","Transhumance"] },
          { name:"Rural Settlement Patterns", items:["Clustered Settlement","Dispersed Settlement","Linear Settlement","Enclosed Settlement"] },
          { name:"Rural Land Survey Systems", items:["Metes and Bounds","Township and Range","Long Lot System","Section Lines"] }
        ]
      },
      hard:{
        blurb:"Von Thünen's rings, commercial agriculture types, Green Revolution effects, and land-use theory.",
        categories:[
          { name:"Von Thünen's Model: Land Use Rings (Closest to Farthest)", items:["Dairying & Market Gardening","Forest","Field Crops","Ranching"] },
          { name:"Types of Commercial Agriculture", items:["Plantation Agriculture","Mixed Crop and Livestock Farming","Commercial Grain Farming","Mediterranean Agriculture"] },
          { name:"Consequences of the Green Revolution", items:["Increased Crop Yields","Dependence on Fertilizer","High-Yield Seed Varieties","Reduced Genetic Diversity"] },
          { name:"Concepts Behind Agricultural Land-Use Decisions", items:["Bid-Rent Theory","Transportation Cost","Intensive Land Use","Extensive Land Use"] }
        ]
      }
    },
    {
      id:"aphg-u6", unit:"Unit 6", title:"Cities and Urban Land-Use Patterns and Processes",
      easy:{
        blurb:"Urban structure models, urban issues, urban hierarchy, and planning approaches.",
        categories:[
          { name:"Models of Urban Structure", items:["Concentric Zone Model","Sector Model","Multiple Nuclei Model","Galactic City Model"] },
          { name:"Urban Issues", items:["Urban Sprawl","Gentrification","Redlining","Food Desert"] },
          { name:"Concepts of Urban Hierarchy", items:["Central Place Theory","Rank-Size Rule","Primate City","Megacity"] },
          { name:"Planning Approaches to Urban Problems", items:["New Urbanism","Smart Growth","Urban Growth Boundary","Mixed-Use Development"] }
        ]
      },
      hard:{
        blurb:"Rings of the Concentric Zone Model, zones of the Latin American city model, causes of urban decline, and New Urbanism.",
        categories:[
          { name:"Concentric Zone Model: Rings from the Center", items:["Central Business District","Zone of Transition","Working-Class Residential Zone","Commuter Zone"] },
          { name:"Griffin-Ford Latin American City Model Zones", items:["Commercial Spine","Zone of Maturity","Zone of In Situ Accretion","Peripheral Squatter Settlements"] },
          { name:"Mechanisms Behind Urban Decline & Segregation", items:["Redlining","White Flight","Disinvestment","Blockbusting"] },
          { name:"Principles of New Urbanism", items:["Walkability","Mixed-Use Development","Transit-Oriented Development","Human-Scale Design"] }
        ]
      }
    },
    {
      id:"aphg-u7", unit:"Unit 7", title:"Industrial and Economic Development Patterns and Processes",
      easy:{
        blurb:"Development indicators, World Systems Theory, Rostow's stages, and trends in manufacturing.",
        categories:[
          { name:"Measures of Development", items:["Gross Domestic Product","Human Development Index","Gender Inequality Index","Literacy Rate"] },
          { name:"Wallerstein's World Systems Theory", items:["Core Countries","Periphery Countries","Semi-Periphery Countries","Dependency"] },
          { name:"Rostow's Stages of Economic Growth", items:["Traditional Society","Preconditions for Takeoff","Takeoff Stage","Age of High Mass Consumption"] },
          { name:"Trends in Modern Manufacturing", items:["Outsourcing","Offshoring","Special Economic Zone","Deindustrialization"] }
        ]
      },
      hard:{
        blurb:"Weber's location theory, indicators beyond GDP, dependency theory concepts, and development strategies.",
        categories:[
          { name:"Factors in Weber's Least Cost Location Theory", items:["Transportation Cost","Labor Cost","Agglomeration","Site Selection"] },
          { name:"Development Indicators Beyond GDP", items:["Human Development Index","Gender Inequality Index","Literacy Rate","Life Expectancy"] },
          { name:"Concepts from World Systems & Dependency Theory", items:["Core-Periphery Relationship","Unequal Exchange","Neocolonialism","Dependency"] },
          { name:"Strategies Countries Use to Develop", items:["Import Substitution Industrialization","Export-Oriented Growth","Microfinance","Fair Trade"] }
        ]
      }
    }
  ]
},

/* ======================================================================
   AP US GOVERNMENT AND POLITICS
====================================================================== */
{
  id:"apgov", icon:"🏛️", name:"AP US Government and Politics",
  blurb:"Five units on the Constitution, the branches of government, rights, ideology, and participation.",
  units:[
    {
      id:"apgov-u1", unit:"Unit 1", title:"Foundations of American Democracy",
      easy:{
        blurb:"Constitutional compromises, democratic theory, the ratification debate, and types of constitutional power.",
        categories:[
          { name:"Constitutional Convention Compromises", items:["Great Compromise","Three-Fifths Compromise","Electoral College","Commerce Compromise"] },
          { name:"Types of Democracy", items:["Participatory Democracy","Pluralist Democracy","Elite Democracy","Direct Democracy"] },
          { name:"Key Figures in the Ratification Debate", items:["Alexander Hamilton","James Madison","John Jay","Patrick Henry"] },
          { name:"Types of Constitutional Powers", items:["Enumerated Powers","Reserved Powers","Concurrent Powers","Implied Powers"] }
        ]
      },
      hard:{
        blurb:"Why the Articles failed, key constitutional clauses, Madison's own arguments, and eras of federalism.",
        categories:[
          { name:"Weaknesses of the Articles of Confederation", items:["No Power to Tax","No National Executive","No National Judiciary","Unanimous Consent to Amend"] },
          { name:"Key Clauses of the Constitution", items:["Necessary and Proper Clause","Commerce Clause","Supremacy Clause","Full Faith and Credit Clause"] },
          { name:"Madison's Arguments in the Federalist Papers", items:["Faction","Pluralism","Checks and Balances","Separation of Powers"] },
          { name:"Eras & Types of Federalism", items:["Dual Federalism","Cooperative Federalism","New Federalism","Fiscal Federalism"] }
        ]
      }
    },
    {
      id:"apgov-u2", unit:"Unit 2", title:"Interactions Among Branches of Government",
      easy:{
        blurb:"Powers of Congress and the president, congressional committees, and landmark judicial power cases.",
        categories:[
          { name:"Powers of Congress", items:["Declare War","Impeachment","Override a Veto","Confirm Appointments"] },
          { name:"Powers of the President", items:["Veto","Executive Order","Pardon","Commander-in-Chief"] },
          { name:"Types of Congressional Committees", items:["Standing Committee","Joint Committee","Conference Committee","Select Committee"] },
          { name:"Landmark Supreme Court Cases (Judicial Power)", items:["Marbury v. Madison","McCulloch v. Maryland","United States v. Nixon","Baker v. Carr"] }
        ]
      },
      hard:{
        blurb:"Why incumbents win, formal vs. informal presidential power, and judicial philosophy.",
        categories:[
          { name:"Sources of the Incumbency Advantage", items:["Name Recognition","Franking Privilege","Gerrymandering","Campaign Fundraising Edge"] },
          { name:"Formal (Constitutional) Presidential Powers", items:["Veto Power","Commander-in-Chief","Appointment Power","Pardon Power"] },
          { name:"Informal Presidential Powers (Not in the Constitution)", items:["Executive Order","Executive Agreement","Signing Statement","Bully Pulpit"] },
          { name:"Judicial Philosophy & Power", items:["Judicial Review","Originalism","Living Constitution","Stare Decisis"] }
        ]
      }
    },
    {
      id:"apgov-u3", unit:"Unit 3", title:"Civil Liberties and Civil Rights",
      easy:{
        blurb:"First Amendment freedoms, landmark speech and due process cases, and civil rights cases.",
        categories:[
          { name:"First Amendment Freedoms", items:["Speech","Religion","Press","Assembly"] },
          { name:"Landmark First Amendment Cases", items:["Schenck v. United States","Tinker v. Des Moines","Engel v. Vitale","New York Times v. United States"] },
          { name:"Landmark Criminal Due Process Cases", items:["Gideon v. Wainwright","Miranda v. Arizona","Mapp v. Ohio","Terry v. Ohio"] },
          { name:"Equal Protection & Civil Rights Cases", items:["Brown v. Board of Education","Regents v. Bakke","Shaw v. Reno","Obergefell v. Hodges"] }
        ]
      },
      hard:{
        blurb:"Cases that incorporated the Bill of Rights, limits on free speech, judicial scrutiny, and civil rights tools.",
        categories:[
          { name:"Cases That Incorporated a Bill of Rights Protection to the States", items:["Gitlow v. New York","Mapp v. Ohio","Gideon v. Wainwright","McDonald v. Chicago"] },
          { name:"Recognized Limits on Free Speech", items:["Clear and Present Danger","Fighting Words","Time-Place-Manner Restrictions","Obscenity"] },
          { name:"Levels of Judicial Scrutiny", items:["Strict Scrutiny","Intermediate Scrutiny","Rational Basis Test","Compelling Government Interest"] },
          { name:"Tools for Advancing Civil Rights", items:["Affirmative Action","Equal Protection Clause","Title IX","Voting Rights Act of 1965"] }
        ]
      }
    },
    {
      id:"apgov-u4", unit:"Unit 4", title:"American Political Ideologies and Beliefs",
      easy:{
        blurb:"Political ideologies, agents of socialization, polling vocabulary, and views on government's role.",
        categories:[
          { name:"Political Ideologies", items:["Liberalism","Conservatism","Libertarianism","Populism"] },
          { name:"Agents of Political Socialization", items:["Family","Education","Media","Religion"] },
          { name:"Polling Vocabulary", items:["Random Sample","Margin of Error","Sampling Error","Push Poll"] },
          { name:"Views on the Role of Government", items:["Limited Government","Social Safety Net","Deregulation","Government Intervention"] }
        ]
      },
      hard:{
        blurb:"Conservative vs. liberal positions, sources of polling bias, and less-obvious agents of socialization.",
        categories:[
          { name:"Positions Associated with Conservatism", items:["Limited Government","Deregulation","Traditional Values","Strong National Defense"] },
          { name:"Positions Associated with Liberalism", items:["Social Safety Net","Government Regulation","Progressive Taxation","Civil Rights Expansion"] },
          { name:"Sources of Bias in Public Opinion Polls", items:["Sampling Error","Selection Bias","Wording Effect","Push Poll"] },
          { name:"Less-Obvious Agents of Political Socialization", items:["Peer Groups","Political Events","Social Media","Geographic Region"] }
        ]
      }
    },
    {
      id:"apgov-u5", unit:"Unit 5", title:"Political Participation",
      easy:{
        blurb:"Linkage institutions, interest group tactics, campaign finance vocabulary, and voter turnout factors.",
        categories:[
          { name:"Linkage Institutions", items:["Political Parties","Interest Groups","Elections","Media"] },
          { name:"Types of Interest Group Tactics", items:["Lobbying","Grassroots Mobilization","Litigation","Campaign Contributions"] },
          { name:"Campaign Finance Vocabulary", items:["Political Action Committee","Super PAC","Hard Money","Soft Money"] },
          { name:"Factors Affecting Voter Turnout", items:["Age","Education Level","Registration Requirements","Political Efficacy"] }
        ]
      },
      hard:{
        blurb:"Models of voting behavior, the fallout from Citizens United, media's influence, and why third parties struggle.",
        categories:[
          { name:"Models of Why People Vote the Way They Do", items:["Rational Choice Voting","Retrospective Voting","Prospective Voting","Party-Line Voting"] },
          { name:"Consequences of Citizens United v. FEC", items:["Rise of Super PACs","Unlimited Independent Expenditures","Dark Money","Corporate Political Speech"] },
          { name:"How Media Shapes Political Coverage", items:["Agenda-Setting","Horse-Race Journalism","Sound Bite Culture","Media Consolidation"] },
          { name:"Why Third Parties Struggle in US Elections", items:["Winner-Take-All System","Single-Member Districts","Ballot Access Laws","Exclusion from Debates"] }
        ]
      }
    }
  ]
},

/* ======================================================================
   AP MACROECONOMICS
====================================================================== */
{
  id:"apmacro", icon:"📈", name:"AP Macroeconomics",
  blurb:"Six units on the economy as a whole: GDP, unemployment, inflation, fiscal and monetary policy, and trade.",
  units:[
    {
      id:"macro-u1", unit:"Unit 1", title:"Basic Economic Concepts",
      easy:{
        blurb:"Scarcity and trade-offs, the PPC, trade theory, and the circular flow model.",
        categories:[
          { name:"Basic Economic Concepts", items:["Scarcity","Opportunity Cost","Trade-Offs","Marginal Analysis"] },
          { name:"Production Possibilities Curve (PPC) Concepts", items:["Efficiency","Inefficiency","Economic Growth","Unattainable Combinations"] },
          { name:"Trade Theory", items:["Absolute Advantage","Comparative Advantage","Specialization","Terms of Trade"] },
          { name:"Parts of the Circular Flow Model", items:["Households","Firms","Product Market","Factor Market"] }
        ]
      },
      hard:{
        blurb:"What shifts the PPC outward, why comparative advantage leads to trade, and marginal analysis vocabulary.",
        categories:[
          { name:"Causes of Economic Growth (PPC Shifts Outward)", items:["More Resources","Better Technology","More Capital","Increased Labor Force"] },
          { name:"Why Comparative Advantage Leads to Trade", items:["Lower Opportunity Cost","Specialization","Gains from Trade","Terms of Trade"] },
          { name:"Types of Economic Systems", items:["Command Economy","Market Economy","Mixed Economy","Traditional Economy"] },
          { name:"Marginal Analysis Vocabulary", items:["Marginal Benefit","Marginal Cost","Marginal Utility","Diminishing Marginal Returns"] }
        ]
      }
    },
    {
      id:"macro-u2", unit:"Unit 2", title:"Economic Indicators and the Business Cycle",
      easy:{
        blurb:"GDP components, types of unemployment, the business cycle, and inflation vocabulary.",
        categories:[
          { name:"Components of GDP (Expenditure Approach)", items:["Consumption","Investment","Government Spending","Net Exports"] },
          { name:"Types of Unemployment", items:["Frictional Unemployment","Structural Unemployment","Cyclical Unemployment","Seasonal Unemployment"] },
          { name:"Phases of the Business Cycle", items:["Expansion","Peak","Contraction","Trough"] },
          { name:"Inflation Vocabulary", items:["Consumer Price Index","Demand-Pull Inflation","Cost-Push Inflation","Hyperinflation"] }
        ]
      },
      hard:{
        blurb:"What GDP leaves out, who doesn't count as unemployed, the costs of inflation, and real vs. nominal measures.",
        categories:[
          { name:"What GDP Leaves Out", items:["Used Goods Sales","Illegal Transactions","Unpaid Household Labor","Stock Market Transactions"] },
          { name:"Not Counted in the Labor Force", items:["Discouraged Workers","Retirees","Full-Time Students","Stay-at-Home Parents"] },
          { name:"Costs Associated with Inflation", items:["Menu Costs","Shoe-Leather Costs","Wealth Redistribution","Uncertainty"] },
          { name:"Real vs. Nominal Economic Measures", items:["Real GDP","Nominal GDP","Real Interest Rate","Nominal Interest Rate"] }
        ]
      }
    },
    {
      id:"macro-u3", unit:"Unit 3", title:"National Income and Price Determination",
      easy:{
        blurb:"What shifts aggregate demand, fiscal policy tools, types of fiscal policy, and the multiplier effect.",
        categories:[
          { name:"Determinants of Aggregate Demand", items:["Consumer Confidence","Interest Rates","Government Policy","Net Exports"] },
          { name:"Fiscal Policy Tools", items:["Government Spending","Taxation","Transfer Payments","Deficit Spending"] },
          { name:"Types of Fiscal Policy", items:["Expansionary Fiscal Policy","Contractionary Fiscal Policy","Discretionary Fiscal Policy","Automatic Stabilizers"] },
          { name:"Multiplier Effect Concepts", items:["Spending Multiplier","Tax Multiplier","Marginal Propensity to Consume","Marginal Propensity to Save"] }
        ]
      },
      hard:{
        blurb:"Automatic stabilizers, aggregate demand shifters vs. aggregate supply shifters, and multiplier concepts.",
        categories:[
          { name:"Automatic Stabilizers", items:["Unemployment Insurance","Progressive Income Tax","SNAP Benefits","Welfare Programs"] },
          { name:"Determinants That Shift Aggregate Demand", items:["Consumer Confidence","Government Spending","Net Exports","Interest Rates"] },
          { name:"Determinants That Shift Aggregate Supply", items:["Input Prices","Productivity","Business Taxes & Subsidies","Government Regulations"] },
          { name:"Multiplier Effect Concepts", items:["Spending Multiplier","Tax Multiplier","Balanced Budget Multiplier","Marginal Propensity to Consume"] }
        ]
      }
    },
    {
      id:"macro-u4", unit:"Unit 4", title:"Financial Sector",
      easy:{
        blurb:"The functions of money, tools of the Fed, definitions of the money supply, and banking system concepts.",
        categories:[
          { name:"Functions of Money", items:["Medium of Exchange","Store of Value","Unit of Account","Standard of Deferred Payment"] },
          { name:"Tools of the Federal Reserve", items:["Open Market Operations","Discount Rate","Reserve Requirement","Interest on Reserves"] },
          { name:"Definitions of the Money Supply", items:["M1","M2","Currency in Circulation","Demand Deposits"] },
          { name:"Banking System Concepts", items:["Fractional Reserve Banking","Bank Run","Money Multiplier","Excess Reserves"] }
        ]
      },
      hard:{
        blurb:"Expansionary vs. contractionary Fed actions, and what belongs in M1 vs. what's added in M2.",
        categories:[
          { name:"Actions of Expansionary Monetary Policy", items:["Buy Bonds","Lower Discount Rate","Lower Reserve Requirement","Lower Interest on Reserves"] },
          { name:"Actions of Contractionary Monetary Policy", items:["Sell Bonds","Raise Discount Rate","Raise Reserve Requirement","Raise Interest on Reserves"] },
          { name:"Components of the M1 Money Supply", items:["Currency","Checkable Deposits","Traveler's Checks","Demand Deposits"] },
          { name:"Added in M2 (Beyond M1)", items:["Savings Deposits","Small Time Deposits","Money Market Mutual Funds","Certificates of Deposit"] }
        ]
      }
    },
    {
      id:"macro-u5", unit:"Unit 5", title:"Long-Run Consequences of Stabilization Policies",
      easy:{
        blurb:"The loanable funds market, the Phillips Curve, sources of growth, and government debt vocabulary.",
        categories:[
          { name:"Loanable Funds Market Participants", items:["Savers","Borrowers","Government Deficit Spending","Real Interest Rate"] },
          { name:"Phillips Curve Concepts", items:["Short-Run Phillips Curve","Long-Run Phillips Curve","Natural Rate of Unemployment","Stagflation"] },
          { name:"Determinants of Long-Run Economic Growth", items:["Human Capital","Physical Capital","Technology","Natural Resources"] },
          { name:"Government Debt Vocabulary", items:["Budget Deficit","Budget Surplus","National Debt","Crowding Out Effect"] }
        ]
      },
      hard:{
        blurb:"The chain reaction from deficit spending, what's true short-run but not long-run, and the quantity theory of money.",
        categories:[
          { name:"Chain Reaction of Deficit Spending in the Loanable Funds Market", items:["Increased Demand for Loanable Funds","Higher Real Interest Rates","Crowding Out of Private Investment","Reduced Long-Run Growth"] },
          { name:"Short-Run Effects That Disappear in the Long Run", items:["Phillips Curve Trade-off","Money Affecting Real Output","Non-Neutral Money","Lower Unemployment from Inflation"] },
          { name:"Quantity Theory of Money", items:["Velocity of Money","Equation of Exchange","Monetary Neutrality","Money Supply Growth Rate"] },
          { name:"Sources of Long-Run Economic Growth", items:["Investment in Human Capital","Investment in Physical Capital","Technological Innovation","Property Rights & Rule of Law"] }
        ]
      }
    },
    {
      id:"macro-u6", unit:"Unit 6", title:"Open Economy: International Trade and Finance",
      easy:{
        blurb:"Balance of payments accounts, exchange rate systems, trade policy tools, and currency vocabulary.",
        categories:[
          { name:"Balance of Payments Accounts", items:["Current Account","Capital Account","Financial Account","Trade Balance"] },
          { name:"Exchange Rate Systems", items:["Fixed Exchange Rate","Floating Exchange Rate","Managed Float","Pegged Exchange Rate"] },
          { name:"Trade Policy Tools", items:["Tariff","Import Quota","Subsidy","Trade Embargo"] },
          { name:"Currency Value Vocabulary", items:["Appreciation","Depreciation","Purchasing Power Parity","Exchange Rate"] }
        ]
      },
      hard:{
        blurb:"What makes a currency appreciate vs. depreciate, the effects of a tariff, and arguments for protectionism.",
        categories:[
          { name:"What Causes a Currency to Appreciate", items:["Higher Interest Rates","Higher Exports","Foreign Investment Inflows","Lower Relative Inflation"] },
          { name:"What Causes a Currency to Depreciate", items:["Lower Interest Rates","Higher Imports","Investment Outflows","Higher Relative Inflation"] },
          { name:"Economic Effects of a Tariff", items:["Higher Domestic Prices","Reduced Trade Volume","Protected Domestic Producers","Deadweight Loss"] },
          { name:"Arguments Used to Justify Protectionism", items:["Infant Industry Argument","National Security Argument","Anti-Dumping Argument","Protecting Domestic Jobs"] }
        ]
      }
    }
  ]
},

/* ======================================================================
   AP MICROECONOMICS
====================================================================== */
{
  id:"apmicro", icon:"💹", name:"AP Microeconomics",
  blurb:"Six units on individual markets: supply and demand, cost, competition, factor markets, and market failure.",
  units:[
    {
      id:"micro-u1", unit:"Unit 1", title:"Basic Economic Concepts",
      easy:{
        blurb:"Scarcity, the PPC, trade theory, and types of economic systems.",
        categories:[
          { name:"Basic Economic Concepts", items:["Scarcity","Opportunity Cost","Trade-Offs","Ceteris Paribus"] },
          { name:"Production Possibilities Curve Concepts", items:["Efficiency","Inefficiency","Economic Growth","Increasing Opportunity Cost"] },
          { name:"Trade Theory", items:["Absolute Advantage","Comparative Advantage","Specialization","Terms of Trade"] },
          { name:"Types of Economic Systems", items:["Command Economy","Market Economy","Mixed Economy","Traditional Economy"] }
        ]
      },
      hard:{
        blurb:"Assumptions behind rational choice, why the PPC bows outward, marginal analysis, and the circular flow.",
        categories:[
          { name:"Assumptions Behind Rational Economic Decision-Making", items:["Utility Maximization","Ceteris Paribus","Marginal Analysis","Self-Interest"] },
          { name:"Why the PPC Is Bowed Outward, Not Straight", items:["Specialized Resources","Imperfect Resource Substitutability","Increasing Opportunity Cost","Diminishing Returns"] },
          { name:"Marginal Analysis Vocabulary", items:["Marginal Benefit","Marginal Cost","Marginal Utility","Diminishing Marginal Utility"] },
          { name:"Parts of the Circular Flow Model", items:["Households","Firms","Product Market","Resource Market"] }
        ]
      }
    },
    {
      id:"micro-u2", unit:"Unit 2", title:"Supply and Demand",
      easy:{
        blurb:"What shifts demand and supply, types of elasticity, and government price controls.",
        categories:[
          { name:"Determinants That Shift Demand", items:["Income","Consumer Tastes","Price of Related Goods","Number of Buyers"] },
          { name:"Determinants That Shift Supply", items:["Input Prices","Technology","Number of Sellers","Taxes and Subsidies"] },
          { name:"Types of Elasticity", items:["Price Elasticity of Demand","Price Elasticity of Supply","Cross-Price Elasticity","Income Elasticity"] },
          { name:"Government Price Controls", items:["Price Ceiling","Price Floor","Shortage","Surplus"] }
        ]
      },
      hard:{
        blurb:"What creates a shortage vs. a surplus, and what makes demand more elastic vs. more inelastic.",
        categories:[
          { name:"Conditions That Create a Shortage", items:["Price Ceiling Below Equilibrium","Rent Control","Increase in Demand at a Fixed Price","Quantity Demanded Exceeds Supplied"] },
          { name:"Conditions That Create a Surplus", items:["Price Floor Above Equilibrium","Minimum Wage","Agricultural Price Supports","Quantity Supplied Exceeds Demanded"] },
          { name:"What Makes Demand More Elastic", items:["Many Substitutes Available","Luxury Good","Narrowly Defined Market","Longer Time Horizon"] },
          { name:"What Makes Demand More Inelastic", items:["Few Substitutes","Necessity Good","Broadly Defined Market","Shorter Time Horizon"] }
        ]
      }
    },
    {
      id:"micro-u3", unit:"Unit 3", title:"Production, Cost, and the Perfect Competition Model",
      easy:{
        blurb:"Types of production cost, characteristics of perfect competition, product curves, and profit outcomes.",
        categories:[
          { name:"Types of Production Costs", items:["Fixed Cost","Variable Cost","Total Cost","Marginal Cost"] },
          { name:"Characteristics of Perfect Competition", items:["Many Buyers and Sellers","Homogeneous Products","Free Entry and Exit","Price Takers"] },
          { name:"Types of Product Curves", items:["Total Product","Marginal Product","Average Product","Diminishing Marginal Returns"] },
          { name:"Profit Outcomes in Perfect Competition", items:["Economic Profit","Normal Profit","Economic Loss","Long-Run Equilibrium"] }
        ]
      },
      hard:{
        blurb:"When a firm should shut down vs. keep producing at a loss, long-run adjustment, and MC's relationship to average cost.",
        categories:[
          { name:"Signals a Firm Should Shut Down in the Short Run", items:["Price Below Average Variable Cost","Revenue Doesn't Cover Variable Costs","Losses Exceed Fixed Costs","Optimal Output Is Zero"] },
          { name:"Signals a Firm Should Keep Producing Despite a Loss", items:["Price Above Average Variable Cost","Covers Some Fixed Cost","Price Below Average Total Cost","Loss Is Less Than Fixed Cost"] },
          { name:"What Happens When a Perfectly Competitive Industry Earns Economic Profit", items:["New Firms Enter","Market Supply Increases","Price Falls","Economic Profit Disappears"] },
          { name:"Rules for How Marginal Cost Relates to Average Cost", items:["MC Intersects ATC at Its Minimum","MC Intersects AVC at Its Minimum","MC Below ATC Pulls ATC Down","MC Above ATC Pulls ATC Up"] }
        ]
      }
    },
    {
      id:"micro-u4", unit:"Unit 4", title:"Imperfect Competition",
      easy:{
        blurb:"Market structures, monopoly and monopolistic competition characteristics, and game theory vocabulary.",
        categories:[
          { name:"Market Structures", items:["Perfect Competition","Monopolistic Competition","Oligopoly","Monopoly"] },
          { name:"Characteristics of a Monopoly", items:["Single Seller","High Barriers to Entry","Price Maker","No Close Substitutes"] },
          { name:"Characteristics of Monopolistic Competition", items:["Product Differentiation","Many Sellers","Low Barriers to Entry","Non-Price Competition"] },
          { name:"Oligopoly & Game Theory Vocabulary", items:["Interdependence","Collusion","Cartel","Nash Equilibrium"] }
        ]
      },
      hard:{
        blurb:"Barriers behind monopoly power, types of price discrimination, game theory terms, and why cartels fail.",
        categories:[
          { name:"Barriers to Entry Behind Monopoly Power", items:["Patents","Economies of Scale","Control of Key Resources","Government Licenses"] },
          { name:"Types of Price Discrimination", items:["Charging Different Prices by Group","Charging Different Prices by Quantity","Charging Different Prices by Time","Perfect Price Discrimination"] },
          { name:"Game Theory Vocabulary", items:["Nash Equilibrium","Dominant Strategy","Prisoner's Dilemma","Payoff Matrix"] },
          { name:"Why Cartels Are Unstable", items:["Incentive to Cheat","Non-Binding Agreements","New Market Entrants","Antitrust Enforcement"] }
        ]
      }
    },
    {
      id:"micro-u5", unit:"Unit 5", title:"Factor Markets",
      easy:{
        blurb:"Factors of production, factor market vocabulary, labor demand determinants, and labor market structures.",
        categories:[
          { name:"Factors of Production", items:["Land","Labor","Capital","Entrepreneurship"] },
          { name:"Factor Market Vocabulary", items:["Derived Demand","Marginal Revenue Product","Marginal Factor Cost","Factor Price"] },
          { name:"Determinants of Labor Demand", items:["Productivity of Labor","Price of Output","Price of Other Inputs","Number of Firms Hiring"] },
          { name:"Labor Market Structures", items:["Perfectly Competitive Labor Market","Monopsony","Labor Union","Minimum Wage Law"] }
        ]
      },
      hard:{
        blurb:"What the MRP = MFC hiring rule means, why labor demand is 'derived,' and the effects of monopsony and minimum wage.",
        categories:[
          { name:"What 'Hire Where MRP = MFC' Actually Means", items:["Hire Until MRP Equals Wage","Marginal Worker Pays for Themselves","Stop Hiring When MRP Is Below Wage","Labor Demand Curve Is the MRP Curve"] },
          { name:"Why Labor Demand Is a 'Derived Demand'", items:["Depends on Demand for the Final Product","No Firm Hires Labor for Its Own Sake","Rises When Product Demand Rises","Falls When Product Demand Falls"] },
          { name:"How a Monopsony Employer Affects the Labor Market", items:["Lower Wages","Fewer Workers Hired","Wage Below MRP","Single Buyer of Labor"] },
          { name:"Effects of a Minimum Wage Set Above Equilibrium", items:["Labor Surplus","Unemployment","Higher Wages for Those Employed","Reduced Hours for Some Workers"] }
        ]
      }
    },
    {
      id:"micro-u6", unit:"Unit 6", title:"Market Failure and the Role of Government",
      easy:{
        blurb:"Types of externalities, public goods, government correction tools, and types of tax systems.",
        categories:[
          { name:"Types of Externalities", items:["Positive Externality","Negative Externality","Externality in Production","Externality in Consumption"] },
          { name:"Characteristics of Public Goods", items:["Non-Excludable","Non-Rivalrous","Free-Rider Problem","Government Provision"] },
          { name:"Government Tools to Correct Market Failure", items:["Pigouvian Tax","Subsidy","Tradable Permits","Regulation"] },
          { name:"Types of Tax Systems", items:["Progressive Tax","Regressive Tax","Proportional Tax","Excise Tax"] }
        ]
      },
      hard:{
        blurb:"What happens with a negative externality vs. a positive one, measuring inequality, and the free-rider problem.",
        categories:[
          { name:"What Happens with a Negative Externality", items:["Social Cost Exceeds Private Cost","Market Overproduces the Good","Corrective Tax Restores Efficiency","Deadweight Loss from Overproduction"] },
          { name:"What Happens with a Positive Externality", items:["Social Benefit Exceeds Private Benefit","Market Underproduces the Good","Corrective Subsidy Restores Efficiency","Deadweight Loss from Underproduction"] },
          { name:"Tools for Measuring Income Inequality", items:["Lorenz Curve","Gini Coefficient","Income Quintiles","Line of Perfect Equality"] },
          { name:"Why Public Goods Suffer from the Free-Rider Problem", items:["Non-Excludability","Incentive to Not Pay","Under-Provision","Need for Government Provision"] }
        ]
      }
    }
  ]
}

];
