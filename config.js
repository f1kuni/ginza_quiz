var config = {
    style: 'mapbox://styles/f1kuni/clivohmgy00nq01r8go5qgxc5',
    accessToken: 'pk.eyJ1IjoiZjFrdW5pIiwiYSI6ImNrdzJ4ZWhtNDBwaXAzMW1veXN5cGYwM2EifQ.-NTeimXFcbrFi2g5ZHDgjA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: '',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'quiz1',
            alignment: 'center',
            hidden: false,
            title: 'Q1.Which ward is Ginza located in Tokyo? Pick one photo representing the ward.',
            image: 'images/quiz1.png',
            description: '',
            location: {
                center: [131.15018, 38.52365],
                zoom: 4,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'quiz1_answer',
            alignment: 'right',
            hidden: false,
            title: 'A.Chuo-ku',
            image: 'images/quiz1_answer.png',
            description: '',
            location: {
                center: [139.76909, 35.67651],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'quiz1-answer',
                    opacity: 0.6,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'quiz1-answer',
                    opacity: 0
                }
            ]
        },
        {
            id: 'quiz2',
            alignment: 'center',
            hidden: false,
            title: 'Q2.Where is the flattest (smoothest) place in the world?',
            image: 'images/quiz2.png',
            description: '',
            location: {
                center: [72.46857, 33.57069],
                zoom: 2,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'quiz1-answer',
                    opacity: 0.6,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'quiz1-answer',
                    opacity: 0
                }
            ]
        },
        {
            id: 'quiz2_answer',
            alignment: 'left',
            hidden: false,
            title: 'Where is the flattest (smoothest) place in the world?',
            image: 'images/quiz2_answer.png',
            description: '',
            location: {
                center: [-67.63668, -20.22231],
                zoom: 9,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0
                }
            ]
        },
        {
            id: 'quiz3',
            alignment: 'center',
            hidden: false,
            title: 'Q3.Where does the CEO Toru want to go if he could take a long vacation?',
            image: 'images/quiz3.png',
            description: '',
            location: {
                center: [139.33717, 36.65444],
                zoom: 2,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'quiz1-answer',
                    opacity: 0.6,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'quiz1-answer',
                    opacity: 0
                }
            ]
        },
        {
            id: 'quiz3_answer',
            alignment: 'left',
            hidden: false,
            title: 'Answer',
            image: 'images/quiz3_answer.png',
            description: '',
            location: {
                center: [124.19173, 24.40264],
                zoom: 11,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0
                }
            ]
        },
        {
            id: 'quiz4',
            alignment: 'center',
            hidden: false,
            title: 'Q4.Where is the closest place to the univers on the earth?',
            image: 'images/quiz4.png',
            description: '',
            location: {
                center: [72.46857, 33.57069],
                zoom: 2,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'quiz1-answer',
                    opacity: 0.6,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'quiz1-answer',
                    opacity: 0
                }
            ]
        },
        {
            id: 'quiz4_answer',
            alignment: 'left',
            hidden: false,
            title: 'Answer',
            image: 'images/quiz4_answer.png',
            description: '',
            location: {
                center: [-155.46823, 19.81704],
                zoom: 10,
                pitch: 80,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0
                }
            ]
        },
        {
            id: 'quiz5',
            alignment: 'center',
            hidden: false,
            title: 'Q5. How long is the Mapboxs road data updated per day? ',
            image: 'images/quiz5.png',
            description: '',
            location: {
                center: [1.58835, 45.18870],
                zoom: 5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'road',
                    opacity: 0.6,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'road',
                    opacity: 0
                }
            ]
        },
        {
            id: 'quiz5_answer',
            alignment: 'left',
            hidden: false,
            title: '3.10,000 laps of the earth',
            image: '',
            description: '',
            location: {
                center: [75.99708, 18.99621],
                zoom: 3,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'globe_circle',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'globe_circle',
                    opacity: 0
                }
            ]
        },
        {
            id: 'quiz6',
            alignment: 'center',
            hidden: false,
            title: 'Q6.How many POIs approximately in our product Mapbox as of 2023?',
            image: 'images/quiz6.png',
            description: '',
            location: {
                center: [1.58835, 45.18870],
                zoom: 5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.6,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 'quiz6_answer',
            alignment: 'left',
            hidden: false,
            title: '2.170Million POIs',
            image: '',
            description: '',
            location: {
                center: [75.99708, 18.99621],
                zoom: 4,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'place-label',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'place-label',
                    opacity: 0
                }
            ]
        },
        {
            id: 'quiz7',
            alignment: 'center',
            hidden: false,
            title: 'Q7.What is the name of the organization to which Mapbox originally belonged?',
            image: 'images/quiz7a.png',
            description: '',
            location: {
                center: [72.46857, 33.57069],
                zoom: 2,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'quiz1-answer',
                    opacity: 0.6,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'quiz1-answer',
                    opacity: 0
                }
            ]
        },
        {
            id: 'quiz7_answer',
            alignment: 'left',
            hidden: false,
            title: 'Answer',
            image: 'images/quiz_7_answer.png',
            description: '',
            location: {
                center: [-77.02432, 38.90634],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0
                }
            ]
        },
    ]
};
