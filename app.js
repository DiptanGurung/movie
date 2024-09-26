let search = document.getElementById('search');
let search__icon = document.getElementById('search_icon');

search__icon.addEventListener('click',()=>{
    search.classList.toggle('search_input');
})

let cato_bx = document.getElementById('cato_bx');
let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');

left_scroll.addEventListener('click',() => {
    cato_bx.scrollLeft -= 100;
})

right_scroll.addEventListener('click',() => {
    cato_bx.scrollLeft += 100;
})

let movie_bx_1 = document.getElementById('movie_bx_1');
let left_scroll1 = document.getElementById('left_scroll1');
let right_scroll1 = document.getElementById('right_scroll1');

left_scroll1.addEventListener('click',() => {
    movie_bx_1.scrollLeft -= 150;
})

right_scroll1.addEventListener('click',() => {
    movie_bx_1.scrollLeft += 150;
})

                                // year and a-z box start

let year = document.getElementById('year');
let a_z = document.getElementById('a_z');

year.addEventListener('click', () => {
    year.classList.toggle('show_year1')
});

a_z.addEventListener('click', () => {
    a_z.classList.toggle('show_year1')
});

                                // header slider start

let header_dur = document.getElementById('header_dur');
let header_gen = document.getElementById('header_gen');
let header_title = document.getElementById('header_title');
let header_pra = document.getElementById('header_pra');
let header = document.getElementsByTagName('header')[0];
let slider_btn = document.getElementsByClassName('slider');


const slider_load = () => {
    setTimeout(() => {
        header.style.background = "url('img/Rampage.avif') no-repeat center center/cover";
        header_dur.innerText ="1h 47min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>6.5
                    <span>Action / Adventure / Sci-Fi</span>`;
        header_title.innerText = "Rampage";
        header_pra.innerText ="When three different animals become infected with the dangerous pathogen, a primatologist and a geneticist team up to stop them <br>from destroying Chicago.";
        slider_btn[0].style.background = "#fff"
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)"
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)"
    }, 0000);

    setTimeout(() => {
        header.style.background = "url('img/antman.jpg') no-repeat center center/cover";
        header_dur.innerText ="1h 57min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>7.4
                    <span>Comedy / Adventure / Sci-Fi</span>`;
        header_title.innerText = "Ant-Man";
        header_pra.innerText ="Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world.";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)"
        slider_btn[1].style.background = "#fff"
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)"
    }, 5000);

    setTimeout(() => {
        header.style.background = "url('img/Pirates-of-the-Caribbean.avif') no-repeat center center/cover";
        header_dur.innerText ="1h 57min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>8.1
                    <span>Comedy / Action / Drama</span>`;
        header_title.innerText = "Pirates of the Caribbean";
        header_pra.innerText ="Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save Elizabeth Swann, the governor's daughter and his love, from Jack's former pirate allies, who are now undead.";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)"
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)"
        slider_btn[2].style.background = "#fff"
    }, 10000);
}

setInterval(slider_load, 15000);
slider_load();

                                                    // VIDEO CONTROL START

let plays = document.getElementById('play');
let videos = document.getElementById('video');
let play_btn = document.getElementById('play_btn');

play_btn.addEventListener('click', () => {
videos.play();
plays.classList.add('bi-pause-fill');
plays.classList.remove('bi-play-fill');
});

plays.addEventListener('click', () => {
    if (videos.paused || videos.currentTime <= 0) {
        plays.classList.add('bi-pause-fill');
        plays.classList.remove('bi-play-fill');
        videos.play();
    } else {
        plays.classList.remove('bi-pause-fill');
        plays.classList.add('bi-play-fill');
        videos.pause();
    }
});

                                                    // VIDEO TIME UPDATE
                                                
videos.addEventListener('timeupdate', () => {
    let start_time = document.getElementById('start_time');
    let end_time = document.getElementById('end_time');
    let video_duration = videos.duration;
    let min = Math.floor(video_duration / 60);
    let hour = Math.floor(min / 60);
    let sec = Math.floor(video_duration % 60);
    let video_current_time = videos.currentTime;

let start_min = Math.floor(video_current_time / 60);
let start_sec = Math.floor(video_current_time % 60);
let start_hour = Math.floor(start_min / 60);

    if (start_min < 10) {
        start_min = "0" + start_min;
    }
    if (start_sec < 10) {
        start_sec = "0" + start_sec;
    }
    start_time.innerText = start_min + ":" + start_sec;

    if (start_hour < 10) {
        start_hour = "0" + start_hour;
    }

    if (start_min == 60 || start_min > 60) {
        start_time.innerText = start_hour + ":" + start_min + ":" + start_sec;
    }

                                                        // END

let end_min = min - start_min;
let end_sec = video_duration - start_sec;
let end_hour = hour - start_hour;
    
    let end_mins = Math.floor(end_min % 60);
            if (end_mins < 10) {
                end_mins = "0" + end_mins;
            }
    let end_secs = Math.floor(end_sec % 60);
            if (end_secs < 10) {
                end_secs = "0" + end_secs;
            }
    let end_hours = Math.floor(end_min / 60);
            if (end_hours < 10) {
                end_hours = "0" + end_hours;
            }

    end_time.innerText = "-" + end_mins + ":" + end_secs;

    if (end_min == 60 || end_min > 60) {
        end_time.innerText = "-" + end_hours + ":" + end_mins + ":" + end_secs;
    }

                                                        // SEEK BAR START

let seek = document.getElementById('seek');
let seek_2 = document.getElementById('seek_2');
let seek_dot = document.getElementById('seek_dot');

let progressbar = parseInt((videos.currentTime / videos.duration) * 100);
    seek.value = progressbar;

let seekbar = seek.value;
    seek_2.style.width = `${seekbar}%`;
    seek_dot.style.left = `${seekbar}%`;

                                                        // SEEKBAR VALUE CHANGE

let sec_30 = document.getElementById('sec_30');                                                        
    seek.addEventListener('change', () => {
        videos.currentTime = seek.value * videos.duration / 100;
        sec_30.addEventListener('click', () => {
            videos.currentTime = seek.value * ((videos.duration - 30)/ 100);
        });
    })

                                                        // VIDEO END EVENT
                                                        
    videos.addEventListener('ended', () => {
        plays.classList.remove('bi-pause-fill');
        plays.classList.add('bi-play-fill');
    })
});

                                                        // VOLUME CHANGE

let start_seekbar_end = document.querySelector('.start_seekbar_end');
let cc_vol_screen = document.querySelector('.cc_vol_screen');
let vol = document.getElementById('vol');
let vol_icon = document.getElementById('vol_icon');

vol_icon.addEventListener('click', () => {
    cc_vol_screen.classList.toggle('cc_vol');
    start_seekbar_end.classList.toggle('start_seekbar');
    vol.classList.toggle('input_vol');
});

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    videos.volume = vol_a / 100;
});

                                                    // FULL SCREEN START
                                                    
let full_screen = document.getElementById('full_screen');
full_screen.addEventListener('click', () => {
    videos.requestFullscreen();
});

                                                    // VIDEO BOX START

let title_video = document.getElementsByClassName('title_video');
let video_1 = document.getElementsByClassName('video_1');

video_1[0].addEventListener('click', () => {
    videos.src = "video/Ed Sheeran-Shape Of You.mp4";
    videos.play();
    title_video[0].innerText = "Rampage (2017)";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});
video_1[1].addEventListener('click', () => {
    videos.src = "video/Eminem - Rap God.mp4";
    videos.play();
    title_video[0].innerText = "Doctor Strange (2016)";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});
video_1[2].addEventListener('click', () => {
    videos.src = "video/Mark Ronson-Uptown Funk.mp4";
    videos.play();
    title_video[0].innerText = "K.G.F. Chapter-2 (2022)";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});                                          

                                                        // MOVIES BOX SET

    const movies = [{
        id: 36,
        img: "Genre/the gazi attck.jpg",
        down_img: "img/the-ghazi-attack-poster.webp",
        title: "The Gazi Attack",
        letter: "t",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "none",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 9.9,
        url: "the_gazi_attack.html",
        tppr: "trend",
        msot: "movie",
        screen1: "img/gazi1.jpg",
        screen2: "img/gazi2.jpg",
        screen3: "img/gazi3.jpg",
        ph420: "img/the-ghazi-attack-poster.webp",
        ph720: "Genre/comndo.jpg",
        ph1080: "img/the-ghazi-attack-poster.webp",
    },
    {
        id: 35,
        img: "Genre/comndo.jpg",
        title: "Comndo",
        letter: "c",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "none",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 9.3,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 34,
        img: "Genre/caption phillips.jpg",
        title: "Caption Phillips",
        letter: "c",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "none",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 9.1,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 33,
        img: "Genre/bloodshoot.jpg",
        title: "Blood Shoot",
        letter: "b",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "none",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 9.7,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 32,
        img: "Genre/blade.jpg",
        title: "Blade",
        letter: "b",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "none",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 7.7,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 31,
        img: "Genre/takepoint.webp",
        title: "Take Point",
        letter: "t",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "none",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 7.9,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 30,
        img: "Genre/battel drown.jpg",
        title: "Battel Drown",
        letter: "b",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 8.9,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 29,
        img: "Genre/bagi.jpg",
        title: "Bagi",
        letter: "b",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 8.8,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 28,
        img: "Genre/bad boys.jpg",
        title: "Bad Boys",
        letter: "b",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 6.8,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 27,
        img: "Genre/ateet.jpg",
        title: "Ateet",
        letter: "a",
        genre1: "action",
        genre2: "none",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 9.7,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 26,
        img: "Genre/aquaman.jpg",
        title: "Aquaman",
        letter: "a",
        genre1: "action",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 9.6,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 25,
        img: "Genre/angel.jpg",
        title: "Angel",
        letter: "a",
        genre1: "action",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 8.8,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 24,
        img: "Genre/allahdin.jpg",
        title: "Allahdin",
        letter: "a",
        genre1: "action",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 8.2,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 23,
        img: "Genre/air.jpg",
        title: "Air",
        letter: "a",
        genre1: "none",
        genre2: "crime",
        genre3: "none",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 9.1,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 22,
        img: "Genre/acceleration.jpg",
        title: "Acceler ration",
        letter: "a",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 9.9,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 21,
        img: "Genre/abcd.jpg",
        title: "ABCD",
        letter: "a",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 7.9,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 20,
        img: "Genre/a perfact.jpg",
        title: "A Pefact",
        letter: "a",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 6.9,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 19,
        img: "Genre/6under.jpg",
        title: "6 Underground",
        letter: "u",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 9.2,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 18,
        img: "Genre/noah.webp",
        title: "Noah",
        letter: "n",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 8.2,
        url: "themanor.html",
        tppr: "popular",
        msot: "movie"
    },
    {
        id: 17,
        img: "Genre/notimethedie.webp",
        title: "No Time The Die",
        letter: "n",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 8.5,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie",
        upload: "latest"
    },
    {
        id: 16,
        img: "Genre/oz.webp",
        title: "OZ",
        letter: "o",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 8.6,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 15,
        img: "Genre/paul.webp",
        title: "Paul",
        letter: "p",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 9.3,
        url: "themanor.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest"
    },
    {
        id: 14,
        img: "Genre/pixels.webp",
        title: "Pixels",
        letter: "p",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 7.3,
        url: "themanor.html",
        tppr: "popluar",
        msot: "movie"
    },
    {
        id: 13,
        img: "Genre/Qismat_2.webp",
        title: "Qismat 2",
        letter: "q",
        genre1: "none",
        genre2: "crime",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "none",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 5.8,
        url: "themanor.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest"
    },
    {
        id: 12,
        img: "Genre/red_notice.jpg",
        title: "Red Notice",
        letter: "r",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 6.8,
        url: "themanor.html",
        tppr: "recent",
        msot: "movie"
    },
    {
        id: 11,
        img: "Genre/shershaah.webp",
        title: "Shershaah",
        letter: "s",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 7.8,
        url: "themanor.html",
        tppr: "recent",
        msot: "series",
        upload: "latest"
    },
    {
        id: 10,
        img: "Genre/shiddat.webp",
        title: "Shiddat",
        letter: "s",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 8.8,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie"
    },
    {
        id: 9,
        img: "Genre/snakeeyes.webp",
        title: "Snake Eyes",
        letter: "s",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 8.9,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie",
        upload: "latest"
    },
    {
        id: 8,
        img: "Genre/takepoint.webp",
        title: "Take Point",
        letter: "t",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 9.8,
        url: "themanor.html",
        tppr: "popular",
        msot: "movie"
    },
    {
        id: 7,
        img: "Genre/The-Manor.webp",
        title: "The Manor",
        letter: "t",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 8.8,
        url: "themanor.html",
        tppr: "trend",
        msot: "movie",
        upload: "latest"
    },
    {
        id: 6,
        img: "Genre/theblackwater.webp",
        title: "The Black Water",
        letter: "t",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 8.8,
        url: "theblackwater.html",
        tppr: "recent",
        msot: "series"
    },
    {
        id: 5,
        img: "Genre/theoutpost.webp",
        title: "The Out Post",
        letter: "t",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2019,
        rate: 5.8,
        url: "venom2.html",
        tppr: "recent",
        msot: "series",
        upload: "latest"
    },
    {
        id: 4,
        img: "Genre/thevault.webp",
        title: "The Vault",
        letter: "t",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2019,
        rate: 5.8,
        url: "venom2.html",
        tppr: "popular",
        msot: "movie"
    },
    {
        id: 3,
        img: "Genre/venom2.webp",
        title: "Venom 2",
        letter: "v",
        genre1: "none",
        genre2: "",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2021,
        rate: 9.2,
        url: "venom2.html",
        tppr: "trend",
        msot: "movie",
        upload: "latest"
    },
    {
        id: 2,
        img: "Genre/Warrior.webp",
        title: "Warrior",
        letter: "w",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2020,
        rate: 8.6,
        url: "bfg.html",
        tppr: "popular",
        msot: "movie"
    },
    {
        id: 1,
        img: "Genre/xtreme.webp",
        title: "Xtreme",
        letter: "x",
        genre1: "none",
        genre2: "none",
        genre3: "adeventure",
        genre4: "biography",
        genre5: "animation",
        genre6: "comady",
        genre7: "documentary",
        genre8: "drama",
        genre9: "18+",
        genre10: "scifi",
        genre11: "horor",
        year: 2022,
        rate: 6.5,
        url: "bfg.html",
        tppr: "recent",
        msot: "movie",
        upload: "latest"
    },
                                                        // ALL ARRAY COPIED                                        
]

                                                        // ACTION BUTTON AND ACTIVE BOX

let action1 = document.getElementById('action1');
let action_bx = document.getElementById('action_bx');

action1.addEventListener('click', () => {
    action1.classList.toggle('cato_button_active');
    action_bx.classList.toggle('movie_box_active');
});

const action_array = movies.filter((e) => {
    return e.genre1 == "action";
});

action_array.forEach(element => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

    action_bx.appendChild(card);
});

                                                            // CRIME BUTTON AND ACTIVE BOX

let crime1 = document.getElementById('crime1');
let crime_bx = document.getElementById('crime_bx');

crime1.addEventListener('click', () => {
    crime1.classList.toggle('cato_button_active');
    crime_bx.classList.toggle('movie_box_active');
});

const crime_array = movies.filter((e) => {
    return e.genre2 == "crime";
});

crime_array.forEach(element => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

    crime_bx.appendChild(card);
});


                                                            // drama button and active box

let drama1 = document.getElementById('drama1');
let drama_bx = document.getElementById('drama_bx');

drama1.addEventListener('click', () => {
    drama1.classList.toggle('cato_button_active');
    drama_bx.classList.toggle('movie_box_active');
});

const drama_array = movies.filter((e) => {
    return e.genre8 == "drama";
});

drama_array.forEach(element => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

    drama_bx.appendChild(card);
});

// movies box2 start

// all box start 

let all = document.getElementById('all');

window.addEventListener('load', () => {
        movies.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

            all.appendChild(card);
        });
    })
    // latest box start 
let latest = document.getElementById('latest');

let latest_array = movies.filter((e) => {
    return e.upload == "latest";
})

window.addEventListener('load', () => {
        latest_array.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

            latest.appendChild(card);
        });
    })
    // 2022 box start 
let year_2022 = document.getElementById('year_2022');

let year2022 = movies.filter((e) => {
    return e.year == "2022";
})

window.addEventListener('load', () => {
        year2022.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

            year_2022.appendChild(card);
        });
    })
    // 2021 box start 
let year_2021 = document.getElementById('year_2021');

let year2021 = movies.filter((e) => {
    return e.year == "2021";
})

window.addEventListener('load', () => {
        year2021.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

            year_2021.appendChild(card);
        });
    })
    // 2020 box start 
let year_2020 = document.getElementById('year_2020');

let year2020 = movies.filter((e) => {
    return e.year == "2020";
})

window.addEventListener('load', () => {
    year2020.forEach(element => {
        const { img, title, year, url, rate } = element;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

        year_2020.appendChild(card);
    });
})


// letter_a box start 
let letter_a = document.getElementById('letter_a');

let letter_a_array = movies.filter((e) => {
    return e.letter == "a";
})

window.addEventListener('load', () => {
        letter_a_array.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

            letter_a.appendChild(card);
        });
    })
    // letter_b box start 
let letter_b = document.getElementById('letter_b');

let letter_b_array = movies.filter((e) => {
    return e.letter == "b";
})

window.addEventListener('load', () => {
        letter_b_array.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

            letter_b.appendChild(card);
        });
    })
    // letter_t box start 
let letter_t = document.getElementById('letter_t');

let letter_t_array = movies.filter((e) => {
    return e.letter == "t";
})

window.addEventListener('load', () => {
    letter_t_array.forEach(element => {
        const { img, title, year, url, rate } = element;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

        letter_t.appendChild(card);
    });
});


// rate8 box start 
let rate8 = document.getElementById('rate8');

let rate8_array = movies.filter((e) => {
    return e.rate >= 8;
})

window.addEventListener('load', () => {
    rate8_array.forEach(element => {
        const { img, title, year, url, rate } = element;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

        rate8.appendChild(card);
    });
});
// rate4 box start 
let rate4 = document.getElementById('rate4');

let rate4_array = movies.filter((e) => {
    return e.rate <= 8;
})

window.addEventListener('load', () => {
    rate4_array.forEach(element => {
        const { img, title, year, url, rate } = element;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

        rate4.appendChild(card);
    });
});


// movies box2 end


// btns start 

let all_btn = document.getElementById('all_btn');

all_btn.addEventListener('click', () => {
    all_btn.classList.toggle('cato_button_active');
    all.classList.toggle('box2_actives');
});

let latest_btn = document.getElementById('latest_btn');

latest_btn.addEventListener('click', () => {
    latest_btn.classList.toggle('cato_button_active');
    latest.classList.toggle('box2_actives');
});
let year2022__btn = document.getElementById('year2022__btn');

year2022__btn.addEventListener('click', () => {
    year2022__btn.classList.toggle('cato_button_active');
    year_2022.classList.toggle('box2_actives');
});
let year2021__btn = document.getElementById('year2021__btn');

year2021__btn.addEventListener('click', () => {
    year2021__btn.classList.toggle('cato_button_active');
    year_2021.classList.toggle('box2_actives');
});
let year2020__btn = document.getElementById('year2020__btn');

year2020__btn.addEventListener('click', () => {
    year2020__btn.classList.toggle('cato_button_active');
    year_2020.classList.toggle('box2_actives');
});


let letter_a_btn = document.getElementById('letter_a_btn');

letter_a_btn.addEventListener('click', () => {
    letter_a_btn.classList.toggle('cato_button_active');
    letter_a.classList.toggle('box2_actives');
});
let letter_b_btn = document.getElementById('letter_b_btn');

letter_b_btn.addEventListener('click', () => {
    letter_b_btn.classList.toggle('cato_button_active');
    letter_b.classList.toggle('box2_actives');
});
let letter_t_btn = document.getElementById('letter_t_btn');

letter_t_btn.addEventListener('click', () => {
    letter_t_btn.classList.toggle('cato_button_active');
    letter_t.classList.toggle('box2_actives');
});

// rate change 

let change_input = document.getElementById('change_input');

change_input.addEventListener('change', () => {
    if (change_input.value >= 8) {
        rate8.classList.add('box2_actives');
    } else {
        rate8.classList.remove('box2_actives');
    }
    if (change_input.value < 8) {
        rate4.classList.add('box2_actives');
    } else {
        rate4.classList.remove('box2_actives');
    }
});


let search_bx2 = document.getElementsByClassName('search_bx2')[0];


window.addEventListener('load', () => {
    movies.forEach(element => {
        const { img, title, year, url } = element;

        let card = document.createElement('a');
        card.href = url;
        card.innerHTML = ` <img src="${img}" alt="">
        <div class="content2">
            <h6>${title}</h6>
            <p>${year}</p>
        </div>`;
        search_bx2.appendChild(card);
    });
});


search.addEventListener('keyup', () => {
    let filter = search.value.toUpperCase();
    let a = search_bx2.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('content2')[0];
        let c = b.getElementsByTagName('h6')[0];

        let TextValue = c.textContent || c.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            search_bx2.style.visibility = "visible";
            search_bx2.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }
        if (search.value == 0) {
            search_bx2.style.visibility = "hidden";
            search_bx2.style.opacity = 0;
        }
    }
})


