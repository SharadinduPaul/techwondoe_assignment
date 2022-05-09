import React from 'react';
import tick from '../../../Assets/Images/tick.png';
import { client } from '../../../client';

interface itemStructure {
  title: string;
  description: string;
}
export default function Whychooseus() {
  const [animation, setAnimation] = React.useState<boolean>(false);
  const [data, setData] = React.useState<itemStructure[]>([]);
  const whychooseusRef = React.useRef<any>(null);

  //This function refines the json response from Contentful
  const cleanupData = (list: any[]) => {
    const cleanList = list.map((item) => {
      return item.fields;
    });
    setData(cleanList);
  };
  React.useEffect(() => {
    //fetching the data from contentfull api
    client
      .getEntries({ content_type: 'whychooseus' })
      .then((entry) => {
        cleanupData(entry.items);
      })
      .catch((err) => console.log(err));

    //observing if the section is in display
    const observer = new IntersectionObserver(
      (e) => {
        setAnimation(e[0].isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(whychooseusRef.current);
  }, []);

  const Card = ({ item, index }: { item: itemStructure; index: number }) => {
    index = index + 1;
    const delay: React.CSSProperties = {
      '--inDisplayFadeIn_delay': `${index * 0.55}s`,
    } as any;
    return (
      <div className='whychooseCard'>
        <section>
          <img
            src={tick}
            style={delay}
            className={'whychooseIMG ' + (animation ? 'tickMarked' : '')}
            alt='just a tick mark'
          />
        </section>
        <section
          style={delay}
          className={'whychooseText ' + (animation ? 'justfadeIn' : '')}
        >
          <h3>{item.title}</h3>
          <h4>{item.description}</h4>
        </section>
      </div>
    );
  };
  return (
    <div className='whychooseus' ref={whychooseusRef}>
      <h2>Why choose us?</h2>
      <h4>
        We have decades of experience, having successfully recruited across the
        globle for many years.
      </h4>
      <section>
        {data.map((item, index) => (
          <Card item={item} index={index} />
        ))}
      </section>
    </div>
  );
}
