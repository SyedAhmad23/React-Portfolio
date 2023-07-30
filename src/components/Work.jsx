import Workitem from "./Workitem";
const data = [
    {
        year: 2021,
        title: 'Seo Expert',
        duration: '1 year',
        details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti, inventore odio quisquam officiis quaerat saepe mollitia, corrupti cumque nihil minus veniam iure exercitationem ducimus quis!.'
    },
    {
        year: 2022,
        title: 'AR Executive',
        duration: '3 Months',
        details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti, inventore odio quisquam officiis quaerat saepe mollitia, corrupti cumque nihil minus veniam iure exercitationem ducimus quis!.'
    },
    {
        year: 2023,
        title: 'React Js Internship',
        duration: '6 Months',
        details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti, inventore odio quisquam officiis quaerat saepe mollitia, corrupti cumque nihil minus veniam iure exercitationem ducimus quis!.'
    },
    {
        year: 2022,
        title: 'Web Developer',
        duration: '1 year',
        details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti, inventore odio quisquam officiis quaerat saepe mollitia, corrupti cumque nihil minus veniam iure exercitationem ducimus quis!.'
    },

]
const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 py-16">
            <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">Work</h1>
            {data.map((item, id) => (
                <Workitem
                    key={id}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Work;
