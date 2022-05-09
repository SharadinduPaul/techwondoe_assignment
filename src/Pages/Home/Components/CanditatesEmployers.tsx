import React from 'react';
import line from '../../../Assets/Images/line2.png';

import { client } from '../../../client';

interface itemStructure {
  title: string;
  body: string;
  image: string;
}

export default function CanditatesEmployers() {
  const [animation, setAnimation] = React.useState<boolean>(false);
  const [data, setData] = React.useState<itemStructure[]>([]);
  const candemploy = React.useRef<any>(null);

  const cleanupData = (list: any[]) => {
    let cleanList = list.map((item) => {
      let cleanItem = item?.fields;
      cleanItem = { ...cleanItem, image: cleanItem?.image?.fields?.file?.url };
      return cleanItem;
    });
    setData(cleanList);
  };
  React.useEffect(() => {
    //Fetching the contentful api for data
    client
      .getEntries({ content_type: 'candidatesEmployees' })
      .then((entry) => cleanupData(entry.items))
      .catch((err) => console.log(err));

    //Checking if the section is on display(screen, viewport) :)
    const observer = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) setAnimation(true);
      },
      { threshold: 0.8 }
    );
    observer.observe(candemploy.current);
  }, []);
  const Card = ({ item, index }: { item: itemStructure; index: number }) => {
    const delay: React.CSSProperties = {
      '--inDisplayFadeIn_delay': `${index * 0.8}s`,
    } as any;
    return (
      <div
        className={'candCard ' + (animation ? 'inDisplayFadeIn' : '')}
        style={delay}
      >
        <img src={item.image} alt='card icon' />
        <h4>{item.title}</h4>
        <h6>{item.body}</h6>
        <button>Learn more</button>
      </div>
    );
  };
  return (
    <div className='candemploy' ref={candemploy}>
      {data.map((item, index) => (
        <Card item={item} index={index} />
      ))}
      <img src={line} alt='just a line' />
    </div>
  );
}
