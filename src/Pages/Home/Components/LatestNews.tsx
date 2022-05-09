import React from 'react';

import { client } from '../../../client';

interface itemStructure {
  name: string;
  title: string;
  date: string;
  image: string;
}
export default function LatestNews() {
  const [animation, setAnimation] = React.useState<boolean>(false);
  const [data, setData] = React.useState<itemStructure[]>([]);
  const latestNews = React.useRef<any>(null);

  //This function refines the json response from Contentful
  const cleanupData = (list: any[]) => {
    let cleanList = list.map((item) => {
      let cleanItem = item?.fields;
      cleanItem = { ...cleanItem, image: cleanItem?.image?.fields?.file?.url };
      return cleanItem;
    });
    // console.log(cleanList);
    setData(cleanList);
  };
  React.useEffect(() => {
    //fetching the data from contentfull api
    client
      .getEntries({ content_type: 'latestnews' })
      .then((entry) => {
        cleanupData(entry.items);
      })
      .catch((err) => console.log(err));

    //Checking if the section is on display(screen, viewport) :)
    const observer = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) setAnimation(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(latestNews.current);
  }, []);
  const Card = ({ item, index }: { item: itemStructure; index: number }) => {
    const delay: React.CSSProperties = {
      '--inDisplayFadeIn_delay': `${index * 0.4}s`,
    } as any;
    return (
      <div
        className={'newsCard ' + (animation ? 'inDisplayFadeIn' : '')}
        style={delay}
      >
        <img src={item.image} alt='news' />
        <h6>
          By {item.name} | {item.date}
        </h6>
        <h4>{item.title}</h4>
        <h5>Read more</h5>
      </div>
    );
  };
  return (
    <div className='latestNews' ref={latestNews}>
      <section className='newsHeader'>
        <h2>Latest News</h2>
        <button className='btn'>View All</button>
      </section>
      <section className='newsCards'>
        {data.map((item, index) => (
          <Card item={item} index={index} />
        ))}
      </section>
    </div>
  );
}
