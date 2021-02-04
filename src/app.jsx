import * as React from 'react';

import { Intro } from './components/intro/intro.jsx';
import { Realisations } from './components/realisations/realisations.jsx';
import { Competences } from './components/competences/competences.jsx';
import { Contacts } from './components/contacts/contacts.jsx';
import { WorkInProgress } from './components/work-in-progress/work-in-progress.jsx';
import { CheckIcon } from '@chakra-ui/icons';

import jump from 'jump.js';

let pages = [];
let isMobile = false;
let itemHeight = 0;
let currentPage = 0;
let isEnableScroll = true;
let timer = null;

function getScrollTop() {
    return document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
}

function getPageIndex(isNear) {
    let height = itemHeight;
    let scrollTop = getScrollTop();
    let page = Math.floor(scrollTop / height);
    let progress = scrollTop % height;

    return page;
}

function handleWheelEvent(e) {
    if (!isMobile) {
        e.preventDefault();
        if (isEnableScroll) {
            let index = getPageIndex();
            let delta = e.deltaY;

            if (delta > 0) {
                jump(pages[index + 1], { duration: 1000 });
            }
            else if (delta < 0) {
                jump(pages[index - 1], { duration: 1000 });
            }

            isEnableScroll = false;
            if (timer) {
              clearTimeout(timer);
            }
            timer = setTimeout(function () {
              isEnableScroll = true;
            }, 1000);
        }
    }
}

function check() {
    var page = getPageIndex();

    if (page !== currentPage) {
        // changePagination(currentPage, page);
    }
}

function resize() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    itemHeight = pages[0].getBoundingClientRect().height;
    isMobile = height < 700 || width < 800;
}

export function App() {
    
    React.useEffect(() => {
        pages = document.querySelectorAll('.full-viewport-container');

        window.addEventListener('resize', resize);
        window.addEventListener("scroll", check);
        window.addEventListener('wheel', handleWheelEvent, { passive: false });

        resize();
        check();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener("scroll", check);
            window.removeEventListener('wheel', handleWheelEvent);
        }
    }, []);

    return <> 
        <Intro/>
        <Realisations/>
        <Competences/>
        <Contacts/>
        <WorkInProgress/>
    </>
}
