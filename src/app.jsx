import * as React from 'react';

import { Intro } from './components/intro/intro.jsx';
import { Realisations } from './components/realisations/realisations.jsx';
import { Competences } from './components/competences/competences.jsx';
import { Contacts } from './components/contacts/contacts.jsx';
import { WorkInProgress } from './components/work-in-progress/work-in-progress.jsx';
import { CheckIcon } from '@chakra-ui/icons';

import jump from 'jump.js';

let pages = document.querySelectorAll('.full-viewport-container'); // guves the correct type, should be empty by default, since nothing is loaded yet.
let isMobile = false;
let itemHeight = 0;
let currentPage = 0;
let isEnableScroll = true;
let timer = null;
let isModalOpen = false;

function getScrollTop() {
    return document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
}

function getPageIndex(isNear) {
    let height = itemHeight;
    let scrollTop = getScrollTop();
    let page = Math.floor(scrollTop / height);
    // let progress = scrollTop % height;

    return page;
}

function handleWheelEvent(e) {
    handleResize(); // calling this here because it avoid some element resize issue happenning during page loading

    if (!isMobile && !isModalOpen) {
        e.preventDefault();
        if (isEnableScroll) {
            let index = getPageIndex();
            let delta = e.deltaY;

            if (delta > 0 && index + 1 < pages.length) {
                jump(pages[index + 1], { duration: 1000 });
                handleScrollTimer();
            }
            else if (delta < 0 && index - 1 >= 0) {
                jump(pages[index - 1], { duration: 1000 });
                handleScrollTimer();
            }

        }
    }
}

function handleScrollTimer() {
    isEnableScroll = false;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
        isEnableScroll = true;
    }, 1100);
}

function checkPage() {
    var page = getPageIndex();

    if (page !== currentPage) {
        // changePagination(currentPage, page);
        currentPage = page;
    }
}

function handleResize() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    itemHeight = pages[0].getBoundingClientRect().height;
    isMobile = height < 700 || width < 800;
}

export function App() {
    
    const handleModalChange = React.useCallback(isOpen => isModalOpen = isOpen, []);

    React.useEffect(() => {
        pages = document.querySelectorAll('.full-viewport-container');

        window.addEventListener('resize', handleResize);
        window.addEventListener("scroll", checkPage);
        window.addEventListener('wheel', handleWheelEvent, { passive: false });

        handleResize();
        checkPage();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener("scroll", checkPage);
            window.removeEventListener('wheel', handleWheelEvent);
        }
    }, []);

    return <> 
        <Intro/>
        <Realisations onModalStateChange={handleModalChange}/>
        <Competences/>
        <Contacts/>
        <WorkInProgress/>
    </>
}
