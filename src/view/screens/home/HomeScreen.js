import Banner from './compoments/Banner';
import Brochure from './compoments/Brochure';
import Statistics from './compoments/Statistics';
import Activities from './compoments/Activities';
import TransformationStories from './compoments/TransformationStories';
import Testimonials from './compoments/Testimonials';
import TypeOfTraining from './compoments/TypeOfTraining';
import WhyChooseUs from './compoments/WhyChooseUs';
import StudentFeelings from './compoments/StudentFeelings';
import OurClients from './compoments/OurClients';
import MediaTalking from './compoments/MediaTalking';
import Bookcase from './compoments/Bookcase';
import Enrollment from './compoments/Enrollment';

const Main = () => {
  return (
    <div>
      <Banner />
      <Brochure />
      <Statistics />

      <TypeOfTraining />
      <WhyChooseUs />
      <StudentFeelings />
      <OurClients />
      <MediaTalking />
      <Bookcase />
      <Enrollment />
    </div>
  );
};

export default Main;
