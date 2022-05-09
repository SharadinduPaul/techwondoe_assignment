import React from 'react';
import line from '../../../Assets/Images/line3.png';
// import ourteam from '../../../Assets/Images/ourteam.png';
import { client } from '../../../client';

interface itemStructure {
  heading: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

export default function OurTeam() {
  const [data, setData] = React.useState<itemStructure>();
  //This function refines the json response from Contentful
  const cleanupData = (list: any[]) => {
    let cleanList = list[0].fields;
    cleanList = { ...cleanList, image: cleanList.image.fields.file.url };
    // console.log(cleanList);
    setData(cleanList);
  };
  React.useEffect(() => {
    //fetching the data from contentfull api
    client
      .getEntries({ content_type: 'ourTeam' })
      .then((entry) => {
        cleanupData(entry.items);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='ourteam'>
      <img src={line} alt='just a line' />
      <section>
        <img src={data?.image} alt='our team' />
      </section>
      <section>
        <h6>{data?.heading}</h6>
        <h2>{data?.title}</h2>
        <h4>{data?.description}</h4>
        <button className='btn'>{data?.buttonText}</button>
      </section>
    </div>
  );
}
