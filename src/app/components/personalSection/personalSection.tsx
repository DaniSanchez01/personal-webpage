import Gallery from '../gallery/gallery';
import SectionSeparator from '../sectionSeparator/sectionSeparator';
import { PERSONAL_SECTION_DATA } from './personalSection.config';
import './personalSection.css';

const PersonalSection = () => {
  return (
    <>
      <SectionSeparator>Personal</SectionSeparator>
      <div className="cst-personal">
        <div className="cst-personal-text">
          <p className="cst-paragraph">
            Work is a very important part of life, but I would like to use this
            section to talk about my <strong>personal interests</strong> so you
            can get to know me a little better.
          </p>
          <p className="cst-paragraph">
            I have a <strong>very active lifestyle</strong>. In my free time, I
            have a lot of hobbies. For example, I really enjoy nature and{' '}
            <strong>discovering new places</strong>. I have already traveled to{' '}
            <strong>almost 30 countries</strong> from Europe, Asia & America,
            and I always try to get out of the cities and explore the{' '}
            <strong>wildlife</strong>, the <strong>nature</strong> and the{' '}
            <strong>local culture</strong> of the places I visit.
          </p>
          <p className="cst-paragraph">
            <strong>Sports</strong> are also a very important part of my life. I
            played <strong>basketball for about 10 years</strong>, and recently
            I started to practice a lot of other sports like climbing, swimming,
            padel, surfing, snowboarding, etc. I'm also a big fan of{' '}
            <strong>extreme sports</strong>. I've already tried bungee jumping
            and diving, and I would love to try <strong>skydiving</strong> in
            the near future.
          </p>
          <p className="cst-paragraph">
            I would like to add that I'm a <strong>regular reader</strong>. I
            love fantasy, science fiction, philosophy and a lot of other genres.
            If I had to recommend some books, it would be{' '}
            <strong>
              <em>Brave New World</em>
            </strong>
            ,
            <strong>
              <em> And Then There Were None</em>
            </strong>{' '}
            and{' '}
            <strong>
              <em>Game of Thrones</em>
            </strong>
            , which is way better than the TV series ;). About music, my
            favorite songs are{' '}
            <strong>
              <em>Si Te Vas</em>
            </strong>{' '}
            by Extremoduro and{' '}
            <strong>
              <em>Without You</em>
            </strong>{' '}
            by Avicii.
          </p>
          <p className="cst-paragraph">
            I have attached some of my <strong>favorite personal photos</strong>{' '}
            so they can help you get an idea of my personality. To be honest,
            it's also because I wanted to show them to the world ^-^
          </p>
        </div>
        <div className="cst-personal-gallery">
          <Gallery images={PERSONAL_SECTION_DATA}></Gallery>
        </div>
      </div>
    </>
  );
};

export default PersonalSection;
