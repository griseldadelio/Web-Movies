import { HouseDoor, Heart, Search, Film, CalendarDate, Star, CaretUp } from 'react-bootstrap-icons'
import { MenuItem } from './type'

export const navLinks: MenuItem[] = [
    {
        name: 'Home',
        link: '/',
        Icon: HouseDoor
    },
    {
        name: 'Favorite list',
        link: '/favorite',
        Icon: Heart
    },
    {
        name: 'Search',
        Icon: Search,
        link: '/serch',
        isButton: true,
    },
    {
        name: 'Now playing movies',
        link: '/now-playing',
        Icon: Film
    },
    {
        name: 'Upcoming movies',
        link: '/upcoming',
        Icon: CalendarDate
    },
    {
        name: 'Popular movies',
        link: '/popular',
        Icon: CaretUp
    },
    {
        name: 'Top rated movies',
        link: '/top-rated',
        Icon: Star
    },
];