import React from "react";
import Projectitem from './Projectitem';
import SoundcloudImg from '../images/Soundcloud-clone.png';
import HotelImg from '../images/hotel.png';
import TodoImg from '../images/TodoApp.png';
import ResturantImg from '../images/restaurant.png';
const Projects = () => {
    return (
        <div id="project" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-blue-900">
                Projects
            </h1>
            <p className=" text-center py-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus veniam deleniti ipsa harum reprehenderit molestiae nulla iste, tempore quam vel. Laudantium iusto natus, enim maxime exercitationem ad praesentium maiores ipsa ut quidem quaerat distinctio.</p>
            <div className=" grid sm:grid-cols-2 gap-12">
                <Projectitem img={SoundcloudImg} title='SoundCloud Clone' href="https://soundcloud-clone.000webhostapp.com/" />
                <Projectitem img={TodoImg} title='Todo App' href="https://syedahmad23.github.io/Todo-App/" />
                <Projectitem img={ResturantImg} title='Restaurant' href="https://syedahmad23.github.io/Resturant_Management_system/" />
                <Projectitem img={HotelImg} title='Hotel Booking' href="https://syedahmad23.github.io/hotels-booking/" />

            </div>
        </div>
    );
};

export default Projects;
