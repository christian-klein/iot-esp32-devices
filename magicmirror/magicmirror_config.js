/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
    address: "0.0.0.0",
    port: 8080,
    basePath: "/",
    ipWhitelist: [],

    useHttps: false,
    httpsPrivateKey: "",
    httpsCertificate: "",

    useHttps: false,
    httpsPrivateKey: "",
    httpsCertificate: "",

    language: "en",
    locale: "en-US",
    logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
    timeFormat: 24,
    units: "imperial",

    modules: [
        {
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left",
            timezone: "America/Los_Angeles"
        },
        {
            module: "MMM-OpenWeatherForecast",
            position: "top_right",
            header: "Forecast",
            config: {
                apikey: "1725f9db300e9280699f40d4a60312d8",
                latitude: "33.531370",
                longitude: "-117.699990",
                updateInterval: 10,
                units: "imperial",
                forecastHeaderText: "Laguna Niguel"
            }
        },

        // --------------- MAIN CALENDARS ---------------

        {
            module: "MMM-CalendarExtTimeline",
            position: "middle_center",
            config: {
                type: "dynamic", // "static", "dynamic"
                refresh_interval_sec: 6000, // minimum 60,
                table_title_format: "ddd, MMM Do",
                begin_hour: 0, //ignored when you set type to 'dynamic'
                end_hour: 4, //how many hours to show.
                fromNow: 0, // add this many days to today's current date, e.g., 1 is tomorrow, -1 is yesterday
                time_display_section_count: 4,
                time_display_section_format: "HH:mm",
                calendars: [
                    {
                        name: "chris_calendar",
                        title: "Chris",
                        class: "",
                    },
                    {
                        name: "carolyn_calendar",
                        title: "Carolyn",
                        class: "",
                    },
                    {
                        name: "carolyn_work_calendar",
                        title: "Carolyn Work",
                        class: "",
                    },
                ], //in your `MMM-CalendarExt` configuration
                source: "CALEXT2", // or "CALEXT"
            }
        },
        {
            module: "MMM-CalendarExtTimeline",
            position: "middle_center",
            config: {
                type: "dynamic", // "static", "dynamic"
                refresh_interval_sec: 6000, // minimum 60,
                table_title_format: "ddd, MMM Do",
                begin_hour: 0, //ignored when you set type to 'dynamic'
                end_hour: 4, //how many hours to show.
                fromNow: 0, // add this many days to today's current date, e.g., 1 is tomorrow, -1 is yesterday
                time_display_section_count: 4,
                time_display_section_format: "HH:mm",
                calendars: [
                    {
                        name: "family_calendar",
                        title: "Family",
                        class: "",
                    },
                    {
                        name: "games_calendar",
                        title: "Games",
                        class: "",
                    },

                    {
                        name: "school_calendar",
                        title: "School",
                        class: "",
                    },
                ], //in your `MMM-CalendarExt` configuration
                merge_calendars: true,
                merged_name: "Family",
                source: "CALEXT2", // or "CALEXT"
            }
        },
        {
            module: "MMM-CalendarExtTimeline",
            position: "middle_center",
            config: {
                type: "dynamic", // "static", "dynamic"
                refresh_interval_sec: 6000, // minimum 60,
                table_title_format: "ddd, MMM Do",
                begin_hour: 0, //ignored when you set type to 'dynamic'
                end_hour: 4, //how many hours to show.
                fromNow: 0, // add this many days to today's current date, e.g., 1 is tomorrow, -1 is yesterday
                time_display_section_count: 4,
                time_display_section_format: "HH:mm",
                calendars: [
                    {
                        name: "food_calendar",
                        title: "Food",
                        class: "",
                    },
                    {
                        name: "bl_calendar",
                        title: "Bundesliga",
                        class: "",
                    },
                    {
                        name: "vfb_calendar",
                        title: "VFB",
                        class: "",
                    },
                    {
                        name: "jason_calendar",
                        title: "Jason",
                        class: "",
                    },
                ], //in your `MMM-CalendarExt` configuration
                merge_calendars: true,
                merged_name: "Other",
                source: "CALEXT2", // or "CALEXT"
            }
        },
        // --------------- CALENDARS -------------------
        {
            module: 'MMM-CalendarExt2',
            config: {
                // rotateInterval: 0,
                //rotateInterval: 1000*60*60*24*15,
                rotateInterval: 1000 * 15,
                //updateInterval: 1000 * 60 * 60,
                updateInterval: 30 * 1000,
                calendars: [
                    {
                        name: "family_calendar",
                        className: "family-calendar",
                        url: "https://calendar.google.com/calendar/ical/p5r05pmjrc08itv7v7tj864lag%40group.calendar.google.com/private-863d9930262314237545735a110bbdc5/basic.ics",
                    },

                    {
                        name: "carolyn_calendar",
                        className: "carolyn-calendar",
                        url: "https://calendar.google.com/calendar/ical/carolyn.klein08%40gmail.com/private-1dc1b05f1a8f45bfc94caec97c4ec585/basic.ics",
                    },
                    {
                        name: "carolyn_work_calendar",
                        className: "carolyn-calendar",
                        url: "https://calendar.google.com/calendar/ical/nq2fu1vkt9qqroqrslutiecjvo%40group.calendar.google.com/private-c4ecb26521327dba4d61d15d78cb84b0/basic.ics",
                    },
                    {
                        name: "chris_calendar",
                        className: "chris-calendar",
                        url: "https://calendar.google.com/calendar/ical/cklein70%40gmail.com/private-b03c63a26e213e9dfa09b9c47e2bbbcd/basic.ics",
                    },
                    {
                        name: "school_calendar",
                        className: "school-calendar",
                        url: "https://calendar.google.com/calendar/ical/c6asq6n5tsnnqelutnm6sa4ll0%40group.calendar.google.com/private-0d0ade57585e6510cc9d4508f83f95be/basic.ics",
                    },
                    {
                        name: "games_calendar",
                        className: "games-calendar",
                        url: "https://calendar.google.com/calendar/ical/n99k4rndq5vcoou3cjf3aoh2go%40group.calendar.google.com/private-9c6825ead4cc8b8d5f6e242e381e5c63/basic.ics",
                    },
                    {
                        name: "food_calendar",
                        className: "food-calendar",
                        url: "https://www.webcal.guru/en-US/download_calendar?calendar_instance_id=141",
                    },
                    {
                        name: "bl_calendar",
                        className: "bl-calendar",
                        url: "http://i.cal.to/ical/2746/bundesliga/bundesliga-fixtures-en/7f0fe22e.a7315cf1-32b3159e.ics",
                    },
                    {
                        name: "vfb_calendar",
                        className: "vfb-calendar",
                        url: "https://ics.fixtur.es/v2/vfb-stuttgart.ics",
                    },

                ],
                views: [
                    {
                        name: "family_view_top",
                        title: "Family Calendar",
                        className: "family-view-top-left",
                        mode: "upcoming",
                        position: 'top_left',
                        calendars: [
                            "family_calendar",
                        ],
                    },
                    {
                        name: "family_view_center",
                        title: "Family Calendar",
                        className: "family-view-center",
                        mode: "daily",
                        position: 'middle_center',
                        calendars: [
                            "family_calendar",
                            "games_calendar",

                        ],
                        slotCount: "2", slotMaxHeight: "200px",
                    },
                    {
                        name: "carolyn_view",
                        title: "Carolyn's Calendar",
                        className: "carolyn-view",
                        mode: "daily",
                        position: 'middle_center',
                        calendars: [
                            "carolyn_calendar",
                        ],
                        slotCount: "1", slotMaxHeight: "200px",
                    },
                    {
                        name: "carolyn_work_view",
                        title: "Carolyn's Work Calendar",
                        className: "carolyn-view",
                        mode: "daily",
                        position: 'middle_center',
                        calendars: [
                            "carolyn_work_calendar",
                        ],
                        slotCount: "2", slotMaxHeight: "200px",
                    },
                    {
                        name: "chris_view",
                        title: "Chris's Calendar",
                        className: "chris-view",
                        mode: "daily",
                        position: 'middle_center',
                        calendars: [
                            "chris_calendar",
                            "family_calendar",
                            "games_calendar",
                        ],
                        slotCount: "2", slotMaxHeight: "200px",
                    },
                    {
                        name: "school_view",
                        title: "School Calendar",
                        className: "school-view",
                        mode: "daily",
                        position: 'middle_center',
                        calendars: [
                            "school_calendar",
                        ],
                        slotCount: "2", slotMaxHeight: "200px",
                    },
                    {
                        name: "misc_view",
                        title: "Miscellaneous",
                        className: "family-view-center",
                        mode: "daily",
                        position: 'middle_center',
                        calendars: [
                            "food_calendar",
                            "bl_calendar",
                            "vfb_calendar",


                        ],
                        slotCount: "2", slotMaxHeight: "200px",
                    },
                ],
                scenes: [
                ],
                notifications: {
                    "PAGE_INCREMENT": {
                        exec: "sceneNext",
                    },
                    "PAGE_DECREMENT": {
                        exec: "scenePrevious",
                    }
                },
            },
        },
        // --------------- OTHER MODULES --------------- 
        {
            module: "MMM-MovieListings",
            position: "bottom_left",
            width: "100px;",
            config: {
                header: "Movies",
                apiKey: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDRkNTMzMDU0NWI4NjJjMTIwNTMwODM3YzNlZTEwNiIsIm5iZiI6MTczMjc0NTUzNi42Mjg3MjM2LCJzdWIiOiI1ZWU0MDZiMDE5N2RlNDAwMjE5MDFmNGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JwT1UB9jMV_oxKYeOHI4ZA_Z5yDUbPVZYovIMkcXBCw",
                region: "US",
                language: "EN",
                interface: "poster",
            }
        },
        {
            module: 'MMM-WiFiPassword',
            position: "bottom_center",
            config: {
                //See 'Configuration options' for more information.
                network: "Stuttgart_Guest",
                password: "gamenight",
                showPassword: false,
                showAuthType: false,
                showNetwork: false,
                imageSize: "175",
                header: "Connect to WiFi:",
            }
        },

        {
            module: "MMM-Chuck-Norris",
            position: "bottom_bar",
            header: "Chuck Norris Facts"
        },
        {
            disabled: false,
            module: "MMM-NewsFeedTicker",
            position: "bottom_bar",
            //classes: "day_scheduler",
            config: {
                feeds: [
                    {
                        title: "New York Times",
                        url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml",
                        customLogo: "NYT_logo_rss_250x40.png"
                    },

                ]
            }
        },
        // --------------- UTILITY MODULES ---------------
        {
            module: 'MMM-Remote-Control',
            config: {
                customCommand: {},
                showModuleApiMenu: false,
                secureEndpoints: true,
                apiKey: "be2e91d1-f2db-447b-8d95-d8b29a61639d",
            }
        },
        {
            module: "MMM-Remote-Control-Repository",
        },
        {
            module: 'MMM-WatchDog',
            config: {
                interval: 2,
                timeout: 10,
                pm2_app: "mm"
            }
        },
        {
            module: 'MMM-SystemStats',
            position: 'bottom_right',
            classes: 'small dimmed',
            header: "System Stats",
            config: {
                updateInterval: 10000,
                animationSpeed: 0,
                align: 'right', // align labels
                thresholdCPUTemp: 167
            },
        },
        {
            module: "MMM-Art",
            position: "fullscreen_above",
            config: {
                artworkList: [
                    "Q1189907",  // Water Lilies - Monet
                    "Q683274",   // Dance at Le Moulin de la Galette - Renoir
                    "Q3924387",  // Ballet Rehearsal - Degas
                    "Q3643151",  // The Boulevard Montmartre at Night - Pissarro
                    "Q15461864", // The Large Blue Horses - Marc
                    "Q19609199", // Composition VIII - Kandinsky
                    "Q54902221", // Lady in a Green Jacket - Macke
                    "Q19883652", // Street, Berlin - Kirchner
                    "Q12418",    // Mona Lisa - da Vinci
                    "Q185372",   // Girl with a Pearl Earring - Vermeer
                    "Q208758",   // Las Meninas - Velázquez
                    "Q151047",   // The Birth of Venus - Botticelli
                    "Q257580",   // The Fighting Temeraire - Turner
                    "Q969377",   // The Calling of Saint Matthew - Caravaggio
                    "Q219831",   // The Night Watch - Rembrandt
                    "Q311243",   // Wanderer above the Sea of Fog - Friedrich
                    "Q25729",    // The Persistence of Memory - Dali
                    "Q83872",    // Nighthawks - Hopper
                    "Q45585",    // The Starry Night - Van Gogh
                    "Q2395218",  // Woman with a Parasol - Monet
                    "Q3821820",  // The Ballet Class - Degas
                    "Q16531980", // Blue Dancers - Degas
                    "Q500985",   // The Hunters in the Snow - Bruegel
                    "Q15293656", // The Tower of Babel - Bruegel
                    "Q26708368",  // The Water-Lily Pond - Monet0
                    "Q112091493" // Little Owl - Dürer
		],
                activeDuration: 30 * 1000,
                inactiveDuration: 15 * 1000,
                slideChangeThreshold: 2,
            }
        },
    ]
};
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
